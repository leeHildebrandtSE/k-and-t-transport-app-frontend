import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const liftClubManagementStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  // Tab Navigation
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    gap: spacing.sm,
  },

  tabButton: {
    flex: 1,
    borderRadius: borderRadius.md,
  },

  // Scroll Container
  scrollContainer: {
    flex: 1,
    padding: spacing.lg,
  },

  // Empty State
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginVertical: spacing.xl,
    ...shadows.md,
  },

  emptyContent: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },

  emptyTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  emptyText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
  },

  // Request Cards
  requestCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  requestHeaderLeft: {
    flex: 1,
    marginRight: spacing.md,
  },

  requestHeaderRight: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },

  requestTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  requesterName: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  statusChip: {
    alignSelf: 'flex-end',
  },

  typeChip: {
    backgroundColor: colors.primarySoft,
    alignSelf: 'flex-end',
  },

  // Request Details
  requestDetails: {
    marginBottom: spacing.lg,
  },

  routeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    backgroundColor: colors.primarySoft,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },

  routeText: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
    marginLeft: spacing.sm,
    flex: 1,
  },

  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.md,
  },

  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '45%',
  },

  detailText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },

  description: {
    ...typography.bodyMedium,
    color: colors.text,
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    lineHeight: 20,
  },

  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },

  dayChip: {
    backgroundColor: colors.primary + '15',
  },

  // Action Buttons
  actionButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },

  approveButton: {
    flex: 1,
    backgroundColor: colors.success,
  },

  rejectButton: {
    flex: 1,
    borderColor: colors.error,
  },

  // Active Lift Club Cards
  liftClubCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },

  clubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  clubTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    flex: 1,
    marginRight: spacing.md,
  },

  clubBadges: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },

  membersBadge: {
    backgroundColor: colors.primary,
    color: colors.textInverse,
  },

  activeChip: {
    backgroundColor: colors.success + '15',
  },

  clubDetails: {
    marginBottom: spacing.lg,
  },

  clubActions: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },

  // Dialog Styles
  dialogText: {
    ...typography.bodyMedium,
    color: colors.text,
    marginBottom: spacing.lg,
  },

  dialogInput: {
    marginBottom: spacing.md,
  },

  dialogRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  // Menu Styles
  menuButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
  },

  // Loading States
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  loadingText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  // Stats Cards
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    ...shadows.sm,
  },

  statNumber: {
    ...typography.headlineMedium,
    color: colors.primary,
    fontWeight: '700',
  },

  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    textAlign: 'center',
  },

  // Filter Section
  filterSection: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },

  filterTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.md,
  },

  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },

  filterLabel: {
    ...typography.bodyMedium,
    color: colors.text,
  },

  // Priority Indicators
  priorityHigh: {
    borderLeftColor: colors.error,
    borderLeftWidth: 4,
  },

  priorityMedium: {
    borderLeftColor: '#FFA500',
    borderLeftWidth: 4,
  },

  priorityLow: {
    borderLeftColor: colors.success,
    borderLeftWidth: 4,
  },

  // Responsive Design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },

    detailsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    detailItem: {
      minWidth: '48%',
    },

    tabContainer: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },

    actionButtons: {
      maxWidth: 400,
      alignSelf: 'center',
    },

    clubActions: {
      maxWidth: 400,
      alignSelf: 'center',
    },
  }),
});

export default liftClubManagementStyles;
