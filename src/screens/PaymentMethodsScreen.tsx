import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { paymentMethodsStyles as styles } from '../styles/screens/paymentMethodsScreen';
import { colors } from '../styles/theme';
import DashboardHeader from '../components/ui/DashboardHeader';
import { User } from '../types/User';

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'wallet' | 'mobile';
  brand: string;
  last4: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
  isActive: boolean;
  holderName: string;
  addedDate: string;
}

export const PaymentMethodsScreen: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Mock user data - replace with actual user context
  const mockUser: User = {
    id: 'user-001',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'commuter',
  };

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  const loadPaymentMethods = async () => {
    try {
      setLoading(true);

      // Mock data - replace with actual API calls
      const mockMethods: PaymentMethod[] = [
        {
          id: 'pm_001',
          type: 'card',
          brand: 'Visa',
          last4: '4242',
          expiryMonth: 12,
          expiryYear: 2025,
          isDefault: true,
          isActive: true,
          holderName: 'John Doe',
          addedDate: '2024-01-10',
        },
        {
          id: 'pm_002',
          type: 'card',
          brand: 'Mastercard',
          last4: '1234',
          expiryMonth: 8,
          expiryYear: 2026,
          isDefault: false,
          isActive: true,
          holderName: 'John Doe',
          addedDate: '2024-01-05',
        },
        {
          id: 'pm_003',
          type: 'wallet',
          brand: 'PayPal',
          last4: '8901',
          isDefault: false,
          isActive: true,
          holderName: 'john.doe@email.com',
          addedDate: '2023-12-20',
        },
      ];

      setPaymentMethods(mockMethods);
    } catch (error) {
      Alert.alert('Error', 'Failed to load payment methods');
      console.error('Failed to load payment methods:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadPaymentMethods();
  };

  const getMethodIcon = (type: string, brand: string) => {
    if (type === 'card') {
      switch (brand.toLowerCase()) {
        case 'visa':
          return 'credit-card';
        case 'mastercard':
          return 'credit-card';
        case 'american express':
        case 'amex':
          return 'credit-card';
        default:
          return 'credit-card';
      }
    } else if (type === 'wallet') {
      return 'wallet';
    } else if (type === 'bank') {
      return 'bank';
    } else if (type === 'mobile') {
      return 'cellphone';
    }
    return 'credit-card';
  };

  const formatExpiry = (month?: number, year?: number) => {
    if (!month || !year) return '';
    return `${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`;
  };

  const handleSetDefault = (methodId: string) => {
    Alert.alert(
      'Set Default',
      'Are you sure you want to set this as your default payment method?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Set Default',
          onPress: () => {
            setPaymentMethods(prev =>
              prev.map(method => ({
                ...method,
                isDefault: method.id === methodId,
              }))
            );
          },
        },
      ]
    );
  };

  const handleEditMethod = (methodId: string) => {
    Alert.alert('Edit Payment Method', `Edit method ${methodId}`);
  };

  const handleDeleteMethod = (methodId: string) => {
    Alert.alert(
      'Delete Payment Method',
      'Are you sure you want to delete this payment method?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setPaymentMethods(prev =>
              prev.filter(method => method.id !== methodId)
            );
          },
        },
      ]
    );
  };

  const handleAddNewMethod = () => {
    Alert.alert('Add Payment Method', 'Redirect to add new payment method form');
  };

  const renderPaymentMethod = (method: PaymentMethod) => (
    <View key={method.id} style={[
      styles.methodCard,
      method.isDefault && styles.methodCardActive
    ]}>
      <View style={styles.methodHeader}>
        <View style={styles.methodInfo}>
          <View style={[
            styles.methodIcon,
            method.isDefault && styles.methodIconActive
          ]}>
            <MaterialCommunityIcons
              name={getMethodIcon(method.type, method.brand) as any}
              size={20}
              color={method.isDefault ? '#FFFFFF' : colors.textSecondary}
            />
          </View>

          <View style={styles.methodDetails}>
            <Text style={styles.methodType}>
              {method.brand} {method.type === 'card' ? 'Card' : 'Account'}
            </Text>
            <Text style={styles.methodNumber}>
              {method.type === 'card' ? `•••• •••• •••• ${method.last4}` : method.holderName}
            </Text>
            {method.expiryMonth && method.expiryYear && (
              <Text style={styles.methodExpiry}>
                Expires {formatExpiry(method.expiryMonth, method.expiryYear)}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.methodActions}>
          {method.isDefault && (
            <View style={styles.defaultBadge}>
              <Text style={styles.defaultBadgeText}>DEFAULT</Text>
            </View>
          )}

          <TouchableOpacity style={styles.methodMenu}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionButtons}>
        {!method.isDefault && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleSetDefault(method.id)}
          >
            <Text style={styles.actionButtonText}>Set Default</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonSecondary]}
          onPress={() => handleEditMethod(method.id)}
        >
          <Text style={[styles.actionButtonText, styles.actionButtonTextSecondary]}>
            Edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonDanger]}
          onPress={() => handleDeleteMethod(method.id)}
        >
          <Text style={[styles.actionButtonText, styles.actionButtonTextDanger]}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderAddNewSection = () => (
    <View style={styles.addNewSection}>
      <TouchableOpacity
        style={styles.addNewCard}
        onPress={handleAddNewMethod}
      >
        <MaterialCommunityIcons
          name="plus-circle"
          size={48}
          color={colors.primary}
          style={styles.addNewIcon}
        />
        <Text style={styles.addNewTitle}>Add New Payment Method</Text>
        <Text style={styles.addNewDescription}>
          Add a credit card, debit card, or digital wallet to make payments easier
        </Text>
        <View style={styles.addNewButton}>
          <Text style={styles.addNewButtonText}>Add Payment Method</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderSecurityInfo = () => (
    <View style={styles.securitySection}>
      <View style={styles.securityHeader}>
        <MaterialCommunityIcons
          name="shield-check"
          size={24}
          color={colors.success}
        />
        <Text style={styles.securityTitle}>Your Data is Secure</Text>
      </View>

      <View style={styles.securityList}>
        <View style={styles.securityItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={16}
            color={colors.success}
          />
          <Text style={styles.securityItemText}>
            All payment information is encrypted with bank-level security
          </Text>
        </View>

        <View style={styles.securityItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={16}
            color={colors.success}
          />
          <Text style={styles.securityItemText}>
            We never store your full card details on our servers
          </Text>
        </View>

        <View style={styles.securityItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={16}
            color={colors.success}
          />
          <Text style={styles.securityItemText}>
            Payments are processed through secure, certified payment processors
          </Text>
        </View>
      </View>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <MaterialCommunityIcons
        name="credit-card-off"
        size={64}
        color={colors.textSecondary}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No Payment Methods</Text>
      <Text style={styles.emptyStateMessage}>
        Add a payment method to start booking and paying for your transport services.
      </Text>
      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={handleAddNewMethod}
      >
        <Text style={styles.emptyStateButtonText}>Add Your First Method</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <DashboardHeader title="Payment Methods" user={mockUser} />
        <View style={styles.loadingContainer}>
          <MaterialCommunityIcons
            name="loading"
            size={32}
            color={colors.primary}
          />
          <Text style={styles.loadingText}>Loading payment methods...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DashboardHeader title="Payment Methods" user={mockUser} />

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Manage Payment Methods</Text>
          <Text style={styles.subtitle}>
            Add, edit, or remove payment methods for your account
          </Text>
        </View>

        <View style={styles.methodsList}>
          {paymentMethods.length > 0 ? (
            <>
              {paymentMethods.map(renderPaymentMethod)}
              {renderAddNewSection()}
            </>
          ) : (
            renderEmptyState()
          )}
        </View>

        {renderSecurityInfo()}
      </ScrollView>
    </View>
  );
};
