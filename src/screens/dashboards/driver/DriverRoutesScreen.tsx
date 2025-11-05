import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Route } from '../../../types/Transport';
import { colors } from '../../../utils/theme';
import { driverDashboardStyles } from '../../../styles/screens/dashboards/driverDashboard';

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

export default DriverRoutesScreen;
