import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
  Animated,
  TouchableOpacity,
  Alert,
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
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { User, CommuterType } from '../../types/User';
import { Booking } from '../../types/Booking';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { commuterDashboardStyles } from '../../styles/screens/dashboards/commuterDashboard';
import DashboardHeader from '../../components/ui/DashboardHeader';

interface CommuterDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const Tab = createBottomTabNavigator();

// Home Screen Component for Commuters
const CommuterHomeScreen: React.FC<{ user: User }> = ({ user }) => {
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

  const quickActions = [
    { label: 'Book Trip', icon: 'plus-circle', action: () => {} },
    { label: 'View Routes', icon: 'map', action: () => {} },
    { label: 'Payment History', icon: 'credit-card', action: () => {} },
    { label: 'Live Tracking', icon: 'map-marker', action: () => {} },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>
            Welcome, {user.firstName}!
          </Text>
          <Text style={styles.roleText}>
            Commuter Dashboard
          </Text>
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
        icon="plus"
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

// Bookings Screen Component
const CommuterBookingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons
            name="calendar-multiple"
            size={80}
            color={colors.textSecondary}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Booking Management</Text>
          <Text style={styles.emptySubtitle}>
            Manage all your transport bookings in one place
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Tracking Screen Component
const CommuterTrackingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={80}
            color={colors.textSecondary}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Live Tracking</Text>
          <Text style={styles.emptySubtitle}>
            Track your transport in real-time when available
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Profile Screen Component
const CommuterProfileScreen: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Premium Profile Hero Card */}
        <View style={styles.profileHeroCard}>
          <View style={styles.profileHeroBackground}>
            <View style={styles.profileHeroGradient} />
          </View>

          <View style={styles.profileHeroContent}>
            <Avatar.Text
              size={100}
              label={`${user.firstName[0]}${user.lastName[0]}`}
              style={styles.profileAvatar}
            />

            <Text style={styles.profileName}>
              {user.firstName} {user.lastName}
            </Text>

            <View style={styles.profileContactInfo}>
              <Text style={styles.profileEmail}>{user.email}</Text>
              <Text style={styles.profilePhone}>{user.phone}</Text>
            </View>

            <Chip
              mode="flat"
              style={styles.profileRoleChip}
              textStyle={{ color: colors.primary, fontWeight: '600' }}
            >
              Commuter
            </Chip>
          </View>
        </View>

        {/* Premium Settings Card */}
        <View style={styles.profileSettingsCard}>
          <View style={styles.profileSettingsHeader}>
            <Text style={styles.profileSettingsTitle}>Account Settings</Text>
          </View>

          <View style={styles.profileSettingsContent}>
            <TouchableOpacity style={styles.profileSettingButton}>
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Edit Profile</Text>
                  <Text style={styles.profileSettingSubtitle}>Update your personal information</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileSettingButton}>
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="map-marker-path"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Transport Preferences</Text>
                  <Text style={styles.profileSettingSubtitle}>Manage your commuting preferences</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileSettingButton}>
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="bell"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Notifications</Text>
                  <Text style={styles.profileSettingSubtitle}>Configure your notification preferences</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileSettingButton}>
              <View style={styles.profileSettingButtonContent}>
                <View style={styles.profileSettingIcon}>
                  <MaterialCommunityIcons
                    name="help-circle"
                    size={20}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.profileSettingInfo}>
                  <Text style={styles.profileSettingTitle}>Help & Support</Text>
                  <Text style={styles.profileSettingSubtitle}>Get help or contact support</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileLogoutButton}
              onPress={onLogout}
            >
              <View style={styles.profileLogoutButtonContent}>
                <View style={styles.profileLogoutIcon}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={20}
                    color={colors.error}
                  />
                </View>
                <Text style={styles.profileLogoutText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Main Dashboard Component
const CommuterDashboard: React.FC<CommuterDashboardProps> = ({ route }) => {
  const { user, onLogout } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'calendar-multiple';
              break;
            case 'Tracking':
              iconName = 'map-marker-radius';
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
      <Tab.Screen name="Home">
        {() => <CommuterHomeScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Bookings" component={CommuterBookingsScreen} />
      <Tab.Screen name="Tracking" component={CommuterTrackingScreen} />
      <Tab.Screen name="Profile">
        {() => <CommuterProfileScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

// Using external styles for enhanced design and maintainability
const styles = commuterDashboardStyles;

export default CommuterDashboard;
