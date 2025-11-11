import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../styles/theme';
import { commuterDashboardStyles, commuterGradientConfigs } from '../../styles/screens/dashboards/commuterDashboard';
import { CommuterDashboardProps } from '../../types/Dashboard';
import {
  CommuterHomeScreen,
  CommuterBookingsScreen,
  CommuterTrackingScreen,
  CommuterProfileScreen,
  CommuterPaymentsScreen,
} from './commuter';

const Tab = createBottomTabNavigator();

// Custom TabBar with LinearGradient
const CustomTabBar = (props: any) => {
  const { state, descriptors, navigation } = props;

  return (
    <LinearGradient
      colors={commuterGradientConfigs.navbar.colors}
      start={commuterGradientConfigs.navbar.start}
      end={commuterGradientConfigs.navbar.end}
      style={commuterDashboardStyles.premiumTabBar}
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
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'calendar';
              break;
            case 'Payments':
              iconName = 'credit-card';
              break;
            case 'Tracking':
              iconName = 'map';
              break;
            case 'Profile':
              iconName = 'account';
              break;
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
              <View style={isFocused ? commuterDashboardStyles.activeTabIcon : commuterDashboardStyles.inactiveTabIcon}>
                <MaterialCommunityIcons
                  name={iconName as any}
                  size={isFocused ? 26 : 24}
                  color={isFocused ? colors.secondaryLight : colors.surface}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

// Main Commuter Dashboard Component - Now Clean and Focused
const CommuterDashboard: React.FC<CommuterDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.secondaryLight,
        tabBarInactiveTintColor: colors.surface,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home">
        {() => <CommuterHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings" component={CommuterBookingsScreen} />
      <Tab.Screen name="Payments">
        {() => <CommuterPaymentsScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Tracking" component={CommuterTrackingScreen} />
      <Tab.Screen name="Profile">
        {() => <CommuterProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default CommuterDashboard;
