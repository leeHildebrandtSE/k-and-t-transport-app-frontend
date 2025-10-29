import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

// Modern Dashboard Styles
export const dashboardStyles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContainer: {
    flexGrow: 1,
    padding: spacing.lg,
  },

  // Header section
  header: {
    backgroundColor: colors.primary,
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: borderRadius.xxl,
    borderBottomRightRadius: borderRadius.xxl,
    marginBottom: spacing.xl,
    ...shadows.lg,
  },

  headerGradient: {
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: borderRadius.xxl,
    borderBottomRightRadius: borderRadius.xxl,
  },

  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  welcomeText: {
    flex: 1,
  },

  welcomeTitle: {
    ...typography.headlineSmall,
    color: colors.textInverse,
    marginBottom: spacing.xs,
  },

  welcomeSubtitle: {
    ...typography.bodyLarge,
    color: colors.primaryLight,
    opacity: 0.9,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
  },

  avatarText: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  // Stats section
  statsContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginTop: -spacing.xl,
    ...shadows.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  statValue: {
    ...typography.headlineSmall,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  statDivider: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },

  // Quick actions
  quickActionsContainer: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.lg,
    fontWeight: '600',
  },

  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  quickActionCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  quickActionIconPrimary: {
    backgroundColor: colors.primary + '20',
  },

  quickActionIconSecondary: {
    backgroundColor: colors.secondary + '20',
  },

  quickActionIconSuccess: {
    backgroundColor: colors.success + '20',
  },

  quickActionIconInfo: {
    backgroundColor: colors.info + '20',
  },

  quickActionTitle: {
    ...typography.titleSmall,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xs,
    fontWeight: '500',
  },

  quickActionSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Recent activity
  recentActivityContainer: {
    marginBottom: spacing.xl,
  },

  activityCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  activityTitle: {
    ...typography.titleMedium,
    color: colors.text,
    flex: 1,
    fontWeight: '500',
  },

  activityTime: {
    ...typography.bodySmall,
    color: colors.textTertiary,
  },

  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  activityText: {
    flex: 1,
  },

  activityDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  activityStatus: {
    ...typography.labelSmall,
    fontWeight: '500',
    marginTop: spacing.xs,
  },

  // Status badges
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },

  statusActive: {
    backgroundColor: colors.success + '20',
  },

  statusPending: {
    backgroundColor: colors.warning + '20',
  },

  statusInactive: {
    backgroundColor: colors.textTertiary + '20',
  },

  statusCompleted: {
    backgroundColor: colors.info + '20',
  },

  statusTextActive: {
    ...typography.labelSmall,
    color: colors.success,
    fontWeight: '500',
  },

  statusTextPending: {
    ...typography.labelSmall,
    color: colors.warning,
    fontWeight: '500',
  },

  statusTextInactive: {
    ...typography.labelSmall,
    color: colors.textTertiary,
    fontWeight: '500',
  },

  statusTextCompleted: {
    ...typography.labelSmall,
    color: colors.info,
    fontWeight: '500',
  },

  // Empty states
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.huge,
  },

  emptyStateIcon: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  emptyStateTitle: {
    ...typography.titleLarge,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyStateDescription: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
    marginBottom: spacing.xl,
  },

  emptyStateButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },

  // Floating action button
  fab: {
    position: 'absolute',
    bottom: spacing.xl,
    right: spacing.xl,
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.lg,
  },

  // Tab navigation for dashboards
  tabContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xs,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },

  tabButton: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderRadius: borderRadius.md,
  },

  tabButtonActive: {
    backgroundColor: colors.primary,
  },

  tabButtonText: {
    ...typography.labelMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  tabButtonTextActive: {
    ...typography.labelMedium,
    color: colors.textInverse,
    fontWeight: '600',
  },
});

export default dashboardStyles;
