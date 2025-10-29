import { DefaultTheme } from 'react-native-paper';

// 2025 Modern K & T Transport brand colors - Premium professional aesthetic
export const colors = {
  // Primary Brand Colors - Electric & Sophisticated
  primary: '#4F46E5', // Vibrant indigo - 2025 trendsetting
  primaryLight: '#6366F1', // Electric indigo - energetic
  primaryDark: '#3730A3', // Deep indigo - authority
  primaryAccent: '#7C3AED', // Purple accent - creativity
  primarySoft: '#EEF2FF', // Ultra-light indigo tint

  // Secondary Brand Colors - Warm & Energetic
  secondary: '#F59E0B', // Golden amber - premium feel
  secondaryLight: '#FBBF24', // Bright gold - optimism
  secondaryDark: '#D97706', // Rich amber - reliability
  secondaryAccent: '#FB7185', // Coral accent - warmth
  secondarySoft: '#FFFBEB', // Ultra-light amber tint

  // Tertiary Colors - Fresh & Modern
  tertiary: '#06B6D4', // Cyan - innovation
  tertiaryLight: '#22D3EE', // Bright cyan - freshness
  tertiaryDark: '#0891B2', // Deep cyan - trust

  // Background & Surface - Layered hierarchy
  background: '#FFFFFF', // Pure white - premium
  backgroundSecondary: '#FAFBFC', // Subtle tint - depth
  surface: '#FFFFFF', // Clean surfaces
  surfaceVariant: '#F8FAFC', // Gentle tint
  surfaceElevated: '#FFFFFF', // Elevated cards
  surfaceHover: '#F9FAFB', // Interactive states

  // Status Colors - Modern & Clear
  success: '#10B981', // Emerald success
  successLight: '#34D399', // Bright success
  successSoft: '#ECFDF5', // Light success bg

  error: '#EF4444', // Clear error red
  errorLight: '#F87171', // Light error
  errorSoft: '#FEF2F2', // Light error bg

  warning: '#F59E0B', // Amber warning
  warningLight: '#FBBF24', // Light warning
  warningSoft: '#FFFBEB', // Light warning bg

  info: '#06B6D4', // Cyan info
  infoLight: '#22D3EE', // Light info
  infoSoft: '#ECFEFF', // Light info bg

  // Text Colors - Hierarchical & Clear
  text: '#0F172A', // Rich black - primary text
  textSecondary: '#374151', // Dark gray - secondary
  textTertiary: '#6B7280', // Medium gray - tertiary
  textMuted: '#9CA3AF', // Light gray - muted
  textInverse: '#FFFFFF', // White text
  textOnColor: '#FFFFFF', // Text on colored backgrounds

  // Interactive Elements - Refined & Responsive
  border: '#E5E7EB', // Subtle borders
  borderLight: '#F3F4F6', // Ultra-light borders
  borderFocus: '#4F46E5', // Focus border (primary)
  borderHover: '#D1D5DB', // Hover borders
  disabled: '#D1D5DB', // Disabled state
  placeholder: '#9CA3AF', // Placeholder text

  // Modern Effects - Glass & Depth
  glass: 'rgba(255, 255, 255, 0.1)', // Glass morphism
  glassBlur: 'rgba(255, 255, 255, 0.2)', // Glass with blur
  overlay: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  overlayLight: 'rgba(0, 0, 0, 0.1)', // Light overlay

  // Shadows - Layered depth system
  shadowLight: 'rgba(0, 0, 0, 0.05)',
  shadowMedium: 'rgba(0, 0, 0, 0.1)',
  shadowStrong: 'rgba(0, 0, 0, 0.2)',

  // Premium Gradients - 2025 trending
  gradientHero: ['#4F46E5', '#7C3AED', '#EC4899'], // Hero gradient
  gradientPrimary: ['#4F46E5', '#6366F1'], // Primary gradient
  gradientSecondary: ['#F59E0B', '#FBBF24'], // Secondary gradient
  gradientSuccess: ['#10B981', '#34D399'], // Success gradient
  gradientSunset: ['#F59E0B', '#EF4444', '#EC4899'], // Sunset gradient
  gradientOcean: ['#06B6D4', '#3B82F6', '#6366F1'], // Ocean gradient
  gradientSurface: ['#FFFFFF', '#F9FAFB'], // Surface gradient
};

