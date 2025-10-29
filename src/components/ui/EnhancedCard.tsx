import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import { Card, Title, Paragraph, Surface } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, animations } from '../../styles/theme';

interface EnhancedCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'gradient' | 'glass' | 'elevated';
  gradientColors?: string[];
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  style?: any;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  title,
  subtitle,
  children,
  onPress,
  variant = 'default',
  gradientColors = colors.gradientPrimary,
  icon,
  headerAction,
  loading = false,
  disabled = false,
  style,
}) => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
      ...animations.springConfig,
    }).start();
  };

  const handlePressOut = () => {
    setPressed(false);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      ...animations.springConfig,
    }).start();
  };

  const renderContent = () => (
    <View>
      {(title || subtitle || icon || headerAction) && (
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <View style={styles.headerText}>
              {title && (
                <Title style={[
                  styles.title,
                  variant === 'gradient' && styles.titleOnGradient
                ]}>
                  {title}
                </Title>
              )}
              {subtitle && (
                <Paragraph style={[
                  styles.subtitle,
                  variant === 'gradient' && styles.subtitleOnGradient
                ]}>
                  {subtitle}
                </Paragraph>
              )}
            </View>
          </View>
          {headerAction && (
            <View style={styles.headerAction}>{headerAction}</View>
          )}
        </View>
      )}
      {children && (
        <View style={styles.content}>{children}</View>
      )}
    </View>
  );

  const getCardStyle = () => {
    switch (variant) {
      case 'gradient':
        return [styles.gradientCard, style];
      case 'glass':
        return [styles.glassCard, style];
      case 'elevated':
        return [styles.elevatedCard, style];
      default:
        return [styles.defaultCard, style];
    }
  };

  if (onPress && !disabled) {
    return (
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={({ pressed: pressedState }) => [
            getCardStyle(),
            pressedState && styles.pressedCard,
            disabled && styles.disabledCard,
          ]}
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
        </Pressable>
      </Animated.View>
    );
  }

  return (
    <View style={getCardStyle()}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  defaultCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    ...shadows.sm,
  },

  gradientCard: {
    borderRadius: borderRadius.lg,
    marginVertical: spacing.sm,
    overflow: 'hidden',
    ...shadows.md,
  },

  glassCard: {
    backgroundColor: colors.glass,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.sm,
  },

  elevatedCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    ...shadows.lg,
  },

  gradientBackground: {
    padding: spacing.lg,
  },

  pressedCard: {
    transform: [{ scale: 0.98 }],
  },

  disabledCard: {
    opacity: 0.6,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },

  icon: {
    marginRight: spacing.md,
    marginTop: spacing.xs,
  },

  headerText: {
    flex: 1,
  },

  headerAction: {
    marginLeft: spacing.md,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  titleOnGradient: {
    color: colors.textInverse,
  },

  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  subtitleOnGradient: {
    color: colors.textInverse,
    opacity: 0.9,
  },

  content: {
    // Content styling will depend on children
  },
});

export default EnhancedCard;
