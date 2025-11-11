import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DashboardHeader } from '../../../components/ui';
import { payoutHistoryScreenStyles } from '../../../styles/screens/driver/payoutHistoryScreen';
import { driverGradientConfigs } from '../../../styles/screens/dashboards/driverDashboard';
import { colors } from '../../../styles/theme';

interface PayoutItem {
  id: string;
  payoutDate: string;
  period: string;
  amount: number;
  status: 'completed' | 'pending' | 'processing';
  paymentMethod: string;
  trips: number;
  grossEarnings: number;
  commission: number;
  fees: number;
  netEarnings: number;
  transactionId?: string;
}

interface PayoutSummary {
  totalPayouts: number;
  thisMonth: number;
  lastMonth: number;
  averageWeekly: number;
}

const PayoutHistoryScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'thisYear' | 'lastYear'>('all');

  // Mock data
  const payoutSummary: PayoutSummary = {
    totalPayouts: 45650.00,
    thisMonth: 8750.00,
    lastMonth: 9200.00,
    averageWeekly: 2150.00,
  };

  const payoutHistory: PayoutItem[] = [
    {
      id: '1',
      payoutDate: '2025-11-08',
      period: 'Oct 28 - Nov 3, 2025',
      amount: 2750.00,
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      trips: 18,
      grossEarnings: 3200.00,
      commission: 320.00,
      fees: 130.00,
      netEarnings: 2750.00,
      transactionId: 'TXN-20251108-001',
    },
    {
      id: '2',
      payoutDate: '2025-11-01',
      period: 'Oct 21 - Oct 27, 2025',
      amount: 3150.00,
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      trips: 22,
      grossEarnings: 3680.00,
      commission: 368.00,
      fees: 162.00,
      netEarnings: 3150.00,
      transactionId: 'TXN-20251101-001',
    },
    {
      id: '3',
      payoutDate: '2025-10-25',
      period: 'Oct 14 - Oct 20, 2025',
      amount: 2890.00,
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      trips: 20,
      grossEarnings: 3380.00,
      commission: 338.00,
      fees: 152.00,
      netEarnings: 2890.00,
      transactionId: 'TXN-20251025-001',
    },
    {
      id: '4',
      payoutDate: '2025-10-18',
      period: 'Oct 7 - Oct 13, 2025',
      amount: 2650.00,
      status: 'processing',
      paymentMethod: 'Bank Transfer',
      trips: 17,
      grossEarnings: 3100.00,
      commission: 310.00,
      fees: 140.00,
      netEarnings: 2650.00,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'processing':
        return colors.warning;
      case 'pending':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  const formatCurrency = (amount: number) => {
    return `R ${amount.toFixed(2)}`;
  };

  const handleDownloadReceipt = (payoutId: string) => {
    console.log('Download receipt for payout:', payoutId);
    // Implement receipt download
  };

  const handleViewDetails = (payoutId: string) => {
    console.log('View details for payout:', payoutId);
    // Navigate to payout details
  };

  const renderPayoutItem = (item: PayoutItem) => (
    <View key={item.id} style={payoutHistoryScreenStyles.payoutItem}>
      <View style={payoutHistoryScreenStyles.payoutHeader}>
        <View style={payoutHistoryScreenStyles.payoutInfo}>
          <Text style={payoutHistoryScreenStyles.payoutDate}>
            {new Date(item.payoutDate).toLocaleDateString('en-ZA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Text style={payoutHistoryScreenStyles.payoutPeriod}>{item.period}</Text>
          <Text style={payoutHistoryScreenStyles.payoutMethod}>
            {item.paymentMethod} • {item.trips} trips
          </Text>
        </View>
        <View style={payoutHistoryScreenStyles.payoutAmount}>
          <Text style={payoutHistoryScreenStyles.payoutAmountValue}>
            {formatCurrency(item.amount)}
          </Text>
          <View style={[
            payoutHistoryScreenStyles.payoutStatus,
            { backgroundColor: `${getStatusColor(item.status)}20` }
          ]}>
            <Text style={[
              payoutHistoryScreenStyles.payoutStatusText,
              { color: getStatusColor(item.status) }
            ]}>
              {getStatusText(item.status)}
            </Text>
          </View>
        </View>
      </View>

      <View style={payoutHistoryScreenStyles.breakdownSection}>
        <Text style={payoutHistoryScreenStyles.breakdownTitle}>Payout Breakdown</Text>

        <View style={payoutHistoryScreenStyles.breakdownItem}>
          <Text style={payoutHistoryScreenStyles.breakdownLabel}>Gross Earnings</Text>
          <Text style={payoutHistoryScreenStyles.breakdownValue}>
            {formatCurrency(item.grossEarnings)}
          </Text>
        </View>

        <View style={payoutHistoryScreenStyles.breakdownItem}>
          <Text style={payoutHistoryScreenStyles.breakdownLabel}>Commission (10%)</Text>
          <Text style={payoutHistoryScreenStyles.breakdownValue}>
            -{formatCurrency(item.commission)}
          </Text>
        </View>

        <View style={payoutHistoryScreenStyles.breakdownItem}>
          <Text style={payoutHistoryScreenStyles.breakdownLabel}>Processing Fees</Text>
          <Text style={payoutHistoryScreenStyles.breakdownValue}>
            -{formatCurrency(item.fees)}
          </Text>
        </View>

        <View style={[
          payoutHistoryScreenStyles.breakdownItem,
          payoutHistoryScreenStyles.breakdownTotal
        ]}>
          <Text style={payoutHistoryScreenStyles.breakdownTotalLabel}>Net Payout</Text>
          <Text style={payoutHistoryScreenStyles.breakdownTotalValue}>
            {formatCurrency(item.netEarnings)}
          </Text>
        </View>

        {item.transactionId && (
          <View style={payoutHistoryScreenStyles.breakdownItem}>
            <Text style={payoutHistoryScreenStyles.breakdownLabel}>Transaction ID</Text>
            <Text style={payoutHistoryScreenStyles.breakdownValue}>{item.transactionId}</Text>
          </View>
        )}
      </View>

      <View style={payoutHistoryScreenStyles.actionRow}>
        <TouchableOpacity
          style={[
            payoutHistoryScreenStyles.actionButton,
            payoutHistoryScreenStyles.secondaryActionButton
          ]}
          onPress={() => handleViewDetails(item.id)}
        >
          <Text style={[
            payoutHistoryScreenStyles.actionButtonText,
            payoutHistoryScreenStyles.secondaryActionButtonText
          ]}>
            View Details
          </Text>
        </TouchableOpacity>

        {item.status === 'completed' && (
          <TouchableOpacity
            style={payoutHistoryScreenStyles.actionButton}
            onPress={() => handleDownloadReceipt(item.id)}
          >
            <Text style={payoutHistoryScreenStyles.actionButtonText}>
              Download Receipt
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={driverGradientConfigs.hero.colors}
      start={driverGradientConfigs.hero.start}
      end={driverGradientConfigs.hero.end}
      style={payoutHistoryScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'driver@example.com',
          firstName: 'John',
          lastName: 'Driver',
          role: 'driver'
        }}
        title="Payout History"
        notificationCount={2}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={payoutHistoryScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={payoutHistoryScreenStyles.header}>
          <Text style={payoutHistoryScreenStyles.title}>Payout History</Text>
          <Text style={payoutHistoryScreenStyles.subtitle}>
            View your payment history and download receipts
          </Text>
        </View>

        {/* Summary Section */}
        <View style={payoutHistoryScreenStyles.summarySection}>
          <View style={payoutHistoryScreenStyles.summaryRow}>
            <Text style={payoutHistoryScreenStyles.summaryLabel}>Total Payouts</Text>
            <Text style={payoutHistoryScreenStyles.summaryValue}>
              {formatCurrency(payoutSummary.totalPayouts)}
            </Text>
          </View>

          <View style={payoutHistoryScreenStyles.summaryRow}>
            <Text style={payoutHistoryScreenStyles.summaryLabel}>This Month</Text>
            <Text style={payoutHistoryScreenStyles.summaryValue}>
              {formatCurrency(payoutSummary.thisMonth)}
            </Text>
          </View>

          <View style={payoutHistoryScreenStyles.summaryRow}>
            <Text style={payoutHistoryScreenStyles.summaryLabel}>Last Month</Text>
            <Text style={payoutHistoryScreenStyles.summaryValue}>
              {formatCurrency(payoutSummary.lastMonth)}
            </Text>
          </View>

          <View style={[
            payoutHistoryScreenStyles.summaryRow,
            payoutHistoryScreenStyles.totalRow
          ]}>
            <Text style={payoutHistoryScreenStyles.summaryLabel}>Average Weekly</Text>
            <Text style={payoutHistoryScreenStyles.summaryValue}>
              {formatCurrency(payoutSummary.averageWeekly)}
            </Text>
          </View>
        </View>

        {/* Filter Section */}
        <View style={payoutHistoryScreenStyles.filterSection}>
          <Text style={payoutHistoryScreenStyles.filterTitle}>Filter Options</Text>

          <View style={payoutHistoryScreenStyles.filterRow}>
            <Text style={payoutHistoryScreenStyles.filterLabel}>Time Period:</Text>
            <TouchableOpacity onPress={() => {
              const filters: ('all' | 'thisYear' | 'lastYear')[] = ['all', 'thisYear', 'lastYear'];
              const currentIndex = filters.indexOf(selectedFilter);
              const nextIndex = (currentIndex + 1) % filters.length;
              setSelectedFilter(filters[nextIndex]);
            }}>
              <Text style={payoutHistoryScreenStyles.filterValue}>
                {selectedFilter === 'all' ? 'All Time' :
                 selectedFilter === 'thisYear' ? 'This Year' : 'Last Year'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={payoutHistoryScreenStyles.filterRow}>
            <Text style={payoutHistoryScreenStyles.filterLabel}>Payment Method:</Text>
            <Text style={payoutHistoryScreenStyles.filterValue}>Bank Transfer</Text>
          </View>
        </View>

        {/* Payout History */}
        <View style={payoutHistoryScreenStyles.payoutList}>
          {payoutHistory.map(renderPayoutItem)}
        </View>

        {/* Empty State */}
        {payoutHistory.length === 0 && (
          <View style={payoutHistoryScreenStyles.emptyState}>
            <MaterialCommunityIcons
              name="bank-transfer"
              size={64}
              color={colors.textSecondary}
              style={payoutHistoryScreenStyles.emptyStateIcon}
            />
            <Text style={payoutHistoryScreenStyles.emptyStateTitle}>
              No Payout History
            </Text>
            <Text style={payoutHistoryScreenStyles.emptyStateMessage}>
              Your payout history will appear here once you start earning with K&T Commute
            </Text>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default PayoutHistoryScreen;
