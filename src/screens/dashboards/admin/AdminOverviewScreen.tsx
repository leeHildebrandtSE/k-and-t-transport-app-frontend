import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import {
  Card,
  Button,
  Chip,
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../../styles/screens/dashboards/adminDashboard';
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
      {/* Cape Town Admin Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero Admin Overview Header */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={require('../../../../../assets/images/admin-dash-hero-header-background.png')}
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
            <View style={[styles.africanPatternOverlay, styles.mountainAfricanPattern]}>
              <View style={styles.africanPatternDot1} />
              <View style={styles.africanPatternDot2} />
              <View style={styles.africanPatternDot3} />
              <View style={styles.africanTriangle1} />
              <View style={styles.africanTriangle2} />
              <View style={styles.africanZigzag} />
              <View style={styles.africanLine1} />
              <View style={styles.africanLine2} />
            </View>

            <View style={styles.heroContent}>
              {/* Admin Management Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.adminStatusIcon, { backgroundColor: colors.secondary }]}>
                  <MaterialCommunityIcons
                    name="shield-crown"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Admin Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>Admin Dashboard</Text>
                <Text style={styles.heroRole}>System Management & Analytics</Text>

                {/* Admin Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{stats.totalUsers}</Text>
                    <Text style={styles.heroStatLabel}>USERS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{stats.totalDrivers}</Text>
                    <Text style={styles.heroStatLabel}>DRIVERS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{stats.activeBookings}</Text>
                    <Text style={styles.heroStatLabel}>ACTIVE</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>
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
            <Text variant="titleLarge" style={styles.cardTitle}>Quick Actions</Text>
            <View style={styles.quickActions}>
              <Button
                mode="contained"
                icon={() => <MaterialCommunityIcons name="account-plus" size={20} color="white" />}
                onPress={() => {/* Add new user */}}
                style={styles.actionButton}
              >
                Add User
              </Button>
              <Button
                mode="outlined"
                icon={() => <MaterialCommunityIcons name="car" size={20} color={colors.primary} />}
                onPress={() => {/* Add new driver */}}
                style={styles.actionButton}
              >
                Add Driver
              </Button>
            </View>
            <View style={styles.quickActions}>
              <Button
                mode="outlined"
                icon={() => <MaterialCommunityIcons name="map-marker-plus" size={20} color={colors.primary} />}
                onPress={() => {/* Create new route */}}
                style={styles.actionButton}
              >
                New Route
              </Button>
              <Button
                mode="outlined"
                icon={() => <MaterialCommunityIcons name="file-document" size={20} color={colors.primary} />}
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
                  icon={() => <MaterialCommunityIcons name="car-multiple" size={20} color="white" />}
                  onPress={() => {/* Navigate to lift club management */}}
                  style={[styles.actionButton, styles.liftClubButton]}
                  buttonColor={colors.warning}
                >
                  Manage Requests
                </Button>
                <Button
                  mode="outlined"
                  icon={() => <MaterialCommunityIcons name="chart-line" size={20} color={colors.warning} />}
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
            <Text variant="titleLarge" style={styles.cardTitle}>Recent Activities</Text>
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
            <Text variant="titleLarge" style={styles.cardTitle}>System Status</Text>
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
