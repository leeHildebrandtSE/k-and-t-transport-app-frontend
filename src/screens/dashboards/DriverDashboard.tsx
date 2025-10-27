import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Alert,
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
  Switch,
} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Trip, TripPassenger } from '../../types/Booking';
import { Route } from '../../types/Transport';
import { colors, spacing, borderRadius } from '../../utils/theme';

interface DriverDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Home Screen Component for Driver
const DriverHomeScreen: React.FC<{ user: User }> = ({ user }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest trip data from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const toggleDutyStatus = () => {
    Alert.alert(
      isOnDuty ? 'Go Off Duty' : 'Go On Duty',
      isOnDuty 
        ? 'Are you sure you want to go off duty? This will affect your scheduled trips.'
        : 'Are you ready to start your driving duties?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            setIsOnDuty(!isOnDuty);
            // TODO: Update duty status on server
          } 
        },
      ]
    );
  };

  const startTrip = () => {
    Alert.alert('Start Trip', 'Are you ready to start the scheduled trip?', [
      { text: 'Cancel', style: 'cancel' },
      { 
        text: 'Start Trip', 
        onPress: () => {
          // TODO: Start trip and begin tracking
          console.log('Trip started');
        } 
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Driver Status Card */}
        <Card style={styles.statusCard}>
          <Card.Content>
            <View style={styles.statusHeader}>
              <Avatar.Text
                size={50}
                label={`${user.firstName[0]}${user.lastName[0]}`}
                style={{ backgroundColor: colors.primary }}
              />
              <View style={styles.statusText}>
                <Title style={styles.statusTitle}>
                  {user.firstName} {user.lastName}
                </Title>
                <Paragraph style={styles.statusSubtitle}>
                  Driver ID: DRV-{user.id.slice(-4)}
                </Paragraph>
              </View>
              <View style={styles.dutyToggle}>
                <Text style={styles.dutyLabel}>
                  {isOnDuty ? 'On Duty' : 'Off Duty'}
                </Text>
                <Switch
                  value={isOnDuty}
                  onValueChange={toggleDutyStatus}
                  color={colors.success}
                />
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Current Trip Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Current Trip</Title>
            {currentTrip ? (
              <View>
                <Text style={styles.tripInfo}>Route: {currentTrip.routeId}</Text>
                <Text style={styles.tripInfo}>Date: {new Date(currentTrip.date).toLocaleDateString()}</Text>
                <Text style={styles.tripInfo}>Direction: {currentTrip.direction}</Text>
                <Text style={styles.tripInfo}>Passengers: {currentTrip.passengers.length}</Text>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.success }}
                  style={{ borderColor: colors.success, marginTop: spacing.sm }}
                >
                  {currentTrip.status}
                </Chip>
                <Button
                  mode="contained"
                  icon="play"
                  onPress={startTrip}
                  style={styles.tripButton}
                >
                  Start Trip
                </Button>
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No active trip</Text>
                <Paragraph style={styles.emptySubtext}>
                  Your next scheduled trip will appear here
                </Paragraph>
              </View>
            )}
          </Card.Content>
        </Card>

        {/* Today's Schedule */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Today's Schedule</Title>
            <View style={styles.scheduleList}>
              {/* Mock schedule data */}
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleTimeText}>07:00</Text>
                  <Text style={styles.scheduleTimeLabel}>AM</Text>
                </View>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.scheduleTitle}>School Route - Morning</Text>
                  <Text style={styles.scheduleRoute}>Central Primary School</Text>
                  <Text style={styles.schedulePassengers}>8 passengers</Text>
                </View>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.warning }}
                  style={{ borderColor: colors.warning }}
                >
                  Scheduled
                </Chip>
              </View>
              
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleTimeText}>15:00</Text>
                  <Text style={styles.scheduleTimeLabel}>PM</Text>
                </View>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.scheduleTitle}>School Route - Afternoon</Text>
                  <Text style={styles.scheduleRoute}>Central Primary School</Text>
                  <Text style={styles.schedulePassengers}>8 passengers</Text>
                </View>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.warning }}
                  style={{ borderColor: colors.warning }}
                >
                  Scheduled
                </Chip>
              </View>

              <View style={styles.scheduleItem}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleTimeText}>17:30</Text>
                  <Text style={styles.scheduleTimeLabel}>PM</Text>
                </View>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.scheduleTitle}>Staff Route - Evening</Text>
                  <Text style={styles.scheduleRoute}>Business District</Text>
                  <Text style={styles.schedulePassengers}>12 passengers</Text>
                </View>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.warning }}
                  style={{ borderColor: colors.warning }}
                >
                  Scheduled
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Vehicle Status */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Vehicle Status</Title>
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleDetail}>Vehicle: BUS-001</Text>
              <Text style={styles.vehicleDetail}>License: CA 123-456</Text>
              <Text style={styles.vehicleDetail}>Fuel Level: 85%</Text>
              <Text style={styles.vehicleDetail}>Last Service: 15 Oct 2025</Text>
            </View>
            <View style={styles.vehicleActions}>
              <Button
                mode="outlined"
                icon="car-wrench"
                onPress={() => {/* Report issue */}}
                style={styles.vehicleButton}
              >
                Report Issue
              </Button>
              <Button
                mode="outlined"
                icon="gas-station"
                onPress={() => {/* Log fuel */}}
                style={styles.vehicleButton}
              >
                Log Fuel
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Emergency Button */}
      <FAB
        style={[styles.fab, { backgroundColor: colors.error }]}
        icon="alert"
        onPress={() => {
          Alert.alert('Emergency', 'Emergency services will be contacted immediately.', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Call Emergency', style: 'destructive' },
          ]);
        }}
        label="Emergency"
      />
    </View>
  );
};

