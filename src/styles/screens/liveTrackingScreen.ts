import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

const { width } = Dimensions.get('window');

export const liveTrackingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  scrollContainer: {
    padding: spacing.lg,
  },

  // Emergency Button
  emergencyButton: {
    paddingHorizontal: spacing.sm,
  },

  // Stats Section
  statsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  statsTitle: {
    ...typography.titleLarge,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },

  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  statItem: {
    alignItems: 'center',
    flex: 1,
  },

  statNumber: {
    ...typography.headlineLarge,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },

  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Trip Cards
  tripCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },

  tripInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  tripTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },

  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  statusChip: {
    backgroundColor: colors.primarySoft,
  },

  estimatedTime: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontWeight: '500',
  },

  // Progress Section
  progressSection: {
    marginBottom: spacing.lg,
  },

  progressLabel: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.sm,
  },

  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: spacing.xs,
  },

  progressText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'right',
  },

  // Location Section
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
  },

  locationText: {
    ...typography.bodyMedium,
    color: colors.text,
    fontWeight: '500',
    marginLeft: spacing.sm,
    flex: 1,
  },

  lastUpdate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },

  // Expanded Details
  expandedDetails: {
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: spacing.lg,
    marginTop: spacing.md,
  },

  actionButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.md,
  },

  actionButton: {
    flex: 1,
    borderColor: colors.primary,
  },

  // Safety Section
  safetyCard: {
    backgroundColor: colors.successSoft,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.success + '30',
  },

  safetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  safetyTitle: {
    ...typography.titleMedium,
    color: colors.text,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },

  safetyText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    lineHeight: 24,
  },

  // Empty State
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
  },

  spacer: {
    height: spacing.xxl,
  },

  // Status-specific styles
  statusScheduled: {
    backgroundColor: '#f5f5f5',
    borderLeftColor: '#9e9e9e',
  },

  statusEnRoute: {
    backgroundColor: '#e3f2fd',
    borderLeftColor: '#2196f3',
  },

  statusPickingUp: {
    backgroundColor: '#fff3e0',
    borderLeftColor: '#ff9800',
  },

  statusInTransit: {
    backgroundColor: '#e8f5e8',
    borderLeftColor: '#4caf50',
  },

  statusDroppingOff: {
    backgroundColor: '#fbe9e7',
    borderLeftColor: '#ff5722',
  },

  statusCompleted: {
    backgroundColor: '#e8f5e8',
    borderLeftColor: '#388e3c',
  },

  // Responsive design
  ...(width > 768 && {
    scrollContainer: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },

    statsGrid: {
      maxWidth: 600,
      alignSelf: 'center',
    },
  }),
});

export default liveTrackingScreenStyles;
