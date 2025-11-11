import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { User } from '../../../types/User';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { DriverHeroBackground } from '../../../../assets';
import { logNavigation } from '../../../utils/logger';

interface DriverPaymentsScreenProps {
  user: User;
}

export const DriverPaymentsScreen: React.FC<DriverPaymentsScreenProps> = ({ user }) => {
  const paymentOptions = [
    {
      id: 'earnings',
      title: 'View Earnings',
      description: 'Check your daily, weekly, and monthly earnings',
      icon: 'cash-multiple',
      color: colors.success,
      onPress: () => {
        logNavigation('DriverPayments', 'EarningsScreen');
        // navigation.navigate('EarningsScreen');
      },
    },
    {
      id: 'payout',
      title: 'Request Payout',
      description: 'Transfer your earnings to your bank account',
      icon: 'bank-transfer',
      color: colors.primary,
      onPress: () => {
        logNavigation('DriverPayments', 'PayoutHistoryScreen');
        // navigation.navigate('PayoutHistoryScreen');
      },
    },
    {
      id: 'billing-history',
      title: 'Payment History',
      description: 'View transaction history and payment details',
      icon: 'receipt',
      color: colors.secondary,
      onPress: () => {
        console.log('Navigate to PayoutHistoryScreen');
        // navigation.navigate('PayoutHistoryScreen');
      },
    },
    {
      id: 'payment-methods',
      title: 'Bank Details',
      description: 'Manage your bank account for payouts',
      icon: 'bank',
      color: colors.tertiary,
      onPress: () => {
        console.log('Navigate to BankDetailsScreen');
        // navigation.navigate('BankDetailsScreen');
      },
    },
  ];

  const quickStats = [
    {
      label: 'Today',
      value: 'R245.80',
      icon: 'calendar-today',
      color: colors.primary,
    },
    {
      label: 'This Week',
      value: 'R1,234.50',
      icon: 'calendar-week',
      color: colors.success,
    },
    {
      label: 'Pending',
      value: 'R567.20',
      icon: 'clock-outline',
      color: colors.warning,
    },
    {
      label: 'Total Trips',
      value: '156',
      icon: 'car',
      color: colors.info,
    },
  ];

  const renderPaymentOption = (option: any) => (
    <TouchableOpacity
      key={option.id}
      style={styles.paymentCard}
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
      <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
        <MaterialCommunityIcons
          name={stat.icon as any}
          size={20}
          color={stat.color}
        />
      </View>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={DriverHeroBackground}
        style={styles.heroSection}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(14, 165, 233, 0.8)', 'rgba(5, 150, 105, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Earnings Center</Text>
            <Text style={styles.heroSubtitle}>
              Track your earnings and manage payouts
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView style={styles.scrollContainer}>
        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Earnings Overview</Text>
          <View style={styles.statsGrid}>
            {quickStats.map(renderQuickStat)}
          </View>
        </View>

        {/* Payment Options */}
        <View style={styles.optionsSection}>
          <Text style={styles.sectionTitle}>Payment Management</Text>
          {paymentOptions.map(renderPaymentOption)}
        </View>

        {/* Info Notice */}
        <View style={styles.infoSection}>
          <View style={styles.infoHeader}>
            <MaterialCommunityIcons
              name="information"
              size={20}
              color={colors.info}
            />
            <Text style={styles.infoTitle}>Payment Information</Text>
          </View>
          <Text style={styles.infoText}>
            Payouts are processed weekly on Fridays. Minimum payout amount is R100.
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

  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.sm,
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
  },

  optionsSection: {
    marginBottom: spacing.xl,
  },

  paymentCard: {
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

  infoSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.sm,
  },

  infoHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.sm,
  },

  infoTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  infoText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
