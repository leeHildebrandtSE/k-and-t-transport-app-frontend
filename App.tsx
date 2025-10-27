import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import screens
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import ParentDashboard from './src/screens/dashboards/ParentDashboard';
import StaffDashboard from './src/screens/dashboards/StaffDashboard';
import DriverDashboard from './src/screens/dashboards/DriverDashboard';
import AdminDashboard from './src/screens/dashboards/AdminDashboard';

// Import services
import { AuthService } from './src/services/AuthService';
import { NotificationService } from './src/services/NotificationService';

// Import theme
import { theme } from './src/utils/theme';

// Import types
import { User, UserRole } from './src/types/User';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize notification service
      if (Platform.OS !== 'web') {
        await NotificationService.initialize();
      }

      // Check if user is already logged in
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        const userData = await AuthService.getCurrentUser(token);
        if (userData) {
          setUser(userData);
        }
      }
    } catch (error) {
      console.error('Error initializing app:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const getDashboardScreen = (userRole: UserRole) => {
    switch (userRole) {
      case 'parent':
        return ParentDashboard;
      case 'staff':
        return StaffDashboard;
      case 'driver':
        return DriverDashboard;
      case 'admin':
        return AdminDashboard;
      default:
        return ParentDashboard;
    }
  };

  if (isLoading) {
    // You can replace this with a proper loading screen component
    return null;
  }

  return (
    <PaperProvider theme={theme}>
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
              component={getDashboardScreen(user.role)}
              options={{
                title: 'K & T Transport',
                headerRight: () => null, // Dashboard component will handle logout
              }}
              initialParams={{ user, onLogout: handleLogout }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Welcome to K & T Transport',
                  headerShown: true,
                }}
                initialParams={{ onLogin: handleLogin }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  title: 'Create Account',
                  headerShown: true,
                }}
                initialParams={{ onLogin: handleLogin }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}