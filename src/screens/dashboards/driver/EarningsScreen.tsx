import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DashboardHeader } from '../../../components/ui';
import { earningsScreenStyles } from '../../../styles/screens/driver/earningsScreen';
import { colors } from '../../../styles/theme';

interface EarningsItem {
  id: string;
  tripDate: string;
  route: string;
  passengers: number;
  distance: number;
  duration: string;
  amount: number;
  status: 'paid' | 'pending' | 'processing';
  paymentDate?: string;
}

interface EarningsSummary {
  todayEarnings: number;
  weekEarnings: number;
  monthEarnings: number;
  totalEarnings: number;
}

const EarningsScreen: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data
  const earningsSummary: EarningsSummary = {
    todayEarnings: 450.00,
    weekEarnings: 2750.00,
    monthEarnings: 12500.00,
    totalEarnings: 87650.00,
  };

  const earningsHistory: EarningsItem[] = [
    {
      id: '1',
      tripDate: '2025-11-10',
      route: 'Cape Town → Stellenbosch',
      passengers: 3,
      distance: 45,
      duration: '1h 15m',
      amount: 180.00,
      status: 'paid',
      paymentDate: '2025-11-10',
    },
    {
      id: '2',
      tripDate: '2025-11-10',
      route: 'Stellenbosch → Cape Town',
      passengers: 4,
      distance: 45,
      duration: '1h 20m',
      amount: 240.00,
      status: 'paid',
      paymentDate: '2025-11-10',
    },
    {
      id: '3',
      tripDate: '2025-11-09',
      route: 'Cape Town → Paarl',
      passengers: 2,
      distance: 65,
      duration: '1h 45m',
      amount: 320.00,
      status: 'processing',
    },
    {
      id: '4',
      tripDate: '2025-11-09',
      route: 'Paarl → Cape Town',
      passengers: 3,
      distance: 65,
      duration: '1h 50m',
      amount: 390.00,
      status: 'pending',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
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
      case 'paid':
        return 'Paid';
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

  const renderSummaryItem = (label: string, value: number, icon: string) => (
    <View style={earningsScreenStyles.summaryItem}>
      <View style={earningsScreenStyles.summaryCard}>
        <MaterialCommunityIcons
          name={icon as any}
          size={24}
          color={colors.success}
          style={{ marginBottom: 8 }}
        />
        <Text style={earningsScreenStyles.summaryValue}>
          {formatCurrency(value)}
        </Text>
        <Text style={earningsScreenStyles.summaryLabel}>{label}</Text>
      </View>
    </View>
  );

  const renderEarningsItem = (item: EarningsItem) => (
    <View key={item.id} style={earningsScreenStyles.earningsItem}>
      <View style={earningsScreenStyles.earningsHeader}>
        <View style={earningsScreenStyles.earningsInfo}>
          <Text style={earningsScreenStyles.earningsTitle}>{item.route}</Text>
          <Text style={earningsScreenStyles.earningsDate}>
            {new Date(item.tripDate).toLocaleDateString('en-ZA', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </Text>
          <Text style={earningsScreenStyles.earningsRoute}>
            {item.passengers} passengers • {item.distance}km • {item.duration}
          </Text>
        </View>
        <View style={earningsScreenStyles.earningsAmount}>
          <Text style={earningsScreenStyles.earningsAmountValue}>
            {formatCurrency(item.amount)}
          </Text>
          <View style={[
            earningsScreenStyles.earningsStatus,
            { backgroundColor: `${getStatusColor(item.status)}20` }
          ]}>
            <Text style={[
              earningsScreenStyles.earningsStatusText,
              { color: getStatusColor(item.status) }
            ]}>
              {getStatusText(item.status)}
            </Text>
          </View>
        </View>
      </View>

      <View style={earningsScreenStyles.tripDetails}>
        <View style={earningsScreenStyles.detailRow}>
          <Text style={earningsScreenStyles.detailLabel}>Base Fare</Text>
          <Text style={earningsScreenStyles.detailValue}>
            {formatCurrency(item.amount * 0.7)}
          </Text>
        </View>
        <View style={earningsScreenStyles.detailRow}>
          <Text style={earningsScreenStyles.detailLabel}>Distance Bonus</Text>
          <Text style={earningsScreenStyles.detailValue}>
            {formatCurrency(item.amount * 0.2)}
          </Text>
        </View>
        <View style={earningsScreenStyles.detailRow}>
          <Text style={earningsScreenStyles.detailLabel}>Tips</Text>
          <Text style={earningsScreenStyles.detailValue}>
            {formatCurrency(item.amount * 0.1)}
          </Text>
        </View>
        {item.paymentDate && (
          <View style={earningsScreenStyles.detailRow}>
            <Text style={earningsScreenStyles.detailLabel}>Paid On</Text>
            <Text style={earningsScreenStyles.detailValue}>
              {new Date(item.paymentDate).toLocaleDateString('en-ZA')}
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
      style={earningsScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'driver@example.com',
          firstName: 'John',
          lastName: 'Driver',
          role: 'driver'
        }}
        title="Earnings Overview"
        notificationCount={3}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={earningsScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={earningsScreenStyles.header}>
          <Text style={earningsScreenStyles.title}>Your Earnings</Text>
          <Text style={earningsScreenStyles.subtitle}>
            Track your income and payment history
          </Text>
        </View>

        {/* Summary Section */}
        <View style={earningsScreenStyles.summarySection}>
          <Text style={earningsScreenStyles.summaryTitle}>Earnings Summary</Text>
          <View style={earningsScreenStyles.summaryGrid}>
            {renderSummaryItem('Today', earningsSummary.todayEarnings, 'calendar-today')}
            {renderSummaryItem('This Week', earningsSummary.weekEarnings, 'calendar-week')}
            {renderSummaryItem('This Month', earningsSummary.monthEarnings, 'calendar-month')}
            {renderSummaryItem('All Time', earningsSummary.totalEarnings, 'chart-line')}
          </View>
        </View>

        {/* Period Filter */}
        <View style={earningsScreenStyles.filterSection}>
          <View style={earningsScreenStyles.filterRow}>
            <Text style={earningsScreenStyles.filterLabel}>View Period:</Text>
            <TouchableOpacity
              style={earningsScreenStyles.filterButton}
              onPress={() => {
                // Toggle between periods
                const periods: ('week' | 'month' | 'year')[] = ['week', 'month', 'year'];
                const currentIndex = periods.indexOf(selectedPeriod);
                const nextIndex = (currentIndex + 1) % periods.length;
                setSelectedPeriod(periods[nextIndex]);
              }}
            >
              <Text style={earningsScreenStyles.filterButtonText}>
                {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Earnings Chart */}
        <View style={earningsScreenStyles.chartSection}>
          <Text style={earningsScreenStyles.chartTitle}>Earnings Trend</Text>
          <View style={earningsScreenStyles.chartPlaceholder}>
            <MaterialCommunityIcons
              name="chart-line"
              size={48}
              color={colors.textSecondary}
            />
            <Text style={earningsScreenStyles.chartPlaceholderText}>
              Chart visualization coming soon
            </Text>
          </View>
        </View>

        {/* Earnings History */}
        <View style={earningsScreenStyles.earningsList}>
          <Text style={earningsScreenStyles.summaryTitle}>Recent Earnings</Text>
          {earningsHistory.map(renderEarningsItem)}
        </View>

        {/* Empty State for no earnings */}
        {earningsHistory.length === 0 && (
          <View style={earningsScreenStyles.emptyState}>
            <MaterialCommunityIcons
              name="cash-remove"
              size={64}
              color={colors.textSecondary}
              style={earningsScreenStyles.emptyStateIcon}
            />
            <Text style={earningsScreenStyles.emptyStateTitle}>
              No Earnings Yet
            </Text>
            <Text style={earningsScreenStyles.emptyStateMessage}>
              Start accepting rides to begin earning money with K&T Commute
            </Text>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default EarningsScreen;
