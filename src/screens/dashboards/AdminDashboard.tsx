import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../styles/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../styles/screens/dashboards/adminDashboard';
import { AdminDashboardProps } from '../../types/Dashboard';

// Import extracted admin components
import AdminOverviewScreen from './admin/AdminOverviewScreen';
import AdminUsersScreen from './admin/AdminUsersScreen';
import AdminBookingsScreen from './admin/AdminBookingsScreen';
import AdminProfileScreen from './admin/AdminProfileScreen';
import { AdminFinanceScreen } from './admin/AdminFinanceScreen';

const Tab = createBottomTabNavigator();

// Custom TabBar with LinearGradient
const CustomTabBar = (props: any) => {
  const { state, descriptors, navigation } = props;

  return (
    <LinearGradient
      colors={adminGradientConfigs.navbar.colors}
      start={adminGradientConfigs.navbar.start}
      end={adminGradientConfigs.navbar.end}
      style={adminDashboardStyles.premiumTabBar}
    >
      <View style={{ flexDirection: 'row', height: '100%' }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName: keyof typeof MaterialCommunityIcons.glyphMap;
          if (route.name === 'Overview') {
            iconName = isFocused ? 'view-dashboard' : 'view-dashboard-outline';
          } else if (route.name === 'Users') {
            iconName = isFocused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'Bookings') {
            iconName = isFocused ? 'calendar-check' : 'calendar-check-outline';
          } else if (route.name === 'Finance') {
            iconName = isFocused ? 'chart-line' : 'chart-line-variant';
          } else if (route.name === 'Profile') {
            iconName = isFocused ? 'account-circle' : 'account-circle-outline';
          } else {
            iconName = 'help-circle';
          }

          return (
            <TouchableOpacity
              key={route.key}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
              }}
              onPress={onPress}
            >
              <View style={isFocused ? adminDashboardStyles.activeTabIcon : adminDashboardStyles.inactiveTabIcon}>
                <MaterialCommunityIcons
                  name={iconName}
                  size={isFocused ? 26 : 24}
                  color={isFocused ? colors.tertiaryLight : colors.surface}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Overview"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tertiaryLight,
        tabBarInactiveTintColor: colors.surface,
      }}
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
      <Tab.Screen name="Finance">
        {() => <AdminFinanceScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {() => <AdminProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AdminDashboard;
