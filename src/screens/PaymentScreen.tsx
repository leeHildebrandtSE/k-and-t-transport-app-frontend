import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Text,
  ActivityIndicator,
  Portal,
  Dialog,
  Button,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import DashboardHeader from '../components/ui/DashboardHeader';
import { paymentScreenStyles } from '../styles/screens/paymentScreen';
import { colors } from '../styles/theme';

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'ewallet';
  title: string;
  subtitle: string;
  iconName: string;
  isDefault: boolean;
}

interface PaymentScreenProps {
  route: {
    params: {
      user: User;
      amount: number;
      description: string;
      bookingId?: string;
    };
  };
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route }) => {
  const { user, amount, description, bookingId } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      title: 'Visa •••• 1234',
      subtitle: 'Expires 12/26',
      iconName: 'credit-card',
      isDefault: true,
    },
    {
      id: '2',
      type: 'bank',
      title: 'FNB Cheque Account',
      subtitle: '••• 5678',
      iconName: 'bank',
      isDefault: false,
    },
    {
      id: '3',
      type: 'ewallet',
      title: 'SnapScan',
      subtitle: 'Scan to Pay',
      iconName: 'qrcode-scan',
      isDefault: false,
    },
  ];

  // Set default payment method on load
  React.useEffect(() => {
    const defaultMethod = paymentMethods.find(method => method.isDefault);
    if (defaultMethod) {
      setSelectedMethod(defaultMethod.id);
    }
  }, []);

  const handleProcessPayment = async () => {
    if (!selectedMethod) {
      Alert.alert('Error', 'Please select a payment method');
      return;
    }

    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      Alert.alert(
        'Payment Successful',
        `Payment of R${amount.toFixed(2)} has been processed successfully.`,
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        'Payment Failed',
        'There was an error processing your payment. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
      setConfirmDialogVisible(false);
    }
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleAddPaymentMethod = () => {
    // Navigate to payment methods management screen
    // navigation.navigate('PaymentMethods', { user });
    Alert.alert('Add Payment Method', 'This feature will be available soon.');
  };

  const renderPaymentMethod = (method: PaymentMethod) => (
    <TouchableOpacity
      key={method.id}
      style={[
        paymentScreenStyles.paymentMethod,
        selectedMethod === method.id && paymentScreenStyles.paymentMethodSelected,
      ]}
      onPress={() => handlePaymentMethodSelect(method.id)}
    >
      <View style={paymentScreenStyles.paymentMethodIcon}>
        <MaterialCommunityIcons
          name={method.iconName as any}
          size={24}
          color={selectedMethod === method.id ? colors.primary : colors.textSecondary}
        />
      </View>
      <View style={paymentScreenStyles.paymentMethodInfo}>
        <Text style={paymentScreenStyles.paymentMethodTitle}>
          {method.title}
        </Text>
        <Text style={paymentScreenStyles.paymentMethodSubtitle}>
          {method.subtitle}
        </Text>
      </View>
      {method.isDefault && (
        <MaterialCommunityIcons
          name="check-circle"
          size={20}
          color={colors.success}
        />
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={paymentScreenStyles.container}>
        <DashboardHeader
          user={user}
          title="Processing Payment"
        />
        <View style={paymentScreenStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={paymentScreenStyles.loadingText}>
            Processing your payment...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={paymentScreenStyles.container}>
      <DashboardHeader
        user={user}
        title="Payment"
      />

      <ScrollView
        style={paymentScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={paymentScreenStyles.header}>
          <Text style={paymentScreenStyles.title}>Complete Payment</Text>
          <Text style={paymentScreenStyles.subtitle}>
            {description}
          </Text>
        </View>

        {/* Amount Section */}
        <View style={paymentScreenStyles.amountSection}>
          <Text style={paymentScreenStyles.amountLabel}>Amount Due</Text>
          <Text style={paymentScreenStyles.amountValue}>
            R{amount.toFixed(2)}
          </Text>
          <Text style={paymentScreenStyles.amountDescription}>
            Transport Service Fee
          </Text>
        </View>

        {/* Payment Methods */}
        <View style={paymentScreenStyles.paymentMethodsSection}>
          <Text style={paymentScreenStyles.sectionTitle}>
            Payment Method
          </Text>

          {paymentMethods.map(renderPaymentMethod)}

          {/* Add Payment Method */}
          <TouchableOpacity
            style={paymentScreenStyles.addPaymentMethod}
            onPress={handleAddPaymentMethod}
          >
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={32}
              color={colors.primary}
            />
            <Text style={paymentScreenStyles.addPaymentMethodText}>
              Add Payment Method
            </Text>
          </TouchableOpacity>
        </View>

        {/* Transaction Summary */}
        <View style={paymentScreenStyles.transactionSection}>
          <Text style={paymentScreenStyles.sectionTitle}>
            Transaction Summary
          </Text>

          <View style={paymentScreenStyles.transactionRow}>
            <Text style={paymentScreenStyles.transactionLabel}>
              Service Fee
            </Text>
            <Text style={paymentScreenStyles.transactionValue}>
              R{amount.toFixed(2)}
            </Text>
          </View>

          <View style={paymentScreenStyles.transactionRow}>
            <Text style={paymentScreenStyles.transactionLabel}>
              Processing Fee
            </Text>
            <Text style={paymentScreenStyles.transactionValue}>
              R0.00
            </Text>
          </View>

          <View style={[paymentScreenStyles.transactionRow, paymentScreenStyles.transactionTotal]}>
            <Text style={paymentScreenStyles.transactionTotalLabel}>
              Total
            </Text>
            <Text style={paymentScreenStyles.transactionTotalValue}>
              R{amount.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Security Notice */}
        <View style={paymentScreenStyles.securityNotice}>
          <MaterialCommunityIcons
            name="shield-check"
            size={20}
            color={colors.success}
          />
          <Text style={paymentScreenStyles.securityNoticeText}>
            Your payment information is encrypted and secure. We never store your card details.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={paymentScreenStyles.actionSection}>
          <TouchableOpacity
            style={paymentScreenStyles.primaryButton}
            onPress={() => setConfirmDialogVisible(true)}
            disabled={!selectedMethod}
          >
            <Text style={paymentScreenStyles.primaryButtonText}>
              Pay R{amount.toFixed(2)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={paymentScreenStyles.secondaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={paymentScreenStyles.secondaryButtonText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Confirmation Dialog */}
      <Portal>
        <Dialog
          visible={confirmDialogVisible}
          onDismiss={() => setConfirmDialogVisible(false)}
        >
          <Dialog.Title>Confirm Payment</Dialog.Title>
          <Dialog.Content>
            <Text>
              Are you sure you want to process a payment of R{amount.toFixed(2)}?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setConfirmDialogVisible(false)}>
              Cancel
            </Button>
            <Button onPress={handleProcessPayment} loading={loading}>
              Confirm
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default PaymentScreen;
