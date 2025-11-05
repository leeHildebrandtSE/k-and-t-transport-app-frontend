import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Alert,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  FAB,
  Text,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Trip } from '../../../types/Booking';
import { colors } from '../../../utils/theme';
import { driverDashboardStyles } from '../../../styles/screens/dashboards/driverDashboard';
import { DriverScreenProps, DashboardStats } from '../../../types/Dashboard';

const DriverHomeScreen: React.FC<DriverScreenProps> = ({ user }) => {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [todaysStats, setTodaysStats] = useState<DashboardStats>({
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
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.info}06` }]} />
        {/* Cape Town sunshine */}
        <Animated.View style={[driverDashboardStyles.backgroundBlob3, { backgroundColor: `${colors.secondary}04` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.primary}
          colors={[colors.primary, colors.info, colors.secondary]}
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
            <MaterialCommunityIcons name="account-group" size={36} color={colors.info} />
            <Text style={[driverDashboardStyles.statValue, { color: colors.info }]}>{todaysStats.passengersServed}</Text>
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
                <MaterialCommunityIcons name="ship-wheel" size={28} color={colors.surface} />
              </View>
              <Text style={driverDashboardStyles.premiumCardTitle}>Atlantic Route</Text>
            </View>

            <View style={driverDashboardStyles.cardContent}>
              {currentTrip ? (
                <View style={driverDashboardStyles.activeTripContainer}>
                  <View style={driverDashboardStyles.tripRoute}>
                    <Text style={driverDashboardStyles.tripRouteText}>Coastal Express {currentTrip?.routeId || 'CT-001'}</Text>
                    <View style={[driverDashboardStyles.tripStatusBadge, { backgroundColor: colors.info }]}>
                      <Text style={driverDashboardStyles.tripStatusText}>ATLANTIC</Text>
                    </View>
                  </View>
                  <View style={driverDashboardStyles.tripDetails}>
                    <View style={driverDashboardStyles.tripDetailRow}>
                      <MaterialCommunityIcons name="calendar-today" size={18} color={colors.primary} />
                      <Text style={driverDashboardStyles.tripDetailText}>Today's Cape Town Route</Text>
                    </View>
                    <View style={driverDashboardStyles.tripDetailRow}>
                      <MaterialCommunityIcons name="account-multiple" size={18} color={colors.info} />
                      <Text style={driverDashboardStyles.tripDetailText}>15 passengers • Sea Point to CBD</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={driverDashboardStyles.capeActionButton} onPress={startTrip}>
                    <MaterialCommunityIcons name="sail-boat" size={20} color={colors.surface} />
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
                <MaterialCommunityIcons name="clock-outline" size={28} color={colors.surface} />
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
                      <MaterialCommunityIcons name="pine-tree" size={14} color={colors.info} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>8 nature lovers</Text>
                    </View>
                    <View style={driverDashboardStyles.scheduleMetric}>
                      <MaterialCommunityIcons name="image-filter-hdr" size={14} color={colors.info} />
                      <Text style={driverDashboardStyles.scheduleMetricText}>6 scenic stops</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.scheduleStatus, { backgroundColor: colors.info }]}>
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
              <View style={[driverDashboardStyles.cardIconContainer, { backgroundColor: colors.info }]}>
                <MaterialCommunityIcons name="bus-articulated-front" size={28} color={colors.surface} />
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
                <MaterialCommunityIcons name="fuel" size={24} color={colors.info} />
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
              <MaterialCommunityIcons name="fuel" size={36} color={colors.info} />
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

export default DriverHomeScreen;
