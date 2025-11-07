import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Custom Paper Provider with proper icon configuration
export const CustomPaperProvider: React.FC<{ theme: any; children: React.ReactNode }> = ({ theme, children }) => {
  // Configure MaterialCommunityIcons for React Native Paper on web
  const customTheme = {
    ...theme,
    // Override icon rendering for web
    ...(Platform.OS === 'web' && {
      // Custom icon configuration for web
      _settings: {
        iconComponent: MaterialCommunityIcons,
      },
    }),
  };

  return (
    <PaperProvider theme={customTheme}>
      {children}
    </PaperProvider>
  );
};
