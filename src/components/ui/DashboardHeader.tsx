import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { Text, Avatar, IconButton, Badge, Surface } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography } from '../../styles/theme';
import { User } from '../../types/User';
import { StatusIndicator } from '../ui';

interface DashboardHeaderProps {
  user: User;
  title?: string;
  subtitle?: string;
  notificationCount?: number;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
  onProfilePress?: () => void;
  onLogout?: () => void;
  showGradient?: boolean;
  actions?: React.ReactNode[];
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  user,
  title,
  subtitle,
  notificationCount = 0,
  onNotificationPress,
  onMenuPress,
  onProfilePress,
  onLogout,
  showGradient = true,
  actions = [],
}) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getUserRoleDisplay = () => {
    switch (user.role) {
      case 'parent':
        return 'Parent Account';
      case 'staff':
        return 'Staff Account';
      case 'driver':
        return 'Driver Account';
      case 'admin':
        return 'Admin Account';
      default:
        return 'User Account';
    }
  };

  const getUserInitials = () => {
    return `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase();
  };

  const renderContent = () => (
    <View style={styles.content}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {Platform.OS !== 'web' && (
          <IconButton
            icon="menu"
            size={24}
            iconColor={showGradient ? colors.textInverse : colors.text}
            onPress={onMenuPress}
            style={styles.menuButton}
          />
        )}

        <View style={styles.headerInfo}>
          <Text style={[
            styles.greeting,
            { color: showGradient ? colors.textInverse : colors.textSecondary }
          ]}>
            {getGreeting()}, {user.firstName}!
          </Text>
          <Text style={[
            styles.title,
            { color: showGradient ? colors.textInverse : colors.text }
          ]}>
            {title || getUserRoleDisplay()}
          </Text>
          {subtitle && (
            <Text style={[
              styles.subtitle,
              { color: showGradient ? colors.textInverse : colors.textSecondary }
            ]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {/* Custom Actions */}
        {actions.map((action, index) => (
          <View key={index} style={styles.actionItem}>
            {action}
          </View>
        ))}

        {/* Notifications */}
        <View style={styles.notificationContainer}>
          <IconButton
            icon="bell"
            size={24}
            iconColor={showGradient ? colors.textInverse : colors.text}
            onPress={onNotificationPress}
          />
          {notificationCount > 0 && (
            <Badge
              style={[styles.badge, { backgroundColor: colors.error }]}
              size={18}
            >
              {notificationCount > 99 ? '99+' : notificationCount}
            </Badge>
          )}
        </View>

        {/* Profile Avatar */}
        <Pressable onPress={onProfilePress} style={styles.avatarContainer}>
          <Avatar.Text
            size={40}
            label={getUserInitials()}
            style={[
              styles.avatar,
              { backgroundColor: showGradient ? colors.surface : colors.primary }
            ]}
            labelStyle={{
              color: showGradient ? colors.primary : colors.textInverse,
              fontSize: 16,
              fontWeight: '600',
            }}
          />
          <StatusIndicator
            status="active"
            variant="dot"
            size="small"
            style={styles.statusIndicator}
          />
        </Pressable>
      </View>
    </View>
  );

  if (showGradient) {
    return (
      <Surface style={styles.container} elevation={4}>
        <LinearGradient
          colors={colors.gradientPrimary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientContainer}
        >
          {renderContent()}
        </LinearGradient>
      </Surface>
    );
  }

  return (
    <Surface style={[styles.container, styles.flatContainer]} elevation={2}>
      {renderContent()}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
    overflow: 'hidden',
  },

  flatContainer: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },

  gradientContainer: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  menuButton: {
    marginRight: spacing.sm,
  },

  headerInfo: {
    flex: 1,
  },

  greeting: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 12,
    opacity: 0.8,
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  actionItem: {
    // Custom action styling if needed
  },

  notificationContainer: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },

  avatarContainer: {
    position: 'relative',
    marginLeft: spacing.sm,
  },

  avatar: {
    borderWidth: 2,
    borderColor: colors.surface,
  },

  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: colors.surface,
    borderRadius: 8,
  },
});

export default DashboardHeader;
