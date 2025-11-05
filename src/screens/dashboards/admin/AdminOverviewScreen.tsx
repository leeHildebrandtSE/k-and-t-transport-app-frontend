import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Title,
  Button,
  Chip,
  Text,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { adminDashboardStyles } from '../../../styles/screens/dashboards/adminDashboard';
import DashboardHeader from '../../../components/ui/DashboardHeader';
import { AdminScreenProps, AdminStats } from '../../../types/Dashboard';

const AdminOverviewScreen: React.FC<AdminScreenProps> = ({ user }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState<AdminStats>({
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

  const styles = adminDashboardStyles;

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

export default AdminOverviewScreen;
