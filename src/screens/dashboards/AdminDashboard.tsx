import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../utils/theme';
import { AdminDashboardProps } from '../../types/Dashboard';

// Import extracted admin components
import AdminOverviewScreen from './admin/AdminOverviewScreen';
import AdminUsersScreen from './admin/AdminUsersScreen';
import AdminBookingsScreen from './admin/AdminBookingsScreen';
import AdminProfileScreen from './admin/AdminProfileScreen';

const Tab = createBottomTabNavigator();

const AdminDashboard: React.FC<AdminDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

          if (route.name === 'Overview') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
          } else if (route.name === 'Users') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'Bookings') {
            iconName = focused ? 'calendar-check' : 'calendar-check-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else {
            iconName = 'help-circle';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Overview">
        {() => <AdminOverviewScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Users">
        {() => <AdminUsersScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings">
        {() => <AdminBookingsScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {() => <AdminProfileScreen user={user} onLogout={onLogout || (() => {})} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AdminDashboard;
