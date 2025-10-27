import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
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
  IconButton,
} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Booking } from '../../types/Booking';
import { colors, spacing, borderRadius } from '../../utils/theme';

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
      <ScrollView
        style={styles.scrollView}
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
                <IconButton
                  icon="bell"
                  size={20}
                  onPress={() => {/* Set reminder */}}
                />
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
                <IconButton
                  icon="bell"
                  size={20}
                  onPress={() => {/* Set reminder */}}
                />
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
      <ScrollView style={styles.scrollView}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.profileHeader}>
              <Avatar.Text
                size={80}
                label={`${user.firstName[0]}${user.lastName[0]}`}
                style={{ backgroundColor: colors.primary }}
              />
              <View style={styles.profileInfo}>
                <Title>{user.firstName} {user.lastName}</Title>
                <Paragraph>{user.email}</Paragraph>
                <Paragraph>{user.phone}</Paragraph>
                <Chip mode="outlined" style={styles.roleChip}>
                  Staff Member
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Account Settings</Title>
            <Button
              mode="outlined"
              icon="account-edit"
              onPress={() => {/* Edit profile */}}
              style={styles.settingButton}
            >
              Edit Profile
            </Button>
            <Button
              mode="outlined"
              icon="office-building"
              onPress={() => {/* Work details */}}
              style={styles.settingButton}
            >
              Work Details
            </Button>
            <Button
              mode="outlined"
              icon="bell"
              onPress={() => {/* Notification settings */}}
              style={styles.settingButton}
            >
              Notifications
            </Button>
            <Button
              mode="outlined"
              icon="help-circle"
              onPress={() => {/* Help & support */}}
              style={styles.settingButton}
            >
              Help & Support
            </Button>
            <Button
              mode="contained"
              icon="logout"
              onPress={onLogout}
              style={[styles.settingButton, styles.logoutButton]}
              buttonColor={colors.error}
            >
              Logout
            </Button>
          </Card.Content>
        </Card>
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

          return <IconButton icon={iconName} size={size} iconColor={color} />;
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

const styles = StyleSheet.create({
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