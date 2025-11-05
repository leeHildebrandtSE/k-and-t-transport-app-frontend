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

  tabletLayout: {
    paddingHorizontal: spacing.xl,
    maxWidth: 1000,
    alignSelf: 'center',
  },
});

export default adminDashboardStyles;
