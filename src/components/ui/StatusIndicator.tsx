import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Icon, Chip } from 'react-native-paper';
import { colors, spacing, borderRadius, typography } from '../../styles/theme';

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'pending' | 'cancelled' | 'active' | 'inactive';
  text?: string;
  variant?: 'chip' | 'badge' | 'dot' | 'pill';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  animated?: boolean;
  style?: any;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  text,
  variant = 'chip',
  size = 'medium',
  icon,
  animated = false,
  style,
}) => {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (animated) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.8,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();
      return () => pulse.stop();
    }
  }, [animated, pulseAnim]);

  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          color: colors.success,
          backgroundColor: colors.successSoft,
          icon: icon || 'check-circle',
          text: text || 'Success',
        };
      case 'warning':
        return {
          color: colors.warning,
          backgroundColor: colors.warningSoft,
          icon: icon || 'alert-circle',
          text: text || 'Warning',
        };
      case 'error':
        return {
          color: colors.error,
          backgroundColor: colors.errorSoft,
          icon: icon || 'close-circle',
          text: text || 'Error',
        };
      case 'info':
        return {
          color: colors.info,
          backgroundColor: colors.infoSoft,
          icon: icon || 'information',
          text: text || 'Info',
        };
      case 'pending':
        return {
          color: colors.warning,
          backgroundColor: colors.warningSoft,
          icon: icon || 'clock',
          text: text || 'Pending',
        };
      case 'cancelled':
        return {
          color: colors.textMuted,
          backgroundColor: colors.surfaceVariant,
          icon: icon || 'cancel',
          text: text || 'Cancelled',
        };
      case 'active':
        return {
          color: colors.success,
          backgroundColor: colors.successSoft,
          icon: icon || 'play-circle',
          text: text || 'Active',
        };
      case 'inactive':
        return {
          color: colors.textMuted,
          backgroundColor: colors.surfaceVariant,
          icon: icon || 'pause-circle',
          text: text || 'Inactive',
        };
      default:
        return {
          color: colors.textSecondary,
          backgroundColor: colors.surfaceVariant,
          icon: icon || 'help-circle',
          text: text || status,
        };
    }
  };

  const config = getStatusConfig();

  if (variant === 'dot') {
    return (
      <Animated.View
        style={[
          styles.dot,
          styles[`${size}Dot`],
          { backgroundColor: config.color },
          animated && { opacity: pulseAnim },
          style,
        ]}
      />
    );
  }

  if (variant === 'badge') {
    return (
      <Animated.View
        style={[
          styles.badge,
          styles[`${size}Badge`],
          { backgroundColor: config.color },
          animated && { opacity: pulseAnim },
          style,
        ]}
      >
        <Text style={[styles.badgeText, styles[`${size}BadgeText`]]}>
          {config.text}
        </Text>
      </Animated.View>
    );
  }

  if (variant === 'pill') {
    return (
      <Animated.View
        style={[
          styles.pill,
          styles[`${size}Pill`],
          { backgroundColor: config.backgroundColor, borderColor: config.color },
          animated && { opacity: pulseAnim },
          style,
        ]}
      >
        <View style={[styles.pillDot, { backgroundColor: config.color }]} />
        <Text style={[styles.pillText, styles[`${size}PillText`], { color: config.color }]}>
          {config.text}
        </Text>
      </Animated.View>
    );
  }

  // Default: chip variant
  return (
    <Animated.View
      style={[
        animated && { opacity: pulseAnim },
        style,
      ]}
    >
      <Chip
        mode="outlined"
        icon={config.icon}
        textStyle={[
          styles.chipText,
          styles[`${size}ChipText`],
          { color: config.color }
        ]}
        style={[
          styles.chip,
          styles[`${size}Chip`],
          { backgroundColor: config.backgroundColor, borderColor: config.color }
        ]}
      >
        {config.text}
      </Chip>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  // Dot variant
  dot: {
    borderRadius: 50,
  },

  smallDot: {
    width: 8,
    height: 8,
  },

  mediumDot: {
    width: 12,
    height: 12,
  },

  largeDot: {
    width: 16,
    height: 16,
  },

  // Badge variant
  badge: {
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallBadge: {
    minHeight: 20,
  },

  mediumBadge: {
    minHeight: 24,
  },

  largeBadge: {
    minHeight: 28,
  },

  badgeText: {
    fontWeight: '600',
    color: colors.textInverse,
  },

  smallBadgeText: {
    fontSize: 10,
    lineHeight: 14,
  },

  mediumBadgeText: {
    fontSize: 12,
    lineHeight: 16,
  },

  largeBadgeText: {
    fontSize: 14,
    lineHeight: 18,
  },

  // Pill variant
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
  },

  smallPill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  mediumPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  largePill: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: spacing.sm,
  },

  pillText: {
    fontWeight: '500',
  },

  smallPillText: {
    fontSize: 11,
    lineHeight: 16,
  },

  mediumPillText: {
    fontSize: 12,
    lineHeight: 16,
  },

  largePillText: {
    fontSize: 14,
    lineHeight: 20,
  },

  // Chip variant
  chip: {
    borderWidth: 1,
  },

  smallChip: {
    height: 24,
  },

  mediumChip: {
    height: 32,
  },

  largeChip: {
    height: 36,
  },

  chipText: {
    fontWeight: '500',
  },

  smallChipText: {
    fontSize: 11,
    lineHeight: 16,
  },

  mediumChipText: {
    fontSize: 12,
    lineHeight: 16,
  },

  largeChipText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default StatusIndicator;
