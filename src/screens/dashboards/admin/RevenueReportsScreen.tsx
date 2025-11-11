import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DashboardHeader } from '../../../components/ui';
import { revenueReportsScreenStyles } from '../../../styles/screens/admin/revenueReportsScreen';
import { colors } from '../../../styles/theme';

interface RevenueMetrics {
  totalRevenue: number;
  monthlyRevenue: number;
  dailyRevenue: number;
  revenueGrowth: number;
  totalCommissions: number;
  commissionGrowth: number;
  activeDrivers: number;
  driverGrowth: number;
  totalTrips: number;
  tripGrowth: number;
}

interface ReportItem {
  id: string;
  title: string;
  description: string;
  lastGenerated: string;
  type: 'revenue' | 'commission' | 'drivers' | 'trips';
}

const RevenueReportsScreen: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [chartType, setChartType] = useState<'revenue' | 'growth' | 'breakdown'>('revenue');

  // Mock data
  const metrics: RevenueMetrics = {
    totalRevenue: 2847650.00,
    monthlyRevenue: 284750.00,
    dailyRevenue: 9485.00,
    revenueGrowth: 18.5,
    totalCommissions: 284765.00,
    commissionGrowth: 22.3,
    activeDrivers: 1247,
    driverGrowth: 12.8,
    totalTrips: 28476,
    tripGrowth: 15.2,
  };

  const reports: ReportItem[] = [
    {
      id: '1',
      title: 'Monthly Revenue Report',
      description: 'Comprehensive breakdown of monthly earnings and commissions',
      lastGenerated: '2025-11-10',
      type: 'revenue',
    },
    {
      id: '2',
      title: 'Commission Analysis',
      description: 'Platform commission breakdown by driver and route',
      lastGenerated: '2025-11-09',
      type: 'commission',
    },
    {
      id: '3',
      title: 'Driver Performance Report',
      description: 'Active drivers, earnings, and performance metrics',
      lastGenerated: '2025-11-08',
      type: 'drivers',
    },
    {
      id: '4',
      title: 'Trip Analytics Report',
      description: 'Trip volume, popular routes, and demand patterns',
      lastGenerated: '2025-11-07',
      type: 'trips',
    },
  ];

  const formatCurrency = (amount: number) => {
    return `R ${amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;
  };

  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  const getChangeColor = (value: number) => {
    return value >= 0 ? colors.success : colors.error;
  };

  const getChangeIcon = (value: number) => {
    return value >= 0 ? 'trending-up' : 'trending-down';
  };

  const renderMetricCard = (
    label: string,
    value: string | number,
    change?: number,
    icon?: string,
    isPercentage?: boolean
  ) => (
    <View style={revenueReportsScreenStyles.metricItem}>
      <View style={revenueReportsScreenStyles.metricCard}>
        {icon && (
          <MaterialCommunityIcons
            name={icon as any}
            size={24}
            color={colors.primary}
            style={{ marginBottom: 8 }}
          />
        )}
        <Text style={revenueReportsScreenStyles.metricValue}>
          {typeof value === 'number' ?
            (isPercentage ? `${value}%` : formatCurrency(value)) :
            value
          }
        </Text>
        <Text style={revenueReportsScreenStyles.metricLabel}>{label}</Text>
        {change !== undefined && (
          <View style={revenueReportsScreenStyles.metricChange}>
            <MaterialCommunityIcons
              name={getChangeIcon(change)}
              size={14}
              color={getChangeColor(change)}
            />
            <Text style={[
              revenueReportsScreenStyles.metricChangeText,
              { color: getChangeColor(change) }
            ]}>
              {formatPercentage(change)}
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  const renderReportItem = (report: ReportItem) => (
    <View key={report.id} style={revenueReportsScreenStyles.reportItem}>
      <View style={revenueReportsScreenStyles.reportInfo}>
        <Text style={revenueReportsScreenStyles.reportTitle}>{report.title}</Text>
        <Text style={revenueReportsScreenStyles.reportDescription}>
          {report.description}
        </Text>
        <Text style={revenueReportsScreenStyles.reportDescription}>
          Last generated: {new Date(report.lastGenerated).toLocaleDateString('en-ZA')}
        </Text>
      </View>
      <View style={revenueReportsScreenStyles.reportActions}>
        <TouchableOpacity
          style={[
            revenueReportsScreenStyles.actionButton,
            revenueReportsScreenStyles.secondaryActionButton
          ]}
          onPress={() => console.log('View report:', report.id)}
        >
          <Text style={[
            revenueReportsScreenStyles.actionButtonText,
            revenueReportsScreenStyles.secondaryActionButtonText
          ]}>
            View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={revenueReportsScreenStyles.actionButton}
          onPress={() => console.log('Generate report:', report.id)}
        >
          <Text style={revenueReportsScreenStyles.actionButtonText}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
      style={revenueReportsScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'admin@example.com',
          firstName: 'Sarah',
          lastName: 'Admin',
          role: 'admin'
        }}
        title="Revenue Reports"
        notificationCount={5}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={revenueReportsScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={revenueReportsScreenStyles.header}>
          <Text style={revenueReportsScreenStyles.title}>Revenue Reports</Text>
          <Text style={revenueReportsScreenStyles.subtitle}>
            Financial analytics and comprehensive revenue reports
          </Text>
        </View>

        {/* Key Metrics Section */}
        <View style={revenueReportsScreenStyles.metricsSection}>
          <Text style={revenueReportsScreenStyles.metricsTitle}>Key Metrics</Text>
          <View style={revenueReportsScreenStyles.metricsGrid}>
            {renderMetricCard(
              'Total Revenue',
              metrics.totalRevenue,
              metrics.revenueGrowth,
              'cash-multiple'
            )}
            {renderMetricCard(
              'Monthly Revenue',
              metrics.monthlyRevenue,
              undefined,
              'chart-timeline-variant'
            )}
            {renderMetricCard(
              'Daily Average',
              metrics.dailyRevenue,
              undefined,
              'calendar-today'
            )}
            {renderMetricCard(
              'Commission Earned',
              metrics.totalCommissions,
              metrics.commissionGrowth,
              'percent'
            )}
          </View>
        </View>

        {/* Filter Section */}
        <View style={revenueReportsScreenStyles.filterSection}>
          <Text style={revenueReportsScreenStyles.filterTitle}>Report Filters</Text>

          <View style={revenueReportsScreenStyles.filterRow}>
            <Text style={revenueReportsScreenStyles.filterLabel}>Time Period:</Text>
            <TouchableOpacity
              style={revenueReportsScreenStyles.filterButton}
              onPress={() => {
                const periods: ('daily' | 'weekly' | 'monthly' | 'yearly')[] = ['daily', 'weekly', 'monthly', 'yearly'];
                const currentIndex = periods.indexOf(selectedPeriod);
                const nextIndex = (currentIndex + 1) % periods.length;
                setSelectedPeriod(periods[nextIndex]);
              }}
            >
              <Text style={revenueReportsScreenStyles.filterButtonText}>
                {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={revenueReportsScreenStyles.filterRow}>
            <Text style={revenueReportsScreenStyles.filterLabel}>Report Type:</Text>
            <TouchableOpacity
              style={revenueReportsScreenStyles.filterButton}
              onPress={() => {
                const types: ('revenue' | 'growth' | 'breakdown')[] = ['revenue', 'growth', 'breakdown'];
                const currentIndex = types.indexOf(chartType);
                const nextIndex = (currentIndex + 1) % types.length;
                setChartType(types[nextIndex]);
              }}
            >
              <Text style={revenueReportsScreenStyles.filterButtonText}>
                {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Charts Section */}
        <View style={revenueReportsScreenStyles.chartSection}>
          <View style={revenueReportsScreenStyles.chartHeader}>
            <Text style={revenueReportsScreenStyles.chartTitle}>
              Revenue Analytics ({chartType})
            </Text>
            <TouchableOpacity
              style={revenueReportsScreenStyles.chartTypeButton}
              onPress={() => console.log('Export chart')}
            >
              <Text style={revenueReportsScreenStyles.chartTypeButtonText}>Export</Text>
            </TouchableOpacity>
          </View>

          <View style={revenueReportsScreenStyles.chartPlaceholder}>
            <MaterialCommunityIcons
              name="chart-line-variant"
              size={48}
              color={colors.textSecondary}
            />
            <Text style={revenueReportsScreenStyles.chartPlaceholderText}>
              Interactive revenue chart visualization
            </Text>
          </View>
        </View>

        {/* Revenue Breakdown */}
        <View style={revenueReportsScreenStyles.breakdownSection}>
          <Text style={revenueReportsScreenStyles.metricsTitle}>Revenue Breakdown</Text>

          <View style={revenueReportsScreenStyles.breakdownItem}>
            <Text style={revenueReportsScreenStyles.breakdownLabel}>Platform Commission</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={revenueReportsScreenStyles.breakdownValue}>
                {formatCurrency(metrics.totalCommissions)}
              </Text>
              <Text style={revenueReportsScreenStyles.breakdownPercentage}>
                10% of gross earnings
              </Text>
            </View>
          </View>

          <View style={revenueReportsScreenStyles.breakdownItem}>
            <Text style={revenueReportsScreenStyles.breakdownLabel}>Driver Payouts</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={revenueReportsScreenStyles.breakdownValue}>
                {formatCurrency(metrics.totalRevenue - metrics.totalCommissions)}
              </Text>
              <Text style={revenueReportsScreenStyles.breakdownPercentage}>
                90% to drivers
              </Text>
            </View>
          </View>

          <View style={revenueReportsScreenStyles.breakdownItem}>
            <Text style={revenueReportsScreenStyles.breakdownLabel}>Total Processed</Text>
            <Text style={revenueReportsScreenStyles.breakdownValue}>
              {formatCurrency(metrics.totalRevenue)}
            </Text>
          </View>
        </View>

        {/* Available Reports */}
        <View style={revenueReportsScreenStyles.reportsSection}>
          <Text style={revenueReportsScreenStyles.metricsTitle}>Available Reports</Text>
          {reports.map(renderReportItem)}
        </View>

        {/* Export Section */}
        <View style={revenueReportsScreenStyles.exportSection}>
          <Text style={revenueReportsScreenStyles.exportTitle}>Export Options</Text>
          <Text style={revenueReportsScreenStyles.exportDescription}>
            Download comprehensive reports in your preferred format
          </Text>

          <View style={revenueReportsScreenStyles.exportButtonsRow}>
            <TouchableOpacity
              style={revenueReportsScreenStyles.exportButton}
              onPress={() => console.log('Export to PDF')}
            >
              <Text style={revenueReportsScreenStyles.exportButtonText}>Export PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={revenueReportsScreenStyles.exportButton}
              onPress={() => console.log('Export to Excel')}
            >
              <Text style={revenueReportsScreenStyles.exportButtonText}>Export Excel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default RevenueReportsScreen;
