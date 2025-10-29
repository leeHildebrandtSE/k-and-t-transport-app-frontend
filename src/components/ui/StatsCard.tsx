import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Icon, Surface } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, animations } from '../../styles/theme';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  iconColor?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'gradient' | 'minimal';
  gradientColors?: string[];
  animated?: boolean;
  onPress?: () => void;
  style?: any;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  trend,
  trendValue,
  variant = 'default',
  gradientColors = colors.gradientPrimary,
  animated = true,
  onPress,
  style,
}) => {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    if (animated) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: animations.slow,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: animations.slow,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          ...animations.springConfig,
        }),
      ]).start();
    } else {
      slideAnim.setValue(0);
      fadeAnim.setValue(1);
      scaleAnim.setValue(1);
    }
  }, [animated]);

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return 'trending-up';
      case 'down':
        return 'trending-down';
      default:
        return 'trending-neutral';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return colors.success;
      case 'down':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      if (val >= 1000000) {
        return `${(val / 1000000).toFixed(1)}M`;
      }
      if (val >= 1000) {
        return `${(val / 1000).toFixed(1)}K`;
      }
      return val.toLocaleString();
    }
    return val;
  };

  const renderContent = () => (
    <View style={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[
          styles.title,
          variant === 'gradient' && styles.titleOnGradient
        ]}>
          {title}
        </Text>
        {icon && (
          <Icon
            source={icon}
            size={20}
            color={
              iconColor ||
              (variant === 'gradient' ? colors.textInverse : colors.primary)
            }
          />
        )}
      </View>

      {/* Value */}
      <Text style={[
        styles.value,
        variant === 'gradient' && styles.valueOnGradient
      ]}>
        {formatValue(value)}
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        {subtitle && (
          <Text style={[
            styles.subtitle,
            variant === 'gradient' && styles.subtitleOnGradient
          ]}>
            {subtitle}
          </Text>
        )}

        {trend && trendValue && (
          <View style={styles.trend}>
            <Icon
              source={getTrendIcon()}
              size={14}
              color={variant === 'gradient' ? colors.textInverse : getTrendColor()}
            />
            <Text style={[
              styles.trendValue,
              { color: variant === 'gradient' ? colors.textInverse : getTrendColor() }
            ]}>
              {trendValue}
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  const getContainerStyle = () => {
    switch (variant) {
      case 'gradient':
        return [styles.gradientCard, style];
      case 'minimal':
        return [styles.minimalCard, style];
      default:
        return [styles.defaultCard, style];
    }
  };

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: scaleAnim },
          ],
        },
      ]}
    >
      <Surface
        style={getContainerStyle()}
        elevation={variant === 'minimal' ? 0 : 3}
      >
        {variant === 'gradient' ? (
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
          >
            {renderContent()}
          </LinearGradient>
        ) : (
          renderContent()
        )}
      </Surface>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  defaultCard: {
    borderRadius: borderRadius.lg,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    margin: spacing.sm,
  },

  gradientCard: {
    borderRadius: borderRadius.lg,
    margin: spacing.sm,
    overflow: 'hidden',
  },

  minimalCard: {
    borderRadius: borderRadius.md,
    backgroundColor: 'transparent',
    padding: spacing.md,
    margin: spacing.xs,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  gradientBackground: {
    padding: spacing.lg,
  },

  content: {
    minHeight: 100,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    flex: 1,
  },

  titleOnGradient: {
    color: colors.textInverse,
    opacity: 0.9,
  },

  value: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
    lineHeight: 32,
  },

  valueOnGradient: {
    color: colors.textInverse,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 16,
  },

  subtitleOnGradient: {
    color: colors.textInverse,
    opacity: 0.8,
  },

  trend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  trendValue: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default StatsCard;
