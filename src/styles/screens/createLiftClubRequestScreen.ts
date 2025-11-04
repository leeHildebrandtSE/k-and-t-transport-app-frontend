import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const createLiftClubRequestStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  scrollContainer: {
    padding: spacing.lg,
  },

  // Info Card
  infoCard: {
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primary + '30',
  },

  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  infoTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },

  infoText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 22,
  },

  // Form Cards
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },

  // Form Inputs
  input: {
    backgroundColor: colors.surface,
    marginBottom: spacing.sm,
  },

  // Day Selection
  daySelectionLabel: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },

  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  dayChip: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  selectedDayChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  dayText: {
    color: colors.textSecondary,
  },

  selectedDayText: {
    color: colors.textInverse,
    fontWeight: '600',
  },

  // Budget Information
  budgetInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.infoSoft,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
  },

  budgetInfoText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
    lineHeight: 18,
  },

  // Submit Section
  submitCard: {
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.success + '30',
  },

  submitTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.md,
  },

  submitText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  submitButton: {
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
  },

  spacer: {
    height: spacing.xxl,
  },

  // Form Validation
  errorText: {
    ...typography.bodySmall,
    color: colors.error,
    marginTop: spacing.xs,
    marginLeft: spacing.md,
  },

  // Helper Styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  halfWidth: {
    flex: 1,
  },

  // Radio Button Sections
  radioSection: {
    marginVertical: spacing.md,
  },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  radioLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    marginLeft: spacing.sm,
  },

  // Switch Sections
  switchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    marginVertical: spacing.sm,
  },

  switchLabel: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    flex: 1,
  },

  switchDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    flex: 1,
    marginTop: spacing.xs,
  },

  // Loading States
  loadingContainer: {
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },

  loadingText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },

  // Validation Messages
  validationSuccess: {
    backgroundColor: colors.successSoft,
    borderColor: colors.success,
  },

  validationError: {
    backgroundColor: colors.errorSoft,
    borderColor: colors.error,
  },

  // Responsive design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 600,
      alignSelf: 'center',
      width: '100%',
    },

    row: {
      flexDirection: 'row',
      gap: spacing.lg,
    },

    daysContainer: {
      maxWidth: 500,
    },
  }),
});

export default createLiftClubRequestStyles;
