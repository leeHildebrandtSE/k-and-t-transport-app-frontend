import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Card,
  Text,
  Avatar,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { driverDashboardStyles, driverGradientConfigs } from '../../../styles/screens/dashboards/driverDashboard';
import { PassengerStats } from '../../../types/Dashboard';

const DriverPassengersScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const passengerStats: PassengerStats = {
    totalPassengers: 24,
    confirmedToday: 18,
    pendingConfirmation: 4,
    noShow: 2,
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Cape Town Community Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={driverDashboardStyles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Passengers-themed Overlay */}
        <View style={driverDashboardStyles.passengersBackgroundOverlay} />
        <View style={driverDashboardStyles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Passenger Management Header */}
        <View style={driverDashboardStyles.heroProfileCard}>
          <LinearGradient
            colors={driverGradientConfigs.hero.colors}
            start={driverGradientConfigs.hero.start}
            end={driverGradientConfigs.hero.end}
            style={driverDashboardStyles.heroGradientOverlay}
          >
            {/* African Pattern Overlay */}
            <View style={[driverDashboardStyles.africanPatternOverlay, driverDashboardStyles.oceanAfricanPattern]}>
              <View style={driverDashboardStyles.africanPatternDot1} />
              <View style={driverDashboardStyles.africanPatternDot2} />
              <View style={driverDashboardStyles.africanPatternDot3} />
              <View style={driverDashboardStyles.africanTriangle1} />
              <View style={driverDashboardStyles.africanTriangle2} />
              <View style={driverDashboardStyles.africanZigzag} />
            </View>

            <View style={driverDashboardStyles.heroContent}>
              {/* Passenger Management Icon */}
              <View style={driverDashboardStyles.profileImageFrame}>
                <View style={[driverDashboardStyles.dutyStatusIcon, { backgroundColor: colors.tertiary }]}>
                  <MaterialCommunityIcons
                    name="account-group"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[driverDashboardStyles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Passenger Info */}
              <View style={driverDashboardStyles.heroProfileInfo}>
                <Text style={driverDashboardStyles.heroName}>Passenger Management</Text>
                <Text style={driverDashboardStyles.heroRole}>Daily Roster & Capacity</Text>

                {/* Passenger Stats */}
                <View style={driverDashboardStyles.statsRow}>
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{passengerStats.totalPassengers}</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>TOTAL</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{passengerStats.confirmedToday}</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>CONFIRMED</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>{passengerStats.pendingConfirmation}</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>PENDING</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
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
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="format-list-checks" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.sectionTitle}>Today's Passengers</Text>
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

export default DriverPassengersScreen;
