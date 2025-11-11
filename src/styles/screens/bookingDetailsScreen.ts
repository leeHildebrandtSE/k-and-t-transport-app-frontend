import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const bookingDetailsScreenStyles = StyleSheet.create({
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

  // Status Banner
  statusBanner: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.sm,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  statusIcon: {
    marginRight: spacing.md,
  },

  statusTitle: {
    ...typography.titleLarge,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  statusSubtitle: {
    ...typography.bodyMedium,
    opacity: 0.9,
  },

  statusDetails: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },

  statusDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  statusDetailLabel: {
    ...typography.bodySmall,
    opacity: 0.8,
  },

  statusDetailValue: {
    ...typography.bodySmall,
    fontWeight: '600',
  },

  // Trip Information
  infoSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.sm,
  },

  sectionTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
    fontWeight: '600',
  },

  routeContainer: {
    marginBottom: spacing.lg,
  },

  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  routeIcon: {
    width: 40,
    alignItems: 'center',
    marginRight: spacing.md,
  },

  routeDetails: {
    flex: 1,
  },

  routeLocation: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  routeTime: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  routeAddress: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  routeLine: {
    width: 2,
    backgroundColor: colors.primarySoft,
    marginLeft: 19,
    marginRight: spacing.md,
    height: 30,
  },

  // Driver Information
  driverSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  driverAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  driverInfo: {
    flex: 1,
  },

  driverName: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  driverDetails: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  driverRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    ...typography.labelSmall,
    color: colors.warning,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },

  driverActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  driverActionButton: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  // Trip Details
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.sm,
  },

  detailItem: {
    width: '50%',
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },

  detailCard: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'center',
  },

  detailValue: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  detailLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Payment Information
  paymentSection: {
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.sm,
  },

  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  paymentLabel: {
    ...typography.bodyMedium,
    color: colors.success,
  },

  paymentValue: {
    ...typography.bodyMedium,
    color: colors.success,
    fontWeight: '600',
  },

  paymentTotal: {
    borderTopWidth: 1,
    borderTopColor: colors.success,
    paddingTop: spacing.sm,
    marginTop: spacing.sm,
  },

  paymentTotalLabel: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
  },

  paymentTotalValue: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
  },

  // Action Buttons
  actionSection: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },

  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    ...shadows.sm,
  },

  actionButtonText: {
    ...typography.labelLarge,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  secondaryActionButton: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  secondaryActionButtonText: {
    color: colors.primary,
  },

  dangerActionButton: {
    backgroundColor: colors.errorSoft,
    borderColor: colors.error,
  },

  dangerActionButtonText: {
    color: colors.error,
  },

  // Timeline
  timelineSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.sm,
  },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  timelineIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  timelineContent: {
    flex: 1,
  },

  timelineTitle: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  timelineTime: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  timelineConnector: {
    width: 2,
    backgroundColor: colors.surfaceVariant,
    marginLeft: 15,
    height: 20,
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },

  // Support Section
  supportSection: {
    backgroundColor: colors.infoSoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.sm,
  },

  supportTitle: {
    ...typography.titleMedium,
    color: colors.info,
    marginBottom: spacing.md,
    fontWeight: '600',
  },

  supportDescription: {
    ...typography.bodyMedium,
    color: colors.info,
    marginBottom: spacing.md,
  },

  supportActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  supportButton: {
    flex: 1,
    backgroundColor: colors.info,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },

  supportButtonText: {
    ...typography.labelMedium,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Loading States
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
