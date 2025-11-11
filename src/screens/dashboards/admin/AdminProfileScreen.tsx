import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Card,
  Button,
  Text,
  Avatar,
  Divider,
  Switch,
  Chip,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AdminHeroBackground, AdminProfilePhoto } from '../../../../assets';

import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../../styles/screens/dashboards/adminDashboard';
import { AdminProfileScreenProps } from '../../../types/Dashboard';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthService } from '../../../services/AuthService';

const AdminProfileScreen: React.FC<AdminProfileScreenProps> = ({ user, onLogout: propOnLogout }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(true);
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

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest user profile from API
    setTimeout(() => setRefreshing(false), 2000);
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
  };  const styles = adminDashboardStyles;

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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero Admin Profile Card */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={AdminHeroBackground}
            style={styles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={adminGradientConfigs.hero.colors}
              start={adminGradientConfigs.hero.start}
              end={adminGradientConfigs.hero.end}
              style={styles.heroGradientOverlay}
            >
            {/* African Pattern Overlay */}
            {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* Profile Image with Premium Frame */}
              <View style={styles.profileImageFrame}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                  style={[styles.adminStatusIcon, { borderColor: 'rgba(255,255,255,0.3)', borderWidth: 4 }]}
                  defaultSource={AdminProfilePhoto}
                  resizeMode="cover"
                />
                <View style={styles.onlineIndicator} />
              </View>

              {/* Profile Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.heroRole}>System Administrator</Text>

                {/* Admin Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>Admin</Text>
                    <Text style={styles.heroStatLabel}>ACCESS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>24/7</Text>
                    <Text style={styles.heroStatLabel}>SUPPORT</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>Full</Text>
                    <Text style={styles.heroStatLabel}>CONTROL</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

        {/* Account Information */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Account Information</Text>

          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="email" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email Address</Text>
              <Text style={styles.infoValue}>{user.email}</Text>
            </View>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="phone" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>{user.phone || 'Not provided'}</Text>
            </View>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="shield-account" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Role</Text>
              <Text style={styles.infoValue}>{user.role.toUpperCase()}</Text>
            </View>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="calendar-plus" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Account Created</Text>
              <Text style={styles.infoValue}>
                {user.dateJoined ? new Date(user.dateJoined).toLocaleDateString() : 'N/A'}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* System Preferences */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>System Preferences</Text>

          <View style={styles.preferenceRow}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Push Notifications</Text>
              <Text style={styles.preferenceDescription}>
                Receive alerts for system events and user activities
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.preferenceRow}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Dark Mode</Text>
              <Text style={styles.preferenceDescription}>
                Use dark theme for the admin dashboard
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.preferenceRow}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Auto Backup</Text>
              <Text style={styles.preferenceDescription}>
                Automatically backup system data daily
              </Text>
            </View>
            <Switch
              value={autoBackup}
              onValueChange={setAutoBackup}
            />
          </View>
        </Card.Content>
      </Card>

      {/* Admin Actions */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Administrative Actions</Text>

          <View style={styles.actionGrid}>
            <Button
              mode="outlined"
              icon={() => <MaterialCommunityIcons name="account-edit" size={20} color={colors.primary} />}
              onPress={() => {/* Edit profile */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Edit Profile
            </Button>

            <Button
              mode="outlined"
              icon={() => <MaterialCommunityIcons name="key-change" size={20} color={colors.primary} />}
              onPress={() => {/* Change password */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Change Password
            </Button>

            <Button
              mode="outlined"
              icon={() => <MaterialCommunityIcons name="download" size={20} color={colors.primary} />}
              onPress={() => {/* Export data */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Export System Data
            </Button>

            <Button
              mode="outlined"
              icon={() => <MaterialCommunityIcons name="backup-restore" size={20} color={colors.primary} />}
              onPress={() => {/* System backup */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Create System Backup
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* Security Settings */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Security & Privacy</Text>

          <View style={styles.securityItem}>
            <MaterialCommunityIcons name="two-factor-authentication" size={24} color={colors.success} />
            <View style={styles.securityContent}>
              <Text style={styles.securityLabel}>Two-Factor Authentication</Text>
              <Text style={styles.securityStatus}>Enabled</Text>
            </View>
            <Button
              mode="outlined"
              compact
              onPress={() => {/* Manage 2FA */}}
            >
              Manage
            </Button>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.securityItem}>
            <MaterialCommunityIcons name="shield-check" size={24} color={colors.success} />
            <View style={styles.securityContent}>
              <Text style={styles.securityLabel}>Session Management</Text>
              <Text style={styles.securityStatus}>Active Sessions: 2</Text>
            </View>
            <Button
              mode="outlined"
              compact
              onPress={() => {/* View sessions */}}
            >
              View
            </Button>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={styles.securityItem}>
            <MaterialCommunityIcons name="history" size={24} color={colors.warning} />
            <View style={styles.securityContent}>
              <Text style={styles.securityLabel}>Access Log</Text>
              <Text style={styles.securityStatus}>Last login: Today, 08:30</Text>
            </View>
            <Button
              mode="outlined"
              compact
              onPress={() => {/* View access log */}}
            >
              View Log
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* Premium Quick Actions */}
      <Card style={styles.enhancedPassengerCard}>
        <Card.Content>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="cog-outline" size={24} color={colors.info} />
            <Text style={styles.sectionTitle}>Quick Actions</Text>
          </View>

          <View style={styles.premiumPassengerList}>
            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.tertiary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="account-edit" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Edit Profile</Text>
                <Text style={styles.premiumPassengerDetails}>Update administrator account & preferences</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="pencil" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>Admin settings</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.tertiary }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>EDIT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.primary, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="database-cog" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>System Management</Text>
                <Text style={styles.premiumPassengerDetails}>Configure system settings & preferences</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="cog" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>All systems</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.primary }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>MANAGE</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.info, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="help-circle" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Support Center</Text>
                <Text style={styles.premiumPassengerDetails}>Access help resources & contact support</Text>
                <View style={styles.passengerMetrics}>
                  <View style={styles.passengerMetric}>
                    <MaterialCommunityIcons name="headset" size={14} color={colors.textSecondary} />
                    <Text style={styles.passengerMetricText}>24/7 available</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passengerStatus, { backgroundColor: colors.info }]}>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#fff" />
                <Text style={styles.passengerStatusText}>HELP</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumPassengerItem} onPress={handleLogout}>
              <View style={[styles.passengerAvatar, { backgroundColor: colors.error, width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }]}>
                <MaterialCommunityIcons name="logout" size={24} color="#fff" />
              </View>
              <View style={styles.premiumPassengerInfo}>
                <Text style={styles.premiumPassengerName}>Sign Out</Text>
                <Text style={styles.premiumPassengerDetails}>End administrative session securely</Text>
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
          <Text style={styles.footerText}>K&T Transport Admin App</Text>
          <Text style={styles.versionText}>Version 2.1.0</Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

export default AdminProfileScreen;
