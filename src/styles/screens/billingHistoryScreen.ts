import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const billingHistoryStyles = StyleSheet.create({
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

  // Filter Section
  filterSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  filterLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    flex: 1,
  },

  filterValue: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  filterButton: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  filterButtonText: {
    ...typography.labelMedium,
    color: colors.primary,
  },

  // Summary Section
  summarySection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  summaryTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.md,
  },

  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.sm,
  },

  summaryItem: {
    width: '50%',
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },

  summaryCard: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },

  summaryValue: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  summaryLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Transaction List
  transactionsList: {
    marginTop: spacing.lg,
  },

  transactionItem: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  transactionInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  transactionTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  transactionDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  transactionId: {
    ...typography.labelSmall,
    color: colors.textSecondary,
  },

  transactionAmount: {
    alignItems: 'flex-end',
  },

  transactionAmountValue: {
    ...typography.titleMedium,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  transactionAmountCredit: {
    color: colors.success,
  },

  transactionAmountDebit: {
    color: colors.error,
  },

  // Status Badge
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },

  statusBadgeSuccess: {
    backgroundColor: colors.successSoft,
  },

  statusBadgePending: {
    backgroundColor: colors.warningSoft,
  },

  statusBadgeError: {
    backgroundColor: colors.errorSoft,
  },

  statusBadgeText: {
    ...typography.labelSmall,
    fontWeight: '600',
  },

  statusTextSuccess: {
    color: colors.success,
  },

  statusTextPending: {
    color: colors.warning,
  },

  statusTextError: {
    color: colors.error,
  },

  // Transaction Details
  transactionDetails: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceVariant,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },

  detailLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  detailValue: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '500',
  },

  // Actions
  transactionActions: {
    flexDirection: 'row',
    marginTop: spacing.md,
    gap: spacing.md,
  },

  actionButton: {
    flex: 1,
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  actionButtonText: {
    ...typography.labelMedium,
    color: colors.primary,
    fontWeight: '600',
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
});
