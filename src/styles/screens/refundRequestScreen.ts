import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const refundRequestStyles = StyleSheet.create({
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

  // Transaction Details Section
  transactionSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  transactionTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  transactionCard: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  transactionAmount: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '700',
  },

  transactionDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  transactionDescription: {
    ...typography.bodyMedium,
    color: colors.text,
    marginTop: spacing.sm,
  },

  transactionId: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  // Refund Reason Section
  reasonSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  reasonTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  reasonOption: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  reasonOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  reasonOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reasonRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  reasonRadioSelected: {
    borderColor: colors.primary,
  },

  reasonRadioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },

  reasonText: {
    ...typography.bodyMedium,
    color: colors.text,
    flex: 1,
  },

  reasonTextSelected: {
    color: colors.primary,
    fontWeight: '600',
  },

  // Custom Reason Input
  customReasonSection: {
    marginTop: spacing.md,
  },

  customReasonLabel: {
    ...typography.labelMedium,
    color: colors.text,
    marginBottom: spacing.sm,
  },

  customReasonInput: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 80,
    textAlignVertical: 'top',
    ...typography.bodyMedium,
    color: colors.text,
  },

  customReasonInputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  characterCount: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    textAlign: 'right',
    marginTop: spacing.xs,
  },

  // Refund Policy Section
  policySection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  policyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  policyTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  policyList: {
    marginTop: spacing.sm,
  },

  policyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },

  policyItemText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
  },

  // Additional Information
  additionalSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  additionalTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  additionalInput: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 100,
    textAlignVertical: 'top',
    ...typography.bodyMedium,
    color: colors.text,
  },

  additionalInputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  // Submit Section
  submitSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
    ...shadows.sm,
  },

  estimatedRefund: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.md,
  },

  estimatedLabel: {
    ...typography.bodyMedium,
    color: colors.success,
  },

  estimatedAmount: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
  },

  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  submitButtonDisabled: {
    backgroundColor: colors.disabled,
  },

  submitButtonText: {
    ...typography.labelLarge,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  submitButtonTextDisabled: {
    color: colors.textMuted,
  },

  cancelButton: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },

  cancelButtonText: {
    ...typography.labelMedium,
    color: colors.textSecondary,
    fontWeight: '600',
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

  // Warning Section
  warningSection: {
    backgroundColor: colors.warningSoft,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginVertical: spacing.md,
  },

  warningText: {
    ...typography.bodySmall,
    color: colors.warning,
    textAlign: 'center',
  },
});
