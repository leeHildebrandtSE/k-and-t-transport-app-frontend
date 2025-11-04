import { DefaultTheme } from 'react-native-paper';

// Cape Town Inspired K & T Transport colors - Ocean, Nature & Sunshine
export const colors = {
  // Primary Brand Colors - Atlantic Ocean Blue
  primary: '#0EA5E9', // Cape Town ocean blue - symbolizing beautiful beaches
  primaryLight: '#38BDF8', // Light ocean blue - coastal breeze
  primaryDark: '#0284C7', // Deep ocean blue - Table Bay depths
  primaryAccent: '#0891B2', // Teal accent - ocean meets sky
  primarySoft: '#F0F9FF', // Ultra-light ocean tint

  // Secondary Brand Colors - Cape Town Sunshine
  secondary: '#F59E0B', // Golden sunshine - beautiful Cape Town weather
  secondaryLight: '#FCD34D', // Bright sunshine - summer days
  secondaryDark: '#D97706', // Rich golden hour - sunset over Signal Hill
  secondaryAccent: '#FBBF24', // Warm yellow - morning light on Table Mountain
  secondarySoft: '#FFFBEB', // Ultra-light sunshine tint

  // Tertiary Colors - Fynbos & Mountain Green
  tertiary: '#059669', // Table Mountain green - scenic nature routes
  tertiaryLight: '#10B981', // Fresh fynbos green - indigenous vegetation
  tertiaryDark: '#047857', // Deep mountain green - Twelve Apostles

  // Background & Surface - Layered hierarchy
  background: '#FFFFFF', // Pure white - premium
  backgroundSecondary: '#FAFBFC', // Subtle tint - depth
  surface: '#FFFFFF', // Clean surfaces
  surfaceVariant: '#F8FAFC', // Gentle tint
  surfaceElevated: '#FFFFFF', // Elevated cards
  surfaceHover: '#F9FAFB', // Interactive states

  // Status Colors - Cape Town Nature Inspired
  success: '#059669', // Fynbos green - Cape floral kingdom success
  successLight: '#10B981', // Bright nature green - thriving vegetation
  successSoft: '#ECFDF5', // Light green bg - morning mountain mist

  error: '#DC2626', // Mountain fire red - safety alert
  errorLight: '#EF4444', // Light error - sunset warning
  errorSoft: '#FEF2F2', // Light error bg - gentle alert

  warning: '#F59E0B', // Cape sunshine warning - golden hour alert
  warningLight: '#FBBF24', // Light warning - afternoon sun
  warningSoft: '#FFFBEB', // Light warning bg - sunrise glow

  info: '#0EA5E9', // Atlantic blue info - ocean information
  infoLight: '#38BDF8', // Light ocean info - clear skies
  infoSoft: '#F0F9FF', // Light info bg - morning ocean mist

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
  borderFocus: '#0EA5E9', // Focus border (Cape Town ocean blue)
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

  // Cape Town Inspired Gradients
  gradientHero: ['#0EA5E9', '#059669', '#F59E0B'], // Ocean to mountain to sun
  gradientPrimary: ['#0EA5E9', '#38BDF8'], // Atlantic Ocean gradient
  gradientSecondary: ['#F59E0B', '#FCD34D'], // Cape sunshine gradient
  gradientSuccess: ['#059669', '#10B981'], // Table Mountain green gradient
  gradientSunset: ['#F59E0B', '#FBBF24', '#FCD34D'], // Cape Town sunset over Table Bay
  gradientOcean: ['#0EA5E9', '#38BDF8', '#0891B2'], // Atlantic Ocean depths
  gradientSurface: ['#FFFFFF', '#F9FAFB'], // Cloud-covered Table Mountain
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
