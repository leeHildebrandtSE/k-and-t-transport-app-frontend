import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

const { width, height } = Dimensions.get('window');

// Responsive breakpoints
const isTablet = width >= 768;
const isDesktop = width >= 1024;
const isMobile = width < 768;

// Responsive values
const getResponsiveCardMargin = () => isDesktop ? spacing.xl : isTablet ? spacing.lg : spacing.md;
const getResponsivePadding = () => isDesktop ? spacing.xxl : isTablet ? spacing.xl : spacing.lg;
const getResponsiveColumns = () => isDesktop ? 4 : isTablet ? 3 : 2;

export const driverDashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Cape Town Inspired Background Graphics
  premiumBackgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
  },

  // Ocean wave blob - representing Atlantic Ocean
  backgroundBlob1: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: width * 0.45,
    top: -width * 0.4,
    right: -width * 0.3,
    opacity: 0.04,
    transform: [{ rotate: '25deg' }],
    // Ocean gradient effect
  },

  // Mountain range blob - representing Table Mountain
  backgroundBlob2: {
    position: 'absolute',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    bottom: -width * 0.25,
    left: -width * 0.2,
    opacity: 0.03,
    transform: [{ rotate: '-35deg' }],
    // Mountain green gradient
  },

  // Sunshine blob - representing Cape Town's sunny weather
  backgroundBlob3: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    top: height * 0.6,
    right: width * 0.1,
    opacity: 0.02,
    transform: [{ rotate: '15deg' }],
    // Sunshine gradient
  },

  scrollContainer: {
    flex: 1,
    zIndex: 1,
  },

  // Responsive Home Header with Cape Town Ocean Gradient
  homeHeader: {
    paddingHorizontal: getResponsiveCardMargin(),
    paddingTop: isDesktop ? spacing.xxl : spacing.xl,
    paddingBottom: spacing.lg,
    marginBottom: spacing.md,
    // Cape Town ocean gradient overlay
    borderBottomWidth: 1,
    borderBottomColor: colors.primary + '10',
  },

  welcomeText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    fontWeight: '500',
    marginBottom: spacing.xs,
    fontSize: isTablet ? 18 : 16,
  },

  driverNameHome: {
    ...(isDesktop ? typography.displaySmall : typography.headlineLarge),
    color: colors.text,
    fontWeight: '700',
    letterSpacing: -0.5,
    // Cape Town ocean blue accent
    textShadowColor: `${colors.primary}20`,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  // Cape Town Ocean-Inspired Duty Status Card
  dutyStatusCard: {
    backgroundColor: colors.surface,
    borderRadius: isDesktop ? 32 : 24,
    marginHorizontal: getResponsiveCardMargin(),
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.lg,
    padding: getResponsivePadding(),
    ...shadows.lg,
    elevation: 8,
    // Cape Town ocean gradient border
    borderWidth: 2,
    borderColor: colors.primary + '15',
    // Ocean wave shadow effect
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },

  dutyStatusContent: {
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: isTablet ? 'center' : 'flex-start',
    gap: isTablet ? 0 : spacing.lg,
  },

  dutyStatusInfo: {
    flex: 1,
    alignItems: isTablet ? 'flex-start' : 'center',
  },

  dutyStatusLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: spacing.xs,
    fontSize: isTablet ? 16 : 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  dutyStatusText: {
    ...(isDesktop ? typography.headlineLarge : typography.headlineMedium),
    fontWeight: '800',
    letterSpacing: -0.5,
    // Cape Town sunshine glow effect for ON DUTY
    textShadowColor: 'rgba(245, 158, 11, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  dutyToggleButton: {
    width: isDesktop ? 80 : isTablet ? 72 : 64,
    height: isDesktop ? 80 : isTablet ? 72 : 64,
    borderRadius: isDesktop ? 40 : isTablet ? 36 : 32,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.xl,
    elevation: 12,
    // Cape Town ocean ripple effect
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  driverAvatar: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    marginRight: spacing.lg,
  },

  driverDetails: {
    flex: 1,
  },

  driverName: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  driverId: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  driverRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    ...typography.bodyMedium,
    color: colors.text,
    marginLeft: spacing.xs,
  },

  // Status Card
  statusCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  statusTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  statusToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },

  statusText: {
    ...typography.bodyLarge,
    fontWeight: '500',
  },

  // Route Information
  routeCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  routeIcon: {
    marginRight: spacing.sm,
  },

  routeTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  routeDetails: {
    marginBottom: spacing.md,
  },

  routeStop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  stopDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
  },

  stopText: {
    ...typography.bodyLarge,
    color: colors.text,
    flex: 1,
  },

  stopTime: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  // Cape Town Inspired Responsive Stats Grid
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: getResponsiveCardMargin(),
    marginBottom: spacing.xl,
    justifyContent: 'space-between',
  },

  statCard: {
    flex: isDesktop ? 0.23 : isTablet ? 0.48 : 0.48,
    minWidth: isDesktop ? 200 : isTablet ? 160 : (width - getResponsiveCardMargin() * 4) / 2,
    backgroundColor: colors.surface,
    borderRadius: isDesktop ? 28 : 20,
    padding: isDesktop ? spacing.xl : spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    marginHorizontal: isDesktop ? spacing.sm : spacing.xs,
    ...shadows.lg,
    elevation: 8,
    // Cape Town themed gradual border colors
    borderWidth: 2,
    borderColor: 'transparent',
    minHeight: isDesktop ? 160 : isTablet ? 140 : 120,
    // Ocean wave effect
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },

  // Individual stat card themes for Cape Town elements
  statCardOcean: {
    borderColor: colors.primary + '20',
    backgroundColor: colors.surface, // Solid white background instead of transparent
  },

  statCardMountain: {
    borderColor: colors.tertiary + '20',
    backgroundColor: colors.surface, // Solid white background instead of transparent
  },

  statCardSunshine: {
    borderColor: colors.secondary + '20',
    backgroundColor: colors.surface, // Solid white background instead of transparent
  },

  statCardBeach: {
    borderColor: colors.info + '20',
    backgroundColor: colors.surface, // Solid white background instead of transparent
  },

  statValue: {
    ...(isDesktop ? typography.headlineLarge : typography.headlineMedium),
    fontWeight: '900',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    letterSpacing: -1,
    fontSize: isDesktop ? 32 : isTablet ? 28 : 24,
  },

  statLabel: {
    ...(isDesktop ? typography.bodyMedium : typography.bodySmall),
    color: colors.textSecondary,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: isDesktop ? 20 : 16,
  },

  // Cape Town Ocean-Inspired Premium Cards
  premiumCard: {
    backgroundColor: colors.surface,
    borderRadius: isDesktop ? 32 : 24,
    marginHorizontal: getResponsiveCardMargin(),
    marginBottom: spacing.lg,
    ...shadows.xl,
    elevation: 12,
    // Cape Town ocean gradient border
    borderWidth: 1.5,
    borderColor: colors.primary + '15',
    overflow: 'hidden',
    // Atlantic Ocean shadow effect
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: getResponsivePadding(),
    paddingTop: getResponsivePadding(),
    // Cape Town sunrise gradient accent
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + '08',
  },

  premiumCardTitle: {
    ...(isDesktop ? typography.headlineSmall : typography.titleLarge),
    color: colors.text,
    fontWeight: '800',
    marginLeft: spacing.md,
    letterSpacing: -0.5,
    // Cape Town mountain text shadow
    textShadowColor: `${colors.tertiary}15`,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  cardIconContainer: {
    width: isDesktop ? 56 : 48,
    height: isDesktop ? 56 : 48,
    borderRadius: isDesktop ? 28 : 24,
    justifyContent: 'center',
    alignItems: 'center',
    // Cape Town ocean gradient background for icons
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  // Current Trip Styles
  activeTripContainer: {
    paddingTop: spacing.sm,
  },

  tripRoute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  tripRouteText: {
    ...typography.headlineSmall,
    color: colors.text,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  tripStatusBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },

  tripStatusText: {
    ...typography.bodySmall,
    color: colors.textInverse,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  tripDetails: {
    marginBottom: spacing.lg,
  },

  tripDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  tripDetailText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    fontWeight: '500',
  },

  primaryActionButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    elevation: 6,
  },

  primaryActionText: {
    ...typography.titleMedium,
    color: colors.textInverse,
    fontWeight: '700',
    marginLeft: spacing.sm,
    letterSpacing: 0.5,
  },

  // No Trip State
  noTripContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },

  noTripTitle: {
    ...typography.titleLarge,
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },

  noTripSubtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
    opacity: 0.7,
  },

  // Schedule Styles - Responsive Cape Town Design
  scheduleContainer: {
    paddingTop: spacing.sm,
    paddingHorizontal: width < 768 ? spacing.xs : width < 1024 ? spacing.sm : spacing.md,
  },

  premiumScheduleItem: {
    flexDirection: width < 768 ? 'column' : 'row',
    alignItems: width < 768 ? 'stretch' : 'center',
    backgroundColor: colors.background + '50',
    borderRadius: 16,
    padding: width < 768 ? spacing.md : spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border + '30',
    minHeight: width < 768 ? 120 : 80,
  },

  scheduleTimeContainer: {
    alignItems: width < 768 ? 'flex-start' : 'center',
    marginRight: width < 768 ? 0 : spacing.md,
    marginBottom: width < 768 ? spacing.sm : 0,
    minWidth: width < 768 ? undefined : width < 1024 ? 60 : 70,
    flexDirection: width < 768 ? 'row' : 'column',
    alignSelf: width < 768 ? 'flex-start' : 'auto',
  },

  scheduleTime: {
    ...typography.titleMedium,
    fontSize: width < 768 ? 16 : 18,
    color: colors.text,
    fontWeight: '700',
    letterSpacing: -0.3,
    marginRight: width < 768 ? spacing.sm : 0,
  },

  scheduleAmPm: {
    ...typography.bodySmall,
    fontSize: width < 768 ? 12 : 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },

  scheduleInfo: {
    flex: 1,
    marginRight: width < 768 ? 0 : spacing.md,
    marginBottom: width < 768 ? spacing.sm : 0,
  },

  scheduleTitle: {
    ...typography.titleMedium,
    fontSize: width < 768 ? 14 : 16,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  scheduleRoute: {
    ...typography.bodyMedium,
    fontSize: width < 768 ? 12 : 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },

  scheduleMetrics: {
    flexDirection: width < 768 ? 'column' : 'row',
    alignItems: width < 768 ? 'flex-start' : 'center',
  },

  scheduleMetric: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width < 768 ? 0 : spacing.md,
    marginBottom: width < 768 ? spacing.xs : 0,
  },

  scheduleMetricText: {
    ...typography.bodySmall,
    fontSize: width < 768 ? 11 : 12,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },

  scheduleStatus: {
    paddingHorizontal: width < 768 ? spacing.xs : spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    minWidth: width < 768 ? 50 : 60,
    alignItems: 'center',
    alignSelf: width < 768 ? 'flex-end' : 'auto',
  },

  scheduleStatusText: {
    ...typography.bodySmall,
    fontSize: width < 768 ? 10 : 12,
    color: colors.textInverse,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Vehicle Status - Cape Town Responsive Grid
  vehicleStatusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: spacing.sm,
    paddingHorizontal: width < 768 ? spacing.xs : spacing.sm,
    justifyContent: width < 768 ? 'space-between' : 'flex-start',
  },

  vehicleStatusItem: {
    width: width < 768 ? '48%' : width < 1024 ? '48%' : '23%',
    alignItems: 'center',
    backgroundColor: colors.background + '50',
    borderRadius: 16,
    padding: width < 768 ? spacing.sm : spacing.md,
    marginBottom: spacing.md,
    marginHorizontal: width < 768 ? 0 : spacing.xs,
    borderWidth: 1,
    borderColor: colors.border + '30',
    minHeight: width < 768 ? 100 : 120,
  },

  vehicleStatusLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  vehicleStatusValue: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  // Quick Actions
  quickActionsHome: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },

  quickActionsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.lg,
    letterSpacing: -0.3,
  },

  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quickActionHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.sm,
    borderRadius: 16,
    marginHorizontal: spacing.xs,
    ...shadows.md,
    elevation: 6,
    borderWidth: 1,
    borderColor: colors.border + '20',
  },

  quickActionText: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
    marginTop: spacing.sm,
    textAlign: 'center',
  },

  // Emergency FAB
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    ...shadows.xl,
    elevation: 12,
  },

  // Bottom spacer
  bottomSpacer: {
    height: 100,
  },

  // Routes Screen Styles
  routesHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    marginBottom: spacing.md,
  },

  routesTitle: {
    ...typography.headlineLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    letterSpacing: -0.5,
  },

  routesSubtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  routeStatsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.xl,
  },

  routeStatCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    ...shadows.md,
    elevation: 6,
    borderWidth: 1,
    borderColor: colors.border + '20',
  },

  routeStatValue: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '800',
    marginBottom: spacing.xs,
    letterSpacing: -0.5,
  },

  routeStatLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '600',
    textAlign: 'center',
  },

  premiumRouteCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.lg,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.border + '20',
    overflow: 'hidden',
  },

  routeCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border + '20',
  },

  routeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  routeHeaderContent: {
    flex: 1,
  },

  premiumRouteTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    letterSpacing: -0.3,
  },

  routeSubtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  routeStatusBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },

  routeStatusText: {
    ...typography.bodySmall,
    color: colors.textInverse,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  routeDetailsContainer: {
    padding: spacing.lg,
  },

  routeDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  routeDetailText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    fontWeight: '500',
  },

  routeActionsContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    paddingTop: 0,
  },

  routeActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: 16,
    marginHorizontal: spacing.xs,
    ...shadows.sm,
    elevation: 4,
  },

  primaryRouteAction: {
    backgroundColor: colors.primary,
  },

  secondaryRouteAction: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },

  routeActionText: {
    ...typography.bodyMedium,
    color: colors.textInverse,
    fontWeight: '600',
    marginLeft: spacing.xs,
  },

  // Route Quick Actions (for DriverRoutesScreen)
  routeQuickActions: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },

  quickActionItem: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: '30%',
  },

  // Passengers Screen Styles
  passengersHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    marginBottom: spacing.md,
  },

  passengersTitle: {
    ...typography.headlineLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    letterSpacing: -0.5,
  },

  passengersSubtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },

  filterTab: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border + '30',
  },

  activeFilterTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  filterTabText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '600',
  },

  activeFilterTabText: {
    color: colors.textInverse,
  },

  passengerCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.lg,
    ...shadows.md,
    elevation: 6,
    borderWidth: 1,
    borderColor: colors.border + '20',
  },

  passengerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  passengerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    borderWidth: 2,
    borderColor: colors.surface,
    ...shadows.sm,
    elevation: 2,
  },

  passengerInitials: {
    ...typography.titleMedium,
    color: colors.textInverse,
    fontWeight: '700',
  },

  passengerInfo: {
    flex: 1,
  },

  passengerName: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    letterSpacing: -0.3,
  },

  passengerDetails: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  passengerStatus: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    minWidth: 60,
  },

  passengerStatusText: {
    ...typography.bodySmall,
    color: colors.textInverse,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  passengerContactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  passengerContact: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
  },

  // Additional Passenger Stats Styles
  passengerStatsContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl, // Add gap between hero header and content
    marginBottom: spacing.xl,
    justifyContent: 'space-between',
  },

  passengerStatCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  passengerStatValue: {
    ...typography.headlineSmall,
    color: colors.text,
    fontWeight: '800',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },

  passengerStatLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Filter Tabs Styles
  filterTabsContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: `${colors.textSecondary}10`,
    borderRadius: borderRadius.lg,
    padding: spacing.xs,
  },

  // Premium Passenger List Styles
  premiumPassengerList: {
    paddingTop: spacing.md,
    paddingHorizontal: spacing.sm,
  },

  routePassengersSection: {
    marginBottom: spacing.xl,
  },

  routeSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: `${colors.primary}08`,
    borderRadius: borderRadius.lg,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },

  routeSectionTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginLeft: spacing.sm,
    flex: 1,
  },

  routeSectionCount: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    backgroundColor: `${colors.primary}15`,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },

  premiumPassengerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.md,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.borderLight,
    // Cape Town ocean gradient border
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },

  premiumPassengerInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  premiumPassengerName: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  premiumPassengerDetails: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },

  passengerMetrics: {
    flexDirection: 'row',
    gap: spacing.lg,
  },

  passengerMetric: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  passengerMetricText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },

  // Profile Screen Styles
  profileSection: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },

  profileTitle: {
    ...typography.headlineLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xl,
    letterSpacing: -0.5,
  },

  profileCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.border + '20',
  },

  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.lg,
  },

  avatarLabel: {
    ...typography.headlineLarge,
    fontWeight: '700',
  },

  profileName: {
    ...typography.headlineMedium,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.sm,
    letterSpacing: -0.5,
  },

  profileRole: {
    ...typography.titleMedium,
    color: colors.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  profileInfoGrid: {
    marginBottom: spacing.xl,
  },

  profileInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border + '20',
  },

  profileInfoLabel: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    fontWeight: '600',
    flex: 1,
  },

  profileInfoValue: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    flex: 2,
  },

  emergencyContactsSection: {
    marginBottom: spacing.xl,
  },

  emergencyContactsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.lg,
    letterSpacing: -0.3,
  },

  emergencyContactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background + '50',
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border + '30',
  },

  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  contactInfo: {
    flex: 1,
  },

  contactName: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  contactNumber: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  // Hero Profile Styles for DriverProfileScreen
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
  },

  heroProfileInfo: {
    alignItems: 'center',
    width: '100%',
  },

  heroName: {
    ...typography.headlineMedium,
    color: '#fff',
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  heroRole: {
    ...typography.titleMedium,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: spacing.lg,
    textAlign: 'center',
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    width: '100%',
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
  },

  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: spacing.md,
  },

  heroStatValue: {
    ...typography.headlineSmall,
    color: '#fff',
    fontWeight: '800',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  heroStatLabel: {
    ...typography.bodySmall,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  starRating: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
    justifyContent: 'center',
  },

  // Responsive Card Content Padding
  cardContent: {
    paddingHorizontal: getResponsivePadding(),
    paddingVertical: spacing.lg,
  },

  // Cape Town themed action buttons
  capeActionButton: {
    backgroundColor: colors.primary,
    borderRadius: isDesktop ? 20 : 16,
    paddingVertical: isDesktop ? spacing.lg : spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
    elevation: 8,
    // Atlantic Ocean gradient shadow
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },

  capeActionButtonText: {
    ...(isDesktop ? typography.titleMedium : typography.bodyLarge),
    color: colors.textInverse,
    fontWeight: '700',
    marginLeft: spacing.sm,
    letterSpacing: 0.5,
  },

  // Responsive emergency FAB with Cape Town colors
  emergencyFAB: {
    position: 'absolute',
    bottom: isDesktop ? 32 : 24,
    right: isDesktop ? 32 : 24,
    zIndex: 1000, // High z-index to stay above all other content
    ...shadows.xl,
    elevation: 16,
    // Cape Town sunset emergency colors
    shadowColor: colors.error,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  // Navigation Card
  navigationCard: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  navigationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  navigationIcon: {
    marginRight: spacing.sm,
  },

  navigationTitle: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  navigationDetails: {
    ...typography.bodyLarge,
    color: colors.text,
  },

  // Vehicle Info
  vehicleCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    // Enhanced 3D effect
    ...shadows.lg,
    transform: [{ translateY: -2 }],
  },

  vehicleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  vehicleIcon: {
    marginRight: spacing.sm,
  },

  vehicleTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
  },

  vehicleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.md,
  },

  vehicleDetail: {
    flex: 1,
    minWidth: '40%',
  },

  detailLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  detailValue: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
  },

  // Status Colors
  statusOnline: {
    backgroundColor: colors.success,
  },

  statusOffline: {
    backgroundColor: colors.textSecondary,
  },

  statusOnTrip: {
    backgroundColor: colors.primary,
  },

  statusBreak: {
    backgroundColor: colors.warning,
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

  // Responsive Design
  mobileLayout: {
    paddingHorizontal: spacing.md,
  },

  tabletLayout: {
    paddingHorizontal: spacing.xl,
    maxWidth: 1000,
    alignSelf: 'center',
  },

  // Hero Profile Card
  heroProfileCard: {
    marginHorizontal: 0, // Full width spanning
    marginTop: 0, // Start from the very top
    marginBottom: spacing.xxl, // Increased spacing for better visual separation
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
    backgroundColor: colors.primary, // Fallback for non-gradient usage
    padding: spacing.xl,
    borderBottomLeftRadius: borderRadius.xxl, // Match parent border radius
    borderBottomRightRadius: borderRadius.xxl, // Match parent border radius
    flex: 1,
    minHeight: 300,
    position: 'relative',
    overflow: 'hidden',
  },

  heroContent: {
    alignItems: 'center',
  },

  // African pattern image container with CSS background
  africanPatternImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    transform: [{ skewX: '-8deg' }, { translateX: 20 }],
    // CSS background image for web (will be ignored on native)
    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InRyYW5zcGFyZW50Ii8+CjxnIG9wYWNpdHk9IjAuNCI+CjxwYXRoIGQ9Ik01MCA1MCBMOCA4MCBMNTBI0MTEwIEwyMCA4MFoiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz4KPHBhdGggZD0iTTEyMCAzMCBMMTYwIDcwIEwxMjAgMTEwIEw4MCA3MFoiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjQiLz4KPHBhdGggZD0iTTIwMCA2MCBMMjMwIDkwIEwyMDAgMTIwIEwxNzAgOTBaIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0zMDAgNDAgTDM0MCA4MCBMM8ADEgxMjAgTDI2MCA4MFoiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz4KPHBhdGggZD0iTTcwIDE1MCBMOTA1IDEgNzAgTTcwIDE5MCBMNTAgMTcwWiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNCIvPgo8cGF0aCBkPSJNMTUwIDE0MCBMMTGWIDE3MCBMMTU5IDIwMCBMMTIwIDE3MFoiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz4KPHBhdGggZD0iTTI1MCAxNjAgTDI3MCAxODAgTDI1MCAyMDAgTDIzMCAxODBaIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC40Ii8+CjwvZz4KPGcgb3BhY2l0eT0iMC4zIj4KPHJlY3QgeD0iMTAiIHk9Ijk1IiB3aWR0aD0iNjAiIGhlaWdodD0iMiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTUwIiB5PSI5NSIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjMxMCIgeT0iOTUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPg==")',
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 150px',
  },

  profileImageFrame: {
    position: 'relative',
    marginBottom: spacing.lg,
  },

  premiumAvatar: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    ...shadows.lg,
  },

  dutyStatusIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    ...shadows.lg,
  },

  // Details Grid
  detailsGrid: {
    gap: spacing.md,
  },

  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  detailIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  detailContent: {
    flex: 1,
  },

  premiumDetailLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '500',
  },

  premiumDetailValue: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
  },

  // Contact Grid
  contactGrid: {
    gap: spacing.md,
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  contactContent: {
    flex: 1,
  },

  contactLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  contactValue: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
  },

  // Action Grid
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },

  actionCard: {
    flex: 1,
    minWidth: '46%',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    ...shadows.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  premiumPrimaryAction: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  premiumSecondaryAction: {
    backgroundColor: colors.surface,
  },

  logoutAction: {
    backgroundColor: colors.errorSoft,
    borderColor: colors.error + '30',
  },

  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.md,
  },

  actionTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },

  actionSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
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

  // Premium Tab Bar Styles
  premiumTabBar: {
    backgroundColor: colors.primary, // Fallback for non-gradient usage
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    ...shadows.xl,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
  },

  tabBarLabel: {
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

  // Responsive Adjustments
  ...(width > 768 && {
    heroProfileCard: {
      width: '100%', // Full width on larger screens
      alignSelf: 'stretch', // Stretch to full width
    },
    premiumCard: {
      maxWidth: 600,
      alignSelf: 'center',
    },
    actionGrid: {
      maxWidth: 600,
      alignSelf: 'center',
    },
  }),

  // Section Container Styles
  sectionContainer: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: `${colors.primary}08`,
    borderRadius: borderRadius.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    ...shadows.sm,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginLeft: spacing.md,
    letterSpacing: -0.3,
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

  // Enhanced Trip Container Styles
  enhancedTripContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: 0,
  },

  enhancedTripHeader: {
    marginBottom: spacing.md,
  },

  enhancedTripDetails: {
    marginBottom: spacing.lg,
    gap: spacing.md,
  },

  tripDetailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: `${colors.primary}15`,
    ...shadows.sm,
    elevation: 2,
  },

  tripDetailContent: {
    flex: 1,
    marginLeft: spacing.md,
  },

  tripDetailLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: spacing.xs,
  },

  tripDetailValue: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
  },

  // Enhanced No Trip Container
  enhancedNoTripContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  noTripIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: `${colors.secondary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    ...shadows.md,
  },

  // Enhanced Route Card Styles
  enhancedRouteCard: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: `${colors.primary}20`,
    ...shadows.md,
    elevation: 4,
  },

  // Premium Background Image Styles
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  premiumBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary + '60', // Ocean blue overlay to match hero header and navbar theme
  },

  // Route-specific background overlays
  routesBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(14, 165, 233, 0.05)', // Ocean blue tint
  },

  passengersBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(245, 158, 11, 0.05)', // Warm sunset tint
  },

  profileBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(5, 150, 105, 0.05)', // Mountain green tint
  },
});

// Gradient configurations for LinearGradient components
export const driverGradientConfigs = {
  hero: {
    colors: ['rgba(2, 132, 199, 0.6)', 'rgba(14, 165, 233, 0.5)'], // Semi-transparent to show background image
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }, // Diagonal gradient top-left to bottom-right
  },
  navbar: {
    colors: ['#0284c7', colors.primary], // Keep navbar solid
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }, // Horizontal gradient left to right
  }
};

export default driverDashboardStyles;
