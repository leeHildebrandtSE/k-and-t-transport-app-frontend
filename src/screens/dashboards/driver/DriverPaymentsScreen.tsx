import React from 'react';
import { View, ScrollView, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { EnhancedCard, StatsCard } from '../../../components/ui';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { driverDashboardStyles } from '../../../styles/screens/dashboards/driverDashboard';

export const DriverPaymentsScreen: React.FC = () => {
  // Mock data for demonstration
  const stats = [
    { id: 1, title: 'Total Earnings', value: 'R3,240', icon: 'wallet', iconColor: colors.success },
    { id: 2, title: 'This Week', value: 'R850', icon: 'calendar', iconColor: colors.primary },
    { id: 3, title: 'Pending', value: 'R420', icon: 'time', iconColor: colors.warning },
    { id: 4, title: 'Completed', value: '12', icon: 'checkmark-circle', iconColor: colors.success },
  ];

  const paymentOptions = [
    {
      id: 1,
      title: 'Bank Transfer',
      description: 'Transfer directly to your bank account',
      icon: 'card',
      iconColor: colors.primary,
      backgroundColor: `${colors.primary}15`,
    },
    {
      id: 2,
      title: 'Digital Wallet',
      description: 'PayPal, Apple Pay, Google Pay',
      icon: 'phone-portrait',
      iconColor: colors.secondary,
      backgroundColor: `${colors.secondary}15`,
    },
    {
      id: 3,
      title: 'Payment History',
      description: 'View all your past transactions',
      icon: 'list',
      iconColor: colors.tertiary,
      backgroundColor: `${colors.tertiary}15`,
    },
    {
      id: 4,
      title: 'Tax Documents',
      description: 'Download receipts and tax forms',
      icon: 'document-text',
      iconColor: colors.warning,
      backgroundColor: `${colors.warning}15`,
    },
  ];

  return (
    <View style={driverDashboardStyles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={require('../../../../assets/patterns/geometric-pattern.png')}
        style={driverDashboardStyles.heroBackgroundImage}
        imageStyle={driverDashboardStyles.heroBackgroundImage}
      >
        <LinearGradient
          colors={['rgba(99, 102, 241, 0.9)', 'rgba(139, 92, 246, 0.9)']}
          style={driverDashboardStyles.heroGradientOverlay}
        >
          <View style={driverDashboardStyles.heroContent}>
            <Text style={driverDashboardStyles.sectionTitle}>Payments & Earnings</Text>
            <Text style={styles.heroSubtitle}>
              Manage your earnings and payment methods
            </Text>

            <View style={styles.heroActions}>
              <TouchableOpacity style={[styles.heroActionButton, { backgroundColor: colors.success }]}>
                <Ionicons name="download" size={16} color="#FFFFFF" />
                <Text style={styles.heroActionText}>Withdraw</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.heroActionButton, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                <Ionicons name="analytics" size={16} color="#FFFFFF" />
                <Text style={styles.heroActionText}>Reports</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* Content */}
      <ScrollView style={driverDashboardStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Stats Section */}
        <View style={driverDashboardStyles.sectionHeader}>
          <Text style={driverDashboardStyles.sectionTitle}>Earnings Overview</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.iconColor}20` }]}>
                  <Ionicons name={stat.icon as any} size={20} color={stat.iconColor} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Payment Options */}
        <View style={driverDashboardStyles.sectionHeader}>
          <Text style={driverDashboardStyles.sectionTitle}>Payment Options</Text>

          {paymentOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.paymentCard}>
              <View style={[styles.iconContainer, { backgroundColor: option.backgroundColor }]}>
                <Ionicons name={option.icon as any} size={24} color={option.iconColor} />
              </View>
              <View style={styles.paymentContent}>
                <Text style={styles.paymentTitle}>{option.title}</Text>
                <Text style={styles.paymentDescription}>{option.description}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.textSecondary}
                style={styles.paymentArrow}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Section */}
        <EnhancedCard style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="information-circle" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Payment Information</Text>
          </View>
          <Text style={styles.infoText}>
            Payments are processed weekly on Fridays. Minimum payout amount is R100.
            Bank transfers typically take 1-3 business days to reflect in your account.
          </Text>
        </EnhancedCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heroActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
  },

  heroActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    gap: spacing.xs,
  },

  heroActionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: spacing.sm,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.md,
  },

  statCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
    ...shadows.md,
  },

  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.md,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  paymentContent: {
    flex: 1,
  },

  paymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  paymentDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },

  paymentArrow: {
    marginLeft: spacing.sm,
  },

  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: spacing.sm,
  },
});
