import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {
  FAB,
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CommuterHeroBackground } from '../../../../assets';
import { CommuterType } from '../../../types/User';
import { Booking } from '../../../types/Booking';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { commuterDashboardStyles, commuterGradientConfigs } from '../../../styles/screens/dashboards/commuterDashboard';
import { CommuterScreenProps, QuickAction } from '../../../types/Dashboard';

const CommuterHomeScreen: React.FC<CommuterScreenProps> = ({ user }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCommuterType, setSelectedCommuterType] = useState<CommuterType | null>(
    user.commuterPreferences?.commuterType || null
  );

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest bookings from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const commuterTypes = [
    {
      type: 'school_transport' as CommuterType,
      label: 'School Transport',
      icon: 'school',
      description: 'Daily transport to and from school',
    },
    {
      type: 'work_transport' as CommuterType,
      label: 'Work Commute',
      icon: 'briefcase',
      description: 'Regular transport to workplace',
    },
    {
      type: 'lift_club' as CommuterType,
      label: 'Lift Club',
      icon: 'account-group',
      description: 'Shared rides with community',
    },
    {
      type: 'general_commuting' as CommuterType,
      label: 'General',
      icon: 'map-marker-path',
      description: 'Flexible transport needs',
    },
  ];

  const handleCommuterTypeSelect = (type: CommuterType) => {
    setSelectedCommuterType(type);
    // TODO: Save commuter type preference to backend
    Alert.alert(
      'Transport Type Updated',
      `You have selected ${commuterTypes.find(t => t.type === type)?.label}. Your transport preferences have been updated.`
    );
  };

  const quickActions: QuickAction[] = [
    { label: 'Book Trip', icon: 'plus-circle', action: () => {} },
    { label: 'View Routes', icon: 'map', action: () => {} },
    { label: 'Payment History', icon: 'credit-card', action: () => {} },
    { label: 'Live Tracking', icon: 'map-marker', action: () => {} },
  ];

  const styles = commuterDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Commuter Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1592119/pexels-photo-1592119.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero Commuter Status Header */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={CommuterHeroBackground}
            style={styles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={commuterGradientConfigs.hero.colors}
              start={commuterGradientConfigs.hero.start}
              end={commuterGradientConfigs.hero.end}
              style={styles.heroGradientOverlay}
            >
            {/* African Pattern Overlay */}
            {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* Commuter Status Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.commuterStatusIcon, { backgroundColor: selectedCommuterType ? colors.success : colors.warning }]}>
                  <MaterialCommunityIcons
                    name={selectedCommuterType ? "account-check" : "account-clock"}
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Commuter Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.heroRole}>
                  {selectedCommuterType ? 'Active Commuter' : 'Setup Required'}
                </Text>

                {/* Commuter Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{bookings.length}</Text>
                    <Text style={styles.heroStatLabel}>BOOKINGS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{selectedCommuterType ? '1' : '0'}</Text>
                    <Text style={styles.heroStatLabel}>ACTIVE</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>4.8</Text>
                    <Text style={styles.heroStatLabel}>RATING</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

        {/* Commuter Type Selection */}
        <View style={styles.commuterTypeCard}>
          <View style={styles.commuterTypeHeader}>
            <Text style={styles.commuterTypeTitle}>Transport Preferences</Text>
            <Text style={styles.commuterTypeSubtitle}>
              Choose your primary transportation need
            </Text>
          </View>
          <View style={styles.commuterTypeGrid}>
            {commuterTypes.map((type) => (
              <TouchableOpacity
                key={type.type}
                style={[
                  styles.commuterTypeOption,
                  selectedCommuterType === type.type && styles.commuterTypeOptionActive,
                ]}
                onPress={() => handleCommuterTypeSelect(type.type)}
              >
                <View style={[
                  styles.commuterTypeIcon,
                  selectedCommuterType === type.type && styles.commuterTypeIconActive,
                ]}>
                  <MaterialCommunityIcons
                    name={type.icon as any}
                    size={24}
                    color={selectedCommuterType === type.type ? colors.surface : colors.primary}
                  />
                </View>
                <Text style={[
                  styles.commuterTypeLabel,
                  selectedCommuterType === type.type && styles.commuterTypeLabelActive,
                ]}>
                  {type.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: colors.primaryLight + '30' }]}>
              <MaterialCommunityIcons name="calendar-check" size={20} color={colors.primary} />
            </View>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: colors.success + '30' }]}>
              <MaterialCommunityIcons name="clock-outline" size={20} color={colors.success} />
            </View>
            <Text style={styles.statValue}>95%</Text>
            <Text style={styles.statLabel}>On Time</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: colors.warning + '30' }]}>
              <MaterialCommunityIcons name="map-marker-path" size={20} color={colors.warning} />
            </View>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Routes</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: colors.info + '30' }]}>
              <MaterialCommunityIcons name="cash-multiple" size={20} color={colors.info} />
            </View>
            <Text style={styles.statValue}>R450</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsCard}>
          <View style={styles.quickActionsHeader}>
            <Text style={styles.quickActionsTitle}>Quick Actions</Text>
          </View>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.quickActionItem}
                onPress={action.action}
              >
                <View style={styles.quickActionIcon}>
                  <MaterialCommunityIcons
                    name={action.icon as any}
                    size={24}
                    color={colors.primary}
                  />
                </View>
                <Text style={styles.quickActionLabel}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Bookings */}
        <View style={styles.bookingsCard}>
          <View style={styles.bookingsHeader}>
            <Text style={styles.bookingsTitle}>Recent Bookings</Text>
            <TouchableOpacity>
              <Text style={{ color: colors.primary, fontWeight: '600' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bookingsContent}>
            {bookings.length > 0 ? (
              bookings.slice(0, 3).map((booking, index) => (
                <View key={index} style={styles.bookingItem}>
                  <View style={styles.bookingIcon}>
                    <MaterialCommunityIcons name="bus" size={20} color={colors.primary} />
                  </View>
                  <View style={styles.bookingDetails}>
                    <Text style={styles.bookingTitle}>Morning Commute</Text>
                    <Text style={styles.bookingSubtitle}>Route A • 07:30 AM</Text>
                  </View>
                  <View style={styles.bookingStatus}>
                    <Text style={styles.bookingStatusText}>Confirmed</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.emptyState}>
                <MaterialCommunityIcons
                  name="calendar-blank"
                  size={60}
                  color={colors.textSecondary}
                  style={styles.emptyIcon}
                />
                <Text style={styles.emptyTitle}>No bookings yet</Text>
                <Text style={styles.emptySubtitle}>
                  Book your first trip to get started with your commuting journey.
                </Text>
                <TouchableOpacity style={styles.emptyAction}>
                  <Text style={styles.emptyActionText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <FAB
        icon={() => <MaterialCommunityIcons name="plus" size={24} color="white" />}
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: colors.primary,
        }}
        onPress={() => {
          // Navigate to booking screen
        }}
      />
    </View>
  );
};

export default CommuterHomeScreen;
