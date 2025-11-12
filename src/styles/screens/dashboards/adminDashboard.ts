import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

const { width } = Dimensions.get('window');

export const adminDashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    // Remove solid backgroundColor to allow gradient and background image to show
    padding: spacing.xl,
    borderBottomLeftRadius: borderRadius.xxl, // Match parent border radius
    borderBottomRightRadius: borderRadius.xxl, // Match parent border radius
    position: 'relative',
    overflow: 'hidden',
  },

  // Decorative patterns removed for production compatibility

  heroContent: {
    alignItems: 'center',
  },

  profileImageFrame: {
    position: 'relative',
    marginBottom: spacing.lg,
  },

  adminStatusIcon: {
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
    backgroundColor: colors.tertiary + '60', // Green overlay to match hero header and navbar theme
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

  roleText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    opacity: 0.9,
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
    width: 60,
    height: 60,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  statValue: {
    ...typography.headlineLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Content Cards
  contentCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -3 }],
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surfaceVariant,
  },

  cardTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  cardContent: {
    padding: spacing.lg,
  },

  // User Management
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  userAvatar: {
    marginRight: spacing.md,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '500',
  },

  userEmail: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: 2,
  },

  userRole: {
    marginLeft: spacing.sm,
  },

  // Data Table Enhancements
  tableHeader: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.md,
  },

  tableRow: {
    borderBottomColor: colors.border,
  },

  // Action Buttons
  actionButton: {
    marginLeft: spacing.xs,
  },

  fab: {
    position: 'absolute',
    margin: spacing.lg,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },

  // Status Chips
  statusChip: {
    borderRadius: borderRadius.full,
  },

  statusActive: {
    backgroundColor: colors.successSoft,
  },

  statusInactive: {
    backgroundColor: colors.errorSoft,
  },

  statusPending: {
    backgroundColor: colors.warningSoft,
  },

  // Search and Filters
  searchContainer: {
    marginBottom: spacing.lg,
  },

  searchBar: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    elevation: 2,
  },

  filterChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.md,
  },

  filterChip: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.full,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
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
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyDescription: {
    ...typography.bodyMedium,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: 280,
  },

  // Floating Graphics
  floatingGraphicsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: -1,
  },

  floatingGraphic: {
    position: 'absolute',
    opacity: 0.1,
  },

  // Dashboard Tabs
  tabContainer: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  // Premium Enhancements
  premiumGradient: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  glassEffect: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  // Legacy Style Mappings (for compatibility)
  scrollView: {
    flex: 1,
  },

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

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.xl,
  },

  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  statNumber: {
    ...typography.headlineSmall,
    fontWeight: 'bold',
    color: colors.text,
  },

  statLabelLegacy: {
    ...typography.bodySmall,
    color: colors.textSecondary,
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

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
  },

  // Activity and Status Styles
  activityList: {
    marginTop: spacing.md,
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  editButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityDetails: {
    flex: 1,
    marginLeft: spacing.sm,
  },

  activityText: {
    ...typography.bodyLarge,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  activityTime: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  statusList: {
    marginTop: spacing.md,
  },

  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  statusLabel: {
    ...typography.bodyLarge,
    color: colors.text,
  },

  // Placeholder Styles
  placeholderText: {
    ...typography.headlineMedium,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },

  placeholderSubtext: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },

  // Profile Styles
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  profileInfo: {
    marginLeft: spacing.lg,
    flex: 1,
  },

  roleChip: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
  },

  settingButton: {
    marginBottom: spacing.md,
    borderRadius: borderRadius.lg,
  },

  logoutButton: {
    marginTop: spacing.md,
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
    backgroundColor: colors.warning,
  },

  // User Management Screen Styles
  screenTitle: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '600',
    flex: 1,
  },

  headerButton: {
    borderRadius: borderRadius.lg,
  },

  listContainer: {
    padding: spacing.md,
    paddingTop: spacing.xl, // Add gap between hero header and content
  },

  userCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    ...shadows.md,
    borderWidth: 1,
    borderColor: `${colors.primary}10`,
  },

  userCardContent: {
    paddingVertical: spacing.md,
  },

  userDetails: {
    flex: 1,
    marginLeft: spacing.md,
  },

  userMetaContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  // Profile Screen Styles
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoContent: {
    flex: 1,
    marginLeft: spacing.md,
  },

  infoLabel: {
    ...typography.labelLarge,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  infoValue: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
  },

  preferenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  preferenceContent: {
    flex: 1,
  },

  preferenceLabel: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  preferenceDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  actionGrid: {
    gap: spacing.sm,
  },

  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  securityContent: {
    flex: 1,
  },

  securityLabel: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  securityStatus: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  // Responsive Design
  mobileLayout: {
    paddingHorizontal: spacing.md,
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
    backgroundColor: colors.tertiary, // Fallback for non-gradient usage
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
    backgroundColor: colors.secondary + '30', // Orange background for active state
    borderRadius: 12,
    padding: 8,
    ...shadows.md,
  },

  inactiveTabIcon: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: 8,
  },

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

  footerLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  footerLogoIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.sm,
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
export const adminGradientConfigs = {
  hero: {
    colors: ['rgba(4, 120, 87, 0.6)', 'rgba(5, 150, 105, 0.5)'], // Semi-transparent to show background image
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }, // Diagonal gradient top-left to bottom-right
  },
  navbar: {
    colors: ['#047857', colors.tertiary], // Keep navbar solid
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }, // Horizontal gradient left to right
  }
};

export default adminDashboardStyles;
