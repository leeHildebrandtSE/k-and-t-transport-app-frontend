import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows, typography } from '../styles/theme';
import DashboardHeader from '../components/ui/DashboardHeader';
import { User } from '../types/User';

interface DemoScreenProps {
  navigation: any;
}

export const DemoScreen: React.FC<DemoScreenProps> = ({ navigation }) => {
  // Mock user data
  const mockUser: User = {
    id: 'demo-user-001',
    email: 'demo@example.com',
    firstName: 'Demo',
    lastName: 'User',
    role: 'commuter',
  };

  const demoScreens = [
    {
      id: 'payment',
      title: 'Payment Screen',
      description: 'Payment processing with method selection and confirmation',
      icon: 'credit-card',
      color: colors.primary,
      route: 'Payment',
      params: {
        user: mockUser,
        amount: 25.50,
        description: 'Downtown to CBD - Morning commute',
        bookingId: 'BOOK-12345',
      },
    },
    {
      id: 'billing-history',
      title: 'Billing History',
      description: 'Transaction history with filtering and summary',
      icon: 'receipt',
      color: colors.secondary,
      route: 'BillingHistory',
    },
    {
      id: 'payment-methods',
      title: 'Payment Methods',
      description: 'Manage payment methods and security settings',
      icon: 'wallet',
      color: colors.tertiary,
      route: 'PaymentMethods',
    },
    {
      id: 'refund-request',
      title: 'Refund Request',
      description: 'Request refunds with reason selection and policy info',
      icon: 'cash-refund',
      color: colors.warning,
      route: 'RefundRequest',
    },
    {
      id: 'booking-details',
      title: 'Booking Details',
      description: 'Detailed booking view with status and actions',
      icon: 'book-open-variant',
      color: colors.info,
      route: 'BookingDetails',
      params: {
        bookingId: 'BOOK-12345',
      },
    },
  ];

  const handleScreenNavigation = (screen: any) => {
    if (screen.params) {
      navigation.navigate(screen.route, screen.params);
    } else {
      navigation.navigate(screen.route);
    }
  };

  const renderDemoCard = (screen: any) => (
    <TouchableOpacity
      key={screen.id}
      style={styles.demoCard}
      onPress={() => handleScreenNavigation(screen)}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: `${screen.color}20` }]}>
          <MaterialCommunityIcons
            name={screen.icon as any}
            size={24}
            color={screen.color}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{screen.title}</Text>
          <Text style={styles.cardDescription}>{screen.description}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={colors.textSecondary}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <DashboardHeader title="Screen Demo" user={mockUser} />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Payment Flow Demo</Text>
          <Text style={styles.subtitle}>
            Explore the new payment-related screens and their functionality
          </Text>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Available Screens</Text>
          {demoScreens.map(renderDemoCard)}
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <MaterialCommunityIcons
                name="information"
                size={20}
                color={colors.info}
              />
              <Text style={styles.infoTitle}>Demo Features</Text>
            </View>
            <Text style={styles.infoText}>
              • All screens use mock data for demonstration{'\n'}
              • Interactive forms and navigation flow{'\n'}
              • Responsive design with proper styling{'\n'}
              • Error handling and validation{'\n'}
              • Loading states and user feedback
            </Text>
          </View>
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

  scrollContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },

  title: {
    ...typography.headlineLarge,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  subtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  demoSection: {
    marginVertical: spacing.lg,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.md,
  },

  demoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  cardDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  infoSection: {
    marginVertical: spacing.lg,
    paddingBottom: spacing.xl,
  },

  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.sm,
  },

  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
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
