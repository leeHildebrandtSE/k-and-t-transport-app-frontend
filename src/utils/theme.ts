import { DefaultTheme } from 'react-native-paper';

// K & T Transport brand colors
export const colors = {
  primary: '#1E3A8A', // Blue
  primaryLight: '#3B82F6',
  primaryDark: '#1E40AF',
  secondary: '#D97706', // Gold/Orange
  secondaryLight: '#F59E0B',
  secondaryDark: '#92400E',
  background: '#FFFFFF', // White
  surface: '#F8FAFC',
  error: '#DC2626',
  success: '#059669',
  warning: '#D97706',
  info: '#0284C7',
  text: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  disabled: '#9CA3AF',
  placeholder: '#9CA3AF',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.background,
    surface: colors.surface,
    error: colors.error,
    text: colors.text,
    onSurface: colors.text,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100',
    },
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  xl: 16,
};

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
};