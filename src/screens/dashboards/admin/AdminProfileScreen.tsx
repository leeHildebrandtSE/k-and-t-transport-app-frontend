import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { adminDashboardStyles } from '../../../styles/screens/dashboards/adminDashboard';
import { AdminProfileScreenProps } from '../../../types/Dashboard';

const AdminProfileScreen: React.FC<AdminProfileScreenProps> = ({ user }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch latest user profile from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const styles = adminDashboardStyles;

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Profile Header */}
      <Card style={[styles.card, { marginTop: 20 }]}>
        <Card.Content style={{ alignItems: 'center', paddingVertical: 30 }}>
          <Avatar.Text
            size={100}
            label={`${user.firstName[0]}${user.lastName[0]}`}
            style={{ backgroundColor: colors.primary, marginBottom: 16 }}
          />
          <Text variant="titleLarge" style={styles.cardTitle}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={[styles.userEmail, { textAlign: 'center', marginBottom: 16 }]}>
            {user.email}
          </Text>
          <Chip
            mode="outlined"
            icon="shield-account"
            textStyle={{ color: colors.error }}
            style={{ borderColor: colors.error }}
          >
            SYSTEM ADMINISTRATOR
          </Chip>
        </Card.Content>
      </Card>

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
              icon="account-edit"
              onPress={() => {/* Edit profile */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Edit Profile
            </Button>

            <Button
              mode="outlined"
              icon="key-change"
              onPress={() => {/* Change password */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Change Password
            </Button>

            <Button
              mode="outlined"
              icon="download"
              onPress={() => {/* Export data */}}
              style={[styles.actionButton, { marginBottom: 12 }]}
            >
              Export System Data
            </Button>

            <Button
              mode="outlined"
              icon="backup-restore"
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

      {/* Support & About */}
      <Card style={[styles.card, { marginBottom: 30 }]}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardTitle}>Support & Information</Text>

          <Button
            mode="outlined"
            icon="help-circle"
            onPress={() => {/* Contact support */}}
            style={[styles.actionButton, { marginBottom: 12 }]}
          >
            Contact Support
          </Button>

          <Button
            mode="outlined"
            icon="information"
            onPress={() => {/* About system */}}
            style={[styles.actionButton, { marginBottom: 12 }]}
          >
            System Information
          </Button>

          <Button
            mode="outlined"
            icon="logout"
            onPress={() => {/* Logout */}}
            style={styles.actionButton}
            textColor={colors.error}
          >
            Sign Out
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default AdminProfileScreen;
