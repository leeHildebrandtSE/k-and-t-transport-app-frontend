import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Alert,
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
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User } from '../../types/User';
import { Trip, TripPassenger } from '../../types/Booking';
import { Route } from '../../types/Transport';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { driverDashboardStyles } from '../../styles/screens/dashboards/driverDashboard';
import DashboardHeader from '../../components/ui/DashboardHeader';

interface DriverDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Premium Home Screen Component for Driver
const DriverHomeScreen: React.FC<{ user: User }> = ({ user }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [todaysStats, setTodaysStats] = useState({
    tripsCompleted: 4,
    passengersServed: 28,
    hoursOnDuty: 6.5,
    earnings: 450,
  });

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
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
          console.log('Trip started');
        }
      },
    ]);
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Cape Town Inspired Background Graphics */}
      <View style={driverDashboardStyles.premiumBackgroundContainer}>
        {/* Atlantic Ocean waves */}
        <Animated.View style={[driverDashboardStyles.backgroundBlob1, { backgroundColor: `${colors.primary}08` }]} />
        {/* Table Mountain silhouette */}
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.tertiary}06` }]} />
        {/* Cape Town sunshine */}
        <Animated.View style={[driverDashboardStyles.backgroundBlob3, { backgroundColor: `${colors.secondary}04` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.primary}
          colors={[colors.primary, colors.tertiary, colors.secondary]}
        />}
        showsVerticalScrollIndicator={false}
      >
        {/* Cape Town Welcome Header */}
        <View style={driverDashboardStyles.homeHeader}>
          <Text style={driverDashboardStyles.welcomeText}>
            Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'} from the Mother City
          </Text>
          <Text style={driverDashboardStyles.driverNameHome}>{user.firstName} {user.lastName}</Text>
        </View>

        {/* Duty Status Card */}
        <View style={driverDashboardStyles.dutyStatusCard}>
          <View style={driverDashboardStyles.dutyStatusContent}>
            <View style={driverDashboardStyles.dutyStatusInfo}>
              <Text style={driverDashboardStyles.dutyStatusLabel}>Driver Status</Text>
              <Text style={[driverDashboardStyles.dutyStatusText, { color: isOnDuty ? colors.success : colors.textSecondary }]}>
                {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
              </Text>
            </View>
            <TouchableOpacity
              style={[driverDashboardStyles.dutyToggleButton, { backgroundColor: isOnDuty ? colors.success : colors.textSecondary }]}
              onPress={toggleDutyStatus}
            >
              <MaterialCommunityIcons
                name={isOnDuty ? "check-circle" : "pause-circle"}
                size={32}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Cape Town Themed Stats */}
        <View style={driverDashboardStyles.statsGrid}>
          {/* Ocean Routes */}
          <View style={[driverDashboardStyles.statCard, driverDashboardStyles.statCardOcean]}>
            <MaterialCommunityIcons name="waves" size={36} color={colors.primary} />
            <Text style={[driverDashboardStyles.statValue, { color: colors.primary }]}>{todaysStats.tripsCompleted}</Text>
            <Text style={driverDashboardStyles.statLabel}>Ocean Routes</Text>
          </View>
          {/* Mountain Passengers */}
          <View style={[driverDashboardStyles.statCard, driverDashboardStyles.statCardMountain]}>
            <MaterialCommunityIcons name="account-group" size={36} color={colors.tertiary} />
            <Text style={[driverDashboardStyles.statValue, { color: colors.tertiary }]}>{todaysStats.passengersServed}</Text>
            <Text style={driverDashboardStyles.statLabel}>Passengers</Text>
          </View>
          {/* Sunshine Hours */}
          <View style={[driverDashboardStyles.statCard, driverDashboardStyles.statCardSunshine]}>
            <MaterialCommunityIcons name="white-balance-sunny" size={36} color={colors.secondary} />
            <Text style={[driverDashboardStyles.statValue, { color: colors.secondary }]}>{todaysStats.hoursOnDuty}h</Text>
            <Text style={driverDashboardStyles.statLabel}>Sunny Hours</Text>
          </View>
          {/* Beach Earnings */}
          <View style={[driverDashboardStyles.statCard, driverDashboardStyles.statCardBeach]}>
            <MaterialCommunityIcons name="beach" size={36} color={colors.info} />
            <Text style={[driverDashboardStyles.statValue, { color: colors.info }]}>R{todaysStats.earnings}</Text>
            <Text style={driverDashboardStyles.statLabel}>Earnings</Text>
          </View>
        </View>

        {/* Cape Town Current Trip Section */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content style={{ padding: 0 }}>
            <View style={driverDashboardStyles.cardHeader}>
              <View style={[driverDashboardStyles.cardIconContainer, { backgroundColor: colors.primary }]}>
                <MaterialCommunityIcons name="ship-wheel" size={28} color={colors.textInverse} />
              </View>
              <Text style={driverDashboardStyles.premiumCardTitle}>Atlantic Route</Text>
            </View>

            <View style={driverDashboardStyles.cardContent}>
              {currentTrip ? (
                <View style={driverDashboardStyles.activeTripContainer}>
                  <View style={driverDashboardStyles.tripRoute}>
                    <Text style={driverDashboardStyles.tripRouteText}>Coastal Express {currentTrip?.routeId || 'CT-001'}</Text>
                    <View style={[driverDashboardStyles.tripStatusBadge, { backgroundColor: colors.tertiary }]}>
                      <Text style={driverDashboardStyles.tripStatusText}>ATLANTIC</Text>
                    </View>
                  </View>
                  <View style={driverDashboardStyles.tripDetails}>
                    <View style={driverDashboardStyles.tripDetailRow}>
                      <MaterialCommunityIcons name="calendar-today" size={18} color={colors.primary} />
                      <Text style={driverDashboardStyles.tripDetailText}>Today's Cape Town Route</Text>
                    </View>
                    <View style={driverDashboardStyles.tripDetailRow}>
                      <MaterialCommunityIcons name="account-multiple" size={18} color={colors.tertiary} />
                      <Text style={driverDashboardStyles.tripDetailText}>15 passengers • Sea Point to CBD</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={driverDashboardStyles.capeActionButton} onPress={startTrip}>
                    <MaterialCommunityIcons name="sailboat" size={20} color={colors.textInverse} />
                    <Text style={driverDashboardStyles.capeActionButtonText}>Set Sail</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={driverDashboardStyles.noTripContainer}>
                  <MaterialCommunityIcons name="weather-sunny" size={64} color={colors.secondary} />
                  <Text style={driverDashboardStyles.noTripTitle}>Cape Town Ready</Text>
                  <Text style={driverDashboardStyles.noTripSubtitle}>Your next Atlantic route will appear here</Text>
                </View>
              )}
            </View>
          </Card.Content>
        </Card>

        {/* Cape Town Schedule */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content style={{ padding: 0 }}>
            <View style={driverDashboardStyles.cardHeader}>
              <View style={[driverDashboardStyles.cardIconContainer, { backgroundColor: colors.secondary }]}>
                <MaterialCommunityIcons name="sun-clock" size={28} color={colors.textInverse} />
              </View>
              <Text style={driverDashboardStyles.premiumCardTitle}>Cape Town Routes</Text>
            </View>

            <View style={[driverDashboardStyles.scheduleContainer, driverDashboardStyles.cardContent]}>
              <View style={driverDashboardStyles.premiumScheduleItem}>
                <View style={driverDashboardStyles.scheduleTimeContainer}>
                  <Text style={driverDashboardStyles.scheduleTime}>07:00</Text>
                  <Text style={driverDashboardStyles.scheduleAmPm}>AM</Text>
                </View>
                <View style={driverDashboardStyles.scheduleInfo}>
                  <Text style={driverDashboardStyles.scheduleTitle}>Sunrise Beach Route</Text>
                  <Text style={driverDashboardStyles.scheduleRoute}>Camps Bay → City Bowl</Text>
                  <View style={driverDashboardStyles.scheduleMetrics}>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="waves" size={14} color={colors.primary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>8 ocean lovers</Text>
                    </View>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="lighthouse" size={14} color={colors.secondary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>6 coastal stops</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.scheduleStatus, { backgroundColor: colors.secondary }]}>
                  <Text style={driverDashboardStyles.scheduleStatusText}>SUNRISE</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.premiumScheduleItem}>
                <View style={driverDashboardStyles.scheduleTimeContainer}>
                  <Text style={driverDashboardStyles.scheduleTime}>15:00</Text>
                  <Text style={driverDashboardStyles.scheduleAmPm}>PM</Text>
                </View>
                <View style={driverDashboardStyles.scheduleInfo}>
                  <Text style={driverDashboardStyles.scheduleTitle}>Table Mountain Explorer</Text>
                  <Text style={driverDashboardStyles.scheduleRoute}>Constantia → Newlands</Text>
                  <View style={driverDashboardStyles.scheduleMetrics}>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="pine-tree" size={14} color={colors.tertiary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>8 nature lovers</Text>
                    </View>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="mountain" size={14} color={colors.tertiary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>6 scenic stops</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.scheduleStatus, { backgroundColor: colors.tertiary }]}>
                  <Text style={driverDashboardStyles.scheduleStatusText}>MOUNTAIN</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.premiumScheduleItem}>
                <View style={driverDashboardStyles.scheduleTimeContainer}>
                  <Text style={driverDashboardStyles.scheduleTime}>17:30</Text>
                  <Text style={driverDashboardStyles.scheduleAmPm}>PM</Text>
                </View>
                <View style={driverDashboardStyles.scheduleInfo}>
                  <Text style={driverDashboardStyles.scheduleTitle}>Golden Hour Cruise</Text>
                  <Text style={driverDashboardStyles.scheduleRoute}>V&A Waterfront → Sunset Beach</Text>
                  <View style={driverDashboardStyles.scheduleMetrics}>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="weather-sunset" size={14} color={colors.secondary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>12 sunset seekers</Text>
                    </View>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="camera" size={14} color={colors.secondary} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>8 photo stops</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.scheduleStatus, { backgroundColor: colors.primary }]}>
                  <Text style={driverDashboardStyles.scheduleStatusText}>SUNSET</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Cape Town Vehicle Status */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content style={{ padding: 0 }}>
            <View style={driverDashboardStyles.cardHeader}>
              <View style={[driverDashboardStyles.cardIconContainer, { backgroundColor: colors.tertiary }]}>
                <MaterialCommunityIcons name="bus-articulated-front" size={28} color={colors.textInverse} />
              </View>
              <Text style={driverDashboardStyles.premiumCardTitle}>Mountain Cruiser</Text>
            </View>

            <View style={[driverDashboardStyles.vehicleStatusGrid, driverDashboardStyles.cardContent]}>
              <View style={driverDashboardStyles.vehicleStatusItem}>
                <MaterialCommunityIcons name="anchor" size={24} color={colors.primary} />
                <Text style={driverDashboardStyles.vehicleStatusLabel}>Cape Cruiser</Text>
                <Text style={driverDashboardStyles.vehicleStatusValue}>CT-001</Text>
              </View>
              <View style={driverDashboardStyles.vehicleStatusItem}>
                <MaterialCommunityIcons name="fuel" size={24} color={colors.tertiary} />
                <Text style={driverDashboardStyles.vehicleStatusLabel}>Ocean Ready</Text>
                <Text style={driverDashboardStyles.vehicleStatusValue}>85%</Text>
              </View>
              <View style={driverDashboardStyles.vehicleStatusItem}>
                <MaterialCommunityIcons name="cog" size={24} color={colors.secondary} />
                <Text style={driverDashboardStyles.vehicleStatusLabel}>Service Due</Text>
                <Text style={driverDashboardStyles.vehicleStatusValue}>2 weeks</Text>
              </View>
              <View style={driverDashboardStyles.vehicleStatusItem}>
                <MaterialCommunityIcons name="road-variant" size={24} color={colors.info} />
                <Text style={driverDashboardStyles.vehicleStatusLabel}>Cape Miles</Text>
                <Text style={driverDashboardStyles.vehicleStatusValue}>45,234 km</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Cape Town Quick Actions */}
        <View style={driverDashboardStyles.quickActionsHome}>
          <Text style={driverDashboardStyles.quickActionsTitle}>Cape Navigator</Text>
          <View style={driverDashboardStyles.quickActionsGrid}>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="fuel" size={36} color={colors.tertiary} />
              <Text style={driverDashboardStyles.quickActionText}>Ocean Fuel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="lighthouse" size={36} color={colors.secondary} />
              <Text style={driverDashboardStyles.quickActionText}>Signal Issue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="lifebuoy" size={36} color={colors.error} />
              <Text style={driverDashboardStyles.quickActionText}>Coast Guard</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={driverDashboardStyles.bottomSpacer} />
      </ScrollView>

      {/* Cape Town Emergency FAB */}
      <FAB
        style={[driverDashboardStyles.emergencyFAB, { backgroundColor: colors.error }]}
        icon="lifebuoy"
        onPress={() => {
          Alert.alert('Cape Town Emergency', 'Emergency services will be contacted immediately.', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Call Emergency', style: 'destructive' },
          ]);
        }}
        label="SOS"
      />
    </View>
  );
};

// Premium Routes Screen Component for Driver
const DriverRoutesScreen: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Premium Background Graphics */}
      <View style={driverDashboardStyles.premiumBackgroundContainer}>
        <Animated.View style={[driverDashboardStyles.backgroundBlob1, { backgroundColor: `${colors.info}08` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.primary}06` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={driverDashboardStyles.routesHeader}>
          <Text style={driverDashboardStyles.routesTitle}>My Routes</Text>
          <Text style={driverDashboardStyles.routesSubtitle}>Manage your assigned transport routes</Text>
        </View>

        {/* Stats Overview */}
        <View style={driverDashboardStyles.routeStatsContainer}>
          <View style={driverDashboardStyles.routeStatCard}>
            <MaterialCommunityIcons name="map-marker-path" size={24} color={colors.primary} />
            <Text style={driverDashboardStyles.routeStatValue}>2</Text>
            <Text style={driverDashboardStyles.routeStatLabel}>Active Routes</Text>
          </View>
          <View style={driverDashboardStyles.routeStatCard}>
            <MaterialCommunityIcons name="account-group" size={24} color={colors.success} />
            <Text style={driverDashboardStyles.routeStatValue}>35</Text>
            <Text style={driverDashboardStyles.routeStatLabel}>Total Passengers</Text>
          </View>
          <View style={driverDashboardStyles.routeStatCard}>
            <MaterialCommunityIcons name="clock-check" size={24} color={colors.warning} />
            <Text style={driverDashboardStyles.routeStatValue}>98%</Text>
            <Text style={driverDashboardStyles.routeStatLabel}>On-Time Rate</Text>
          </View>
        </View>

        {/* Premium Route Cards */}
        <View style={driverDashboardStyles.premiumRouteCard}>
          <View style={driverDashboardStyles.routeCardHeader}>
            <View style={driverDashboardStyles.routeIconContainer}>
              <MaterialCommunityIcons name="school" size={28} color="#fff" />
            </View>
            <View style={driverDashboardStyles.routeHeaderContent}>
              <Text style={driverDashboardStyles.premiumRouteTitle}>Central Primary School</Text>
              <Text style={driverDashboardStyles.routeSubtitle}>Morning & Afternoon Route</Text>
            </View>
            <View style={[driverDashboardStyles.routeStatusBadge, { backgroundColor: colors.success }]}>
              <Text style={driverDashboardStyles.routeStatusText}>ACTIVE</Text>
            </View>
          </View>

          <View style={driverDashboardStyles.routeDetailsContainer}>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="map-marker" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>6 Stops • Sandton to Bryanston</Text>
            </View>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="account-multiple" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>15 passengers • 20 capacity</Text>
            </View>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="clock-outline" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>07:00 - 08:30 • 14:30 - 16:00</Text>
            </View>
          </View>

          <View style={driverDashboardStyles.routeActionsContainer}>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.primaryRouteAction]}>
              <MaterialCommunityIcons name="navigation" size={20} color="#fff" />
              <Text style={driverDashboardStyles.routeActionText}>Navigate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.secondaryRouteAction]}>
              <MaterialCommunityIcons name="account-group" size={20} color={colors.primary} />
              <Text style={[driverDashboardStyles.routeActionText, { color: colors.primary }]}>Passengers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.secondaryRouteAction]}>
              <MaterialCommunityIcons name="chart-line" size={20} color={colors.info} />
              <Text style={[driverDashboardStyles.routeActionText, { color: colors.info }]}>Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={driverDashboardStyles.premiumRouteCard}>
          <View style={driverDashboardStyles.routeCardHeader}>
            <View style={[driverDashboardStyles.routeIconContainer, { backgroundColor: colors.info }]}>
              <MaterialCommunityIcons name="office-building" size={28} color="#fff" />
            </View>
            <View style={driverDashboardStyles.routeHeaderContent}>
              <Text style={driverDashboardStyles.premiumRouteTitle}>Business District</Text>
              <Text style={driverDashboardStyles.routeSubtitle}>Staff Transport Route</Text>
            </View>
            <View style={[driverDashboardStyles.routeStatusBadge, { backgroundColor: colors.success }]}>
              <Text style={driverDashboardStyles.routeStatusText}>ACTIVE</Text>
            </View>
          </View>

          <View style={driverDashboardStyles.routeDetailsContainer}>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="map-marker" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>8 Stops • Midrand to Sandton CBD</Text>
            </View>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="account-multiple" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>20 passengers • 25 capacity</Text>
            </View>
            <View style={driverDashboardStyles.routeDetailRow}>
              <MaterialCommunityIcons name="clock-outline" size={16} color={colors.textSecondary} />
              <Text style={driverDashboardStyles.routeDetailText}>07:00 - 08:00 • 17:00 - 18:00</Text>
            </View>
          </View>

          <View style={driverDashboardStyles.routeActionsContainer}>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.primaryRouteAction]}>
              <MaterialCommunityIcons name="navigation" size={20} color="#fff" />
              <Text style={driverDashboardStyles.routeActionText}>Navigate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.secondaryRouteAction]}>
              <MaterialCommunityIcons name="account-group" size={20} color={colors.primary} />
              <Text style={[driverDashboardStyles.routeActionText, { color: colors.primary }]}>Passengers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[driverDashboardStyles.routeActionButton, driverDashboardStyles.secondaryRouteAction]}>
              <MaterialCommunityIcons name="chart-line" size={20} color={colors.info} />
              <Text style={[driverDashboardStyles.routeActionText, { color: colors.info }]}>Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={driverDashboardStyles.routeQuickActions}>
          <Text style={driverDashboardStyles.quickActionsTitle}>Quick Actions</Text>
          <View style={driverDashboardStyles.quickActionsGrid}>
            <TouchableOpacity style={driverDashboardStyles.quickActionItem}>
              <MaterialCommunityIcons name="plus-circle" size={32} color={colors.primary} />
              <Text style={driverDashboardStyles.quickActionText}>Request Route</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionItem}>
              <MaterialCommunityIcons name="calendar-clock" size={32} color={colors.warning} />
              <Text style={driverDashboardStyles.quickActionText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionItem}>
              <MaterialCommunityIcons name="alert-circle" size={32} color={colors.error} />
              <Text style={driverDashboardStyles.quickActionText}>Report Issue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={driverDashboardStyles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

// Premium Passengers Screen Component for Driver
const DriverPassengersScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const passengerStats = {
    totalPassengers: 24,
    confirmedToday: 18,
    pendingConfirmation: 4,
    noShow: 2,
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Premium Background Graphics */}
      <View style={driverDashboardStyles.premiumBackgroundContainer}>
        <Animated.View style={[driverDashboardStyles.backgroundBlob1, { backgroundColor: `${colors.info}08` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.success}06` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={driverDashboardStyles.passengersHeader}>
          <Text style={driverDashboardStyles.passengersTitle}>Passengers</Text>
          <Text style={driverDashboardStyles.passengersSubtitle}>Manage your daily passenger roster</Text>
        </View>

        {/* Passenger Stats */}
        <View style={driverDashboardStyles.passengerStatsContainer}>
          <View style={driverDashboardStyles.passengerStatCard}>
            <MaterialCommunityIcons name="account-group" size={24} color={colors.primary} />
            <Text style={driverDashboardStyles.passengerStatValue}>{passengerStats.totalPassengers}</Text>
            <Text style={driverDashboardStyles.passengerStatLabel}>Total</Text>
          </View>
          <View style={driverDashboardStyles.passengerStatCard}>
            <MaterialCommunityIcons name="check-circle" size={24} color={colors.success} />
            <Text style={driverDashboardStyles.passengerStatValue}>{passengerStats.confirmedToday}</Text>
            <Text style={driverDashboardStyles.passengerStatLabel}>Confirmed</Text>
          </View>
          <View style={driverDashboardStyles.passengerStatCard}>
            <MaterialCommunityIcons name="clock-alert" size={24} color={colors.warning} />
            <Text style={driverDashboardStyles.passengerStatValue}>{passengerStats.pendingConfirmation}</Text>
            <Text style={driverDashboardStyles.passengerStatLabel}>Pending</Text>
          </View>
          <View style={driverDashboardStyles.passengerStatCard}>
            <MaterialCommunityIcons name="account-off" size={24} color={colors.error} />
            <Text style={driverDashboardStyles.passengerStatValue}>{passengerStats.noShow}</Text>
            <Text style={driverDashboardStyles.passengerStatLabel}>No Show</Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={driverDashboardStyles.filterTabsContainer}>
          <TouchableOpacity
            style={[driverDashboardStyles.filterTab, selectedFilter === 'all' && driverDashboardStyles.activeFilterTab]}
            onPress={() => setSelectedFilter('all')}
          >
            <Text style={[driverDashboardStyles.filterTabText, selectedFilter === 'all' && driverDashboardStyles.activeFilterTabText]}>
              All Passengers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[driverDashboardStyles.filterTab, selectedFilter === 'today' && driverDashboardStyles.activeFilterTab]}
            onPress={() => setSelectedFilter('today')}
          >
            <Text style={[driverDashboardStyles.filterTabText, selectedFilter === 'today' && driverDashboardStyles.activeFilterTabText]}>
              Today's Roster
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[driverDashboardStyles.filterTab, selectedFilter === 'pending' && driverDashboardStyles.activeFilterTab]}
            onPress={() => setSelectedFilter('pending')}
          >
            <Text style={[driverDashboardStyles.filterTabText, selectedFilter === 'pending' && driverDashboardStyles.activeFilterTabText]}>
              Pending
            </Text>
          </TouchableOpacity>
        </View>

        {/* Today's Passengers List */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content>
            <View style={driverDashboardStyles.cardHeader}>
              <MaterialCommunityIcons name="format-list-checks" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.premiumCardTitle}>Today's Passengers</Text>
            </View>

            <View style={driverDashboardStyles.premiumPassengerList}>
              {/* Morning Route Passengers */}
              <View style={driverDashboardStyles.routePassengersSection}>
                <View style={driverDashboardStyles.routeSectionHeader}>
                  <MaterialCommunityIcons name="weather-sunny" size={20} color={colors.warning} />
                  <Text style={driverDashboardStyles.routeSectionTitle}>Morning Route - 7:00 AM</Text>
                  <Text style={driverDashboardStyles.routeSectionCount}>8 passengers</Text>
                </View>

                <View style={driverDashboardStyles.premiumPassengerItem}>
                  <Avatar.Text
                    size={48}
                    label="JS"
                    style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary }]}
                  />
                  <View style={driverDashboardStyles.premiumPassengerInfo}>
                    <Text style={driverDashboardStyles.premiumPassengerName}>John Smith</Text>
                    <Text style={driverDashboardStyles.premiumPassengerDetails}>Stop 3 • Central Primary School</Text>
                    <View style={driverDashboardStyles.passengerMetrics}>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>7:15 AM</Text>
                      </View>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="phone" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>+27 123 456 789</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                    <MaterialCommunityIcons name="check" size={16} color="#fff" />
                    <Text style={driverDashboardStyles.passengerStatusText}>Confirmed</Text>
                  </View>
                </View>

                <View style={driverDashboardStyles.premiumPassengerItem}>
                  <Avatar.Text
                    size={48}
                    label="MJ"
                    style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.success }]}
                  />
                  <View style={driverDashboardStyles.premiumPassengerInfo}>
                    <Text style={driverDashboardStyles.premiumPassengerName}>Mary Johnson</Text>
                    <Text style={driverDashboardStyles.premiumPassengerDetails}>Stop 5 • Northside Elementary</Text>
                    <View style={driverDashboardStyles.passengerMetrics}>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>7:25 AM</Text>
                      </View>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="phone" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>+27 987 654 321</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                    <MaterialCommunityIcons name="check" size={16} color="#fff" />
                    <Text style={driverDashboardStyles.passengerStatusText}>Confirmed</Text>
                  </View>
                </View>

                <View style={driverDashboardStyles.premiumPassengerItem}>
                  <Avatar.Text
                    size={48}
                    label="LB"
                    style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.info }]}
                  />
                  <View style={driverDashboardStyles.premiumPassengerInfo}>
                    <Text style={driverDashboardStyles.premiumPassengerName}>Lisa Brown</Text>
                    <Text style={driverDashboardStyles.premiumPassengerDetails}>Stop 2 • Riverside Academy</Text>
                    <View style={driverDashboardStyles.passengerMetrics}>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>7:10 AM</Text>
                      </View>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="phone" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>+27 555 123 456</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.warning }]}>
                    <MaterialCommunityIcons name="clock-alert" size={16} color="#fff" />
                    <Text style={driverDashboardStyles.passengerStatusText}>Pending</Text>
                  </View>
                </View>
              </View>

              {/* Afternoon Route Passengers */}
              <View style={driverDashboardStyles.routePassengersSection}>
                <View style={driverDashboardStyles.routeSectionHeader}>
                  <MaterialCommunityIcons name="weather-sunset" size={20} color={colors.secondary} />
                  <Text style={driverDashboardStyles.routeSectionTitle}>Afternoon Route - 3:00 PM</Text>
                  <Text style={driverDashboardStyles.routeSectionCount}>8 passengers</Text>
                </View>

                <View style={driverDashboardStyles.premiumPassengerItem}>
                  <Avatar.Text
                    size={48}
                    label="DW"
                    style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.secondary }]}
                  />
                  <View style={driverDashboardStyles.premiumPassengerInfo}>
                    <Text style={driverDashboardStyles.premiumPassengerName}>David Wilson</Text>
                    <Text style={driverDashboardStyles.premiumPassengerDetails}>Stop 4 • Maple Heights School</Text>
                    <View style={driverDashboardStyles.passengerMetrics}>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>3:20 PM</Text>
                      </View>
                      <View style={driverDashboardStyles.passengerMetric}>
                        <MaterialCommunityIcons name="phone" size={14} color={colors.textSecondary} />
                        <Text style={driverDashboardStyles.passengerMetricText}>+27 777 888 999</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                    <MaterialCommunityIcons name="check" size={16} color="#fff" />
                    <Text style={driverDashboardStyles.passengerStatusText}>Confirmed</Text>
                  </View>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <View style={driverDashboardStyles.quickActionsHome}>
          <Text style={driverDashboardStyles.quickActionsTitle}>Passenger Actions</Text>
          <View style={driverDashboardStyles.quickActionsGrid}>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="phone" size={32} color={colors.primary} />
              <Text style={driverDashboardStyles.quickActionText}>Call Parent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="message-text" size={32} color={colors.success} />
              <Text style={driverDashboardStyles.quickActionText}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={driverDashboardStyles.quickActionHome}>
              <MaterialCommunityIcons name="account-plus" size={32} color={colors.info} />
              <Text style={driverDashboardStyles.quickActionText}>Add Passenger</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={driverDashboardStyles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

// Profile Screen Component for Driver
const DriverProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Premium Background Graphics */}
      <View style={driverDashboardStyles.premiumBackgroundContainer}>
        <Animated.View style={[driverDashboardStyles.backgroundBlob1, { backgroundColor: `${colors.primary}08` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.success}06` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob3, { backgroundColor: `${colors.warning}05` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Profile Card */}
        <View style={driverDashboardStyles.heroProfileCard}>
          <View style={driverDashboardStyles.heroGradientOverlay}>
            <View style={driverDashboardStyles.heroContent}>
              {/* Profile Image with Premium Frame */}
              <View style={driverDashboardStyles.profileImageFrame}>
                <Avatar.Text
                  size={120}
                  label={`${user.firstName[0]}${user.lastName[0]}`}
                  style={driverDashboardStyles.premiumAvatar}
                  labelStyle={driverDashboardStyles.avatarLabel}
                />
                <View style={driverDashboardStyles.onlineIndicator} />
              </View>

              {/* Profile Info */}
              <View style={driverDashboardStyles.heroProfileInfo}>
                <Text style={driverDashboardStyles.heroName}>{user.firstName} {user.lastName}</Text>
                <Text style={driverDashboardStyles.heroRole}>Professional Driver</Text>

                {/* Rating & Stats */}
                <View style={driverDashboardStyles.statsRow}>
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>4.9</Text>
                    <View style={driverDashboardStyles.starRating}>
                      {[1,2,3,4,5].map(star => (
                        <MaterialCommunityIcons
                          key={star}
                          name="star"
                          size={14}
                          color="#FFD700"
                        />
                      ))}
                    </View>
                    <Text style={driverDashboardStyles.heroStatLabel}>Rating</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>1.2k</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>Trips</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>98%</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>On-time</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Professional Details Card */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content>
            <View style={driverDashboardStyles.cardHeader}>
              <MaterialCommunityIcons name="card-account-details" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.premiumCardTitle}>Professional Details</Text>
            </View>

            <View style={driverDashboardStyles.detailsGrid}>
              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="identifier" size={20} color={colors.primary} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>Driver ID</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>DRV-{user.id.slice(-4)}</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="card-account-details-outline" size={20} color={colors.success} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>License Number</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>DL-{Math.random().toString().slice(2,8)}</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="calendar-check" size={20} color={colors.warning} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>License Expiry</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>Dec 31, 2025</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="bus" size={20} color={colors.info} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>Assigned Vehicle</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>BUS-001 • Mercedes Sprinter</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Contact Information Card */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content>
            <View style={driverDashboardStyles.cardHeader}>
              <MaterialCommunityIcons name="card-account-mail" size={24} color={colors.success} />
              <Text style={driverDashboardStyles.premiumCardTitle}>Contact Information</Text>
            </View>

            <View style={driverDashboardStyles.contactGrid}>
              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.primary + '15' }]}>
                  <MaterialCommunityIcons name="email" size={24} color={colors.primary} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Email Address</Text>
                  <Text style={driverDashboardStyles.contactValue}>{user.email}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.success + '15' }]}>
                  <MaterialCommunityIcons name="phone" size={24} color={colors.success} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Phone Number</Text>
                  <Text style={driverDashboardStyles.contactValue}>{user.phone || '+27 81 234 5678'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.warning + '15' }]}>
                  <MaterialCommunityIcons name="map-marker" size={24} color={colors.warning} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Base Location</Text>
                  <Text style={driverDashboardStyles.contactValue}>Johannesburg Central</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>

        {/* Premium Action Grid */}
        <View style={driverDashboardStyles.actionGrid}>
          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumPrimaryAction]}>
            <View style={driverDashboardStyles.actionIcon}>
              <MaterialCommunityIcons name="account-edit" size={28} color="#fff" />
            </View>
            <Text style={[driverDashboardStyles.actionTitle, { color: '#fff' }]}>Edit Profile</Text>
            <Text style={[driverDashboardStyles.actionSubtitle, { color: 'rgba(255,255,255,0.8)' }]}>Update your information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.success }]}>
              <MaterialCommunityIcons name="car-cog" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Vehicle Info</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Manage your vehicle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.warning }]}>
              <MaterialCommunityIcons name="bell-ring" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Notifications</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Alert preferences</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.info }]}>
              <MaterialCommunityIcons name="help-circle" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Help Center</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Support & guides</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.textSecondary }]}>
              <MaterialCommunityIcons name="cog" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>App Settings</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Preferences & privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[driverDashboardStyles.actionCard, driverDashboardStyles.logoutAction]}
            onPress={onLogout}
          >
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.error }]}>
              <MaterialCommunityIcons name="logout" size={28} color="#fff" />
            </View>
            <Text style={[driverDashboardStyles.actionTitle, { color: colors.error }]}>Sign Out</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>End your session</Text>
          </TouchableOpacity>
        </View>

        {/* App Version Footer */}
        <View style={driverDashboardStyles.appFooter}>
          <Text style={driverDashboardStyles.footerText}>K&T Transport Driver App</Text>
          <Text style={driverDashboardStyles.versionText}>Version 2.1.0</Text>
        </View>

        <View style={driverDashboardStyles.bottomSpacer} />
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
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Routes':
              iconName = focused ? 'map-marker-path' : 'map-marker-outline';
              break;
            case 'Passengers':
              iconName = focused ? 'account-group' : 'account-group-outline';
              break;
            case 'Profile':
              iconName = focused ? 'account' : 'account-outline';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <View style={focused ? driverDashboardStyles.activeTabIcon : driverDashboardStyles.inactiveTabIcon}>
              <MaterialCommunityIcons name={iconName as any} size={focused ? 26 : 24} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: driverDashboardStyles.premiumTabBar,
        tabBarLabelStyle: driverDashboardStyles.tabBarLabel,
        tabBarItemStyle: driverDashboardStyles.tabBarItem,
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

export default DriverDashboard;
