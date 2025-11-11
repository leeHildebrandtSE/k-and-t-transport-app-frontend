import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../../theme';

export const earningsScreenStyles = StyleSheet.create({
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
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },

  summaryValue: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  summaryLabel: {
    ...typography.bodySmall,
    color: colors.success,
    textAlign: 'center',
    fontWeight: '600',
  },

  // Period Filter
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
  },

  filterLabel: {
    ...typography.bodyMedium,
    color: colors.text,
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
    fontWeight: '600',
  },

  // Earnings List
  earningsList: {
    marginTop: spacing.lg,
  },

  earningsItem: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  earningsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  earningsInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  earningsTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  earningsDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  earningsRoute: {
    ...typography.labelSmall,
    color: colors.textSecondary,
  },

  earningsAmount: {
    alignItems: 'flex-end',
  },

  earningsAmountValue: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  earningsStatus: {
    backgroundColor: colors.successSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },

  earningsStatusText: {
    ...typography.labelSmall,
    color: colors.success,
    fontWeight: '600',
  },

  // Trip Details
  tripDetails: {
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

  // Chart Section
  chartSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  chartTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },

  chartPlaceholder: {
    height: 200,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chartPlaceholderText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
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
