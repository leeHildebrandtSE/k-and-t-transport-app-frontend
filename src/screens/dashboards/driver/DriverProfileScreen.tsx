import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Text,
  Avatar,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { driverDashboardStyles } from '../../../styles/screens/dashboards/driverDashboard';
import { DriverProfileScreenProps } from '../../../types/Dashboard';

const DriverProfileScreen: React.FC<DriverProfileScreenProps> = ({ user, onLogout }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={driverDashboardStyles.container}>
      {/* Premium Background Graphics */}
      <View style={driverDashboardStyles.premiumBackgroundContainer}>
        <Animated.View style={[driverDashboardStyles.backgroundBlob1, { backgroundColor: `${colors.primary}08` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob2, { backgroundColor: `${colors.success}06` }]} />
        <Animated.View style={[driverDashboardStyles.backgroundBlob3, { backgroundColor: `${colors.warning}05` }]} />
      </View>

      <ScrollView
        style={driverDashboardStyles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Profile Card */}
        <View style={driverDashboardStyles.heroProfileCard}>
          <View style={driverDashboardStyles.heroGradientOverlay}>
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
          </View>
        </View>

        {/* Professional Details Card */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content>
            <View style={driverDashboardStyles.cardHeader}>
              <MaterialCommunityIcons name="card-account-details" size={24} color={colors.primary} />
              <Text style={driverDashboardStyles.premiumCardTitle}>Professional Details</Text>
            </View>

            <View style={driverDashboardStyles.detailsGrid}>
              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="identifier" size={20} color={colors.primary} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>Driver ID</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>DRV-{user.id.slice(-4)}</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="card-account-details-outline" size={20} color={colors.success} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>License Number</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>DL-{Math.random().toString().slice(2,8)}</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="calendar-check" size={20} color={colors.warning} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>License Expiry</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>Dec 31, 2025</Text>
                </View>
              </View>

              <View style={driverDashboardStyles.detailItem}>
                <View style={driverDashboardStyles.detailIcon}>
                  <MaterialCommunityIcons name="bus" size={20} color={colors.info} />
                </View>
                <View style={driverDashboardStyles.detailContent}>
                  <Text style={driverDashboardStyles.premiumDetailLabel}>Assigned Vehicle</Text>
                  <Text style={driverDashboardStyles.premiumDetailValue}>BUS-001 • Mercedes Sprinter</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Contact Information Card */}
        <Card style={driverDashboardStyles.premiumCard}>
          <Card.Content>
            <View style={driverDashboardStyles.cardHeader}>
              <MaterialCommunityIcons name="card-account-mail" size={24} color={colors.success} />
              <Text style={driverDashboardStyles.premiumCardTitle}>Contact Information</Text>
            </View>

            <View style={driverDashboardStyles.contactGrid}>
              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.primary + '15' }]}>
                  <MaterialCommunityIcons name="email" size={24} color={colors.primary} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Email Address</Text>
                  <Text style={driverDashboardStyles.contactValue}>{user.email}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.success + '15' }]}>
                  <MaterialCommunityIcons name="phone" size={24} color={colors.success} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Phone Number</Text>
                  <Text style={driverDashboardStyles.contactValue}>{user.phone || '+27 81 234 5678'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={driverDashboardStyles.contactItem}>
                <View style={[driverDashboardStyles.contactIcon, { backgroundColor: colors.warning + '15' }]}>
                  <MaterialCommunityIcons name="map-marker" size={24} color={colors.warning} />
                </View>
                <View style={driverDashboardStyles.contactContent}>
                  <Text style={driverDashboardStyles.contactLabel}>Base Location</Text>
                  <Text style={driverDashboardStyles.contactValue}>Johannesburg Central</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>

        {/* Premium Action Grid */}
        <View style={driverDashboardStyles.actionGrid}>
          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumPrimaryAction]}>
            <View style={driverDashboardStyles.actionIcon}>
              <MaterialCommunityIcons name="account-edit" size={28} color="#fff" />
            </View>
            <Text style={[driverDashboardStyles.actionTitle, { color: '#fff' }]}>Edit Profile</Text>
            <Text style={[driverDashboardStyles.actionSubtitle, { color: 'rgba(255,255,255,0.8)' }]}>Update your information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.success }]}>
              <MaterialCommunityIcons name="car-cog" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Vehicle Info</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Manage your vehicle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.warning }]}>
              <MaterialCommunityIcons name="bell-ring" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Notifications</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Alert preferences</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.info }]}>
              <MaterialCommunityIcons name="help-circle" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>Help Center</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Support & guides</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[driverDashboardStyles.actionCard, driverDashboardStyles.premiumSecondaryAction]}>
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.textSecondary }]}>
              <MaterialCommunityIcons name="cog" size={28} color="#fff" />
            </View>
            <Text style={driverDashboardStyles.actionTitle}>App Settings</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>Preferences & privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[driverDashboardStyles.actionCard, driverDashboardStyles.logoutAction]}
            onPress={onLogout}
          >
            <View style={[driverDashboardStyles.actionIcon, { backgroundColor: colors.error }]}>
              <MaterialCommunityIcons name="logout" size={28} color="#fff" />
            </View>
            <Text style={[driverDashboardStyles.actionTitle, { color: colors.error }]}>Sign Out</Text>
            <Text style={driverDashboardStyles.actionSubtitle}>End your session</Text>
          </TouchableOpacity>
        </View>

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
