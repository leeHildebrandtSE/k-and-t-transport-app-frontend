import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import {
  Card,
  List,
  Switch,
  Button,
  Divider,
  Text,
  Avatar,
  TouchableRipple,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import DashboardHeader from '../components/ui/DashboardHeader';
import { settingsScreenStyles } from '../styles/screens/settingsScreen';

interface SettingsScreenProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ route }) => {
  const { user, onLogout } = route.params;
  const navigation = useNavigation();

  // Settings state
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [locationTracking, setLocationTracking] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoBooking, setAutoBooking] = useState(false);

  const handleProfileEdit = () => {
    // Navigate to profile edit screen
    Alert.alert('Profile Edit', 'Profile editing screen will be implemented');
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change screen will be implemented');
  };

  const handlePrivacyPolicy = () => {
    Alert.alert('Privacy Policy', 'Privacy policy will be displayed');
  };

  const handleTermsOfService = () => {
    Alert.alert('Terms of Service', 'Terms of service will be displayed');
  };

  const handleSupport = () => {
    Alert.alert('Support', 'Support screen will be implemented');
  };

  const handleDataExport = () => {
    Alert.alert(
      'Export Data',
      'Are you sure you want to export your data? This may take a few minutes.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Export', onPress: () => {
          // Implement data export
        }}
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // Implement account deletion
          }
        }
      ]
    );
  };

  const styles = settingsScreenStyles;

  return (
    <View style={styles.container}>
      <DashboardHeader
        user={user}
        title="Settings"
        subtitle="Manage your preferences"
        showGradient={true}
        onNotificationPress={() => navigation.navigate('Notifications' as never)}
      />

      <ScrollView style={styles.scrollContainer}>
        {/* Account Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Account</Text>

            <View style={styles.profileSection}>
              <Avatar.Text
                size={60}
                label={`${user.firstName[0]}${user.lastName[0]}`}
                style={styles.avatar}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text style={styles.profileEmail}>{user.email}</Text>
                <Text style={styles.profileRole}>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Text>
              </View>
            </View>

            <List.Item
              title="Edit Profile"
              description="Update your personal information"
              left={(props) => <List.Icon {...props} icon="account-edit" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handleProfileEdit}
              style={styles.listItem}
            />

            <List.Item
              title="Change Password"
              description="Update your password"
              left={(props) => <List.Icon {...props} icon="lock" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handleChangePassword}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        {/* Notifications Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Notifications</Text>

            <List.Item
              title="Enable Notifications"
              description="Receive important updates"
              left={(props) => <List.Icon {...props} icon="bell" />}
              right={() => (
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                />
              )}
              style={styles.listItem}
            />

            {notificationsEnabled && (
              <>
                <List.Item
                  title="Push Notifications"
                  description="Real-time mobile alerts"
                  left={(props) => <List.Icon {...props} icon="cellphone" />}
                  right={() => (
                    <Switch
                      value={pushNotifications}
                      onValueChange={setPushNotifications}
                    />
                  )}
                  style={styles.listItem}
                />

                <List.Item
                  title="Email Notifications"
                  description="Important updates via email"
                  left={(props) => <List.Icon {...props} icon="email" />}
                  right={() => (
                    <Switch
                      value={emailNotifications}
                      onValueChange={setEmailNotifications}
                    />
                  )}
                  style={styles.listItem}
                />
              </>
            )}
          </Card.Content>
        </Card>

        {/* Privacy & Security Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Privacy & Security</Text>

            <List.Item
              title="Location Tracking"
              description="Allow location for better service"
              left={(props) => <List.Icon {...props} icon="map-marker" />}
              right={() => (
                <Switch
                  value={locationTracking}
                  onValueChange={setLocationTracking}
                />
              )}
              style={styles.listItem}
            />

            <List.Item
              title="Data Export"
              description="Download your data"
              left={(props) => <List.Icon {...props} icon="download" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handleDataExport}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        {/* App Preferences Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>App Preferences</Text>

            <List.Item
              title="Dark Mode"
              description="Use dark theme"
              left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
              right={() => (
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                />
              )}
              style={styles.listItem}
            />

            {user.role === 'commuter' && (
              <List.Item
                title="Auto Booking"
                description="Automatically book recurring trips"
                left={(props) => <List.Icon {...props} icon="calendar-sync" />}
                right={() => (
                  <Switch
                    value={autoBooking}
                    onValueChange={setAutoBooking}
                  />
                )}
                style={styles.listItem}
              />
            )}
          </Card.Content>
        </Card>

        {/* Support Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Support & Legal</Text>

            <List.Item
              title="Help & Support"
              description="Get help with the app"
              left={(props) => <List.Icon {...props} icon="help-circle" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handleSupport}
              style={styles.listItem}
            />

            <List.Item
              title="Privacy Policy"
              description="How we handle your data"
              left={(props) => <List.Icon {...props} icon="shield-account" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handlePrivacyPolicy}
              style={styles.listItem}
            />

            <List.Item
              title="Terms of Service"
              description="App usage terms"
              left={(props) => <List.Icon {...props} icon="file-document" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={handleTermsOfService}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        {/* Danger Zone */}
        <Card style={[styles.card, styles.dangerCard]}>
          <Card.Content>
            <Text variant="titleLarge" style={[styles.sectionTitle, styles.dangerTitle]}>Danger Zone</Text>

            <Button
              mode="outlined"
              icon="delete"
              onPress={handleDeleteAccount}
              style={styles.deleteButton}
              buttonColor="transparent"
              textColor="#d32f2f"
            >
              Delete Account
            </Button>
          </Card.Content>
        </Card>

        {/* Logout Button */}
        <Button
          mode="contained"
          icon="logout"
          onPress={onLogout}
          style={styles.logoutButton}
          buttonColor="#f44336"
        >
          Logout
        </Button>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
