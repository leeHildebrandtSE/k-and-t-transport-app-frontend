import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const notificationsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  scrollContainer: {
    padding: spacing.lg,
  },

  // Filter Section
  filterContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },

  filterChip: {
    backgroundColor: colors.surface,
  },

  // Actions Bar
  actionsCard: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primary + '20',
  },

  actionsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  actionsText: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
  },

  // Notification Cards
  notificationCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.md,
    ...shadows.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  notificationContent: {
    padding: spacing.lg,
  },

  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  notificationMeta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },

  notificationIcon: {
    marginRight: spacing.md,
  },

  notificationInfo: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  notificationTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    flex: 1,
  },

  unreadBadge: {
    backgroundColor: colors.primary,
    marginLeft: spacing.sm,
  },

  notificationTime: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  deleteButton: {
    margin: 0,
  },

  notificationMessage: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },

  actionButtonContainer: {
    alignItems: 'flex-start',
    marginTop: spacing.sm,
  },

  actionButton: {
    borderColor: colors.primary,
  },

  // Empty State
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginTop: spacing.xxl,
    ...shadows.md,
  },

  emptyContent: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },

  emptyIcon: {
    marginBottom: spacing.lg,
  },

  emptyTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 250,
    lineHeight: 22,
  },

  spacer: {
    height: spacing.xxl,
  },

  // Priority indicators
  priorityHigh: {
    backgroundColor: '#f44336',
  },

  priorityMedium: {
    backgroundColor: '#ff9800',
  },

  priorityLow: {
    backgroundColor: '#4caf50',
  },

  // Notification types
  typeBooking: {
    borderLeftColor: colors.success,
  },

  typePayment: {
    borderLeftColor: colors.secondary,
  },

  typeTrip: {
    borderLeftColor: colors.primary,
  },

  typeSystem: {
    borderLeftColor: colors.textSecondary,
  },

  typeReminder: {
    borderLeftColor: colors.warning,
  },

  // Responsive design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 700,
      alignSelf: 'center',
      width: '100%',
    },
  }),
});

export default notificationsScreenStyles;
