import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Alert,
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
  DataTable,
  Searchbar,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Booking } from '../../types/Booking';
import { Route, Driver } from '../../types/Transport';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { adminDashboardStyles } from '../../styles/screens/dashboards/adminDashboard';
import DashboardHeader from '../../components/ui/DashboardHeader';

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
      {/* Modern Dashboard Header */}
      <DashboardHeader
        user={user}
        title="Admin Dashboard"
        subtitle="System Management & Analytics"
        notificationCount={5}
        onNotificationPress={() => {/* Navigate to notifications */}}
        onProfilePress={() => {/* Navigate to profile */}}
        showGradient={true}
      />

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <View style={[styles.statIcon, { backgroundColor: `${colors.primary}15` }]}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={24}
                  color={colors.primary}
                />
              </View>
              <View>
                <Text style={styles.statNumber}>{stats.totalUsers}</Text>
                <Text style={styles.statLabel}>Total Users</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <View style={[styles.statIcon, { backgroundColor: `${colors.secondary}15` }]}>
                <MaterialCommunityIcons
                  name="calendar-check"
                  size={24}
                  color={colors.secondary}
                />
              </View>
              <View>
                <Text style={styles.statNumber}>{stats.activeBookings}</Text>
                <Text style={styles.statLabel}>Active Bookings</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <View style={[styles.statIcon, { backgroundColor: `${colors.success}15` }]}>
                <MaterialCommunityIcons
                  name="car"
                  size={24}
                  color={colors.success}
                />
              </View>
              <View>
                <Text style={styles.statNumber}>{stats.totalDrivers}</Text>
                <Text style={styles.statLabel}>Active Drivers</Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <View style={[styles.statIcon, { backgroundColor: `${colors.warning}15` }]}>
                <MaterialCommunityIcons
                  name="currency-usd"
                  size={24}
                  color={colors.warning}
                />
              </View>
              <View>
                <Text style={styles.statNumber}>R{stats.revenue.toLocaleString()}</Text>
                <Text style={styles.statLabel}>Total Revenue</Text>
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

            {/* Lift Club Management */}
            <View style={styles.liftClubSection}>
              <Text style={styles.sectionLabel}>Lift Club Management</Text>
              <View style={styles.quickActions}>
                <Button
                  mode="contained"
                  icon="car-multiple"
                  onPress={() => {/* Navigate to lift club management */}}
                  style={[styles.actionButton, styles.liftClubButton]}
                  buttonColor={colors.warning}
                >
                  Manage Requests
                </Button>
                <Button
                  mode="outlined"
                  icon="chart-line"
                  onPress={() => {/* View lift club analytics */}}
                  style={styles.actionButton}
                  textColor={colors.warning}
                >
                  Analytics
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Recent Activities */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Recent Activities</Title>
            <View style={styles.activityList}>
              <View style={styles.activityItem}>
                <View style={[styles.activityIcon, { backgroundColor: `${colors.primary}15` }]}>
                  <MaterialCommunityIcons
                    name="account-plus"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.activityDetails}>
                  <Text style={styles.activityText}>New user registered: John Smith</Text>
                  <Text style={styles.activityTime}>2 hours ago</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <View style={[styles.activityIcon, { backgroundColor: `${colors.secondary}15` }]}>
                  <MaterialCommunityIcons
                    name="calendar-plus"
                    size={20}
                    color={colors.secondary}
                  />
                </View>
                <View style={styles.activityDetails}>
                  <Text style={styles.activityText}>New booking created by Mary Johnson</Text>
                  <Text style={styles.activityTime}>4 hours ago</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <View style={[styles.activityIcon, { backgroundColor: `${colors.success}15` }]}>
                  <MaterialCommunityIcons
                    name="car-wrench"
                    size={20}
                    color={colors.success}
                  />
                </View>
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
                  <TouchableOpacity
                    style={[adminDashboardStyles.editButton, { backgroundColor: colors.primary }]}
                    onPress={() => {/* Edit user */}}
                  >
                    <MaterialCommunityIcons
                      name="pencil"
                      size={16}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={[adminDashboardStyles.editButton, { backgroundColor: colors.primary }]}
                    onPress={() => {/* Edit user */}}
                  >
                    <MaterialCommunityIcons
                      name="pencil"
                      size={16}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={[adminDashboardStyles.editButton, { backgroundColor: colors.primary }]}
                    onPress={() => {/* Edit user */}}
                  >
                    <MaterialCommunityIcons
                      name="pencil"
                      size={16}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
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

          return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
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

// Using external styles for enhanced design and maintainability
const styles = adminDashboardStyles;

export default AdminDashboard;
