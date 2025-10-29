import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

// Modern Auth Screen Styles
export const authStyles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: colors.background,
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

  // Header section
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
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

  // Form card
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xxl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
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

  // Button styles
  primaryButton: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary,
    ...shadows.md,
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
});

export default authStyles;
