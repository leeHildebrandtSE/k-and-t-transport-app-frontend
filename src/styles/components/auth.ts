import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

const { width, height } = Dimensions.get('window');

// Enhanced Modern Auth Screen Styles with Improved Visibility
export const authStyles = StyleSheet.create({
  // Main container with background image and gradient overlay
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  // Background image container - full screen coverage
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6, // Reduced for better visibility
    zIndex: -2,
  },

  // Improved gradient overlay with better contrast
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.8, // Reduced from 0.85 for better visibility
  },

  // Improved blue overlay for better text visibility
  blueOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(14, 165, 233, 0.5)', // Reduced from 0.7
    zIndex: -1,
  },

  keyboardContainer: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    minHeight: '100%',
  },

  content: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },

  // Enhanced Header section with improved text shadows
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
    paddingTop: spacing.md,
  },

  logo: {
    width: 88,
    height: 88,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.lg,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  // Business Logo Header
  logoHeader: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
    paddingVertical: spacing.lg,
  },

  businessLogo: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 15,
  },

  logoTitle: {
    ...typography.headlineLarge,
    color: colors.textInverse,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.xs,
    letterSpacing: 1,
    // Enhanced text shadow for better legibility
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  logoTagline: {
    ...typography.bodyLarge,
    color: colors.textInverse,
    textAlign: 'center',
    opacity: 0.95,
    fontStyle: 'italic',
    letterSpacing: 0.5,
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  title: {
    ...typography.headlineLarge,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 300,
  },

  // Back navigation
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    alignSelf: 'flex-start',
  },

  backButton: {
    margin: 0,
    backgroundColor: 'transparent',
  },

  backText: {
    ...typography.bodyMedium,
    color: colors.textInverse,
    marginLeft: spacing.xs,
    fontWeight: '500',
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Demo credentials card with improved visibility
  demoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // More opaque
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(14, 165, 233, 0.3)',
    ...shadows.md,
  },

  demoTitle: {
    ...typography.titleMedium,
    color: colors.secondary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  demoText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },

  demoPassword: {
    ...typography.labelLarge,
    color: colors.primary,
    fontWeight: '600',
  },

  demoEmailContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    marginTop: spacing.sm,
  },

  demoEmail: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    paddingHorizontal: spacing.sm,
  },

  // Enhanced Form card with better contrast
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)', // More opaque
    borderRadius: borderRadius.xxl,
    padding: spacing.xxl,
    marginBottom: spacing.xl,
    ...shadows.xl,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 16,
  },

  // Input styles
  inputContainer: {
    marginBottom: spacing.lg,
  },

  input: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.lg,
    fontSize: 16,
  },

  inputWithIcon: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputWithLeftIcon: {
    paddingLeft: 45,
  },

  inputWithBothIcons: {
    paddingLeft: 45,
    paddingRight: 45,
  },

  inputIconLeft: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
    paddingTop: 16,
  },

  inputIconRight: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    paddingTop: 16,
    padding: 4,
  },

  inputOutlined: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },

  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.surface,
  },

  inputError: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight + '20',
  },

  // Enhanced Button styles
  primaryButton: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
    ...shadows.lg,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
    minHeight: 56,
  },

  primaryButtonContent: {
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    ...typography.labelLarge,
    color: colors.textInverse,
    fontWeight: '600',
  },

  primaryButtonDisabled: {
    opacity: 0.6,
  },

  buttonIcon: {
    marginRight: spacing.xs,
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.sm,
  },

  secondaryButtonText: {
    ...typography.labelLarge,
    color: colors.primary,
    fontWeight: '500',
  },

  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.sm,
  },

  textButtonText: {
    ...typography.labelLarge,
    color: colors.secondary,
    fontWeight: '500',
  },

  forgotButton: {
    alignSelf: 'center',
    marginTop: spacing.sm,
  },

  // Register section with improved visibility
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
  },

  registerText: {
    ...typography.bodyMedium,
    color: colors.textInverse,
    marginRight: spacing.xs,
    opacity: 0.95,
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  registerButton: {
    backgroundColor: 'transparent',
    minWidth: 0,
  },

  registerButtonText: {
    ...typography.labelLarge,
    color: colors.textInverse,
    fontWeight: '600',
    textDecorationLine: 'underline',
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Loading states
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    borderRadius: borderRadius.xxl,
  },

  loadingContent: {
    alignItems: 'center',
  },

  loadingText: {
    ...typography.bodyMedium,
    color: colors.text,
    marginTop: spacing.md,
    fontWeight: '500',
  },

  // Social login section
  socialSection: {
    marginTop: spacing.xl,
    alignItems: 'center',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  dividerText: {
    ...typography.bodySmall,
    color: colors.textTertiary,
    marginHorizontal: spacing.md,
  },

  socialButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },

  socialButtonText: {
    ...typography.labelLarge,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  // Error states
  errorContainer: {
    backgroundColor: colors.errorLight + '20',
    borderColor: colors.error,
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  errorText: {
    ...typography.bodySmall,
    color: colors.error,
    textAlign: 'center',
  },

  // Success states
  successContainer: {
    backgroundColor: colors.successLight + '20',
    borderColor: colors.success,
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  successText: {
    ...typography.bodySmall,
    color: colors.success,
    textAlign: 'center',
  },

  // Modern typography enhancements with better shadows
  modernTitle: {
    ...typography.headlineLarge,
    color: colors.textInverse,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
    textAlign: 'center',
    // Enhanced text shadow for maximum legibility
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  modernSubtitle: {
    ...typography.bodyLarge,
    color: colors.textInverse,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
    opacity: 0.98,
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  // Premium divider
  premiumDivider: {
    height: 1,
    backgroundColor: colors.border + '30',
    marginVertical: spacing.lg,
    width: '100%',
  },

  // Status indicators
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: spacing.xs,
  },

  // ENHANCED STYLES (formerly from authStylesImproved.ts)
  // Improved gradient overlay with better contrast
  enhancedGradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.5, // Reduced from 0.7 for better visibility
    pointerEvents: 'none',
  },

  // Enhanced card styles with improved contrast
  enhancedDemoCard: {
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.98)', // Increased from 0.95
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  enhancedFormCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)', // Increased from 0.95
    borderRadius: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  // Enhanced text styles with better shadows
  enhancedLogoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 0.5,
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
      },
      android: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
      },
    }),
  },

  enhancedLogoTagline: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.95,
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
      android: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
    }),
  },

  enhancedBackText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
      android: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
    }),
  },

  enhancedRegisterText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginRight: 8,
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
      android: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },
    }),
  },
});

export default authStyles;
