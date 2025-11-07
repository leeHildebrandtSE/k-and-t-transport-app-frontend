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
    zIndex: 1,
  },

  // Hero Profile Card (matching driver dashboard style)
  heroProfileCard: {
    marginHorizontal: 0, // Full width spanning
    marginTop: 0, // Start from the very top
    marginBottom: spacing.xxl, // Spacing between hero header and content
    borderBottomLeftRadius: borderRadius.xxl, // Modern bottom corner radius
    borderBottomRightRadius: borderRadius.xxl, // Modern bottom corner radius
    overflow: 'hidden',
    ...shadows.xl,
  },

  // Hero background image container
  heroBackgroundImage: {
    width: '100%',
    flex: 1,
    borderBottomLeftRadius: borderRadius.xxl,
    borderBottomRightRadius: borderRadius.xxl,
    overflow: 'hidden',
  },

  heroGradientOverlay: {
    backgroundColor: colors.secondary, // Fallback for non-gradient usage
    padding: spacing.xl,
    borderBottomLeftRadius: borderRadius.xxl, // Match parent border radius
    borderBottomRightRadius: borderRadius.xxl, // Match parent border radius
    position: 'relative',
    overflow: 'hidden',
  },

    // African Pattern Overlay
  africanPatternOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '45%',
    height: '100%',
    opacity: 0.25,
    transform: [{ skewX: '-8deg' }, { translateX: 30 }],
    zIndex: 1,
  },

  // Sunset African Pattern (Commuter Theme) - Visible but elegant
  sunsetAfricanPattern: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.25)',
    borderStyle: 'solid',
  },

  // Elegant geometric elements - more visible
  africanPatternDot1: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 3,
    top: '25%',
    left: '20%',
  },

  africanPatternDot2: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 2,
    top: '45%',
    right: '25%',
  },

  africanPatternDot3: {
    position: 'absolute',
    width: 5,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2.5,
    bottom: '30%',
    left: '30%',
  },

  // More visible lines for texture
  africanTriangle1: {
    position: 'absolute',
    width: 20,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    top: '35%',
    left: '15%',
  },

  africanTriangle2: {
    position: 'absolute',
    width: 16,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    bottom: '40%',
    right: '20%',
  },

  africanZigzag: {
    position: 'absolute',
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    top: '20%',
    right: '30%',
  },

  africanLine1: {
    position: 'absolute',
    width: 1,
    height: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    top: '60%',
    left: '25%',
  },

  africanLine2: {
    position: 'absolute',
    width: 15,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    bottom: '25%',
    right: '15%',
  },

  // Golden African Pattern (Commuter Theme) - Subtle geometric texture
  goldenAfricanPattern: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.15)',
    borderStyle: 'solid',
  },

  // Simplified, elegant geometric elements
  africanPatternDot1: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1.5,
    top: '25%',
    left: '20%',
  },

  africanPatternDot2: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 1,
    top: '45%',
    right: '25%',
  },

  africanPatternDot3: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 1.5,
    bottom: '30%',
    left: '30%',
  },

  // Very subtle lines for texture
  africanTriangle1: {
    position: 'absolute',
    width: 15,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    top: '35%',
    left: '15%',
  },

  africanTriangle2: {
    position: 'absolute',
    width: 12,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    bottom: '40%',
    right: '20%',
  },

  africanZigzag: {
    position: 'absolute',
    width: 1,
    height: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: '20%',
    right: '30%',
  },

  africanLine1: {
    position: 'absolute',
    width: 1,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    top: '60%',
    left: '25%',
  },

  africanLine2: {
    position: 'absolute',
    width: 10,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    bottom: '25%',
    right: '15%',
  },  heroContent: {
    alignItems: 'center',
  },

  profileImageFrame: {
    position: 'relative',
    marginBottom: spacing.lg,
  },

  commuterStatusIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    ...shadows.lg,
  },

  onlineIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.success,
    borderWidth: 3,
    borderColor: '#fff',
    ...shadows.md,
  },

  heroProfileInfo: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  heroName: {
    ...typography.headlineMedium,
    color: colors.textInverse,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  heroRole: {
    ...typography.titleMedium,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    marginBottom: spacing.lg,
    textAlign: 'center',
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },

  statItem: {
    alignItems: 'center',
  },

  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: spacing.lg,
  },

  heroStatValue: {
    ...typography.headlineSmall,
    color: colors.textInverse,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
  },

  heroStatLabel: {
    ...typography.labelSmall,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    fontSize: 11,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginTop: 2,
  },

  // Premium Background Image Styles
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
  },

  premiumBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondary + '60', // Golden overlay to match hero header and navbar theme
    zIndex: -1,
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
    marginTop: spacing.xl, // Add gap between hero header and content
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
    marginTop: spacing.xl, // Add gap between hero header and content
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
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
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

  enhancedPassengerCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xxl,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.xl,
    ...shadows.lg,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: 'hidden',
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

  // Premium Passenger List Styles (Quick Actions)
  premiumPassengerList: {
    marginHorizontal: -spacing.lg,
  },

  premiumPassengerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border + '30',
  },

  premiumPassengerInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },

  premiumPassengerName: {
    ...typography.bodyLarge,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  premiumPassengerDetails: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },

  passengerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  passengerMetrics: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  passengerMetric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },

  passengerMetricText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontSize: 11,
  },

  passengerStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
    gap: spacing.xs,
  },

  passengerStatusText: {
    ...typography.bodySmall,
    color: colors.surface,
    fontWeight: '700',
    fontSize: 10,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },

  sectionTitle: {
    ...typography.headlineSmall,
    fontWeight: '700',
    color: colors.text,
  },

  // Premium Tab Bar Styles
  premiumTabBar: {
    backgroundColor: colors.secondary, // Fallback for non-gradient usage
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    ...shadows.xl,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
  },  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
    color: colors.surface, // White text by default
  },

  tabBarItem: {
    paddingVertical: 5,
  },

  activeTabIcon: {
    backgroundColor: colors.secondaryLight + '20', // Light orange background for better contrast
    borderRadius: 12,
    padding: 8,
    ...shadows.md,
  },

  inactiveTabIcon: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: 8,
  },

  // Responsive Design
  tabletLayout: {
    paddingHorizontal: spacing.xl,
    maxWidth: 1000,
    alignSelf: 'center',
  },

  // App Footer
  appFooter: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginBottom: spacing.lg,
  },

  footerText: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  versionText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  // Bottom spacer
  bottomSpacer: {
    height: 100,
  },
});

// Gradient configurations for LinearGradient components
export const commuterGradientConfigs = {
  hero: {
    colors: ['rgba(217, 119, 6, 0.6)', 'rgba(245, 158, 11, 0.5)'], // Semi-transparent to show background image
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }, // Diagonal gradient top-left to bottom-right
  },
  navbar: {
    colors: ['#d97706', colors.secondary], // Keep navbar solid
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }, // Horizontal gradient left to right
  }
};

export default commuterDashboardStyles;
