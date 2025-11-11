import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const paymentScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },

  title: {
    ...typography.headlineLarge,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  subtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  // Amount Section
  amountSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  amountLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  amountValue: {
    ...typography.displaySmall,
    color: colors.primary,
    fontWeight: '700',
  },

  amountDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  // Payment Methods Section
  paymentMethodsSection: {
    marginVertical: spacing.md,
  },

  sectionTitle: {
    ...typography.headlineMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  paymentMethod: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    ...shadows.sm,
  },

  paymentMethodSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },

  paymentMethodIcon: {
    marginRight: spacing.md,
  },

  paymentMethodInfo: {
    flex: 1,
  },

  paymentMethodTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  paymentMethodSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  // Add Payment Method
  addPaymentMethod: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.textSecondary,
    borderStyle: 'dashed',
  },

  addPaymentMethodText: {
    ...typography.bodyMedium,
    color: colors.primary,
    marginTop: spacing.sm,
  },

  // Transaction Details
  transactionSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  transactionLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  transactionValue: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
  },

  transactionTotal: {
    borderTopWidth: 1,
    borderTopColor: colors.textSecondary,
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
  },

  transactionTotalLabel: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '700',
  },

  transactionTotalValue: {
    ...typography.bodyLarge,
    color: colors.primary,
    fontWeight: '700',
  },

  // Action Buttons
  actionSection: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    ...shadows.sm,
  },

  primaryButtonText: {
    ...typography.bodyLarge,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.textSecondary,
  },

  secondaryButtonText: {
    ...typography.bodyLarge,
    color: colors.primary,
    fontWeight: '600',
  },

  // Security Notice
  securityNotice: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },

  securityNoticeText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
  },

  // Loading State
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  // Error State
  errorContainer: {
    backgroundColor: colors.errorSoft,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },

  errorText: {
    ...typography.bodySmall,
    color: colors.error,
    marginLeft: spacing.sm,
    flex: 1,
  },
});
