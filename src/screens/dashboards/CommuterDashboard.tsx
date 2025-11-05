import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../../utils/theme';
import { CommuterDashboardProps } from '../../types/Dashboard';
import {
  CommuterHomeScreen,
  CommuterBookingsScreen,
  CommuterTrackingScreen,
  CommuterProfileScreen,
} from './commuter';

const Tab = createBottomTabNavigator();

// Main Commuter Dashboard Component - Now Clean and Focused
const CommuterDashboard: React.FC<CommuterDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'calendar-multiple';
              break;
            case 'Tracking':
              iconName = 'map-marker-radius';
              break;
            case 'Profile':
              iconName = 'account';
              break;
            default:
              iconName = 'circle';
          }

          return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home">
        {() => <CommuterHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings" component={CommuterBookingsScreen} />
      <Tab.Screen name="Tracking" component={CommuterTrackingScreen} />
      <Tab.Screen name="Profile">
        {() => <CommuterProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default CommuterDashboard;
