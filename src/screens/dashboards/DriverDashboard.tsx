import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../../utils/theme';
import { driverDashboardStyles } from '../../styles/screens/dashboards/driverDashboard';
import { DriverDashboardProps } from '../../types/Dashboard';
import {
  DriverHomeScreen,
  DriverRoutesScreen,
  DriverPassengersScreen,
  DriverProfileScreen,
} from './driver';

const Tab = createBottomTabNavigator();

// Main Driver Dashboard Component - Now Clean and Focused
const DriverDashboard: React.FC<DriverDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Routes':
              iconName = focused ? 'map-marker-path' : 'map-marker-outline';
              break;
            case 'Passengers':
              iconName = focused ? 'account-group' : 'account-group-outline';
              break;
            case 'Profile':
              iconName = focused ? 'account' : 'account-outline';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <View style={focused ? driverDashboardStyles.activeTabIcon : driverDashboardStyles.inactiveTabIcon}>
              <MaterialCommunityIcons name={iconName as any} size={focused ? 26 : 24} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: driverDashboardStyles.premiumTabBar,
        tabBarLabelStyle: driverDashboardStyles.tabBarLabel,
        tabBarItemStyle: driverDashboardStyles.tabBarItem,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home">
        {() => <DriverHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Routes" component={DriverRoutesScreen} />
      <Tab.Screen name="Passengers" component={DriverPassengersScreen} />
      <Tab.Screen name="Profile">
        {() => <DriverProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default DriverDashboard;
