import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, typography, animations, shadows } from '../../styles/theme';

interface EnhancedLoadingProps {
  loading: boolean;
  text?: string;
  variant?: 'spinner' | 'skeleton' | 'pulse' | 'dots' | 'progress' | 'overlay';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  overlay?: boolean;
  children?: React.ReactNode;
  style?: any;
}

const { width } = Dimensions.get('window');

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  loading,
  text,
  variant = 'spinner',
  size = 'medium',
  color = colors.primary,
  overlay = false,
  children,
  style,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const dotAnims = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    if (loading) {
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animations.fast,
        useNativeDriver: true,
      }).start();

      // Start variant-specific animations
      if (variant === 'pulse') {
        startPulseAnimation();
      } else if (variant === 'progress') {
        startProgressAnimation();
      } else if (variant === 'dots') {
        startDotsAnimation();
      }
    } else {
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: animations.fast,
        useNativeDriver: true,
      }).start();
    }
  }, [loading]);

  const startPulseAnimation = () => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
  };

  const startProgressAnimation = () => {
    const progress = Animated.loop(
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      })
    );
    progress.start();
  };

  const startDotsAnimation = () => {
    const createDotAnimation = (animValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.delay(600 - delay),
        ])
      );
    };

    Animated.parallel(
      dotAnims.map((anim, index) => createDotAnimation(anim, index * 200))
    ).start();
  };

  const renderLoadingContent = () => {
    switch (variant) {
      case 'spinner':
        return (
          <View style={[styles.container, styles[`${size}Container`]]}>
            <ActivityIndicator
              size={size === 'small' ? 'small' : 'large'}
              color={color}
            />
            {text && (
              <Text style={[styles.text, styles[`${size}Text`], { color }]}>
                {text}
              </Text>
            )}
          </View>
        );

      case 'skeleton':
        return (
          <View style={[styles.skeleton, style]}>
            <LinearGradient
              colors={[colors.surfaceVariant, colors.surface, colors.surfaceVariant]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.skeletonGradient}
            />
          </View>
        );

      case 'pulse':
        return (
          <Animated.View
            style={[
              styles.pulse,
              styles[`${size}Pulse`],
              { backgroundColor: color, transform: [{ scale: pulseAnim }] },
            ]}
          />
        );

      case 'dots':
        return (
          <View style={[styles.dotsContainer, styles[`${size}DotsContainer`]]}>
            {dotAnims.map((anim, index) => (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  styles[`${size}Dot`],
                  { backgroundColor: color, opacity: anim },
                ]}
              />
            ))}
            {text && (
              <Text style={[styles.text, styles[`${size}Text`], { color, marginTop: spacing.md }]}>
                {text}
              </Text>
            )}
          </View>
        );

      case 'progress':
        const progressWidth = progressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        });

        return (
          <View style={[styles.progressContainer, styles[`${size}ProgressContainer`]]}>
            <View style={styles.progressTrack}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { backgroundColor: color, width: progressWidth },
                ]}
              />
            </View>
            {text && (
              <Text style={[styles.text, styles[`${size}Text`], { color }]}>
                {text}
              </Text>
            )}
          </View>
        );

      default:
        return null;
    }
  };

  if (!loading && variant !== 'overlay') {
    return children ? <>{children}</> : null;
  }

  if (overlay) {
    return (
      <View style={styles.overlayContainer}>
        {children}
        {loading && (
          <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
            <View style={styles.overlayContent}>
              {renderLoadingContent()}
            </View>
          </Animated.View>
        )}
      </View>
    );
  }

  return (
    <Animated.View style={[{ opacity: fadeAnim }, style]}>
      {renderLoadingContent()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    padding: spacing.sm,
  },

  mediumContainer: {
    padding: spacing.md,
  },

  largeContainer: {
    padding: spacing.lg,
  },

  text: {
    textAlign: 'center',
    fontWeight: '500',
  },

  smallText: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: spacing.sm,
  },

  mediumText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.md,
  },

  largeText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.lg,
  },

  // Skeleton
  skeleton: {
    borderRadius: borderRadius.md,
    backgroundColor: colors.surfaceVariant,
    overflow: 'hidden',
    height: 20,
  },

  skeletonGradient: {
    flex: 1,
  },

  // Pulse
  pulse: {
    borderRadius: 50,
  },

  smallPulse: {
    width: 20,
    height: 20,
  },

  mediumPulse: {
    width: 30,
    height: 30,
  },

  largePulse: {
    width: 40,
    height: 40,
  },

  // Dots
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallDotsContainer: {
    gap: spacing.sm,
  },

  mediumDotsContainer: {
    gap: spacing.md,
  },

  largeDotsContainer: {
    gap: spacing.lg,
  },

  dot: {
    borderRadius: 50,
  },

  smallDot: {
    width: 6,
    height: 6,
  },

  mediumDot: {
    width: 8,
    height: 8,
  },

  largeDot: {
    width: 10,
    height: 10,
  },

  // Progress
  progressContainer: {
    alignItems: 'center',
  },

  smallProgressContainer: {
    width: 200,
  },

  mediumProgressContainer: {
    width: 250,
  },

  largeProgressContainer: {
    width: 300,
  },

  progressTrack: {
    width: '100%',
    height: 4,
    backgroundColor: colors.borderLight,
    borderRadius: 2,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    borderRadius: 2,
  },

  // Overlay
  overlayContainer: {
    flex: 1,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  overlayContent: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    ...shadows.lg,
  },
});

export default EnhancedLoading;
