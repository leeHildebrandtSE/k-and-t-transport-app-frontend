import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

// Enhanced Modern Auth Screen Styles with Premium UI/UX
export const authStyles = StyleSheet.create({
  // Main container with elegant gradient background
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // Add subtle gradient feel with background layers
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

  // Enhanced Header section with modern styling
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
    // Premium glow effect
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
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
    color: colors.primary,
    marginLeft: spacing.xs,
    fontWeight: '500',
  },

  // Demo credentials card
  demoCard: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.secondaryLight,
    ...shadows.sm,
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

  // Enhanced Form card with premium styling
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xxl,
    padding: spacing.xxl,
    marginBottom: spacing.xl,
    ...shadows.xl,
    borderWidth: 1,
    borderColor: colors.border + '40', // More subtle border
    // Enhanced shadow for depth and premium feel
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
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

  // Enhanced Button styles with premium design
  primaryButton: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
    ...shadows.lg,
    // Premium button glow
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
    // Enhanced visual hierarchy
    minHeight: 56, // Material Design 3 touch target
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

  // Register section
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
  },

  registerText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginRight: spacing.xs,
  },

  registerButton: {
    backgroundColor: 'transparent',
    minWidth: 0,
  },

  registerButtonText: {
    ...typography.labelLarge,
    color: colors.secondary,
    fontWeight: '600',
  },

  // Loading states
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    color: colors.primary,
    marginTop: spacing.md,
  },

  // Social login section (for future use)
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

  // New Premium UI Enhancement Styles

  // Floating action elements
  floatingElement: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  // Premium input container with enhanced focus states
  premiumInputContainer: {
    marginBottom: spacing.lg,
    position: 'relative',
    overflow: 'hidden',
  },

  // Animated focus indicator
  inputFocusIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.primary,
    opacity: 0,
  },

  // Enhanced visual feedback
  pressableArea: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },

  // Premium card with subtle animations
  animatedCard: {
    transform: [{ scale: 1 }],
    opacity: 1,
  },

  // Gradient overlay effect (using multiple Views for React Native)
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    opacity: 0.1,
  },

  // Enhanced demo card with better visual hierarchy
  enhancedDemoCard: {
    backgroundColor: colors.surfaceVariant + 'E6', // More transparent
    borderRadius: borderRadius.xxl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primary + '20', // Subtle primary accent
    ...shadows.lg,
    // Soft glow effect
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  // Modern typography enhancements
  modernTitle: {
    ...typography.headlineLarge,
    color: colors.text,
    fontWeight: '700', // Bolder for impact
    letterSpacing: -0.5, // Tighter spacing for modern feel
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  modernSubtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24, // Better readability
    maxWidth: 320, // Optimal reading width
    opacity: 0.8, // Subtle hierarchy
  },

  // Enhanced interaction states
  interactiveElement: {
    opacity: 1, // Base state for smooth animations
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
});

export default authStyles;
