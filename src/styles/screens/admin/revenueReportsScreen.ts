import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../../theme';

export const revenueReportsScreenStyles = StyleSheet.create({
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

  // Key Metrics Section
  metricsSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  metricsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.md,
  },

  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.sm,
  },

  metricItem: {
    width: '50%',
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },

  metricCard: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    minHeight: 100,
    justifyContent: 'center',
  },

  metricValue: {
    ...typography.titleLarge,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  metricLabel: {
    ...typography.bodySmall,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
  },

  metricChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },

  metricChangeText: {
    ...typography.labelSmall,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },

  positiveChange: {
    color: colors.success,
  },

  negativeChange: {
    color: colors.error,
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

  // Charts Section
  chartSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  chartTitle: {
    ...typography.titleMedium,
    color: colors.text,
  },

  chartTypeButton: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  chartTypeButtonText: {
    ...typography.labelSmall,
    color: colors.text,
    fontWeight: '600',
  },

  chartPlaceholder: {
    height: 250,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chartPlaceholderText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },

  // Reports List
  reportsSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceVariant,
  },

  reportInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  reportTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  reportDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  reportActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  actionButton: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  actionButtonText: {
    ...typography.labelSmall,
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

  // Breakdown Section
  breakdownSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  breakdownLabel: {
    ...typography.bodyMedium,
    color: colors.text,
  },

  breakdownValue: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
  },

  breakdownPercentage: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  // Export Section
  exportSection: {
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  exportTitle: {
    ...typography.titleMedium,
    color: colors.success,
    marginBottom: spacing.md,
  },

  exportDescription: {
    ...typography.bodyMedium,
    color: colors.success,
    marginBottom: spacing.lg,
  },

  exportButtonsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  exportButton: {
    flex: 1,
    backgroundColor: colors.success,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  exportButtonText: {
    ...typography.labelMedium,
    color: colors.textInverse,
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
