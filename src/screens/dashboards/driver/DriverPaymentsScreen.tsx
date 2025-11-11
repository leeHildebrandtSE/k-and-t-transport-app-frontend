import React from 'react';
import { View, ScrollView, TouchableOpacity, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { EnhancedCard, StatsCard } from '../../../components/ui';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { driverDashboardStyles, driverGradientConfigs } from '../../../styles/screens/dashboards/driverDashboard';
import { User } from '../../../types/User';

const { width } = Dimensions.get('window');

// Responsive breakpoints
const isTablet = width >= 768;
const isDesktop = width >= 1024;
const isMobile = width < 768;

interface DriverPaymentsScreenProps {
  user?: User;
}

const DriverPaymentsScreen: React.FC<DriverPaymentsScreenProps> = ({ user }) => {
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
      {/* Content */}
      <ScrollView style={driverDashboardStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={driverDashboardStyles.heroProfileCard}>
          <ImageBackground
            source={require('../../../../assets/images/driver-dash-hero-header-background.png')}
            style={driverDashboardStyles.heroBackgroundImage}
            imageStyle={driverDashboardStyles.heroBackgroundImage}
          >
            <LinearGradient
              colors={driverGradientConfigs.hero.colors}
              start={driverGradientConfigs.hero.start}
              end={driverGradientConfigs.hero.end}
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
        </View>
        {/* Stats Section */}
        <View style={driverDashboardStyles.sectionHeader}>
          <Text style={driverDashboardStyles.sectionTitle}>Earnings Overview</Text>
        </View>

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

        {/* Payment Options */}
        <View style={driverDashboardStyles.sectionHeader}>
          <Text style={driverDashboardStyles.sectionTitle}>Payment Options</Text>
        </View>

        <View style={styles.paymentOptionsContainer}>
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
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },

  heroActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: isMobile ? spacing.lg : spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    gap: spacing.xs,
    minWidth: isMobile ? '80%' : 'auto',
    justifyContent: 'center',
  },

  heroActionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: isMobile ? 14 : 16,
  },

  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: isMobile ? 14 : 16,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
    lineHeight: isMobile ? 20 : 24,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: isMobile ? spacing.md : spacing.lg,
  },

  statCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    width: isDesktop ? '22%' : isTablet ? '30%' : '47%',
    marginBottom: spacing.md,
    ...shadows.md,
  },

  paymentOptionsContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
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
    fontSize: isMobile ? 16 : 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  statLabel: {
    fontSize: isMobile ? 11 : 12,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: isMobile ? 14 : 16,
  },

  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: isMobile ? spacing.md : spacing.lg,
    marginVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: isMobile ? 70 : 80,
    ...shadows.md,
  },

  iconContainer: {
    width: isMobile ? 45 : 50,
    height: isMobile ? 45 : 50,
    borderRadius: isMobile ? 22.5 : 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  paymentContent: {
    flex: 1,
  },

  paymentTitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  paymentDescription: {
    fontSize: isMobile ? 12 : 14,
    color: colors.textSecondary,
    lineHeight: isMobile ? 16 : 20,
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
    fontSize: isMobile ? 12 : 14,
    color: colors.textSecondary,
    lineHeight: isMobile ? 18 : 20,
  },

  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: isMobile ? spacing.md : spacing.lg,
    marginVertical: spacing.lg,
    marginHorizontal: spacing.lg,
    ...shadows.md,
  },

  infoTitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: spacing.sm,
  },
});

export default DriverPaymentsScreen;
