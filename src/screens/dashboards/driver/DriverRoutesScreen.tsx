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
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { DriverHeroBackground } from '../../../../assets';

import { Route } from '../../../types/Transport';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { driverDashboardStyles, driverGradientConfigs, driverTextStyles } from '../../../styles/screens/dashboards/driverDashboard';

const DriverRoutesScreen: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Cape Town Mountain Road Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={[driverDashboardStyles.premiumBackgroundContainer, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]}
        resizeMode="cover"
      >
        {/* Premium Route-themed Overlay */}
        <View style={driverDashboardStyles.routesBackgroundOverlay} />
        <View style={driverDashboardStyles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Route Management Header */}
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
            {/* Decorative overlay removed for production compatibility */}

            <View style={driverDashboardStyles.heroContent}>
              {/* Route Management Icon */}
              <View style={driverDashboardStyles.profileImageFrame}>
                <View style={[driverDashboardStyles.dutyStatusIcon, { backgroundColor: colors.secondary }]}>
                  <MaterialCommunityIcons
                    name="map-marker-path"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[driverDashboardStyles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Route Info */}
              <View style={driverDashboardStyles.heroProfileInfo}>
                <Text style={driverDashboardStyles.heroName}>Route Management</Text>
                <Text style={driverDashboardStyles.heroRole}>Cape Town Transport Network</Text>

                {/* Route Stats */}
                <View style={driverDashboardStyles.statsRow}>
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>2</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>ACTIVE</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>35</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>PASSENGERS</Text>
                  </View>
                  <View style={driverDashboardStyles.statDivider} />
                  <View style={driverDashboardStyles.statItem}>
                    <Text style={driverDashboardStyles.heroStatValue}>98%</Text>
                    <Text style={driverDashboardStyles.heroStatLabel}>ON-TIME</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
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

export default DriverRoutesScreen;
