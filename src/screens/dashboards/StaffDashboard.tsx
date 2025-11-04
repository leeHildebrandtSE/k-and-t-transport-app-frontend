import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  FAB,
  Chip,
  Text,
  Avatar,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Booking } from '../../types/Booking';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { staffDashboardStyles } from '../../styles/screens/dashboards/staffDashboard';
import DashboardHeader from '../../components/ui/DashboardHeader';

interface StaffDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Home Screen Component for Staff
const StaffHomeScreen: React.FC<{ user: User }> = ({ user }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest bookings from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
      {/* Floating Graphics Background */}
      <View style={styles.floatingGraphicsContainer}>
        <Animated.View style={[styles.floatingCircle1, { backgroundColor: `${colors.primary}15` }]} />
        <Animated.View style={[styles.floatingCircle2, { backgroundColor: `${colors.secondary}10` }]} />
        <Animated.View style={[styles.floatingTriangle, { backgroundColor: `${colors.success}08` }]} />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Welcome Section */}
        <Card style={styles.welcomeCard}>
          <Card.Content>
            <View style={styles.welcomeHeader}>
              <Avatar.Text
                size={50}
                label={`${user.firstName[0]}${user.lastName[0]}`}
                style={{ backgroundColor: colors.primary }}
              />
              <View style={styles.welcomeText}>
                <Title style={styles.welcomeTitle}>
                  Welcome, {user.firstName}!
                </Title>
                <Paragraph style={styles.welcomeSubtitle}>
                  Manage your work transport bookings
                </Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Quick Actions</Title>
            <View style={styles.quickActions}>
              <Button
                mode="contained"
                icon="briefcase-plus"
                onPress={() => {/* Navigate to work transport booking */}}
                style={styles.actionButton}
                contentStyle={styles.actionButtonContent}
              >
                Book Transport
              </Button>
              <Button
                mode="outlined"
                icon="map-marker"
                onPress={() => {/* Navigate to tracking */}}
                style={styles.actionButton}
                contentStyle={styles.actionButtonContent}
              >
                Track Vehicle
              </Button>
            </View>

            {/* Staff Lift Club Actions */}
            <View style={styles.liftClubSection}>
              <Text style={styles.sectionLabel}>Staff Lift Clubs</Text>
              <View style={styles.quickActions}>
                <Button
                  mode="contained"
                  icon="car-multiple"
                  onPress={() => {/* Navigate to staff lift club browse */}}
                  style={[styles.actionButton, styles.liftClubButton]}
                  contentStyle={styles.actionButtonContent}
                  buttonColor={colors.info}
                >
                  Browse Staff Clubs
                </Button>
                <Button
                  mode="outlined"
                  icon="plus-circle"
                  onPress={() => {/* Navigate to create staff request */}}
                  style={styles.actionButton}
                  contentStyle={styles.actionButtonContent}
                  textColor={colors.info}
                >
                  Request New Club
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Work Schedule */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Today's Schedule</Title>
            <View style={styles.scheduleList}>
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleTimeText}>07:00</Text>
                  <Text style={styles.scheduleTimeLabel}>AM</Text>
                </View>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.scheduleTitle}>Work Pickup</Text>
                  <Text style={styles.scheduleRoute}>Route: Business District</Text>
                  <Text style={styles.scheduleLocation}>From: Residential Area</Text>
                  <Text style={styles.scheduleStatus}>Status: Confirmed</Text>
                </View>
                <TouchableOpacity
                  style={[styles.reminderButton, { backgroundColor: colors.primary }]}
                  onPress={() => {/* Set reminder */}}
                >
                  <MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.scheduleItem}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleTimeText}>17:30</Text>
                  <Text style={styles.scheduleTimeLabel}>PM</Text>
                </View>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.scheduleTitle}>Work Drop-off</Text>
                  <Text style={styles.scheduleRoute}>Route: Business District</Text>
                  <Text style={styles.scheduleLocation}>To: Residential Area</Text>
                  <Text style={styles.scheduleStatus}>Status: Confirmed</Text>
                </View>
                <TouchableOpacity
                  style={[styles.reminderButton, { backgroundColor: colors.primary }]}
                  onPress={() => {/* Set reminder */}}
                >
                  <MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Active Transport Bookings */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Title style={styles.cardTitle}>Active Transport Bookings</Title>
              <Button
                mode="text"
                onPress={() => {/* Navigate to all bookings */}}
                compact
              >
                View All
              </Button>
            </View>

            {bookings.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No active bookings</Text>
                <Paragraph style={styles.emptySubtext}>
                  Book your work transport to get started
                </Paragraph>
                <Button
                  mode="contained"
                  icon="briefcase-plus"
                  onPress={() => {/* Navigate to booking */}}
                  style={styles.emptyButton}
                >
                  Book Transport
                </Button>
              </View>
            ) : (
              <Text style={styles.placeholderText}>Your bookings will appear here</Text>
            )}
          </Card.Content>
        </Card>

        {/* Payment Status */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Payment Status</Title>
            <View style={styles.paymentStatus}>
              <View style={styles.paymentItem}>
                <Text style={styles.paymentLabel}>Current Month</Text>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.success }}
                  style={{ borderColor: colors.success }}
                >
                  Paid
                </Chip>
              </View>
              <View style={styles.paymentItem}>
                <Text style={styles.paymentLabel}>Next Payment Due</Text>
                <Text style={styles.paymentValue}>R850.00 on 1 Nov 2025</Text>
              </View>
            </View>
            <Button
              mode="outlined"
              icon="credit-card"
              onPress={() => {/* Navigate to payment */}}
              style={styles.paymentButton}
            >
              Make Payment
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="briefcase-plus"
        onPress={() => {/* Navigate to new booking */}}
        label="Book Transport"
      />
    </View>
  );
};

