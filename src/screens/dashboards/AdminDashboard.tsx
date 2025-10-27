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
  DataTable,
  Searchbar,
} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Booking } from '../../types/Booking';
import { Route, Driver } from '../../types/Transport';
import { colors, spacing, borderRadius } from '../../utils/theme';

interface AdminDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Overview Screen Component for Admin
const AdminOverviewScreen: React.FC<{ user: User }> = ({ user }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeBookings: 0,
    totalDrivers: 0,
    revenue: 0,
  });

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest statistics from API
    setStats({
      totalUsers: 247,
      activeBookings: 156,
      totalDrivers: 12,
      revenue: 45670,
    });
    setTimeout(() => setRefreshing(false), 2000);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Welcome Header */}
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
                  Admin Dashboard
                </Title>
                <Paragraph style={styles.welcomeSubtitle}>
                  Welcome back, {user.firstName}!
                </Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <IconButton 
                icon="account-group" 
                size={30} 
                iconColor={colors.primary}
              />
              <View>
                <Text style={styles.statNumber}>{stats.totalUsers}</Text>
                <Text style={styles.statLabel}>Total Users</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <IconButton 
                icon="calendar-check" 
                size={30} 
                iconColor={colors.secondary}
              />
              <View>
                <Text style={styles.statNumber}>{stats.activeBookings}</Text>
                <Text style={styles.statLabel}>Active Bookings</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <IconButton 
                icon="car" 
                size={30} 
                iconColor={colors.success}
              />
              <View>
                <Text style={styles.statNumber}>{stats.totalDrivers}</Text>
                <Text style={styles.statLabel}>Active Drivers</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <IconButton 
                icon="currency-usd" 
                size={30} 
                iconColor={colors.warning}
              />
              <View>
                <Text style={styles.statNumber}>R{stats.revenue.toLocaleString()}</Text>
                <Text style={styles.statLabel}>Monthly Revenue</Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Quick Actions */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Quick Actions</Title>
            <View style={styles.quickActions}>
              <Button
                mode="contained"
                icon="account-plus"
                onPress={() => {/* Add new user */}}
                style={styles.actionButton}
              >
                Add User
              </Button>
              <Button
                mode="outlined"
                icon="car-plus"
                onPress={() => {/* Add new driver */}}
                style={styles.actionButton}
              >
                Add Driver
              </Button>
            </View>
            <View style={styles.quickActions}>
              <Button
                mode="outlined"
                icon="map-marker-plus"
                onPress={() => {/* Create new route */}}
                style={styles.actionButton}
              >
                New Route
              </Button>
              <Button
                mode="outlined"
                icon="file-document"
                onPress={() => {/* Generate report */}}
                style={styles.actionButton}
              >
                Reports
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Recent Activities */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Recent Activities</Title>
            <View style={styles.activityList}>
              <View style={styles.activityItem}>
                <IconButton icon="account-plus" size={20} />
                <View style={styles.activityDetails}>
                  <Text style={styles.activityText}>New user registered: John Smith</Text>
                  <Text style={styles.activityTime}>2 hours ago</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <IconButton icon="calendar-plus" size={20} />
                <View style={styles.activityDetails}>
                  <Text style={styles.activityText}>New booking created by Mary Johnson</Text>
                  <Text style={styles.activityTime}>4 hours ago</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <IconButton icon="car-wrench" size={20} />
                <View style={styles.activityDetails}>
                  <Text style={styles.activityText}>Vehicle maintenance completed: BUS-001</Text>
                  <Text style={styles.activityTime}>1 day ago</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* System Status */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>System Status</Title>
            <View style={styles.statusList}>
              <View style={styles.statusItem}>
                <Text style={styles.statusLabel}>API Server</Text>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.success }}
                  style={{ borderColor: colors.success }}
                >
                  Online
                </Chip>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusLabel}>Payment Gateway</Text>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.success }}
                  style={{ borderColor: colors.success }}
                >
                  Active
                </Chip>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.statusLabel}>GPS Tracking</Text>
                <Chip
                  mode="outlined"
                  textStyle={{ color: colors.success }}
                  style={{ borderColor: colors.success }}
                >
                  Active
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Users Management Screen
const AdminUsersScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search users..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>User Management</Title>
            
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Role</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Actions</DataTable.Title>
              </DataTable.Header>

              {/* Mock user data */}
              <DataTable.Row>
                <DataTable.Cell>John Smith</DataTable.Cell>
                <DataTable.Cell>Parent</DataTable.Cell>
                <DataTable.Cell>
                  <Chip mode="outlined" textStyle={{ color: colors.success }}>
                    Active
                  </Chip>
                </DataTable.Cell>
                <DataTable.Cell>
                  <IconButton
                    icon="pencil"
                    size={16}
                    onPress={() => {/* Edit user */}}
                  />
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Mary Johnson</DataTable.Cell>
                <DataTable.Cell>Staff</DataTable.Cell>
                <DataTable.Cell>
                  <Chip mode="outlined" textStyle={{ color: colors.success }}>
                    Active
                  </Chip>
                </DataTable.Cell>
                <DataTable.Cell>
                  <IconButton
                    icon="pencil"
                    size={16}
                    onPress={() => {/* Edit user */}}
                  />
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Bob Wilson</DataTable.Cell>
                <DataTable.Cell>Driver</DataTable.Cell>
                <DataTable.Cell>
                  <Chip mode="outlined" textStyle={{ color: colors.warning }}>
                    Suspended
                  </Chip>
                </DataTable.Cell>
                <DataTable.Cell>
                  <IconButton
                    icon="pencil"
                    size={16}
                    onPress={() => {/* Edit user */}}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="account-plus"
        onPress={() => {/* Add new user */}}
        label="Add User"
      />
    </View>
  );
};

