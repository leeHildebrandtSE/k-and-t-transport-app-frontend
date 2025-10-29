// Theme and core styles
export { default as theme, colors, typography, spacing, borderRadius, shadows, animations, effects, componentSizes } from './theme';
export {
  layoutStyles,
  spacingStyles,
  cardStyles,
  buttonStyles,
  inputStyles,
  textStyles,
  overlayStyles
} from './common';

// Component styles
export { default as authStyles } from './components/auth';

// Screen styles
export { default as dashboardStyles } from './screens/dashboard';
export { default as landingPageStyles } from './screens/landingPage';
// export { default as bookingStyles } from './screens/booking';
// export { default as trackingStyles } from './screens/tracking';

// Utility functions for dynamic styling
export const createShadow = (elevation: number) => {
  return {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: elevation / 2 },
    shadowOpacity: 0.1 + (elevation * 0.02),
    shadowRadius: elevation,
    elevation: elevation,
  };
};

export const createGradient = (colors: string[]) => {
  return {
    colors,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  };
};

export const getResponsiveSpacing = (baseSpacing: number, screenWidth: number) => {
  if (screenWidth > 768) return baseSpacing * 1.5;
  if (screenWidth > 480) return baseSpacing * 1.2;
  return baseSpacing;
};

export const getResponsiveFontSize = (baseFontSize: number, screenWidth: number) => {
  if (screenWidth > 768) return baseFontSize * 1.1;
  if (screenWidth < 360) return baseFontSize * 0.9;
  return baseFontSize;
};
