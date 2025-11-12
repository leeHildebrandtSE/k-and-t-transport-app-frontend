import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Platform, AppState, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import icon configuration
import { configurePaperIcons } from './src/utils/iconConfig';
import { CustomPaperProvider } from './src/components/CustomPaperProvider';

// Import screens
import LandingPage from './src/screens/LandingPage';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CommuterDashboard from './src/screens/dashboards/CommuterDashboard';
import DriverDashboard from './src/screens/dashboards/DriverDashboard';
import AdminDashboard from './src/screens/dashboards/AdminDashboard';

// Import services
import { AuthService } from './src/services/AuthService';
import { NotificationService } from './src/services/NotificationService';

// Import theme
import { theme } from './src/styles';

// Import types
import { User, UserRole } from './src/types/User';
import { AuthProvider } from './src/contexts/AuthContext';

// Define navigation params
export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: { user: User };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    initializeApp().catch(console.error);
  }, []);

  const initializeApp = async () => {
    try {
      // Add a small delay to ensure all modules are loaded
      await new Promise(resolve => setTimeout(resolve, 100));

      // Configure icons for web only
      if (Platform.OS === 'web') {
        configurePaperIcons();
      }

      // Initialize notification service with error handling
      if (Platform.OS !== 'web') {
        try {
          await NotificationService.initialize();
        } catch (notificationError) {
          console.warn('Notification service initialization failed:', notificationError);
          // Continue without notifications
        }
      }

      // Check if user is already logged in
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          const userData = await AuthService.getCurrentUser(token);
          if (userData) {
            setUser(userData);
            setShowLanding(false); // Skip landing if user is already logged in
          }
        }
      } catch (storageError) {
        console.warn('Storage access failed:', storageError);
        // Continue without auto-login
      }
    } catch (error) {
      console.error('Error initializing app:', error);
      // App can still function without full initialization
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowLanding(false);
  };

  const handleLogout = async () => {
    await AuthService.logout();
    setUser(null);
    setShowLanding(true); // Show landing page after logout
  };

  const navigateToLogin = () => {
    setShowLanding(false);
  };

  const navigateToSignup = () => {
    setShowLanding(false);
  };

  const navigateToLanding = () => {
    setShowLanding(true);
  };

  if (isLoading) {
    // Return a simple loading view instead of null
    return (
      <CustomPaperProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.primary} />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.primary
        }}>
          {/* Simple loading indicator */}
        </View>
      </CustomPaperProvider>
    );
  }

  return (
    <CustomPaperProvider theme={theme}>
      <AuthProvider onLogout={handleLogout}>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor={theme.colors.primary} />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            {user ? (
              <Stack.Screen
                name="Dashboard"
                options={{
                  title: 'K & T Transport',
                  headerShown: false, // Dashboard component will handle its own header
                }}
              >
                {({ route }) => {
                  // Render the appropriate dashboard based on user role
                  switch (user.role) {
                    case 'commuter':
                      return <CommuterDashboard route={{ params: { user, onLogout: handleLogout } }} />;
                    case 'driver':
                      return <DriverDashboard route={{ params: { user, onLogout: handleLogout } }} />;
                    case 'admin':
                      return <AdminDashboard route={{ params: { user, onLogout: handleLogout } }} />;
                    default:
                      return <CommuterDashboard route={{ params: { user, onLogout: handleLogout } }} />;
                  }
                }}
              </Stack.Screen>
            ) : showLanding ? (
              <Stack.Screen
                name="Landing"
                options={{
                  headerShown: false, // Landing page has its own navbar
                }}
              >
                {() => (
                  <LandingPage
                    onLogin={navigateToLogin}
                    onSignup={navigateToSignup}
                  />
                )}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  options={{
                    title: 'Welcome Back',
                    headerShown: true,
                  }}
                >
                  {() => (
                    <LoginScreen
                      route={{ params: { onLogin: handleLogin, onBackToLanding: navigateToLanding } }}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen
                  name="Register"
                  options={{
                    title: 'Create Account',
                    headerShown: true,
                  }}
                >
                  {() => (
                    <RegisterScreen
                      route={{ params: { onLogin: handleLogin, onBackToLanding: navigateToLanding } }}
                    />
                  )}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </CustomPaperProvider>
  );
}