// Routes Screen Component for Driver
const DriverRoutesScreen: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>My Routes</Text>
        <Paragraph style={styles.placeholderSubtext}>
          View your assigned routes and schedules
        </Paragraph>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Assigned Routes</Title>
            
            {/* Mock route data */}
            <View style={styles.routeItem}>
              <View style={styles.routeHeader}>
                <Text style={styles.routeTitle}>Central Primary School</Text>
                <Chip mode="outlined" style={{ borderColor: colors.success }}>
                  Active
                </Chip>
              </View>
              <Text style={styles.routeDescription}>
                Morning and afternoon school transport route
              </Text>
              <Text style={styles.routeDetails}>
                Stops: 6 • Capacity: 15 passengers
              </Text>
              <View style={styles.routeActions}>
                <Button
                  mode="text"
                  icon="map"
                  onPress={() => {/* View route map */}}
                  compact
                >
                  View Map
                </Button>
                <Button
                  mode="text"
                  icon="account-group"
                  onPress={() => {/* View passengers */}}
                  compact
                >
                  Passengers
                </Button>
              </View>
            </View>

            <View style={styles.routeItem}>
              <View style={styles.routeHeader}>
                <Text style={styles.routeTitle}>Business District</Text>
                <Chip mode="outlined" style={{ borderColor: colors.success }}>
                  Active
                </Chip>
              </View>
              <Text style={styles.routeDescription}>
                Staff transport route for business district
              </Text>
              <Text style={styles.routeDetails}>
                Stops: 8 • Capacity: 20 passengers
              </Text>
              <View style={styles.routeActions}>
                <Button
                  mode="text"
                  icon="map"
                  onPress={() => {/* View route map */}}
                  compact
                >
                  View Map
                </Button>
                <Button
                  mode="text"
                  icon="account-group"
                  onPress={() => {/* View passengers */}}
                  compact
                >
                  Passengers
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Passengers Screen Component for Driver
const DriverPassengersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Passenger Management</Text>
        <Paragraph style={styles.placeholderSubtext}>
          View and manage passenger information for your routes
        </Paragraph>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Today's Passengers</Title>
            
            {/* Mock passenger data */}
            <View style={styles.passengerList}>
              <View style={styles.passengerItem}>
                <Avatar.Text size={40} label="JS" />
                <View style={styles.passengerInfo}>
                  <Text style={styles.passengerName}>John Smith</Text>
                  <Text style={styles.passengerDetails}>Stop 3 • Pickup: 7:15 AM</Text>
                  <Text style={styles.passengerContact}>+27 123 456 789</Text>
                </View>
                <Chip mode="outlined" textStyle={{ color: colors.success }}>
                  Confirmed
                </Chip>
              </View>

              <View style={styles.passengerItem}>
                <Avatar.Text size={40} label="MJ" />
                <View style={styles.passengerInfo}>
                  <Text style={styles.passengerName}>Mary Johnson</Text>
                  <Text style={styles.passengerDetails}>Stop 5 • Pickup: 7:25 AM</Text>
                  <Text style={styles.passengerContact}>+27 987 654 321</Text>
                </View>
                <Chip mode="outlined" textStyle={{ color: colors.warning }}>
                  Pending
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Profile Screen Component for Driver
const DriverProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
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
                  Driver
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Driver Information</Title>
            <View style={styles.driverInfo}>
              <Text style={styles.infoLabel}>Driver ID: DRV-{user.id.slice(-4)}</Text>
              <Text style={styles.infoLabel}>License Number: 123456789</Text>
              <Text style={styles.infoLabel}>License Expiry: 31 Dec 2025</Text>
              <Text style={styles.infoLabel}>Vehicle: BUS-001</Text>
              <Text style={styles.infoLabel}>Rating: ⭐ 4.8/5.0</Text>
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
              icon="car"
              onPress={() => {/* Vehicle info */}}
              style={styles.settingButton}
            >
              Vehicle Information
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

