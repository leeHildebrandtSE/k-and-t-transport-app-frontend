import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, componentSizes } from './theme';

// Common layout styles
export const layoutStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },

  // Flex utilities
  row: {
    flexDirection: 'row',
  },

  rowCentered: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
  },

  columnCentered: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  flex1: {
    flex: 1,
  },

  // Alignment utilities
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  alignStart: {
    alignItems: 'flex-start',
  },

  alignEnd: {
    alignItems: 'flex-end',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  justifyAround: {
    justifyContent: 'space-around',
  },

  // Position utilities
  absolute: {
    position: 'absolute',
  },

  relative: {
    position: 'relative',
  },

  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// Spacing utilities
export const spacingStyles = StyleSheet.create({
  // Margins
  m0: { margin: spacing.none },
  mXs: { margin: spacing.xs },
  mSm: { margin: spacing.sm },
  mMd: { margin: spacing.md },
  mLg: { margin: spacing.lg },
  mXl: { margin: spacing.xl },
  mXxl: { margin: spacing.xxl },

  // Margin horizontal
  mhXs: { marginHorizontal: spacing.xs },
  mhSm: { marginHorizontal: spacing.sm },
  mhMd: { marginHorizontal: spacing.md },
  mhLg: { marginHorizontal: spacing.lg },
  mhXl: { marginHorizontal: spacing.xl },

  // Margin vertical
  mvXs: { marginVertical: spacing.xs },
  mvSm: { marginVertical: spacing.sm },
  mvMd: { marginVertical: spacing.md },
  mvLg: { marginVertical: spacing.lg },
  mvXl: { marginVertical: spacing.xl },

  // Margin top
  mtXs: { marginTop: spacing.xs },
  mtSm: { marginTop: spacing.sm },
  mtMd: { marginTop: spacing.md },
  mtLg: { marginTop: spacing.lg },
  mtXl: { marginTop: spacing.xl },

  // Margin bottom
  mbXs: { marginBottom: spacing.xs },
  mbSm: { marginBottom: spacing.sm },
  mbMd: { marginBottom: spacing.md },
  mbLg: { marginBottom: spacing.lg },
  mbXl: { marginBottom: spacing.xl },

  // Padding
  p0: { padding: spacing.none },
  pXs: { padding: spacing.xs },
  pSm: { padding: spacing.sm },
  pMd: { padding: spacing.md },
  pLg: { padding: spacing.lg },
  pXl: { padding: spacing.xl },
  pXxl: { padding: spacing.xxl },

  // Padding horizontal
  phXs: { paddingHorizontal: spacing.xs },
  phSm: { paddingHorizontal: spacing.sm },
  phMd: { paddingHorizontal: spacing.md },
  phLg: { paddingHorizontal: spacing.lg },
  phXl: { paddingHorizontal: spacing.xl },

  // Padding vertical
  pvXs: { paddingVertical: spacing.xs },
  pvSm: { paddingVertical: spacing.sm },
  pvMd: { paddingVertical: spacing.md },
  pvLg: { paddingVertical: spacing.lg },
  pvXl: { paddingVertical: spacing.xl },
});

// Card styles
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.sm,
  },

  cardElevated: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.md,
  },

  cardHighElevated: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.lg,
  },

  cardOutlined: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardCompact: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.xs,
  },
});

// Button styles
export const buttonStyles = StyleSheet.create({
  buttonSmall: {
    ...componentSizes.button.small,
    borderRadius: borderRadius.md,
  },

  buttonMedium: {
    ...componentSizes.button.medium,
    borderRadius: borderRadius.lg,
  },

  buttonLarge: {
    ...componentSizes.button.large,
    borderRadius: borderRadius.lg,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
  },

  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },

  buttonText: {
    backgroundColor: 'transparent',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Input styles
export const inputStyles = StyleSheet.create({
  inputContainer: {
    marginBottom: spacing.md,
  },

  inputSmall: {
    ...componentSizes.input.small,
  },

  inputMedium: {
    ...componentSizes.input.medium,
  },

  inputLarge: {
    ...componentSizes.input.large,
  },

  inputOutlined: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface,
  },

  inputFilled: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.md,
  },

  inputFocused: {
    borderColor: colors.borderFocus,
    borderWidth: 2,
  },

  inputError: {
    borderColor: colors.error,
  },
});

// Text styles
export const textStyles = StyleSheet.create({
  textPrimary: {
    color: colors.text,
  },

  textSecondary: {
    color: colors.textSecondary,
  },

  textTertiary: {
    color: colors.textTertiary,
  },

  textInverse: {
    color: colors.textInverse,
  },

  textSuccess: {
    color: colors.success,
  },

  textError: {
    color: colors.error,
  },

  textWarning: {
    color: colors.warning,
  },

  textInfo: {
    color: colors.info,
  },

  textCenter: {
    textAlign: 'center',
  },

  textLeft: {
    textAlign: 'left',
  },

  textRight: {
    textAlign: 'right',
  },

  textBold: {
    fontWeight: '600',
  },

  textSemiBold: {
    fontWeight: '500',
  },

  textRegular: {
    fontWeight: '400',
  },
});

// Loading and overlay styles
export const overlayStyles = StyleSheet.create({
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
  },

  modal: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    margin: spacing.lg,
    ...shadows.lg,
  },
});

export default {
  layoutStyles,
  spacingStyles,
  cardStyles,
  buttonStyles,
  inputStyles,
  textStyles,
  overlayStyles,
};
