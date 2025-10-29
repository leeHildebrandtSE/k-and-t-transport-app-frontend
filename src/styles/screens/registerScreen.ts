import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../theme';

export const registerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make transparent to show background image and gradient
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    marginBottom: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  input: {
    marginBottom: spacing.md,
  },
  roleSection: {
    marginBottom: spacing.lg,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  roleLabel: {
    fontSize: 16,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  registerButton: {
    marginTop: spacing.md,
    borderRadius: borderRadius.md,
  },
  buttonContent: {
    paddingVertical: spacing.sm,
  },
  loginSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  loginText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  loginButtonLabel: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Back navigation styles
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    alignSelf: 'flex-start',
  },
  backButton: {
    margin: 0,
    backgroundColor: 'transparent',
  },
  backText: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: spacing.xs,
    fontWeight: '500',
  },
});

export default registerScreenStyles;
