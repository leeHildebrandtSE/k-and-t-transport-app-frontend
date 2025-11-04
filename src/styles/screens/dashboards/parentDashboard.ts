import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

const { width } = Dimensions.get('window');

export const parentDashboardStyles = StyleSheet.create({
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

  welcomeText: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  familyInfo: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    opacity: 0.9,
  },

  // Children Overview
  childrenSection: {
    marginBottom: spacing.xl,
  },

  childCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    // Premium 3D floating effect
    ...shadows.lg,
    transform: [{ translateY: -3 }],
    borderWidth: 1,
    borderColor: colors.border,
  },

  childHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  childAvatar: {
    marginRight: spacing.md,
  },

  childInfo: {
    flex: 1,
  },

  childName: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  childGrade: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: 2,
  },

  // Trip Status
  tripStatusCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  tripTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
  },

  tripTime: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  tripRoute: {
    ...typography.bodyLarge,
    color: colors.text,
    marginBottom: spacing.sm,
  },

  tripDriver: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  driverAvatar: {
    width: 32,
    height: 32,
    marginRight: spacing.sm,
  },

  driverName: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
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

  // Booking Cards
  bookingCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
    borderWidth: 1,
    borderColor: colors.border,
  },

  bookingHeader: {
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  bookingTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  bookingDate: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  bookingContent: {
    padding: spacing.lg,
  },

  bookingRoute: {
    ...typography.bodyLarge,
    color: colors.text,
    marginBottom: spacing.sm,
  },

  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Action Buttons
  actionButtons: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    marginRight: spacing.xs,
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: borderRadius.lg,
    marginLeft: spacing.xs,
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

  reminderButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quickActionText: {
    ...typography.bodyMedium,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Status Colors
  statusActive: {
    backgroundColor: colors.success,
  },

  statusCompleted: {
    backgroundColor: colors.success,
  },

  statusPending: {
    backgroundColor: colors.warning,
  },

  statusCancelled: {
    backgroundColor: colors.error,
  },

  // Chips and Tags
  statusChip: {
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.sm,
  },

  // Emergency Contact
  emergencyCard: {
    backgroundColor: colors.errorSoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.error,
  },

  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  emergencyIcon: {
    marginRight: spacing.sm,
  },

  emergencyTitle: {
    ...typography.titleMedium,
    color: colors.error,
    fontWeight: '600',
  },

  emergencyText: {
    ...typography.bodyMedium,
    color: colors.text,
  },

  // FAB
  fab: {
    position: 'absolute',
    margin: spacing.lg,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },

  // Tab Navigation
  tabContainer: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
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
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
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

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  actionButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.lg,
  },

  actionButtonContent: {
    paddingVertical: spacing.sm,
  },

  emptyText: {
    ...typography.headlineMedium,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '600',
  },

  emptySubtext: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  emptyButton: {
    marginTop: spacing.lg,
    borderRadius: borderRadius.lg,
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
    backgroundColor: colors.success,
  },

  // Booking Actions
  bookingActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },

  // Trips List
  tripsList: {
  },

  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },

  tripTimeContainer: {
    alignItems: 'center',
    marginRight: spacing.md,
    minWidth: 60,
  },

  tripTimeText: {
    ...typography.headlineSmall,
    color: colors.primary,
    fontWeight: '700',
  },

  tripTimeLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textTransform: 'uppercase',
  },

  tripDetails: {
    flex: 1,
  },

  tripStatus: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  // Scroll View
  scrollView: {
    flex: 1,
    padding: spacing.lg,
  },

  placeholderText: {
    ...typography.titleLarge,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.xl,
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

export default parentDashboardStyles;
