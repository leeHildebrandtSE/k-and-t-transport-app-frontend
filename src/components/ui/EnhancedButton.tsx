import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Animated, ActivityIndicator } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, animations, typography } from '../../styles/theme';

interface EnhancedButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: any;
  textStyle?: any;
  gradientColors?: string[];
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
  gradientColors,
}) => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    if (disabled || loading) return;
    setPressed(true);
    Animated.spring(scaleAnim, {
      toValue: 0.96,
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

  const getButtonStyle = () => {
    const baseStyles = [
      styles.button,
      styles[`${size}Button` as keyof typeof styles],
      fullWidth && styles.fullWidth,
      (disabled || loading) && styles.disabledButton,
      style,
    ];

    if (variant === 'gradient') {
      return [
        ...baseStyles,
        styles.gradientButtonContainer,
      ];
    }

    // Add variant-specific styles for non-gradient variants
    const variantStyle = styles[`${variant}Button` as keyof typeof styles];
    if (variantStyle) {
      baseStyles.push(variantStyle);
    }

    return baseStyles;
  };

  const getTextStyle = () => {
    const textStyles = [
      styles.text,
      styles[`${size}Text` as keyof typeof styles],
      textStyle,
    ];

    // Add variant-specific text styles
    const variantTextStyle = styles[`${variant}Text` as keyof typeof styles];
    if (variantTextStyle) {
      textStyles.push(variantTextStyle);
    }

    return textStyles;
  };

  const getGradientColors = () => {
    if (gradientColors) return gradientColors;

    switch (variant) {
      case 'success':
        return colors.gradientSuccess;
      case 'gradient':
        return colors.gradientHero;
      default:
        return colors.gradientPrimary;
    }
  };

  const renderContent = () => (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.textInverse}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon
              source={icon}
              size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.textInverse}
            />
          )}
          <Text style={getTextStyle()}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <Icon
              source={icon}
              size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.textInverse}
            />
          )}
        </>
      )}
    </View>
  );

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        style={({ pressed: pressedState }) => [
          getButtonStyle(),
          pressedState && styles.pressedButton,
        ]}
      >
        {variant === 'gradient' ? (
          <LinearGradient
            colors={getGradientColors()}
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
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Size variants
  smallButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: 36,
  },

  mediumButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    minHeight: 44,
  },

  largeButton: {
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.lg,
    minHeight: 52,
  },

  // Style variants
  primaryButton: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },

  secondaryButton: {
    backgroundColor: colors.secondary,
    ...shadows.sm,
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },

  ghostButton: {
    backgroundColor: 'transparent',
  },

  gradientButtonContainer: {
    ...shadows.md,
  },

  successButton: {
    backgroundColor: colors.success,
    ...shadows.sm,
  },

  warningButton: {
    backgroundColor: colors.warning,
    ...shadows.sm,
  },

  errorButton: {
    backgroundColor: colors.error,
    ...shadows.sm,
  },

  gradientBackground: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fullWidth: {
    width: '100%',
  },

  disabledButton: {
    opacity: 0.5,
  },

  pressedButton: {
    opacity: 0.8,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },

  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },

  smallText: {
    fontSize: 14,
    lineHeight: 20,
  },

  mediumText: {
    fontSize: 16,
    lineHeight: 24,
  },

  largeText: {
    fontSize: 18,
    lineHeight: 28,
  },

  primaryText: {
    color: colors.textInverse,
  },

  secondaryText: {
    color: colors.textInverse,
  },

  outlineText: {
    color: colors.primary,
  },

  ghostText: {
    color: colors.primary,
  },

  gradientText: {
    color: colors.textInverse,
  },

  successText: {
    color: colors.textInverse,
  },

  warningText: {
    color: colors.textInverse,
  },

  errorText: {
    color: colors.textInverse,
  },
});

export default EnhancedButton;
