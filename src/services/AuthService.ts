import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthResponse, LoginCredentials, RegisterData } from '../types/User';

const API_BASE_URL = 'http://localhost:8080/api'; // Change this to your backend URL

export class AuthService {
  private static token: string | null = null;

  // Demo users for testing without backend
  private static demoUsers: User[] = [
    {
      id: '1',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'commuter@ktransport.com',
      phone: '+27 21 555 0101',
      role: 'commuter',
      verified: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      firstName: 'David',
      lastName: 'Wilson',
      email: 'driver@ktransport.com',
      phone: '+27 21 555 0102',
      role: 'driver',
      verified: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '3',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@ktransport.com',
      phone: '+27 21 555 0103',
      role: 'admin',
      verified: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ];

  /**
   * Login user with email and password
   */
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // For demo purposes, use local authentication
      const user = this.demoUsers.find(u => u.email === credentials.email);

      if (!user || credentials.password !== 'demo123') {
        throw new Error('Invalid email or password. Use demo123 as password.');
      }

      const authData: AuthResponse = {
        token: `demo-token-${user.id}`,
        refreshToken: `demo-refresh-${user.id}`,
        user: user,
      };

      // Store tokens
      await AsyncStorage.setItem('authToken', authData.token);
      await AsyncStorage.setItem('refreshToken', authData.refreshToken);
      await AsyncStorage.setItem('userData', JSON.stringify(authData.user));

      this.token = authData.token;

      return authData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  /**
   * Register new user
   */
  static async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const authData: AuthResponse = await response.json();

      // Store tokens
      await AsyncStorage.setItem('authToken', authData.token);
      await AsyncStorage.setItem('refreshToken', authData.refreshToken);
      await AsyncStorage.setItem('userData', JSON.stringify(authData.user));

      this.token = authData.token;

      return authData;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  /**
   * Get current user data
   */
  static async getCurrentUser(token?: string): Promise<User | null> {
    try {
      const authToken = token || this.token || await AsyncStorage.getItem('authToken');
      if (!authToken) return null;

      // For demo mode, check if token is a demo token
      if (authToken.startsWith('demo-token-')) {
        const userId = authToken.replace('demo-token-', '');
        const demoUser = this.demoUsers.find(user => user.id === userId);
        if (demoUser) {
          await AsyncStorage.setItem('userData', JSON.stringify(demoUser));
          return demoUser;
        }
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired, try to refresh
          const refreshed = await this.refreshToken();
          if (refreshed) {
            return this.getCurrentUser();
          }
        }
        return null;
      }

      const user: User = await response.json();
      await AsyncStorage.setItem('userData', JSON.stringify(user));

      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      // In demo mode, try to get user from storage
      try {
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
      } catch {
        return null;
      }
    }
  }

  /**
   * Refresh authentication token
   */
  static async refreshToken(): Promise<boolean> {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) return false;

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) return false;

      const authData: AuthResponse = await response.json();

      // Update stored tokens
      await AsyncStorage.setItem('authToken', authData.token);
      await AsyncStorage.setItem('refreshToken', authData.refreshToken);

      this.token = authData.token;

      return true;
    } catch (error) {
      console.error('Token refresh error:', error);
      return false;
    }
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    try {
      const token = this.token || await AsyncStorage.getItem('authToken');

      if (token) {
        // Notify backend about logout
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Clear local storage regardless of API call success
      await AsyncStorage.multiRemove(['authToken', 'refreshToken', 'userData']);
      this.token = null;
    }
  }

  /**
   * Get stored authentication token
   */
  static async getToken(): Promise<string | null> {
    if (this.token) return this.token;

    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      this.token = token;
    }

    return token;
  }

  /**
   * Send phone verification code
   */
  static async sendPhoneVerification(phone: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/send-phone-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send verification code');
      }
    } catch (error) {
      console.error('Send phone verification error:', error);
      throw error;
    }
  }

  /**
   * Verify phone with code
   */
  static async verifyPhone(phone: string, code: string): Promise<void> {
    try {
      const token = await this.getToken();
      const response = await fetch(`${API_BASE_URL}/auth/verify-phone`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Phone verification failed');
      }
    } catch (error) {
      console.error('Phone verification error:', error);
      throw error;
    }
  }

  /**
   * Send email verification
   */
  static async sendEmailVerification(): Promise<void> {
    try {
      const token = await this.getToken();
      const response = await fetch(`${API_BASE_URL}/auth/send-email-verification`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email verification');
      }
    } catch (error) {
      console.error('Send email verification error:', error);
      throw error;
    }
  }
}
