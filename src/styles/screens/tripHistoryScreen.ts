import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const tripHistoryScreenStyles = StyleSheet.create({
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
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    minHeight: 90,
    justifyContent: 'center',
  },

  summaryValue: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  summaryLabel: {
    ...typography.bodySmall,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
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

  filterTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.md,
    gap: spacing.sm,
  },

  filterTag: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  filterTagText: {
    ...typography.labelSmall,
    color: colors.primary,
    fontWeight: '600',
  },

  // Trip List
  tripList: {
    marginTop: spacing.lg,
  },

  tripItem: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  tripInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  tripDate: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  tripRoute: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  tripTime: {
    ...typography.labelMedium,
    color: colors.textSecondary,
  },

  tripAmount: {
    alignItems: 'flex-end',
  },

  tripPrice: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  tripStatus: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },

  tripStatusText: {
    ...typography.labelSmall,
    fontWeight: '600',
  },

  // Trip Details
  tripDetails: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceVariant,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
    marginHorizontal: -spacing.sm,
  },

  detailItem: {
    width: '25%',
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
  },

  detailValue: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  detailLabel: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Trip Actions
  tripActions: {
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

  // Route Display
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },

  routePoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },

  pickupPoint: {
    backgroundColor: colors.success,
  },

  dropoffPoint: {
    backgroundColor: colors.error,
  },

  routeLine: {
    flex: 1,
    height: 2,
    backgroundColor: colors.surfaceVariant,
    marginHorizontal: spacing.sm,
  },

  routeText: {
    ...typography.bodySmall,
    color: colors.text,
    flex: 1,
  },

  // Export Section
  exportSection: {
    backgroundColor: colors.infoSoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  exportTitle: {
    ...typography.titleMedium,
    color: colors.info,
    marginBottom: spacing.md,
  },

  exportDescription: {
    ...typography.bodyMedium,
    color: colors.info,
    marginBottom: spacing.lg,
  },

  exportButtonsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  exportButton: {
    flex: 1,
    backgroundColor: colors.info,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  exportButtonText: {
    ...typography.labelMedium,
    color: '#FFFFFF',
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

  emptyStateAction: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },

  emptyStateActionText: {
    ...typography.labelMedium,
    color: '#FFFFFF',
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
});
