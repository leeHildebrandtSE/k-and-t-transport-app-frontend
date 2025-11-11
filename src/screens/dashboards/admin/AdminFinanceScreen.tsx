import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { EnhancedCard } from '../../../components/ui';
import { User } from '../../../types/User';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../../styles/screens/dashboards/adminDashboard';
import { AdminHeroBackground } from '../../../../assets';

const { width } = Dimensions.get('window');

// Responsive breakpoints
const isTablet = width >= 768;
const isDesktop = width >= 1024;
const isMobile = width < 768;

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

  // Quick stats data for admin dashboard
  const quickStats = [
    {
      id: 1,
      title: "Today's Revenue",
      value: 'R12,451',
      icon: 'cash-multiple',
      iconColor: colors.success,
    },
    {
      id: 2,
      title: 'Pending Payouts',
      value: 'R8,235',
      icon: 'clock-outline',
      iconColor: colors.warning,
    },
    {
      id: 3,
      title: 'Monthly Commission',
      value: 'R89,675',
      icon: 'percent',
      iconColor: colors.primary,
    },
    {
      id: 4,
      title: 'Active Disputes',
      value: '7',
      icon: 'alert-circle',
      iconColor: colors.error,
    },
  ];

  const styles = adminDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Financial Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/87651/pexels-photo-87651.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Finance Center Header */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={AdminHeroBackground}
            style={styles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={adminGradientConfigs.hero.colors}
              start={adminGradientConfigs.hero.start}
              end={adminGradientConfigs.hero.end}
              style={styles.heroGradientOverlay}
            >
            {/* African Pattern Overlay */}
            {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* Finance Management Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.adminStatusIcon, { backgroundColor: colors.tertiary }]}>
                  <MaterialCommunityIcons
                    name="cash-multiple"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Finance Center Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>Finance Center</Text>
                <Text style={styles.heroRole}>Platform Financial Management & Analytics</Text>

                {/* Finance Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>R12.4K</Text>
                    <Text style={styles.heroStatLabel}>TODAY</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>R89.7K</Text>
                    <Text style={styles.heroStatLabel}>MONTH</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>45</Text>
                    <Text style={styles.heroStatLabel}>PAYOUTS</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>
        {/* Quick Stats Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Financial Overview</Text>
        </View>

        <View style={styles.statsGrid}>
          {quickStats.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: `${stat.iconColor}20` }]}>
                <MaterialCommunityIcons name={stat.icon as any} size={20} color={stat.iconColor} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.title}</Text>
            </View>
          ))}
        </View>

        {/* Financial Management Options */}
        <View style={styles.actionGrid}>
          {financeOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.contentCard}
              onPress={option.onPress}
            >
              <View style={styles.cardHeader}>
                <MaterialCommunityIcons
                  name={option.icon as any}
                  size={24}
                  color={option.color}
                  style={{ marginRight: spacing.md }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{option.title}</Text>
                  <Text style={styles.preferenceDescription}>{option.description}</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Admin Notice */}
        <EnhancedCard style={styles.contentCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="shield-crown"
              size={20}
              color={colors.tertiary}
            />
            <Text style={styles.cardTitle}>Administrator Access</Text>
          </View>
          <Text style={styles.preferenceDescription}>
            You have full access to platform financial data and management tools. All actions are logged for audit purposes.
          </Text>
        </EnhancedCard>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};