// Bookings Management Screen
const AdminBookingsScreen: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.placeholderText}>Bookings Management</Text>
        <Paragraph style={styles.placeholderSubtext}>
          Manage all user bookings and payments
        </Paragraph>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Recent Bookings</Title>
            
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>User</DataTable.Title>
                <DataTable.Title>Route</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Amount</DataTable.Title>
              </DataTable.Header>

              {/* Mock booking data */}
              <DataTable.Row>
                <DataTable.Cell>John Smith</DataTable.Cell>
                <DataTable.Cell>School Route</DataTable.Cell>
                <DataTable.Cell>
                  <Chip mode="outlined" textStyle={{ color: colors.success }}>
                    Confirmed
                  </Chip>
                </DataTable.Cell>
                <DataTable.Cell>R850</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Mary Johnson</DataTable.Cell>
                <DataTable.Cell>Business District</DataTable.Cell>
                <DataTable.Cell>
                  <Chip mode="outlined" textStyle={{ color: colors.warning }}>
                    Pending
                  </Chip>
                </DataTable.Cell>
                <DataTable.Cell>R950</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

// Profile Screen Component for Admin
const AdminProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
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
                  Administrator
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>System Settings</Title>
            <Button
              mode="outlined"
              icon="cog"
              onPress={() => {/* System settings */}}
              style={styles.settingButton}
            >
              System Configuration
            </Button>
            <Button
              mode="outlined"
              icon="account-group"
              onPress={() => {/* User management */}}
              style={styles.settingButton}
            >
              User Management
            </Button>
            <Button
              mode="outlined"
              icon="file-document"
              onPress={() => {/* Reports */}}
              style={styles.settingButton}
            >
              Generate Reports
            </Button>
            <Button
              mode="outlined"
              icon="database"
              onPress={() => {/* Database backup */}}
              style={styles.settingButton}
            >
              Database Backup
            </Button>
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

// Main Admin Dashboard Component
const AdminDashboard: React.FC<AdminDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Overview':
              iconName = 'view-dashboard';
              break;
            case 'Users':
              iconName = 'account-group';
              break;
            case 'Bookings':
              iconName = 'calendar-multiple';
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
      <Tab.Screen name="Overview">
        {() => <AdminOverviewScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Users" component={AdminUsersScreen} />
      <Tab.Screen name="Bookings" component={AdminBookingsScreen} />
      <Tab.Screen name="Profile">
        {() => <AdminProfileScreen user={user} onLogout={onLogout} />}
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
  },
  statCard: {
    width: isTablet ? '23%' : '48%',
    marginBottom: spacing.md,
    borderRadius: borderRadius.medium,
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.medium,
  },
  activityList: {
    marginTop: spacing.md,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  activityDetails: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  activityText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  activityTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  statusList: {
    marginTop: spacing.md,
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statusLabel: {
    fontSize: 16,
    color: colors.text,
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  searchBar: {
    backgroundColor: colors.surface,
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
  fab: {
    position: 'absolute',
    margin: spacing.md,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondary,
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

export default AdminDashboard;