import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export interface ResponsiveBreakpoints {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  width: number;
  height: number;
}

export const useResponsive = (): ResponsiveBreakpoints => {
  const [dimensions, setDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  return {
    width: dimensions.width,
    height: dimensions.height,
    mobile: dimensions.width < 768,
    tablet: dimensions.width >= 768 && dimensions.width < 1024,
    desktop: dimensions.width >= 1024,
  };
};