// Modern typography system
export const typography = {
  // Display styles
  displayLarge: {
    fontSize: 57,
    fontWeight: '400' as const,
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  displayMedium: {
    fontSize: 45,
    fontWeight: '400' as const,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontSize: 36,
    fontWeight: '400' as const,
    lineHeight: 44,
    letterSpacing: 0,
  },

  // Headline styles
  headlineLarge: {
    fontSize: 32,
    fontWeight: '600' as const,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontSize: 28,
    fontWeight: '600' as const,
    lineHeight: 36,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
    letterSpacing: 0,
  },

  // Title styles
  titleLarge: {
    fontSize: 22,
    fontWeight: '500' as const,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontSize: 16,
    fontWeight: '500' as const,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: '500' as const,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  // Body styles
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  // Label styles
  labelLarge: {
    fontSize: 14,
    fontWeight: '500' as const,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontSize: 11,
    fontWeight: '500' as const,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
};

// Spacing system
export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
  massive: 64,
};

// Border radius system
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

// Modern shadow system
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

// 2025 Modern Animation System
export const animations = {
  // Duration
  instant: 0,
  fast: 150,
  normal: 200,
  slow: 300,
  slowest: 500,

  // Easing curves - Modern & smooth
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  // Spring animations (for React Native)
  springConfig: {
    damping: 15,
    mass: 1,
    stiffness: 150,
  },

  // Micro-interactions
  hover: 200,
  tap: 100,
  focus: 150,
};

// Responsive breakpoints
export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200,
};

// 2025 Modern Effects System
export const effects = {
  // Blur effects
  blur: {
    light: 8,
    medium: 16,
    heavy: 24,
  },

  // Glass morphism
  glass: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },

  // Neumorphism (subtle 3D effect)
  neumorphism: {
    light: {
      shadowColor: colors.shadowLight,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
    inset: {
      shadowColor: colors.shadowLight,
      shadowOffset: { width: -2, height: -2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  },

  // Gradient overlays
  gradientOverlay: {
    hero: `linear-gradient(135deg, ${colors.gradientHero.join(', ')})`,
    primary: `linear-gradient(135deg, ${colors.gradientPrimary.join(', ')})`,
    secondary: `linear-gradient(135deg, ${colors.gradientSecondary.join(', ')})`,
  },
};

// Component sizes
export const componentSizes = {
  button: {
    small: { height: 36, paddingHorizontal: 16 },
    medium: { height: 44, paddingHorizontal: 24 },
    large: { height: 52, paddingHorizontal: 32 },
  },
  input: {
    small: { height: 36 },
    medium: { height: 44 },
    large: { height: 52 },
  },
  card: {
    small: { padding: spacing.md },
    medium: { padding: spacing.lg },
    large: { padding: spacing.xl },
    borderRadius: borderRadius.lg,
  },
  avatar: {
    small: 32,
    medium: 40,
    large: 56,
    xl: 72,
  },
};

// Enhanced React Native Paper theme
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    primaryContainer: colors.primaryLight,
    secondary: colors.secondary,
    secondaryContainer: colors.secondaryLight,
    tertiary: colors.info,
    tertiaryContainer: colors.infoLight,
    surface: colors.surface,
    surfaceVariant: colors.surfaceVariant,
    background: colors.background,
    error: colors.error,
    errorContainer: colors.errorLight,
    onPrimary: colors.textInverse,
    onSecondary: colors.text,
    onSurface: colors.text,
    onBackground: colors.text,
    onError: colors.textInverse,
    outline: colors.border,
    outlineVariant: colors.disabled,
    inverseSurface: colors.text,
    inverseOnSurface: colors.textInverse,
    inversePrimary: colors.primaryLight,
    shadow: '#000000',
    scrim: '#000000',
    backdrop: 'rgba(15, 23, 42, 0.5)',
  },
  fonts: {
    ...DefaultTheme.fonts,
    displayLarge: { ...typography.displayLarge, fontFamily: 'System' },
    displayMedium: { ...typography.displayMedium, fontFamily: 'System' },
    displaySmall: { ...typography.displaySmall, fontFamily: 'System' },
    headlineLarge: { ...typography.headlineLarge, fontFamily: 'System' },
    headlineMedium: { ...typography.headlineMedium, fontFamily: 'System' },
    headlineSmall: { ...typography.headlineSmall, fontFamily: 'System' },
    titleLarge: { ...typography.titleLarge, fontFamily: 'System' },
    titleMedium: { ...typography.titleMedium, fontFamily: 'System' },
    titleSmall: { ...typography.titleSmall, fontFamily: 'System' },
    bodyLarge: { ...typography.bodyLarge, fontFamily: 'System' },
    bodyMedium: { ...typography.bodyMedium, fontFamily: 'System' },
    bodySmall: { ...typography.bodySmall, fontFamily: 'System' },
    labelLarge: { ...typography.labelLarge, fontFamily: 'System' },
    labelMedium: { ...typography.labelMedium, fontFamily: 'System' },
    labelSmall: { ...typography.labelSmall, fontFamily: 'System' },
    default: { ...typography.bodyMedium, fontFamily: 'System' },
  },
};

// Export everything for easy access
export { DefaultTheme };
export default theme;
