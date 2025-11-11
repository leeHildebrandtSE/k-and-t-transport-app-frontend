import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';

// Import the demo screens
import { DemoScreen } from '../screens/DemoScreen';

// Create navigation-aware screen wrappers
const PaymentScreenWrapper = ({ navigation, route }: any) => {
  const React = require('react');
  const PaymentScreen = require('../screens/PaymentScreen').default;

  // Use route params if provided, otherwise use defaults
  const defaultParams = {
    user: {
      id: 'demo-user-001',
      email: 'demo@example.com',
      firstName: 'Demo',
      lastName: 'User',
      role: 'commuter',
    },
    amount: 25.50,
    description: 'Downtown to CBD - Morning commute',
    bookingId: 'BOOK-12345',
  };

  const params = route?.params || defaultParams;

  return React.createElement(PaymentScreen, {
    route: { params },
    navigation
  });
};

const BillingHistoryScreenWrapper = ({ navigation }: any) => {
  const { BillingHistoryScreen } = require('../screens/BillingHistoryScreen');
  return React.createElement(BillingHistoryScreen, { navigation });
};

const PaymentMethodsScreenWrapper = ({ navigation }: any) => {
  const { PaymentMethodsScreen } = require('../screens/PaymentMethodsScreen');
  return React.createElement(PaymentMethodsScreen, { navigation });
};

const RefundRequestScreenWrapper = ({ navigation }: any) => {
  const { RefundRequestScreen } = require('../screens/RefundRequestScreen');
  return React.createElement(RefundRequestScreen, { navigation });
};

const Stack = createStackNavigator();

export const DemoApp = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Demo"
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: '#FFFFFF' },
            }}
          >
            <Stack.Screen
              name="Demo"
              component={DemoScreen}
            />

            <Stack.Screen
              name="Payment"
              component={PaymentScreenWrapper}
            />

            <Stack.Screen
              name="BillingHistory"
              component={BillingHistoryScreenWrapper}
            />

            <Stack.Screen
              name="PaymentMethods"
              component={PaymentMethodsScreenWrapper}
            />

            <Stack.Screen
              name="RefundRequest"
              component={RefundRequestScreenWrapper}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
