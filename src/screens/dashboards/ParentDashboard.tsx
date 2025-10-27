import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Platform,
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

interface ParentDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Home Screen Component
const HomeScreen: React.FC<{ user: User }> = ({ user }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest bookings from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'cancelled':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Active';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
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
                  Manage your children's transport bookings
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
                icon="plus"
                onPress={() => {/* Navigate to booking */}}
                style={styles.actionButton}
                contentStyle={styles.actionButtonContent}
              >
                New Booking
              </Button>
              <Button
                mode="outlined"
                icon="map-marker"
                onPress={() => {/* Navigate to tracking */}}
                style={styles.actionButton}
                contentStyle={styles.actionButtonContent}
              >
                Track Bus
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Active Bookings */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Title style={styles.cardTitle}>Active Bookings</Title>
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
                  Create your first booking to get started
                </Paragraph>
                <Button
                  mode="contained"
                  icon="plus"
                  onPress={() => {/* Navigate to booking */}}
                  style={styles.emptyButton}
                >
                  Create Booking
                </Button>
              </View>
            ) : (
              bookings.slice(0, 3).map((booking) => (
                <Card key={booking.id} style={styles.bookingCard}>
                  <Card.Content>
                    <View style={styles.bookingHeader}>
                      <Text style={styles.bookingTitle}>
                        {booking.bookingType === 'school' ? '🎒 School Transport' : '💼 Work Transport'}
                      </Text>
                      <Chip
                        mode="outlined"
                        textStyle={{ color: getStatusColor(booking.status) }}
                        style={{ borderColor: getStatusColor(booking.status) }}
                      >
                        {getStatusText(booking.status)}
                      </Chip>
                    </View>
                    <Paragraph style={styles.bookingDetails}>
                      Route ID: {booking.routeId}
                    </Paragraph>
                    <Paragraph style={styles.bookingDetails}>
                      Cost: R{booking.totalCost.toFixed(2)}
                    </Paragraph>
                    <View style={styles.bookingActions}>
                      <Button
                        mode="text"
                        icon="pencil"
                        onPress={() => {/* Edit booking */}}
                        compact
                      >
                        Edit
                      </Button>
                      <Button
                        mode="text"
                        icon="map-marker"
                        onPress={() => {/* Track this booking */}}
                        compact
                      >
                        Track
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
              ))
            )}
          </Card.Content>
        </Card>

        {/* Upcoming Trips */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Today's Trips</Title>
            <View style={styles.tripsList}>
              {/* Mock data - replace with real trips */}
              <View style={styles.tripItem}>
                <View style={styles.tripTime}>
                  <Text style={styles.tripTimeText}>07:30</Text>
                  <Text style={styles.tripTimeLabel}>AM</Text>
                </View>
                <View style={styles.tripDetails}>
                  <Text style={styles.tripTitle}>School Pickup</Text>
                  <Text style={styles.tripRoute}>Route: Central Primary</Text>
                  <Text style={styles.tripStatus}>Driver: John D.</Text>
                </View>
                <IconButton
                  icon="bell"
                  size={20}
                  onPress={() => {/* Set reminder */}}
                />
              </View>
              
              <View style={styles.tripItem}>
                <View style={styles.tripTime}>
                  <Text style={styles.tripTimeText}>15:00</Text>
                  <Text style={styles.tripTimeLabel}>PM</Text>
                </View>
                <View style={styles.tripDetails}>
                  <Text style={styles.tripTitle}>School Drop-off</Text>
                  <Text style={styles.tripRoute}>Route: Central Primary</Text>
                  <Text style={styles.tripStatus}>Driver: John D.</Text>
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
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {/* Navigate to new booking */}}
        label="New Booking"
      />
    </View>
  );
};

// Bookings Screen Component
const BookingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Bookings Management</Text>
        <Paragraph style={styles.placeholderSubtext}>
          View and manage all your transport bookings here
        </Paragraph>
      </ScrollView>
    </View>
  );
};

// Tracking Screen Component
const TrackingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Live Tracking</Text>
        <Paragraph style={styles.placeholderSubtext}>
          Track your children's transport in real-time
        </Paragraph>
      </ScrollView>
    </View>
  );
};

// Profile Screen Component
const ProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
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
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
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

// Main Parent Dashboard Component
const ParentDashboard: React.FC<ParentDashboardProps> = ({ route }) => {
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
              iconName = 'calendar';
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
        {() => <HomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Profile">
        {() => <ProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const { width } = Dimensions.get('window');
const isTablet = width > 768;

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
  bookingCard: {
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.medium,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  bookingDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  bookingActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.sm,
  },
  tripsList: {
    marginTop: spacing.md,
  },
  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tripTime: {
    alignItems: 'center',
    marginRight: spacing.md,
    minWidth: 60,
  },
  tripTimeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  tripTimeLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  tripDetails: {
    flex: 1,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  tripRoute: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  tripStatus: {
    fontSize: 14,
    color: colors.textSecondary,
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

export default ParentDashboard;