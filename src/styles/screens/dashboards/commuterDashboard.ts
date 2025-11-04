import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

const { width } = Dimensions.get('window');

export const commuterDashboardStyles = StyleSheet.create({
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
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.xl,
    transform: [{ translateY: -2 }],
    borderWidth: 1,
    borderColor: `${colors.primary}20`,
  },

  welcomeText: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  roleText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    opacity: 0.9,
  },

  // Commuter Type Selection
  commuterTypeCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  commuterTypeHeader: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  commuterTypeTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  commuterTypeSubtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  commuterTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.lg,
  },

  commuterTypeOption: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    marginHorizontal: '1%',
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    ...shadows.sm,
  },

  commuterTypeOptionActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight + '20',
  },

  commuterTypeIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryLight + '30',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  commuterTypeIconActive: {
    backgroundColor: colors.primary,
  },

  commuterTypeLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
    textAlign: 'center',
  },

  commuterTypeLabelActive: {
    color: colors.primary,
    fontWeight: '600',
  },

  // Statistics Cards
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 8,
  },

  statCard: {
    width: '45%',
    backgroundColor: colors.surface,
    borderRadius: 16,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  statValue: {
    ...typography.headlineSmall,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Quick Actions
  quickActionsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  quickActionsHeader: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  quickActionsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.lg,
  },

  quickActionItem: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    marginHorizontal: '1%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },

  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryLight + "30",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  quickActionLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Bookings Section
  bookingsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  bookingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  bookingsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  bookingsContent: {
    padding: spacing.lg,
  },

  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  bookingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight + "30",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  bookingDetails: {
    flex: 1,
  },

  bookingTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },

  bookingSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  bookingStatus: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.success + "30",
  },

  bookingStatusText: {
    ...typography.bodySmall,
    color: colors.success,
    fontWeight: '600',
  },

  // Empty States
  emptyState: {
    alignItems: 'center',
    padding: spacing.xxl,
  },

  emptyIcon: {
    marginBottom: spacing.lg,
    opacity: 0.5,
  },

  emptyTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptySubtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  emptyAction: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  emptyActionText: {
    ...typography.bodyMedium,
    color: colors.surface,
    fontWeight: '600',
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
    backgroundColor: colors.primaryLight + "30",
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
    backgroundColor: colors.primaryLight + '30',
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
    backgroundColor: colors.primaryLight + "30",
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

  // Responsive Design
  tabletLayout: {
    paddingHorizontal: spacing.xl,
    maxWidth: 1000,
    alignSelf: 'center',
  },
});

export default commuterDashboardStyles;
