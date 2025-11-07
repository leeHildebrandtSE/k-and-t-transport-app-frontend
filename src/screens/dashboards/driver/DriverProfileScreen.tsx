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
import { DriverProfileScreenProps } from '../../../types/Dashboard';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthService } from '../../../services/AuthService';

const DriverProfileScreen: React.FC<DriverProfileScreenProps> = ({ user, onLogout: propOnLogout }) => {
  const [refreshing, setRefreshing] = useState(false);

  let logout;
  try {
    const authContext = useAuth();
    logout = authContext.logout;
  } catch (error) {
    console.error('useAuth error:', error);
    logout = null;
  }

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleLogout = async () => {
    console.log('Logout button clicked'); // Debug log
    console.log('Available logout methods:', { logout: !!logout, propOnLogout: !!propOnLogout });

    // Use web-compatible confirmation instead of Alert.alert
    const shouldLogout = window.confirm('Are you sure you want to sign out?');

    if (!shouldLogout) {
      console.log('Logout cancelled by user');
      return;
    }

    try {
      console.log('Attempting logout...'); // Debug log
      // Use context logout first, fallback to prop, then AuthService
      if (logout) {
        console.log('Using context logout');
        await logout();
        console.log('Context logout completed');
      } else if (propOnLogout) {
        console.log('Using prop logout');
        propOnLogout();
      } else {
        console.log('Using AuthService logout as fallback');
        await AuthService.logout();
        // Manually trigger app logout since AuthService won't call the context
        window.alert('You have been logged out. Please refresh the page.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Please try again.';
      window.alert(`Failed to sign out: ${errorMessage}`);
    }
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Cape Town Professional Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={driverDashboardStyles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Profile-themed Overlay */}
        <View style={driverDashboardStyles.profileBackgroundOverlay} />
        <View style={driverDashboardStyles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Profile Card */}
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
              <View style={driverDashboardStyles.africanLine1} />
              <View style={driverDashboardStyles.africanLine2} />
            </View>

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
          </LinearGradient>
        </View>

        {/* Professional Details Card */}
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="card-account-details" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.sectionTitle}>Professional Details</Text>
            </View>

            <View style={driverDashboardStyles.premiumPassengerList}>
              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="identifier" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Driver ID</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Professional Driver Identification</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="badge-account" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>DRV-{user.id.slice(-4)}</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>VERIFIED</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.success, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="card-account-details-outline" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>License Number</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Valid Professional Driving License</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="certificate" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>DL-{Math.random().toString().slice(2,8)}</Text>
                    </View>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="calendar-check" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Expires Dec 31, 2025</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>ACTIVE</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.info, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="bus" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Assigned Vehicle</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Mercedes Sprinter • Cape Town Fleet</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="car" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>BUS-001</Text>
                    </View>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="cog" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Excellent condition</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.info }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>ASSIGNED</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Contact Information Card */}
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="card-account-mail" size={24} color={colors.success} />
              <Text style={driverDashboardStyles.sectionTitle}>Contact Information</Text>
            </View>

            <View style={driverDashboardStyles.premiumPassengerList}>
              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="email" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Email Address</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Professional Communication</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="at" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>{user.email}</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>VERIFIED</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.success, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="phone" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Phone Number</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Emergency & Route Communication</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="cellphone" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>{user.phone || '+27 81 234 5678'}</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>ACTIVE</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.warning, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="map-marker" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Base Location</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Operations Hub • Cape Town</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="office-building" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Cape Town Central</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.warning }]}>
                  <MaterialCommunityIcons name="check" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>ASSIGNED</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>

        {/* Premium Actions */}
        <Card style={driverDashboardStyles.enhancedPassengerCard}>
          <Card.Content>
            <View style={driverDashboardStyles.sectionHeader}>
              <MaterialCommunityIcons name="cog-outline" size={24} color={colors.info} />
              <Text style={driverDashboardStyles.sectionTitle}>Quick Actions</Text>
            </View>

            <View style={driverDashboardStyles.premiumPassengerList}>
              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="account-edit" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Edit Profile</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Update your information & preferences</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="pencil" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Personal details</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.primary }]}>
                  <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>EDIT</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.success, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="car-cog" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Vehicle Info</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Manage your assigned vehicle details</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="car" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>BUS-001</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.success }]}>
                  <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>VIEW</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.premiumPassengerItem}>
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.warning, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="bell-ring" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Notifications</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>Alert preferences & settings</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="bell" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>All enabled</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.warning }]}>
                  <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>SETTINGS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={driverDashboardStyles.premiumPassengerItem}
                onPress={handleLogout}
              >
                <View style={[driverDashboardStyles.passengerAvatar, { backgroundColor: colors.error, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name="logout" size={24} color="#fff" />
                </View>
                <View style={driverDashboardStyles.premiumPassengerInfo}>
                  <Text style={driverDashboardStyles.premiumPassengerName}>Sign Out</Text>
                  <Text style={driverDashboardStyles.premiumPassengerDetails}>End your current session securely</Text>
                  <View style={driverDashboardStyles.passengerMetrics}>
                    <View style={driverDashboardStyles.passengerMetric}>
                      <MaterialCommunityIcons name="shield-check" size={14} color={colors.textSecondary} />
                      <Text style={driverDashboardStyles.passengerMetricText}>Secure logout</Text>
                    </View>
                  </View>
                </View>
                <View style={[driverDashboardStyles.passengerStatus, { backgroundColor: colors.error }]}>
                  <MaterialCommunityIcons name="logout" size={16} color="#fff" />
                  <Text style={driverDashboardStyles.passengerStatusText}>LOGOUT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>

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

export default DriverProfileScreen;
