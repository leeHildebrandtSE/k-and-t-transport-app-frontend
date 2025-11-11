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
import { CommuterHeroBackground } from '../../../../assets';
import { logNavigation } from '../../../utils/logger';

interface CommuterPaymentsScreenProps {
  user: User;
}

export const CommuterPaymentsScreen: React.FC<CommuterPaymentsScreenProps> = ({ user }) => {
  const paymentOptions = [
    {
      id: 'payment',
      title: 'Make Payment',
      description: 'Pay for your current or upcoming trips',
      icon: 'credit-card-plus',
      color: colors.primary,
      onPress: () => {
        logNavigation('CommuterPayments', 'PaymentScreen');
        // navigation.navigate('PaymentScreen');
      },
    },
    {
      id: 'billing-history',
      title: 'Billing History',
      description: 'View your transaction history and receipts',
      icon: 'receipt',
      color: colors.secondary,
      onPress: () => {
        logNavigation('CommuterPayments', 'BillingHistoryScreen');
        // navigation.navigate('BillingHistoryScreen');
      },
    },
    {
      id: 'payment-methods',
      title: 'Payment Methods',
      description: 'Manage cards, wallets, and payment settings',
      icon: 'wallet',
      color: colors.tertiary,
      onPress: () => {
        logNavigation('CommuterPayments', 'PaymentMethodsScreen');
        // navigation.navigate('PaymentMethodsScreen');
      },
    },
    {
      id: 'refund-request',
      title: 'Request Refund',
      description: 'Submit refund requests for completed trips',
      icon: 'cash-refund',
      color: colors.warning,
      onPress: () => {
        logNavigation('CommuterPayments', 'RefundRequestScreen');
        // navigation.navigate('RefundRequestScreen');
      },
    },
  ];

  const quickStats = [
    {
      label: 'This Month',
      value: 'R156.75',
      icon: 'calendar-month',
      color: colors.primary,
    },
    {
      label: 'Last Trip',
      value: 'R25.50',
      icon: 'car',
      color: colors.success,
    },
    {
      label: 'Total Trips',
      value: '23',
      icon: 'map-marker-path',
      color: colors.info,
    },
    {
      label: 'Saved',
      value: 'R89.20',
      icon: 'piggy-bank',
      color: colors.warning,
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
      {/* Hero Section with Background */}
      <ImageBackground
        source={CommuterHeroBackground}
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
            <Text style={styles.heroTitle}>Payment Center</Text>
            <Text style={styles.heroSubtitle}>
              Manage all your payment needs in one place
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView style={styles.scrollContainer}>
        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Quick Overview</Text>
          <View style={styles.statsGrid}>
            {quickStats.map(renderQuickStat)}
          </View>
        </View>

        {/* Payment Options */}
        <View style={styles.optionsSection}>
          <Text style={styles.sectionTitle}>Payment Options</Text>
          {paymentOptions.map(renderPaymentOption)}
        </View>

        {/* Security Notice */}
        <View style={styles.securitySection}>
          <View style={styles.securityHeader}>
            <MaterialCommunityIcons
              name="shield-check"
              size={20}
              color={colors.success}
            />
            <Text style={styles.securityTitle}>Secure & Protected</Text>
          </View>
          <Text style={styles.securityText}>
            All payments are encrypted and processed through secure, certified payment gateways.
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

  securitySection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.sm,
  },

  securityHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.sm,
  },

  securityTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  securityText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
