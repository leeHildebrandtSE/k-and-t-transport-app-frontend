import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography, animations } from '../theme';

const { width, height } = Dimensions.get('window');

export const landingPageStyles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Navigation Styles
  navbar: {
    position: 'fixed' as any, // Fixed position for sticky navbar
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.surface,
    ...shadows.sm,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  logoText: {
    ...typography.titleMedium,
    color: colors.textOnColor,
    fontWeight: 'bold',
  },
  logoTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  navLink: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
  navLinkActive: {
    backgroundColor: colors.primarySoft,
  },
  navLinkText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  navLinkTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  authButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  loginButton: {
    borderColor: colors.border,
  },
  loginButtonText: {
    color: colors.textSecondary,
  },
  signupButton: {
    backgroundColor: colors.primary,
  },
  signupButtonText: {
    color: colors.textOnColor,
  },

  // Mobile Navigation Styles
  mobileMenuButton: {
    marginLeft: 'auto',
  },
  mobileMenu: {
    position: 'absolute',
    top: 70, // Below navbar
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: colors.surface,
    ...shadows.lg,
  },
  mobileMenuContent: {
    padding: spacing.lg,
  },
  mobileNavLink: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    marginVertical: spacing.xs,
  },
  mobileNavLinkActive: {
    backgroundColor: colors.primarySoft,
  },
  mobileNavLinkText: {
    ...typography.bodyLarge,
    color: colors.text,
    textAlign: 'center',
    fontSize: 18,
  },
  mobileNavLinkTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  mobileAuthButtons: {
    flexDirection: 'column',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  mobileLoginButton: {
    borderColor: colors.border,
    minHeight: 48,
  },
  mobileLoginButtonText: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  mobileSignupButton: {
    backgroundColor: colors.primary,
    minHeight: 48,
  },
  mobileSignupButtonText: {
    color: colors.textOnColor,
    fontSize: 16,
  },

  // Hero Section Styles
  scrollContainer: {
    flex: 1,
  },
  heroContainer: {
    height: height * 0.9,
    marginTop: 70, // Account for navbar
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    flexDirection: width > 768 ? 'row' : 'column',
    alignItems: 'center',
    maxWidth: 1200,
    width: '100%',
    paddingHorizontal: spacing.xl,
    gap: spacing.huge,
    zIndex: 2, // Ensure content is above background vehicle
    position: 'relative',
  },
  heroTextContainer: {
    flex: 1,
    alignItems: width > 768 ? 'flex-start' : 'center',
  },
  heroTitle: {
    ...typography.displayLarge,
    fontSize: width > 768 ? 48 : width > 480 ? 36 : 28,
    lineHeight: width > 768 ? 56 : width > 480 ? 42 : 34,
    color: colors.textOnColor,
    textAlign: width > 768 ? 'left' : 'center',
    marginBottom: spacing.lg,
  },
  heroTitleAccent: {
    color: colors.secondaryLight,
  },
  heroSubtitle: {
    ...typography.bodyLarge,
    fontSize: width > 768 ? 18 : 16,
    lineHeight: width > 768 ? 28 : 24,
    color: colors.textOnColor,
    opacity: 0.9,
    textAlign: width > 768 ? 'left' : 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: width <= 768 ? spacing.md : 0,
  },
  heroCTAContainer: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: width > 768 ? spacing.md : spacing.sm,
    marginBottom: spacing.xl,
    width: width <= 768 ? '100%' : 'auto',
    paddingHorizontal: width <= 768 ? spacing.lg : 0,
  },
  primaryCTA: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    height: width <= 768 ? 48 : 56,
    minHeight: 48, // Ensure touch-friendly size
    width: width <= 768 ? '100%' : 'auto',
  },
  primaryCTAText: {
    ...typography.labelLarge,
    color: colors.textOnColor,
    fontSize: width <= 768 ? 16 : 18,
  },
  secondaryCTA: {
    borderColor: colors.textOnColor,
    paddingHorizontal: spacing.xl,
    height: width <= 768 ? 48 : 56,
    minHeight: 48, // Ensure touch-friendly size
    width: width <= 768 ? '100%' : 'auto',
  },
  secondaryCTAText: {
    color: colors.textOnColor,
    fontSize: width <= 768 ? 16 : 18,
  },
  trustIndicators: {
    flexDirection: width > 480 ? 'row' : 'column',
    gap: width > 480 ? spacing.xl : spacing.md,
    justifyContent: width > 768 ? 'flex-start' : 'center',
    alignItems: 'center',
  },
  trustItem: {
    alignItems: 'center',
  },
  trustNumber: {
    ...typography.headlineMedium,
    color: colors.textOnColor,
    fontWeight: 'bold',
  },
  trustLabel: {
    ...typography.bodySmall,
    color: colors.textOnColor,
    opacity: 0.8,
  },

  // Hero Background Video Styles
  heroBackgroundVideoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  heroBackgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    opacity: 0.6, // Adjust this value to control video opacity (0.4-0.7 works well)
    zIndex: 2,
  },

  // Hero Background Vehicle Styles (Fallback)
  heroBackgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  heroBackgroundVehicle: {
    position: 'absolute',
    right: width > 768 ? 50 : 30,
    bottom: width > 768 ? 150 : 100,
    opacity: 0.3,
    padding: 10,
    transform: [{ scale: width > 768 ? 1.5 : 1.0 }, { rotate: '-5deg' }],
  },
  // Vehicle Silhouette Styles
  vehicleSilhouette: {
    width: width > 768 ? 400 : 250,
    height: width > 768 ? 160 : 100,
    position: 'relative',
  },
  vehicleBody: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    height: 80,
    backgroundColor: '#000000',
    opacity: 0.4,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: '#333333',
  },
  vehicleRoof: {
    position: 'absolute',
    top: -25,
    left: 40,
    right: 60,
    height: 30,
    backgroundColor: '#000000',
    opacity: 0.25,
    borderRadius: borderRadius.md,
  },
  vehicleDoor1: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 2,
    height: 40,
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  vehicleDoor2: {
    position: 'absolute',
    top: 10,
    right: 40,
    width: 2,
    height: 40,
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  vehicleWindow1: {
    position: 'absolute',
    top: -20,
    left: 50,
    width: 30,
    height: 15,
    backgroundColor: colors.primary,
    opacity: 0.4,
    borderRadius: borderRadius.sm,
  },
  vehicleWindow2: {
    position: 'absolute',
    top: -20,
    right: 70,
    width: 25,
    height: 15,
    backgroundColor: colors.primary,
    opacity: 0.4,
    borderRadius: borderRadius.sm,
  },
  vehicleWheels: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  vehicleWheel: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#000000',
    opacity: 0.4,
    borderWidth: 2,
    borderColor: '#000000',
  },
  vehicleDetails: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    flexDirection: 'row',
    gap: 5,
  },
  vehicleHeadlight: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.secondary,
    opacity: 0.6,
  },
  vehicleGrille: {
    width: 12,
    height: 6,
    backgroundColor: colors.textOnColor,
    opacity: 0.3,
    borderRadius: 2,
  },
  vehicleBadge: {
    position: 'absolute',
    bottom: -30,
    left: 50,
    alignItems: 'center',
  },
  vehicleBrandText: {
    ...typography.bodyMedium,
    color: colors.textOnColor,
    opacity: 0.7,
    textAlign: 'center',
    fontSize: width > 768 ? 14 : 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  vehicleModelText: {
    ...typography.bodySmall,
    color: colors.textOnColor,
    opacity: 0.5,
    textAlign: 'center',
    fontSize: width > 768 ? 10 : 8,
    fontWeight: '500',
    letterSpacing: 0.5,
  },

  // Hero Visual
  heroVisual: {
    flex: width > 768 ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2, // Ensure it's above the background vehicle
  },
  heroCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    ...shadows.lg,
    overflow: 'hidden',
    width: 300,
  },
  heroCardHeader: {
    backgroundColor: colors.surfaceVariant,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroCardDots: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  heroCardContent: {
    padding: spacing.lg,
  },
  heroCardTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  tripRoute: {
    marginBottom: spacing.md,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xs,
  },
  routeIcon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: spacing.sm,
  },
  routeText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  routeLine: {
    width: 2,
    height: 20,
    backgroundColor: colors.border,
    marginLeft: 3,
    marginVertical: spacing.xs,
  },
  tripStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusChip: {
    backgroundColor: colors.successSoft,
  },
  etaText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  // Features Section
  featuresContainer: {
    paddingVertical: width <= 768 ? spacing.huge : spacing.massive,
    paddingHorizontal: width <= 768 ? spacing.md : spacing.xl,
    backgroundColor: colors.backgroundSecondary,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: spacing.huge,
    maxWidth: 600,
    alignSelf: 'center',
  },
  sectionTitle: {
    ...typography.headlineLarge,
    fontSize: width > 768 ? 36 : width > 480 ? 28 : 24,
    lineHeight: width > 768 ? 44 : width > 480 ? 36 : 32,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: width <= 768 ? spacing.md : 0,
  },
  sectionSubtitle: {
    ...typography.bodyLarge,
    fontSize: width > 768 ? 18 : 16,
    lineHeight: width > 768 ? 28 : 24,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: width <= 768 ? spacing.lg : 0,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.lg,
    maxWidth: 1200,
    alignSelf: 'center',
  },
  featureCard: {
    width: width > 768 ? (width > 1024 ? 350 : 300) : width - spacing.xl * 2,
    backgroundColor: colors.surface,
    ...shadows.md,
  },
  featureCardContent: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  featureIcon: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  featureTitle: {
    ...typography.titleLarge,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  featureDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },

  // Services Section
  servicesContainer: {
    paddingVertical: width <= 768 ? spacing.huge : spacing.massive,
    paddingHorizontal: width <= 768 ? spacing.md : spacing.xl,
  },
  servicesGrid: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: spacing.xl,
    maxWidth: 1200,
    alignSelf: 'center',
  },
  serviceCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden', // Ensures image corners are rounded
    // Enhanced 3D floating effect
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
    // Floating transform for 3D effect
    transform: [{ translateY: -6 }, { scale: 1.02 }],
    // Subtle border with primary color hint
    borderWidth: 1,
    borderColor: `${colors.primaryLight}15`, // Very subtle primary tint
    // Enhanced spacing
    marginVertical: spacing.md,
    marginHorizontal: spacing.xs,
  },
  serviceCardContent: {
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
    // Add subtle inner spacing for premium feel
    paddingTop: spacing.xxl,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
    marginBottom: 0,
    // Add subtle inner shadow for depth
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceTitle: {
    ...typography.headlineSmall,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  serviceDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  serviceFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  serviceFeatureChip: {
    backgroundColor: colors.primarySoft,
  },
  serviceFeatureText: {
    ...typography.labelSmall,
    color: colors.primary,
  },
  serviceButton: {
    borderColor: colors.primary,
  },
  serviceButtonText: {
    color: colors.primary,
  },

  // CTA Section
  ctaContainer: {
    paddingVertical: spacing.massive,
    paddingHorizontal: spacing.xl,
  },
  ctaContent: {
    alignItems: 'center',
    maxWidth: 600,
    alignSelf: 'center',
  },
  ctaTitle: {
    ...typography.headlineLarge,
    color: colors.textOnColor,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  ctaSubtitle: {
    ...typography.bodyLarge,
    color: colors.textOnColor,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 28,
  },
  ctaButtons: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: spacing.md,
    width: '100%',
    alignItems: 'center',
  },
  ctaPrimary: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    height: 56,
  },
  ctaPrimaryText: {
    ...typography.labelLarge,
    color: colors.textOnColor,
  },
  ctaSecondary: {
    borderColor: colors.textOnColor,
    paddingHorizontal: spacing.xl,
    height: 56,
  },
  ctaSecondaryText: {
    color: colors.textOnColor,
  },

  // About Section Styles
  aboutContainer: {
    backgroundColor: colors.surface,
    paddingVertical: width <= 768 ? spacing.huge : spacing.massive,
    paddingHorizontal: width <= 768 ? spacing.md : spacing.lg,
  },
  aboutContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  aboutGrid: {
    flexDirection: width > 768 ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: spacing.xl,
    marginVertical: spacing.xxl,
    justifyContent: 'space-between',
  },
  aboutCard: {
    backgroundColor: colors.background,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    width: width > 768 ? '48%' : '100%',
    ...shadows.md,
  },
  aboutIconContainer: {
    backgroundColor: colors.primaryLight + '20',
    borderRadius: borderRadius.full,
    marginBottom: spacing.lg,
  },
  aboutIcon: {
    margin: 0,
  },
  aboutCardTitle: {
    ...typography.titleLarge,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  aboutCardText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },

  // Leadership Section Styles
  leadershipSection: {
    backgroundColor: colors.secondary + '10',
    padding: spacing.xxl,
    borderRadius: borderRadius.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  leadershipTitle: {
    ...typography.headlineMedium,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  leadershipCard: {
    flexDirection: width > 768 ? 'row' : 'column',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  leadershipImageContainer: {
    marginBottom: width > 768 ? 0 : spacing.lg,
    marginRight: width > 768 ? spacing.xl : 0,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.md,
  },
  leadershipImage: {
    width: 120,
    height: 120,
    borderRadius: borderRadius.lg,
  },
  leadershipInfo: {
    flex: 1,
    alignItems: width > 768 ? 'flex-start' : 'center',
  },
  leadershipName: {
    ...typography.headlineSmall,
    color: colors.text,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: width > 768 ? 'left' : 'center',
  },
  leadershipRole: {
    ...typography.titleMedium,
    color: colors.secondary,
    marginBottom: spacing.md,
    textAlign: width > 768 ? 'left' : 'center',
  },
  leadershipDescription: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    lineHeight: 24,
    textAlign: width > 768 ? 'left' : 'center',
  },

  missionSection: {
    backgroundColor: colors.primaryLight + '10',
    padding: spacing.xxl,
    borderRadius: borderRadius.lg,
    marginTop: spacing.xl,
  },
  missionTitle: {
    ...typography.headlineMedium,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  missionText: {
    ...typography.bodyLarge,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 26,
  },

  // Contact Section Styles
  contactContainer: {
    backgroundColor: colors.background,
    paddingVertical: width <= 768 ? spacing.huge : spacing.massive,
    paddingHorizontal: width <= 768 ? spacing.md : spacing.lg,
  },
  contactContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  contactGrid: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: spacing.xl,
    marginVertical: spacing.xxl,
    justifyContent: 'space-between',
  },
  contactCard: {
    backgroundColor: colors.primary,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    width: width > 768 ? '30%' : '100%',
    ...shadows.lg,
  },
  contactIconContainer: {
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.full,
    marginBottom: spacing.md,
  },
  contactIcon: {
    margin: 0,
  },
  contactMethod: {
    ...typography.titleMedium,
    color: colors.textInverse,
    marginBottom: spacing.xs,
  },
  contactDetail: {
    ...typography.headlineSmall,
    color: colors.textInverse,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  contactTime: {
    ...typography.bodySmall,
    color: colors.textInverse,
    opacity: 0.8,
    textAlign: 'center',
  },
  emergencyContact: {
    marginTop: spacing.xl,
  },
  emergencyCard: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  emergencyTitle: {
    ...typography.titleLarge,
    color: colors.error,
    marginLeft: spacing.sm,
  },
  emergencyNumber: {
    ...typography.headlineLarge,
    color: colors.error,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  emergencyText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Enhanced Animation Styles
  animatedCard: {
    transform: [{ scale: 1 }],
    opacity: 1,
  },

  animatedButton: {
    transform: [{ scale: 1 }],
  },

  fadeInUp: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },

  floatingAnimation: {
    // Placeholder for floating animation (handled by Animated.Value)
    opacity: 1,
  },

  pulseAnimation: {
    // Placeholder for pulse animation (handled by Animated.Value)
    opacity: 1,
  },

  // Enhanced Feature Card with animations
  animatedFeatureCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.xl, // Enhanced shadow for better depth
    transform: [{ scale: 1 }, { translateY: 0 }],
  },

  // Enhanced 3D Floating Card Effect
  elevated3DCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    // Dramatic 3D shadow effect - multiple layers
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
    // Subtle border with primary color hint
    borderWidth: 1,
    borderColor: `${colors.primaryLight}20`, // Subtle primary color tint
    // Enhanced spacing and floating effect
    marginVertical: spacing.md,
    // Combined transforms for 3D floating effect
    transform: [{ translateY: -4 }, { scale: 1.02 }],
  },

  // Enhanced CTA Button with glow effect
  enhancedCTA: {
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    ...shadows.lg, // Enhanced shadow for buttons
  },

  // Floating Graphics Styles
  floatingGraphicsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none', // Don't interfere with user interactions
    zIndex: 1,
  },

  floatingGraphic: {
    position: 'absolute',
    pointerEvents: 'none',
    // Add subtle glow effect for better visibility
    shadowColor: 'rgba(79, 70, 229, 0.3)', // Primary blue glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default landingPageStyles;