// Bookings Screen Component for Staff
const StaffBookingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Work Transport Bookings</Text>
        <Paragraph style={styles.placeholderSubtext}>
          Manage your work transport schedules and bookings
        </Paragraph>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Booking Options</Title>
            <View style={styles.bookingOptions}>
              <Button
                mode="contained"
                icon="calendar-plus"
                onPress={() => {/* Weekly booking */}}
                style={styles.optionButton}
              >
                Weekly Booking
              </Button>
              <Button
                mode="outlined"
                icon="calendar-month"
                onPress={() => {/* Monthly booking */}}
                style={styles.optionButton}
              >
                Monthly Booking
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Tracking Screen Component for Staff
const StaffTrackingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Live Vehicle Tracking</Text>
        <Paragraph style={styles.placeholderSubtext}>
          Track your work transport vehicle in real-time
        </Paragraph>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Current Trip</Title>
            <View style={styles.trackingInfo}>
              <Text style={styles.trackingLabel}>Vehicle: BUS-001</Text>
              <Text style={styles.trackingLabel}>Driver: John Smith</Text>
              <Text style={styles.trackingLabel}>ETA: 7:15 AM</Text>
            </View>
            <Button
              mode="contained"
              icon="map"
              onPress={() => {/* Open map */}}
              style={styles.trackingButton}
            >
              View on Map
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Profile Screen Component (shared with Parent)
const StaffProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Premium Profile Hero Card */}
        <View style={styles.profileHeroCard}>
          <View style={styles.profileHeroBackground}>
            <View style={styles.profileHeroGradient} />
          </View>

          <View style={styles.profileHeroContent}>
            <Avatar.Text
              size={100}
              label={`${user.firstName[0]}${user.lastName[0]}`}
              style={styles.profileAvatar}
            />

            <Text style={styles.profileName}>
              {user.firstName} {user.lastName}
            </Text>

            <View style={styles.profileContactInfo}>
              <Text style={styles.profileEmail}>{user.email}</Text>
              <Text style={styles.profilePhone}>{user.phone}</Text>
            </View>

            <Chip
              mode="flat"
              style={styles.profileRoleChip}
              textStyle={{ color: colors.primary, fontWeight: '600' }}
            >
              Staff Member
            </Chip>
          </View>
        </View>

        {/* Premium Settings Card */}
        <View style={styles.profileSettingsCard}>
          <View style={styles.profileSettingsHeader}>
            <Text style={styles.profileSettingsTitle}>Account Settings</Text>
          </View>

          <View style={styles.profileSettingsContent}>
            <TouchableOpacity
              style={styles.profileSettingButton}
              onPress={() => {/* Edit profile */}}
            >
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Edit Profile</Text>
                  <Text style={styles.profileSettingSubtitle}>Update your personal information</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileSettingButton}
              onPress={() => {/* Work details */}}
            >
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="office-building"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Work Details</Text>
                  <Text style={styles.profileSettingSubtitle}>Manage your work information</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileSettingButton}
              onPress={() => {/* Notifications */}}
            >
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Notifications</Text>
                  <Text style={styles.profileSettingSubtitle}>Configure your notification preferences</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileSettingButton}
              onPress={() => {/* Help & Support */}}
            >
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="help-circle"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Help & Support</Text>
                  <Text style={styles.profileSettingSubtitle}>Get help or contact support</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileLogoutButton}
              onPress={onLogout}
            >
              <View style={styles.profileLogoutButtonContent}>
                <View style={styles.profileLogoutIcon}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={20}
                    color={colors.error}
                  />
                </View>
                <Text style={styles.profileLogoutText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Main Staff Dashboard Component
const StaffDashboard: React.FC<StaffDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'briefcase';
              break;
            case 'Tracking':
              iconName = 'map-marker';
              break;
            case 'Profile':
              iconName = 'account';
              break;
            default:
              iconName = 'circle';
          }

          return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home">
        {() => <StaffHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings" component={StaffBookingsScreen} />
      <Tab.Screen name="Tracking" component={StaffTrackingScreen} />
      <Tab.Screen name="Profile">
        {() => <StaffProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

// Using external styles for enhanced design and maintainability
const styles = staffDashboardStyles;

const legacyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  welcomeCard: {
    margin: spacing.md,
    borderRadius: borderRadius.large,
    backgroundColor: colors.primaryLight,
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    marginLeft: spacing.md,
    flex: 1,
  },
  welcomeTitle: {
    color: colors.background,
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    color: colors.background,
    opacity: 0.9,
  },
  card: {
    margin: spacing.md,
    marginTop: spacing.xs,
    borderRadius: borderRadius.large,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.md,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.medium,
  },
  actionButtonContent: {
    paddingVertical: spacing.sm,
  },
  scheduleList: {
    marginTop: spacing.md,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  scheduleTime: {
    alignItems: 'center',
    marginRight: spacing.md,
    minWidth: 60,
  },
  scheduleTimeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scheduleTimeLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  scheduleDetails: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  scheduleRoute: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  scheduleLocation: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  scheduleStatus: {
    fontSize: 14,
    color: colors.success,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  emptySubtext: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  emptyButton: {
    borderRadius: borderRadius.medium,
  },
  paymentStatus: {
    marginTop: spacing.md,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  paymentLabel: {
    fontSize: 16,
    color: colors.text,
  },
  paymentValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  paymentButton: {
    marginTop: spacing.md,
    borderRadius: borderRadius.medium,
  },
  fab: {
    position: 'absolute',
    margin: spacing.md,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondary,
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
  placeholderSubtext: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginHorizontal: spacing.lg,
  },
  bookingOptions: {
    marginTop: spacing.md,
  },
  optionButton: {
    marginBottom: spacing.md,
    borderRadius: borderRadius.medium,
  },
  trackingInfo: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  trackingLabel: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  trackingButton: {
    borderRadius: borderRadius.medium,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  profileInfo: {
    marginLeft: spacing.lg,
    flex: 1,
  },
  roleChip: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
  },
  settingButton: {
    marginBottom: spacing.md,
    borderRadius: borderRadius.medium,
  },
  logoutButton: {
    marginTop: spacing.md,
  },
});

export default StaffDashboard;
