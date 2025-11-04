import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const liftClubBrowseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  scrollContainer: {
    padding: spacing.lg,
  },

  // Header Actions
  toggleButton: {
    marginLeft: spacing.sm,
  },

  // Search Section
  searchSection: {
    marginBottom: spacing.lg,
  },

  searchBar: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
  },

  filterChips: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  filterChip: {
    backgroundColor: colors.surface,
  },

  // Lift Club Cards
  clubCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  clubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },

  clubInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  clubTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },

  clubMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  statusChip: {
    backgroundColor: colors.primarySoft,
  },

  monthlyFee: {
    ...typography.titleMedium,
    color: colors.success,
    fontWeight: '700',
    textAlign: 'right',
  },

  clubDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  // Route Information
  routeInfo: {
    marginBottom: spacing.md,
  },

  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  routeText: {
    ...typography.bodyMedium,
    color: colors.text,
    marginLeft: spacing.sm,
    flex: 1,
  },

  // Schedule Information
  scheduleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  scheduleText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },

  // Driver Information
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    marginTop: spacing.sm,
  },

  driverText: {
    ...typography.bodyMedium,
    color: colors.text,
    marginLeft: spacing.sm,
    fontWeight: '500',
  },

  // Card Actions
  cardActions: {
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },

  detailsButton: {
    flex: 1,
    marginRight: spacing.sm,
    borderColor: colors.primary,
  },

  joinButton: {
    flex: 1,
    marginLeft: spacing.sm,
  },

  // Requests Section
  requestsSection: {
    marginTop: spacing.md,
  },

  sectionTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },

  requestCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },

  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  requestTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    flex: 1,
  },

  requestDescription: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  listTitle: {
    ...typography.bodyMedium,
    fontWeight: '500',
  },

  requestDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'right',
    marginTop: spacing.md,
    fontStyle: 'italic',
  },

  // Empty States
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginTop: spacing.xxl,
    ...shadows.md,
  },

  emptyContent: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },

  emptyIcon: {
    marginBottom: spacing.lg,
  },

  emptyTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  emptyText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  createButton: {
    marginTop: spacing.md,
  },

  // FAB
  fab: {
    position: 'absolute',
    margin: spacing.lg,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },

  spacer: {
    height: 80, // Space for FAB
  },

  // Status-specific styles
  statusActive: {
    backgroundColor: '#e8f5e8',
    borderColor: '#4caf50',
  },

  statusFull: {
    backgroundColor: '#fff3e0',
    borderColor: '#ff9800',
  },

  statusInactive: {
    backgroundColor: '#f5f5f5',
    borderColor: '#9e9e9e',
  },

  // Responsive design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },

    clubCard: {
      maxWidth: 750,
      alignSelf: 'center',
    },

    scheduleInfo: {
      justifyContent: 'flex-start',
      gap: spacing.xxl,
    },
  }),
});

export default liftClubBrowseStyles;
