import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const paymentMethodsStyles = StyleSheet.create({
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

  // Payment Methods List
  methodsList: {
    marginTop: spacing.lg,
  },

  methodCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  methodCardActive: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  methodIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  methodIconActive: {
    backgroundColor: colors.primary,
  },

  methodDetails: {
    flex: 1,
  },

  methodType: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  methodNumber: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  methodExpiry: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  methodActions: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  defaultBadge: {
    backgroundColor: colors.successSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.xs,
  },

  defaultBadgeText: {
    ...typography.labelSmall,
    color: colors.success,
    fontWeight: '600',
  },

  methodMenu: {
    padding: spacing.xs,
  },

  // Action Buttons
  actionButtons: {
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

  actionButtonSecondary: {
    backgroundColor: colors.surfaceVariant,
    borderColor: colors.border,
  },

  actionButtonDanger: {
    backgroundColor: colors.errorSoft,
    borderColor: colors.error,
  },

  actionButtonText: {
    ...typography.labelMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  actionButtonTextSecondary: {
    color: colors.textSecondary,
  },

  actionButtonTextDanger: {
    color: colors.error,
  },

  // Add New Method
  addNewSection: {
    marginTop: spacing.xl,
  },

  addNewCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    ...shadows.sm,
  },

  addNewIcon: {
    marginBottom: spacing.md,
  },

  addNewTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  addNewDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  addNewButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },

  addNewButtonText: {
    ...typography.labelLarge,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Security Info
  securitySection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginTop: spacing.xl,
    ...shadows.sm,
  },

  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  securityTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginLeft: spacing.md,
  },

  securityList: {
    marginTop: spacing.sm,
  },

  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  securityItemText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    flex: 1,
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
    marginBottom: spacing.xl,
  },

  emptyStateButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },

  emptyStateButtonText: {
    ...typography.labelLarge,
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