// Main Driver Dashboard Component
const DriverDashboard: React.FC<DriverDashboardProps> = ({ route }) => {
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
            case 'Routes':
              iconName = 'map-marker-path';
              break;
            case 'Passengers':
              iconName = 'account-group';
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
        {() => <DriverHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Routes" component={DriverRoutesScreen} />
      <Tab.Screen name="Passengers" component={DriverPassengersScreen} />
      <Tab.Screen name="Profile">
        {() => <DriverProfileScreen user={user} onLogout={onLogout} />}
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
  statusCard: {
    margin: spacing.md,
    borderRadius: borderRadius.large,
    backgroundColor: colors.primaryLight,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: spacing.md,
    flex: 1,
  },
  statusTitle: {
    color: colors.background,
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusSubtitle: {
    color: colors.background,
    opacity: 0.9,
  },
  dutyToggle: {
    alignItems: 'center',
  },
  dutyLabel: {
    color: colors.background,
    fontSize: 14,
    marginBottom: spacing.xs,
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
  tripInfo: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  tripButton: {
    marginTop: spacing.lg,
    borderRadius: borderRadius.medium,
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
    marginRight: spacing.md,
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
  schedulePassengers: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  vehicleInfo: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  vehicleDetail: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  vehicleActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  vehicleButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.medium,
  },
  fab: {
    position: 'absolute',
    margin: spacing.md,
    right: 0,
    bottom: 0,
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
    marginBottom: spacing.xl,
  },
  routeItem: {
    marginBottom: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  routeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  routeDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  routeDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  routeActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passengerList: {
    marginTop: spacing.md,
  },
  passengerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  passengerInfo: {
    flex: 1,
    marginLeft: spacing.md,
    marginRight: spacing.md,
  },
  passengerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  passengerDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  passengerContact: {
    fontSize: 14,
    color: colors.textSecondary,
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
  driverInfo: {
    marginTop: spacing.md,
  },
  infoLabel: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  settingButton: {
    marginBottom: spacing.md,
    borderRadius: borderRadius.medium,
  },
  logoutButton: {
    marginTop: spacing.md,
  },
});

export default DriverDashboard;