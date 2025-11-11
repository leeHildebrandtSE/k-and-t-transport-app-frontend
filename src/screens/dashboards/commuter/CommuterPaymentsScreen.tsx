import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { User } from '../../../types/User';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { commuterDashboardStyles, commuterGradientConfigs } from '../../../styles/screens/dashboards/commuterDashboard';
import { CommuterHeroBackground } from '../../../../assets';
import { CommuterScreenProps } from '../../../types/Dashboard';
import { logNavigation } from '../../../utils/logger';

const { width } = Dimensions.get('window');

// Responsive breakpoints
const isTablet = width >= 768;
const isDesktop = width >= 1024;
const isMobile = width < 768;

export const CommuterPaymentsScreen: React.FC<CommuterScreenProps> = ({ user }) => {
  const commonStyles = commuterDashboardStyles;

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
        style={{ marginLeft: spacing.sm }}
      />
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
    <View style={commonStyles.container}>
      <ScrollView
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Payment Center Header - Using consistent heroProfileCard structure */}
        <View style={commonStyles.heroProfileCard}>
          <ImageBackground
            source={CommuterHeroBackground}
            style={commonStyles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={commuterGradientConfigs.hero.colors}
              start={commuterGradientConfigs.hero.start}
              end={commuterGradientConfigs.hero.end}
              style={commonStyles.heroGradientOverlay}
            >
              <View style={commonStyles.heroContent}>
                {/* Payment Center Icon */}
                <View style={commonStyles.profileImageFrame}>
                  <View style={[commonStyles.commuterStatusIcon, { backgroundColor: 'rgba(245, 158, 11, 0.3)' }]}>
                    <MaterialCommunityIcons
                      name="credit-card-multiple"
                      size={60}
                      color="#fff"
                    />
                  </View>
                  <View style={[commonStyles.onlineIndicator, { backgroundColor: colors.success }]} />
                </View>

                {/* Payment Center Info */}
                <View style={commonStyles.heroProfileInfo}>
                  <Text style={commonStyles.heroName}>Payment Center</Text>
                  <Text style={commonStyles.heroRole}>Manage all your payment needs</Text>

                  {/* Payment Stats */}
                  <View style={commonStyles.statsRow}>
                    <View style={commonStyles.statItem}>
                      <Text style={commonStyles.heroStatValue}>R2,450</Text>
                      <Text style={commonStyles.heroStatLabel}>BALANCE</Text>
                    </View>
                    <View style={commonStyles.statDivider} />
                    <View style={commonStyles.statItem}>
                      <Text style={commonStyles.heroStatValue}>3</Text>
                      <Text style={commonStyles.heroStatLabel}>PENDING</Text>
                    </View>
                    <View style={commonStyles.statDivider} />
                    <View style={commonStyles.statItem}>
                      <Text style={commonStyles.heroStatValue}>12</Text>
                      <Text style={commonStyles.heroStatLabel}>THIS MONTH</Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Quick Stats Section - Using consistent section spacing */}
        <View style={commonStyles.sectionHeader}>
          <Text style={commonStyles.sectionTitle}>Quick Overview</Text>
        </View>

        <View style={styles.statsGrid}>
          {quickStats.map(renderQuickStat)}
        </View>

        {/* Payment Options Section */}
        <View style={commonStyles.sectionHeader}>
          <Text style={commonStyles.sectionTitle}>Payment Options</Text>
        </View>

        <View style={styles.paymentOptionsContainer}>
          {paymentOptions.map(renderPaymentOption)}
        </View>

        {/* Security Notice Section */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <MaterialCommunityIcons
              name="shield-check"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.infoTitle}>Payment Information</Text>
          </View>
          <Text style={styles.infoText}>
            All payments are encrypted and processed through secure, certified payment gateways. Your financial information is protected with industry-standard security measures.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Stats grid styling - matching driver layout
  statsGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between' as const,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: isMobile ? spacing.md : spacing.lg,
  },

  statCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center' as const,
    width: isDesktop ? '22%' : isTablet ? '30%' : '47%',
    marginBottom: spacing.md,
    ...shadows.md,
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
    fontSize: isMobile ? 16 : 18,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  statLabel: {
    fontSize: isMobile ? 11 : 12,
    color: colors.textSecondary,
    textAlign: 'center' as const,
    lineHeight: isMobile ? 14 : 16,
  },

  // Payment options container - matching driver layout
  paymentOptionsContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },

  // Payment card styling with responsive design - matching driver layout
  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: isMobile ? spacing.md : spacing.lg,
    marginVertical: spacing.sm,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    minHeight: isMobile ? 70 : 80,
    ...shadows.md,
  },

  cardHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    flex: 1,
  },

  iconContainer: {
    width: isMobile ? 45 : 50,
    height: isMobile ? 45 : 50,
    borderRadius: isMobile ? 22.5 : 25,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginRight: spacing.md,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  cardDescription: {
    fontSize: isMobile ? 12 : 14,
    color: colors.textSecondary,
    lineHeight: isMobile ? 16 : 20,
  },

  // Security section styling - matching driver info section
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.sm,
  },

  infoHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.md,
  },

  infoTitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  infoText: {
    fontSize: isMobile ? 12 : 14,
    color: colors.textSecondary,
    lineHeight: isMobile ? 18 : 20,
  },
});
