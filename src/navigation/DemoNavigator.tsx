import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Demo Screens
import { DemoScreen } from '../screens/DemoScreen';
import PaymentScreen from '../screens/PaymentScreen';
import { BillingHistoryScreen } from '../screens/BillingHistoryScreen';
import { PaymentMethodsScreen } from '../screens/PaymentMethodsScreen';
import { RefundRequestScreen } from '../screens/RefundRequestScreen';

const Stack = createStackNavigator();

// Wrapper component for PaymentScreen to handle navigation props
const PaymentScreenWrapper = ({ route, navigation }: any) => {
  const demoParams = {
    user: { id: 'demo', firstName: 'Demo', lastName: 'User' },
    amount: 50,
    description: 'Demo Payment',
    bookingId: 'demo-booking'
  };

  const wrappedRoute = {
    ...route,
    params: route?.params || demoParams
  };

  return <PaymentScreen route={wrappedRoute} />;
};

export const DemoNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Demo"
        screenOptions={{
          headerShown: false, // We're using our custom DashboardHeader
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{
            title: 'Screen Demo',
          }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreenWrapper}
          options={{
            title: 'Payment',
          }}
        />

        <Stack.Screen
          name="BillingHistory"
          component={BillingHistoryScreen}
          options={{
            title: 'Billing History',
          }}
        />

        <Stack.Screen
          name="PaymentMethods"
          component={PaymentMethodsScreen}
          options={{
            title: 'Payment Methods',
          }}
        />

        <Stack.Screen
          name="RefundRequest"
          component={RefundRequestScreen}
          options={{
            title: 'Refund Request',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
