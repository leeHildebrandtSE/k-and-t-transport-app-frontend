import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { User } from '../../../types/User';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { AdminHeroBackground } from '../../../../assets';

interface AdminFinanceScreenProps {
  user: User;
}

export const AdminFinanceScreen: React.FC<AdminFinanceScreenProps> = ({ user }) => {
  const financeOptions = [
    {
      id: 'revenue-overview',
      title: 'Revenue Overview',
      description: 'Platform revenue, commissions, and financial analytics',
      icon: 'chart-line',
      color: colors.primary,
      onPress: () => {
        console.log('Navigate to RevenueReportsScreen');
        // navigation.navigate('RevenueReportsScreen');
      },
    },
    {
      id: 'driver-payouts',
      title: 'Driver Payouts',
      description: 'Manage and approve driver payout requests',
      icon: 'bank-transfer-out',
      color: colors.success,
      onPress: () => {
        console.log('Navigate to DriverPayoutsScreen');
        // navigation.navigate('DriverPayoutsScreen');
      },
    },
    {
      id: 'financial-reports',
      title: 'Financial Reports',
      description: 'Generate and export financial reports',
      icon: 'file-chart',
      color: colors.secondary,
      onPress: () => {
        console.log('Navigate to RevenueReportsScreen');
        // navigation.navigate('RevenueReportsScreen');
      },
    },
    {
      id: 'payment-disputes',
      title: 'Payment Disputes',
      description: 'Handle payment disputes and refund requests',
      icon: 'gavel',
      color: colors.warning,
      onPress: () => Alert.alert('Payment Disputes', 'Manage payment disputes'),
    },
    {
      id: 'platform-settings',
      title: 'Platform Settings',
      description: 'Configure fees, rates, and payment policies',
      icon: 'cog',
      color: colors.tertiary,
      onPress: () => Alert.alert('Platform Settings', 'Configure platform settings'),
    },
    {
      id: 'transaction-monitoring',
      title: 'Transaction Monitoring',
      description: 'Monitor all platform transactions and payments',
      icon: 'monitor-eye',
      color: colors.info,
      onPress: () => Alert.alert('Transaction Monitoring', 'Monitor platform transactions'),
    },
  ];

  const quickStats = [
    {
      label: 'Today\'s Revenue',
      value: 'R12,450.80',
      icon: 'cash-multiple',
      color: colors.success,
      trend: '+12.5%',
      trendUp: true,
    },
    {
      label: 'Pending Payouts',
      value: 'R8,234.50',
      icon: 'clock-outline',
      color: colors.warning,
      trend: '45 drivers',
      trendUp: null,
    },
    {
      label: 'Monthly Commission',
      value: 'R89,675.20',
      icon: 'percent',
      color: colors.primary,
      trend: '+8.2%',
      trendUp: true,
    },
    {
      label: 'Active Disputes',
      value: '7',
      icon: 'alert-circle',
      color: colors.error,
      trend: '-2 from yesterday',
      trendUp: true,
    },
  ];

  const renderFinanceOption = (option: any) => (
    <TouchableOpacity
      key={option.id}
      style={styles.financeCard}
      onPress={option.onPress}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: `${option.color}20` }]}>
          <MaterialCommunityIcons
            name={option.icon as any}
            size={24}
            color={option.color}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{option.title}</Text>
          <Text style={styles.cardDescription}>{option.description}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={colors.textSecondary}
        />
      </View>
    </TouchableOpacity>
  );

  const renderQuickStat = (stat: any, index: number) => (
    <View key={index} style={styles.statCard}>
      <View style={styles.statHeader}>
        <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
          <MaterialCommunityIcons
            name={stat.icon as any}
            size={20}
            color={stat.color}
          />
        </View>
        {stat.trendUp !== null && (
          <View style={[styles.trendIndicator, { backgroundColor: stat.trendUp ? colors.successSoft : colors.errorSoft }]}>
            <MaterialCommunityIcons
              name={stat.trendUp ? "trending-up" : "trending-down"}
              size={12}
              color={stat.trendUp ? colors.success : colors.error}
            />
          </View>
        )}
      </View>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
      <Text style={[styles.statTrend, { color: stat.trendUp ? colors.success : colors.textSecondary }]}>
        {stat.trend}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={AdminHeroBackground}
        style={styles.heroSection}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(5, 150, 105, 0.8)', 'rgba(14, 165, 233, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Finance Center</Text>
            <Text style={styles.heroSubtitle}>
              Platform financial management and oversight
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView style={styles.scrollContainer}>
        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Financial Overview</Text>
          <View style={styles.statsGrid}>
            {quickStats.map(renderQuickStat)}
          </View>
        </View>

        {/* Finance Options */}
        <View style={styles.optionsSection}>
          <Text style={styles.sectionTitle}>Financial Management</Text>
          {financeOptions.map(renderFinanceOption)}
        </View>

        {/* Admin Notice */}
        <View style={styles.adminSection}>
          <View style={styles.adminHeader}>
            <MaterialCommunityIcons
              name="shield-crown"
              size={20}
              color={colors.tertiary}
            />
            <Text style={styles.adminTitle}>Administrator Access</Text>
          </View>
          <Text style={styles.adminText}>
            You have full access to platform financial data and management tools. All actions are logged for audit purposes.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  heroSection: {
    height: 200,
    width: '100%' as const,
  },

  heroGradient: {
    flex: 1,
    justifyContent: 'center' as const,
    paddingHorizontal: spacing.xl,
  },

  heroContent: {
    alignItems: 'center' as const,
  },

  heroTitle: {
    ...typography.headlineLarge,
    color: '#FFFFFF',
    fontWeight: '700' as const,
    marginBottom: spacing.sm,
    textAlign: 'center' as const,
  },

  heroSubtitle: {
    ...typography.bodyLarge,
    color: '#FFFFFF',
    textAlign: 'center' as const,
    opacity: 0.9,
  },

  scrollContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  statsSection: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.md,
  },

  statsGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    marginHorizontal: -spacing.sm,
  },

  statCard: {
    width: '50%' as const,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },

  statHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.sm,
  },

  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },

  trendIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },

  statValue: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '700' as const,
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  statTrend: {
    ...typography.labelSmall,
    fontWeight: '600' as const,
  },

  optionsSection: {
    marginBottom: spacing.xl,
  },

  financeCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  cardHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginRight: spacing.md,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600' as const,
    marginBottom: spacing.xs,
  },

  cardDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  adminSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.tertiary,
    ...shadows.sm,
  },

  adminHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.sm,
  },

  adminTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  adminText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
