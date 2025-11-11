import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {
  Chip,
  Text,
  Avatar,
  Card,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CommuterHeroBackground } from '../../../../assets';

import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { commuterDashboardStyles, commuterGradientConfigs } from '../../../styles/screens/dashboards/commuterDashboard';
import { CommuterProfileScreenProps } from '../../../types/Dashboard';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthService } from '../../../services/AuthService';

const { width } = Dimensions.get('window');

// Responsive breakpoints
const isTablet = width >= 768;
const isDesktop = width >= 1024;
const isMobile = width < 768;

const CommuterProfileScreen: React.FC<CommuterProfileScreenProps> = ({ user, onLogout: propOnLogout }) => {
  const styles = commuterDashboardStyles;

  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  let logout: (() => Promise<void>) | null = null;
  try {
    const authContext = useAuth();
    logout = authContext.logout;
  } catch (error) {
    console.error('useAuth error:', error);
    logout = null;
  }

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
    <View style={styles.container}>
      {/* Cape Town Professional Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Profile Card */}
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
            {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* Profile Image with Premium Frame */}
              <View style={styles.profileImageFrame}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                  style={[styles.commuterStatusIcon, { borderColor: 'rgba(255,255,255,0.3)', borderWidth: 4 }]}
                  resizeMode="cover"
                />
                <View style={styles.onlineIndicator} />
              </View>

              {/* Profile Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.heroRole}>Cape Town Commuter</Text>

                {/* Profile Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>4.8</Text>
                    <Text style={styles.heroStatLabel}>RATING</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>24</Text>
                    <Text style={styles.heroStatLabel}>TRIPS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>98%</Text>
                    <Text style={styles.heroStatLabel}>ON-TIME</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

        {/* Premium Quick Actions */}
        <Card style={styles.enhancedPassengerCard}>
          <Card.Content>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="cog-outline" size={24} color={colors.info} />
              <Text style={styles.sectionTitle}>Quick Actions</Text>
            </View>

          <View style={styles.premiumPassengerList}>
            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.secondary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="account-edit" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Edit Profile</Text>
                <Text style={styles.premiumPassengerDetails}>Update your personal information & preferences</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="pencil" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>Personal details</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.secondary }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>EDIT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="map-marker-path" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Transport Preferences</Text>
                <Text style={styles.premiumPassengerDetails}>Manage your commuting routes & preferences</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="router" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>Route settings</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.primary }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>MANAGE</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.warning, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="card-bulleted" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Notifications</Text>
                <Text style={styles.premiumPassengerDetails}>Alert preferences & trip notifications</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="bell" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>All enabled</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.warning }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>SETTINGS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.info, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="help-circle" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Help & Support</Text>
                <Text style={styles.premiumPassengerDetails}>Get assistance & contact support team</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="headset" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>24/7 support</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.info }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>HELP</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.premiumPassengerItem}
              onPress={handleLogout}
            >
              <View style={[styles.passengerAvatar, { backgroundColor: colors.error, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="logout" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Sign Out</Text>
                <Text style={styles.premiumPassengerDetails}>End your current session securely</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="shield-check" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>Secure logout</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.error }]}>
                <MaterialCommunityIcons name="logout" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>LOGOUT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>

        {/* App Version Footer */}
        <View style={styles.appFooter}>
          <Text style={styles.footerText}>K&T Transport Commuter App</Text>
          <Text style={styles.versionText}>Version 2.1.0</Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

export default CommuterProfileScreen;
