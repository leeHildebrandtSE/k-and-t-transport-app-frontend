import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

const { width } = Dimensions.get('window');

export const staffDashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Floating Graphics
  floatingGraphicsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  floatingCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    top: '10%',
    right: '-10%',
    opacity: 0.1,
  },

  floatingCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    bottom: '20%',
    left: '-5%',
    opacity: 0.08,
  },

  floatingTriangle: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: '60%',
    right: '10%',
    opacity: 0.05,
    transform: [{ rotate: '45deg' }],
  },

  scrollContainer: {
    flex: 1,
  },

  // Header Section
  header: {
    marginBottom: spacing.xl,
  },

  welcomeCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.xl,
    transform: [{ translateY: -2 }],
    borderWidth: 1,
    borderColor: `${colors.primaryLight}20`,
  },

  staffInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  staffAvatar: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    marginRight: spacing.lg,
  },

  staffDetails: {
    flex: 1,
  },

  staffName: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  staffRole: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  staffDepartment: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: '500',
  },

  // Quick Stats
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 8,
  },

  statCard: {
    width: '45%',
    backgroundColor: colors.surface,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginBottom: 16,
    marginHorizontal: '2.5%',
    ...shadows.sm,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  statValue: {
    ...typography.headlineSmall,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Tasks Overview
  tasksCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  tasksTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  viewAllButton: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: '500',
  },

  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  taskCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskCompleted: {
    backgroundColor: colors.primary,
  },

  taskContent: {
    flex: 1,
  },

  taskTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
  },

  taskSubtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: 2,
  },

  taskPriority: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },

  priorityHigh: {
    backgroundColor: colors.errorSoft,
  },

  priorityMedium: {
    backgroundColor: colors.warningSoft,
  },

  priorityLow: {
    backgroundColor: colors.successSoft,
  },

  priorityText: {
    ...typography.bodySmall,
    fontWeight: '500',
  },

  // Recent Activities
  activitiesCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  activitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  activitiesTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  activityContent: {
    flex: 1,
  },

  activityTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },

  activityDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  activityTime: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },

  quickActionCard: {
    flex: 1,
    minWidth: width > 768 ? 150 : '47%',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    // Enhanced 3D effect
    ...shadows.md,
    transform: [{ translateY: -2 }],
  },

  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  quickActionText: {
    ...typography.bodyMedium,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Schedule Card
  scheduleCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  scheduleTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  scheduleDate: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    paddingLeft: spacing.md,
    marginBottom: spacing.sm,
  },

  scheduleTime: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '600',
    minWidth: 80,
    marginRight: spacing.md,
  },

  scheduleDetails: {
    flex: 1,
  },

  reminderButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scheduleEventTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
  },

  scheduleEventDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: 2,
  },

  // Announcements
  announcementsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  announcementsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  announcementsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  announcementItem: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },

  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },

  announcementTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    flex: 1,
  },

  announcementDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  announcementContent: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  // Action Buttons
  actionContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },

  actionButton: {
    flex: 1,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    // Enhanced 3D effect
    ...shadows.md,
    transform: [{ translateY: -1 }],
  },

  primaryAction: {
    backgroundColor: colors.primary,
  },

  secondaryAction: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  actionText: {
    ...typography.titleMedium,
    textAlign: 'center',
    fontWeight: '600',
  },

  primaryActionText: {
    color: colors.surface,
  },

  secondaryActionText: {
    color: colors.primary,
  },

  // Status Indicators
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },

  statusText: {
    ...typography.bodyMedium,
    fontWeight: '500',
  },

  // Color Variations
  primaryBackground: {
    backgroundColor: colors.primarySoft,
  },

  successBackground: {
    backgroundColor: colors.successSoft,
  },

  warningBackground: {
    backgroundColor: colors.warningSoft,
  },

  errorBackground: {
    backgroundColor: colors.errorSoft,
  },

  // Loading States
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  loadingText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  // Legacy Style Mappings (for compatibility)
  scrollView: {
    flex: 1,
  },

  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  welcomeText: {
    marginLeft: spacing.md,
    flex: 1,
  },

  welcomeTitle: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: 'bold',
  },

  welcomeSubtitle: {
    color: colors.surface,
    opacity: 0.9,
  },

  card: {
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.surface,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  cardTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  actionButtonContent: {
    paddingVertical: spacing.sm,
  },

  scheduleList: {
    marginTop: spacing.md,
  },

  scheduleTimeText: {
    ...typography.headlineSmall,
    color: colors.primary,
    fontWeight: 'bold',
  },

  scheduleTimeLabel: {
    ...typography.bodySmall,
    color: colors.primary,
  },

  scheduleRoute: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
  },

  scheduleLocation: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  scheduleStatus: {
    ...typography.bodyMedium,
    color: colors.success,
    fontWeight: '500',
  },

  // Responsive Design
  mobileLayout: {
    paddingHorizontal: spacing.md,
  },

  tabletLayout: {
    paddingHorizontal: spacing.xl,
    maxWidth: 1000,
    alignSelf: 'center',
  },

  // FAB
  fab: {
    position: 'absolute',
    margin: spacing.lg,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    padding: spacing.xl,
  },

  emptyStateIcon: {
    marginBottom: spacing.md,
    opacity: 0.5,
  },

  emptyStateText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Lift Club Section
  liftClubSection: {
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  sectionLabel: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.md,
  },

  liftClubButton: {
    backgroundColor: colors.info,
  },

  // Profile Screen Styles
  profileHeroCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    margin: spacing.lg,
    overflow: 'hidden',
    ...shadows.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },

  profileHeroBackground: {
    height: 120,
    backgroundColor: colors.primary,
    position: 'relative',
    overflow: 'hidden',
  },

  profileHeroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primarySoft,
    opacity: 0.8,
  },

  profileHeroContent: {
    padding: spacing.xl,
    paddingTop: spacing.lg,
    alignItems: 'center',
    marginTop: -40,
  },

  profileAvatar: {
    backgroundColor: colors.surface,
    borderWidth: 4,
    borderColor: colors.surface,
    ...shadows.lg,
  },

  profileName: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '700',
    marginTop: spacing.md,
    textAlign: 'center',
  },

  profileContactInfo: {
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  profileEmail: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  profilePhone: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  profileRoleChip: {
    marginTop: spacing.lg,
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.full,
  },

  profileSettingsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  profileSettingsHeader: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },

  profileSettingsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  profileSettingsContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },

  profileSettingButton: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },

  profileSettingButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
  },

  profileSettingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  profileSettingInfo: {
    flex: 1,
  },

  profileSettingTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },

  profileSettingSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  profileLogoutButton: {
    backgroundColor: colors.error,
    borderRadius: borderRadius.lg,
    marginTop: spacing.md,
    ...shadows.sm,
  },

  profileLogoutButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
  },

  profileLogoutIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  profileLogoutText: {
    ...typography.bodyLarge,
    color: colors.surface,
    fontWeight: '600',
  },
});

export default staffDashboardStyles;
