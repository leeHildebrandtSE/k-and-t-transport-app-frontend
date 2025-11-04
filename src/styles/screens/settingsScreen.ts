import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const settingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  scrollContainer: {
    padding: spacing.lg,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  dangerCard: {
    borderColor: '#ffcdd2',
    backgroundColor: '#fafafa',
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.md,
  },

  dangerTitle: {
    color: '#d32f2f',
  },

  // Profile Section
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.primarySoft,
    borderRadius: borderRadius.lg,
  },

  avatar: {
    backgroundColor: colors.primary,
    marginRight: spacing.lg,
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },

  profileEmail: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  profileRole: {
    ...typography.bodySmall,
    color: colors.primary,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // List Items
  listItem: {
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xs,
  },

  // Buttons
  deleteButton: {
    marginTop: spacing.md,
    borderColor: '#d32f2f',
    borderWidth: 2,
  },

  logoutButton: {
    marginVertical: spacing.xl,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.sm,
  },

  spacer: {
    height: spacing.xxl,
  },

  // Settings specific styles
  settingsGroup: {
    marginBottom: spacing.lg,
  },

  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  settingsItemContent: {
    flex: 1,
    marginRight: spacing.md,
  },

  settingsItemTitle: {
    ...typography.bodyLarge,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },

  settingsItemDescription: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },

  settingsItemIcon: {
    marginRight: spacing.md,
  },

  // Version info
  versionInfo: {
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },

  versionText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Responsive design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 600,
      alignSelf: 'center',
      width: '100%',
    },
  }),
});

export default settingsScreenStyles;
