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
import { billingHistoryStyles as styles } from '../styles/screens/billingHistoryScreen';
import { colors } from '../styles/theme';
import DashboardHeader from '../components/ui/DashboardHeader';
import { User } from '../types/User';

interface Transaction {
  id: string;
  type: 'payment' | 'refund' | 'credit' | 'debit';
  title: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  description?: string;
  tripId?: string;
  paymentMethod?: string;
  fee?: number;
}

interface BillingSummary {
  totalSpent: number;
  totalTrips: number;
  averagePerTrip: number;
  monthlySpent: number;
}

export const BillingHistoryScreen: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<BillingSummary>({
    totalSpent: 0,
    totalTrips: 0,
    averagePerTrip: 0,
    monthlySpent: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState<'week' | 'month' | 'year'>('month');

  // Mock user data - replace with actual user context
  const mockUser: User = {
    id: 'user-001',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'commuter',
  };

  useEffect(() => {
    loadBillingData();
  }, [filterPeriod]);

  const loadBillingData = async () => {
    try {
      setLoading(true);

      // Mock data - replace with actual API calls
      const mockTransactions: Transaction[] = [
        {
          id: 'TXN-001',
          type: 'payment',
          title: 'Trip Payment',
          amount: -25.50,
          date: '2024-01-15T08:30:00Z',
          status: 'completed',
          description: 'Downtown to CBD - Morning commute',
          tripId: 'TRIP-12345',
          paymentMethod: 'Credit Card',
          fee: 0.75,
        },
        {
          id: 'TXN-002',
          type: 'refund',
          title: 'Trip Refund',
          amount: 15.00,
          date: '2024-01-14T16:45:00Z',
          status: 'completed',
          description: 'Cancelled trip refund',
          tripId: 'TRIP-12340',
        },
        {
          id: 'TXN-003',
          type: 'payment',
          title: 'Trip Payment',
          amount: -32.00,
          date: '2024-01-13T07:15:00Z',
          status: 'completed',
          description: 'Airport to Home - Return journey',
          tripId: 'TRIP-12338',
          paymentMethod: 'Digital Wallet',
          fee: 1.00,
        },
      ];

      const mockSummary: BillingSummary = {
        totalSpent: 487.50,
        totalTrips: 23,
        averagePerTrip: 21.20,
        monthlySpent: 156.75,
      };

      setTransactions(mockTransactions);
      setSummary(mockSummary);
    } catch (error) {
      Alert.alert('Error', 'Failed to load billing history');
      console.error('Failed to load billing data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadBillingData();
  };

  const formatCurrency = (amount: number) => {
    return `R${Math.abs(amount).toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'failed':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return 'credit-card';
      case 'refund':
        return 'cash-refund';
      case 'credit':
        return 'plus-circle';
      case 'debit':
        return 'minus-circle';
      default:
        return 'cash';
    }
  };

  const handleViewReceipt = (transactionId: string) => {
    // Implement receipt viewing
    Alert.alert('Receipt', `Viewing receipt for transaction ${transactionId}`);
  };

  const handleRequestRefund = (transactionId: string) => {
    // Implement refund request
    Alert.alert('Refund Request', `Request refund for transaction ${transactionId}`);
  };

  const renderTransaction = (transaction: Transaction) => (
    <View key={transaction.id} style={styles.transactionItem}>
      <View style={styles.transactionHeader}>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{transaction.title}</Text>
          <Text style={styles.transactionDate}>
            {formatDate(transaction.date)}
          </Text>
          <Text style={styles.transactionId}>ID: {transaction.id}</Text>
        </View>

        <View style={styles.transactionAmount}>
          <Text style={[
            styles.transactionAmountValue,
            transaction.amount > 0
              ? styles.transactionAmountCredit
              : styles.transactionAmountDebit
          ]}>
            {transaction.amount > 0 ? '+' : '-'}{formatCurrency(transaction.amount)}
          </Text>

          <View style={[
            styles.statusBadge,
            transaction.status === 'completed' && styles.statusBadgeSuccess,
            transaction.status === 'pending' && styles.statusBadgePending,
            transaction.status === 'failed' && styles.statusBadgeError,
          ]}>
            <Text style={[
              styles.statusBadgeText,
              transaction.status === 'completed' && styles.statusTextSuccess,
              transaction.status === 'pending' && styles.statusTextPending,
              transaction.status === 'failed' && styles.statusTextError,
            ]}>
              {transaction.status.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>

      {transaction.description && (
        <Text style={styles.detailValue}>{transaction.description}</Text>
      )}

      <View style={styles.transactionDetails}>
        {transaction.paymentMethod && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment Method</Text>
            <Text style={styles.detailValue}>{transaction.paymentMethod}</Text>
          </View>
        )}

        {transaction.fee && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Processing Fee</Text>
            <Text style={styles.detailValue}>{formatCurrency(transaction.fee)}</Text>
          </View>
        )}

        {transaction.tripId && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Trip ID</Text>
            <Text style={styles.detailValue}>{transaction.tripId}</Text>
          </View>
        )}
      </View>

      <View style={styles.transactionActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleViewReceipt(transaction.id)}
        >
          <Text style={styles.actionButtonText}>View Receipt</Text>
        </TouchableOpacity>

        {transaction.type === 'payment' && transaction.status === 'completed' && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleRequestRefund(transaction.id)}
          >
            <Text style={styles.actionButtonText}>Request Refund</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderSummary = () => (
    <View style={styles.summarySection}>
      <Text style={styles.summaryTitle}>Billing Summary</Text>

      <View style={styles.summaryGrid}>
        <View style={styles.summaryItem}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{formatCurrency(summary.totalSpent)}</Text>
            <Text style={styles.summaryLabel}>Total Spent</Text>
          </View>
        </View>

        <View style={styles.summaryItem}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{summary.totalTrips}</Text>
            <Text style={styles.summaryLabel}>Total Trips</Text>
          </View>
        </View>

        <View style={styles.summaryItem}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{formatCurrency(summary.averagePerTrip)}</Text>
            <Text style={styles.summaryLabel}>Avg per Trip</Text>
          </View>
        </View>

        <View style={styles.summaryItem}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{formatCurrency(summary.monthlySpent)}</Text>
            <Text style={styles.summaryLabel}>This Month</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderFilter = () => (
    <View style={styles.filterSection}>
      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>Period:</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            // Show period selector
            Alert.alert('Filter', 'Period filter options coming soon');
          }}
        >
          <Text style={styles.filterButtonText}>
            {filterPeriod === 'week' ? 'This Week' :
             filterPeriod === 'month' ? 'This Month' : 'This Year'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <MaterialCommunityIcons
        name="receipt"
        size={64}
        color={colors.textSecondary}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No Transactions Yet</Text>
      <Text style={styles.emptyStateMessage}>
        Your billing history will appear here once you start using the transport services.
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <DashboardHeader title="Billing History" user={mockUser} />
        <View style={styles.loadingContainer}>
          <MaterialCommunityIcons
            name="loading"
            size={32}
            color={colors.primary}
          />
          <Text style={styles.loadingText}>Loading billing history...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DashboardHeader title="Billing History" user={mockUser} />

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Your Transactions</Text>
          <Text style={styles.subtitle}>
            View and manage your payment history
          </Text>
        </View>

        {renderFilter()}
        {renderSummary()}

        <View style={styles.transactionsList}>
          {transactions.length > 0 ? (
            transactions.map(renderTransaction)
          ) : (
            renderEmptyState()
          )}
        </View>
      </ScrollView>
    </View>
  );
};
