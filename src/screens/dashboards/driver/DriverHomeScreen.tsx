import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Alert,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Card,
  FAB,
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { DriverHeroBackground } from '../../../../assets';
import { Trip } from '../../../types/Booking';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { driverDashboardStyles, driverGradientConfigs, driverTextStyles } from '../../../styles/screens/dashboards/driverDashboard';
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
      {/* Cape Town Ocean Scenic Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={[driverDashboardStyles.premiumBackgroundContainer, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]}
        resizeMode="cover"
      >
        {/* Premium Gradient Overlay */}
        <View style={driverDashboardStyles.premiumBackgroundOverlay} />
      </ImageBackground>

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
        {/* Hero Driver Status Header */}
        <View style={driverDashboardStyles.heroProfileCard}>
          <ImageBackground
            source={DriverHeroBackground}
            style={driverDashboardStyles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={driverGradientConfigs.hero.colors}
              start={driverGradientConfigs.hero.start}
              end={driverGradientConfigs.hero.end}
              style={driverDashboardStyles.heroGradientOverlay}
            >
            <View style={driverDashboardStyles.heroContent}>
              {/* Driver Profile Photo */}
              <View style={driverDashboardStyles.profileImageFrame}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    borderWidth: 4,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                  resizeMode="cover"
                />
                <View style={[driverDashboardStyles.onlineIndicator, { backgroundColor: isOnDuty ? colors.success : colors.warning }]} />
              </View>

              {/* Driver Info */}
              <View style={driverDashboardStyles.heroProfileInfo}>
                <Text style={driverDashboardStyles.heroName}>{user.firstName} {user.lastName}</Text>
                <Text style={driverDashboardStyles.heroRole}>
                  {isOnDuty ? 'On Duty - Active Driver' : 'Off Duty - Standby'}
                </Text>

                {/* Today's Stats */}
                <View style={driverDashboardStyles.statsRow}>
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{todaysStats.tripsCompleted}</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>TRIPS</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{todaysStats.passengersServed}</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>PASSENGERS</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{todaysStats.hoursOnDuty}h</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>ON-DUTY</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
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
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="ship-wheel" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.sectionTitle}>Atlantic Route Management</Text>
            </View>
              {currentTrip ? (
                <View style={driverDashboardStyles.premiumPassengerList}>
                  <View style={driverDashboardStyles.routePassengersSection}>
                    <View style={driverDashboardStyles.routeSectionHeader}>
                      <MaterialCommunityIcons name="ship-wheel" size={20} color={colors.primary} />
                      <Text style={driverDashboardStyles.routeSectionTitle}>Active Trip - Coastal Express</Text>
                      <Text style={driverDashboardStyles.routeSectionCount}>CT-001</Text>
                    </View>

                    <View style={driverDashboardStyles.premiumPassengerItem}>
                      <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons name="sail-boat" size={24} color="#fff" />
                      </View>
                      <View style={driverDashboardStyles.premiumPassengerInfo}>
                        <Text style={driverDashboardStyles.premiumPassengerName}>Sea Point → CBD</Text>
                        <Text style={driverDashboardStyles.premiumPassengerDetails}>Atlantic Route • 15 passengers aboard</Text>
                        <View style={driverDashboardStyles.passengerMetrics}>
                          <View style={driverDashboardStyles.passengerMetric}>
                            <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                            <Text style={driverDashboardStyles.passengerMetricText}>25 minutes</Text>
                          </View>
                          <View style={driverDashboardStyles.passengerMetric}>
                            <MaterialCommunityIcons name="map-marker-path" size={14} color={colors.textSecondary} />
                            <Text style={driverDashboardStyles.passengerMetricText}>5 stops remaining</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                        <MaterialCommunityIcons name="check" size={16} color="#fff" />
                        <Text style={driverDashboardStyles.passengerStatusText}>ACTIVE</Text>
                      </View>
                    </View>

                    <TouchableOpacity style={driverDashboardStyles.capeActionButton} onPress={startTrip}>
                      <MaterialCommunityIcons name="sail-boat" size={20} color={colors.surface} />
                      <Text style={driverDashboardStyles.capeActionButtonText}>Set Sail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={driverDashboardStyles.premiumPassengerList}>
                  <View style={driverDashboardStyles.routePassengersSection}>
                    <View style={driverDashboardStyles.routeSectionHeader}>
                      <MaterialCommunityIcons name="weather-sunny" size={20} color={colors.secondary} />
                      <Text style={driverDashboardStyles.routeSectionTitle}>No Active Trip</Text>
                      <Text style={driverDashboardStyles.routeSectionCount}>Ready</Text>
                    </View>

                    <View style={driverDashboardStyles.premiumPassengerItem}>
                      <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.secondary + '30', width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons name="weather-sunny" size={24} color={colors.secondary} />
                      </View>
                      <View style={driverDashboardStyles.premiumPassengerInfo}>
                        <Text style={driverDashboardStyles.premiumPassengerName}>Cape Town Ready</Text>
                        <Text style={driverDashboardStyles.premiumPassengerDetails}>Your next Atlantic route will appear here</Text>
                        <View style={driverDashboardStyles.passengerMetrics}>
                          <View style={driverDashboardStyles.passengerMetric}>
                            <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                            <Text style={driverDashboardStyles.passengerMetricText}>Awaiting assignment</Text>
                          </View>
                        </View>
                      </View>
                      <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.textSecondary }]}>
                        <MaterialCommunityIcons name="pause" size={16} color="#fff" />
                        <Text style={driverDashboardStyles.passengerStatusText}>STANDBY</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
          </Card.Content>
        </Card>

        {/* Cape Town Schedule */}
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="clock-outline" size={24} color={colors.secondary} />
              <Text style={driverDashboardStyles.sectionTitle}>Cape Town Routes Schedule</Text>
            </View>
              {/* Premium Route List with Enhanced Design */}
              <View style={driverDashboardStyles.premiumPassengerList}>
                {/* Morning Route */}
                <View style={driverDashboardStyles.routePassengersSection}>
                  <View style={driverDashboardStyles.routeSectionHeader}>
                    <MaterialCommunityIcons name="weather-sunny" size={20} color={colors.secondary} />
                    <Text style={driverDashboardStyles.routeSectionTitle}>Morning Route - 7:00 AM</Text>
                    <Text style={driverDashboardStyles.routeSectionCount}>Sunrise Beach</Text>
                  </View>

                  <View style={driverDashboardStyles.premiumPassengerItem}>
                    <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.secondary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                      <MaterialCommunityIcons name="waves" size={24} color="#fff" />
                    </View>
                    <View style={driverDashboardStyles.premiumPassengerInfo}>
                      <Text style={driverDashboardStyles.premiumPassengerName}>Camps Bay → City Bowl</Text>
                      <Text style={driverDashboardStyles.premiumPassengerDetails}>Atlantic Seaboard • 6 coastal stops</Text>
                      <View style={driverDashboardStyles.passengerMetrics}>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="account-group" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>8 ocean lovers</Text>
                        </View>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>35 minutes</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.secondary }]}>
                      <MaterialCommunityIcons name="check" size={16} color="#fff" />
                      <Text style={driverDashboardStyles.passengerStatusText}>SUNRISE</Text>
                    </View>
                  </View>
                </View>

                {/* Afternoon Route */}
                <View style={driverDashboardStyles.routePassengersSection}>
                  <View style={driverDashboardStyles.routeSectionHeader}>
                    <MaterialCommunityIcons name="image-filter-hdr" size={20} color={colors.info} />
                    <Text style={driverDashboardStyles.routeSectionTitle}>Afternoon Route - 3:00 PM</Text>
                    <Text style={driverDashboardStyles.routeSectionCount}>Mountain Explorer</Text>
                  </View>

                  <View style={driverDashboardStyles.premiumPassengerItem}>
                    <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.info, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                      <MaterialCommunityIcons name="pine-tree" size={24} color="#fff" />
                    </View>
                    <View style={driverDashboardStyles.premiumPassengerInfo}>
                      <Text style={driverDashboardStyles.premiumPassengerName}>Constantia → Newlands</Text>
                      <Text style={driverDashboardStyles.premiumPassengerDetails}>Southern Suburbs • 6 scenic stops</Text>
                      <View style={driverDashboardStyles.passengerMetrics}>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="account-group" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>8 nature lovers</Text>
                        </View>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>40 minutes</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.info }]}>
                      <MaterialCommunityIcons name="check" size={16} color="#fff" />
                      <Text style={driverDashboardStyles.passengerStatusText}>MOUNTAIN</Text>
                    </View>
                  </View>
                </View>

                {/* Evening Route */}
                <View style={driverDashboardStyles.routePassengersSection}>
                  <View style={driverDashboardStyles.routeSectionHeader}>
                    <MaterialCommunityIcons name="weather-sunset" size={20} color={colors.primary} />
                    <Text style={driverDashboardStyles.routeSectionTitle}>Evening Route - 5:30 PM</Text>
                    <Text style={driverDashboardStyles.routeSectionCount}>Golden Hour</Text>
                  </View>

                  <View style={driverDashboardStyles.premiumPassengerItem}>
                    <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                      <MaterialCommunityIcons name="camera" size={24} color="#fff" />
                    </View>
                    <View style={driverDashboardStyles.premiumPassengerInfo}>
                      <Text style={driverDashboardStyles.premiumPassengerName}>V&A Waterfront → Sunset Beach</Text>
                      <Text style={driverDashboardStyles.premiumPassengerDetails}>Waterfront Circuit • 8 photo stops</Text>
                      <View style={driverDashboardStyles.passengerMetrics}>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="account-group" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>12 sunset seekers</Text>
                        </View>
                        <View style={driverDashboardStyles.passengerMetric}>
                          <MaterialCommunityIcons name="clock" size={14} color={colors.textSecondary} />
                          <Text style={driverDashboardStyles.passengerMetricText}>45 minutes</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.primary }]}>
                      <MaterialCommunityIcons name="check" size={16} color="#fff" />
                      <Text style={driverDashboardStyles.passengerStatusText}>SUNSET</Text>
                    </View>
                  </View>
                </View>
              </View>
          </Card.Content>
        </Card>

        {/* Cape Town Vehicle Status */}
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="bus-articulated-front" size={24} color={colors.info} />
              <Text style={driverDashboardStyles.sectionTitle}>Mountain Cruiser - CT-001</Text>
            </View>

            <View style={driverDashboardStyles.premiumPassengerList}>
              {/* Fuel Status */}
              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.info, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="fuel" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Ocean Ready Fuel</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Tank Level • Ready for Atlantic routes</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="gauge" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>85% capacity</Text>
                    </View>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="map-marker-distance" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>~400km range</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>GOOD</Text>
                </View>
              </View>

              {/* Service Status */}
              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.warning, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="cog" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Service Schedule</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Maintenance Due • Cape Town Service Center</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="calendar" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>In 2 weeks</Text>
                    </View>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="wrench" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Full service</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.warning }]}>
                  <MaterialCommunityIcons name="clock" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>PENDING</Text>
                </View>
              </View>

              {/* Mileage Status */}
              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="road-variant" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Cape Miles Traveled</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Total Distance • Atlantic & Mountain Routes</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="speedometer" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>45,234 km</Text>
                    </View>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="trophy" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Excellent record</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.primary }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>ACTIVE</Text>
                </View>
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
        icon={() => <MaterialCommunityIcons name="lifebuoy" size={24} color="white" />}
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
