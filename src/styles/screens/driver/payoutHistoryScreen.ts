import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../../theme';

export const payoutHistoryScreenStyles = StyleSheet.create({
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

  // Summary Section
  summarySection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  summaryLabel: {
    ...typography.bodyLarge,
    color: colors.text,
  },

  summaryValue: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
  },

  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.surfaceVariant,
    paddingTop: spacing.md,
    marginTop: spacing.md,
  },

  // Filter Section
  filterSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  filterTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  filterLabel: {
    ...typography.bodyMedium,
    color: colors.text,
  },

  filterValue: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  // Payout List
  payoutList: {
    marginTop: spacing.lg,
  },

  payoutItem: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  payoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  payoutInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  payoutDate: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  payoutPeriod: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  payoutMethod: {
    ...typography.labelMedium,
    color: colors.textSecondary,
  },

  payoutAmount: {
    alignItems: 'flex-end',
  },

  payoutAmountValue: {
    ...typography.titleLarge,
    color: colors.success,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  payoutStatus: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.successSoft,
  },

  payoutStatusText: {
    ...typography.labelSmall,
    color: colors.success,
    fontWeight: '600',
  },

  // Breakdown Section
  breakdownSection: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceVariant,
  },

  breakdownTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },

  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },

  breakdownLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  breakdownValue: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '500',
  },

  breakdownTotal: {
    borderTopWidth: 1,
    borderTopColor: colors.surfaceVariant,
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
  },

  breakdownTotalLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
  },

  breakdownTotalValue: {
    ...typography.bodyMedium,
    color: colors.success,
    fontWeight: '700',
  },

  // Actions
  actionRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
    gap: spacing.sm,
  },

  actionButton: {
    flex: 1,
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  actionButtonText: {
    ...typography.labelMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  secondaryActionButton: {
    backgroundColor: colors.surfaceVariant,
    borderColor: colors.textSecondary,
  },

  secondaryActionButtonText: {
    color: colors.text,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
  },

  emptyStateIcon: {
    marginBottom: spacing.lg,
  },

  emptyStateTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyStateMessage: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },
});
