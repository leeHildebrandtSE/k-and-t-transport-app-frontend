import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Chip,
  Text,
  Avatar,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { commuterDashboardStyles } from '../../../styles/screens/dashboards/commuterDashboard';
import { CommuterProfileScreenProps } from '../../../types/Dashboard';

const CommuterProfileScreen: React.FC<CommuterProfileScreenProps> = ({ user, onLogout }) => {
  const styles = commuterDashboardStyles;

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

export default CommuterProfileScreen;
