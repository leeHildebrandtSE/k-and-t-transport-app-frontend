import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../styles/theme';
import { driverDashboardStyles, driverGradientConfigs } from '../../styles/screens/dashboards/driverDashboard';
import { DriverDashboardProps } from '../../types/Dashboard';
import {
  DriverHomeScreen,
  DriverRoutesScreen,
  DriverPassengersScreen,
  DriverProfileScreen,
} from './driver';

const Tab = createBottomTabNavigator();

// Custom TabBar with LinearGradient
const CustomTabBar = (props: any) => {
  const { state, descriptors, navigation } = props;

  return (
    <LinearGradient
      colors={driverGradientConfigs.navbar.colors}
      start={driverGradientConfigs.navbar.start}
      end={driverGradientConfigs.navbar.end}
      style={driverDashboardStyles.premiumTabBar}
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

          let iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = isFocused ? 'home' : 'home-outline';
              break;
            case 'Routes':
              iconName = isFocused ? 'map-marker-path' : 'map-marker-outline';
              break;
            case 'Passengers':
              iconName = isFocused ? 'account-group' : 'account-group-outline';
              break;
            case 'Profile':
              iconName = isFocused ? 'account' : 'account-outline';
              break;
            default:
              iconName = 'circle';
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
              <View style={isFocused ? driverDashboardStyles.activeTabIcon : driverDashboardStyles.inactiveTabIcon}>
                <MaterialCommunityIcons
                  name={iconName as any}
                  size={isFocused ? 26 : 24}
                  color={isFocused ? colors.primaryLight : colors.surface}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

// Main Driver Dashboard Component - Now Clean and Focused
const DriverDashboard: React.FC<DriverDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.primaryLight,
        tabBarInactiveTintColor: colors.surface,
        headerShown: false,
      }}
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
