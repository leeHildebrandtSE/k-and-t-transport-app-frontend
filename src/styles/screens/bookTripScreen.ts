import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../theme';

export const bookTripScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },

  title: {
    ...typography.headlineLarge,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  subtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  // Form Sections
  formSection: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.sm,
  },

  sectionTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.md,
    fontWeight: '600',
  },

  sectionDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  // Location Inputs
  locationContainer: {
    marginBottom: spacing.lg,
  },

  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  locationIcon: {
    marginRight: spacing.md,
  },

  locationTextInput: {
    flex: 1,
    ...typography.bodyMedium,
    color: colors.text,
  },

  locationPlaceholder: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  swapButton: {
    alignSelf: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.full,
    padding: spacing.sm,
    marginVertical: spacing.sm,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  // Date and Time Selection
  dateTimeContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },

  dateTimeInput: {
    flex: 1,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },

  dateTimeLabel: {
    ...typography.labelSmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  dateTimeValue: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '600',
  },

  dateTimePlaceholder: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  // Trip Type Selection
  tripTypeContainer: {
    marginBottom: spacing.lg,
  },

  tripTypeOptions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  tripTypeOption: {
    flex: 1,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },

  tripTypeOptionSelected: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
  },

  tripTypeIcon: {
    marginBottom: spacing.sm,
  },

  tripTypeText: {
    ...typography.bodySmall,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '600',
  },

  tripTypeTextSelected: {
    color: colors.primary,
  },

  // Passengers Selection
  passengersContainer: {
    marginBottom: spacing.lg,
  },

  passengersSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },

  passengersLabel: {
    ...typography.bodyMedium,
    color: colors.text,
  },

  passengersControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  passengersButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  passengersButtonDisabled: {
    backgroundColor: colors.surfaceVariant,
  },

  passengersButtonText: {
    ...typography.bodyLarge,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  passengersButtonTextDisabled: {
    color: colors.textSecondary,
  },

  passengersCount: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '700',
    minWidth: 40,
    textAlign: 'center',
  },

  // Route Options
  routeOptionsContainer: {
    marginTop: spacing.lg,
  },

  routeOption: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
    ...shadows.sm,
  },

  routeOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },

  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  routeInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  routeDriver: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  routeVehicle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  routeRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    ...typography.labelSmall,
    color: colors.warning,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },

  routePrice: {
    alignItems: 'flex-end',
  },

  routePriceValue: {
    ...typography.titleLarge,
    color: colors.success,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  routePriceLabel: {
    ...typography.labelSmall,
    color: colors.textSecondary,
  },

  routeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  routeDetailItem: {
    alignItems: 'center',
  },

  routeDetailValue: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  routeDetailLabel: {
    ...typography.labelSmall,
    color: colors.textSecondary,
  },

  routeFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  routeFeature: {
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  routeFeatureText: {
    ...typography.labelSmall,
    color: colors.success,
    fontWeight: '600',
  },

  // Special Requests
  specialRequestsContainer: {
    marginBottom: spacing.lg,
  },

  specialRequestsInput: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    textAlignVertical: 'top',
    ...typography.bodyMedium,
    color: colors.text,
    minHeight: 80,
  },

  // Summary Section
  summarySection: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },

  summaryTitle: {
    ...typography.titleLarge,
    color: colors.primary,
    marginBottom: spacing.md,
    fontWeight: '700',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  summaryLabel: {
    ...typography.bodyMedium,
    color: colors.primary,
  },

  summaryValue: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: '600',
  },

  summaryTotal: {
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    paddingTop: spacing.sm,
    marginTop: spacing.sm,
  },

  summaryTotalLabel: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '700',
  },

  summaryTotalValue: {
    ...typography.titleMedium,
    color: colors.primary,
    fontWeight: '700',
  },

  // Action Buttons
  actionSection: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },

  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    ...shadows.sm,
  },

  actionButtonText: {
    ...typography.labelLarge,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  actionButtonDisabled: {
    backgroundColor: colors.surfaceVariant,
  },

  actionButtonTextDisabled: {
    color: colors.textSecondary,
  },

  secondaryActionButton: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  secondaryActionButtonText: {
    color: colors.primary,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
  },

  emptyStateIcon: {
    marginBottom: spacing.lg,
  },

  emptyStateTitle: {
    ...typography.titleMedium,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyStateMessage: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },

  // Loading State
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
