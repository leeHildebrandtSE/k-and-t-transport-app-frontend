import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { configureFonts, MD3LightTheme } from 'react-native-paper';

// Web-specific icon configuration for React Native Paper
export const configurePaperIcons = () => {
  if (Platform.OS === 'web') {
    // Load Material Design Icons CSS
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.type = 'text/css';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Icons&family=Material+Icons+Outlined&family=Material+Symbols+Outlined&display=swap';

    // Load MaterialCommunityIcons CSS
    const mdiLink = document.createElement('link');
    mdiLink.rel = 'stylesheet';
    mdiLink.type = 'text/css';
    mdiLink.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css';

    // Only add if not already present
    if (!document.head.querySelector('link[href*="materialdesignicons"]')) {
      document.head.appendChild(mdiLink);
    }
    if (!document.head.querySelector('link[href*="Material+Icons"]')) {
      document.head.appendChild(fontLink);
    }

    // Enhanced CSS for better icon rendering
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* Material Design Icons - React Native Paper */
      .mdi {
        font-family: "Material Design Icons", "MaterialDesignIcons" !important;
        font-style: normal !important;
        font-weight: normal !important;
        display: inline-block !important;
        line-height: 1 !important;
        text-transform: none !important;
        letter-spacing: normal !important;
        word-wrap: normal !important;
        white-space: nowrap !important;
        direction: ltr !important;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        -moz-osx-font-smoothing: grayscale !important;
        -webkit-font-feature-settings: 'liga' !important;
      }

      .mdi::before {
        font-family: "Material Design Icons", "MaterialDesignIcons" !important;
      }

      /* React Native Paper Icon Fixes */
      .react-native-paper-icon {
        font-family: "Material Design Icons", "MaterialDesignIcons" !important;
        font-style: normal !important;
        font-weight: normal !important;
        display: inline-block !important;
        line-height: 1 !important;
        text-transform: none !important;
        letter-spacing: normal !important;
        word-wrap: normal !important;
        white-space: nowrap !important;
        direction: ltr !important;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        -moz-osx-font-smoothing: grayscale !important;
      }

      /* Ensure proper icon sizing */
      .react-native-paper-chip .mdi,
      .react-native-paper-button .mdi,
      .react-native-paper-icon-button .mdi {
        font-size: inherit !important;
        width: 1em !important;
        height: 1em !important;
      }
    `;

    if (!document.head.querySelector('style[data-rn-paper-icons]')) {
      styleElement.setAttribute('data-rn-paper-icons', 'true');
      document.head.appendChild(styleElement);
    }

    // Set up a global icon provider for React Native Paper web
    if (typeof window !== 'undefined') {
      (window as any).MaterialCommunityIcons = MaterialCommunityIcons;

      // Configure React Native Paper to use MaterialCommunityIcons
      const paperIconStyle = document.createElement('style');
      paperIconStyle.textContent = `
        /* React Native Paper Icon Configuration */
        .react-native-paper-icon {
          font-family: "Material Design Icons" !important;
        }

        /* Force icon display for Paper components */
        .md3-button__icon,
        .md3-chip__icon,
        .md3-icon-button__icon,
        .md3-menu-item__leading-icon {
          font-family: "Material Design Icons" !important;
          font-style: normal !important;
          font-weight: normal !important;
          display: inline-block !important;
        }
      `;

      if (!document.head.querySelector('style[data-paper-icon-config]')) {
        paperIconStyle.setAttribute('data-paper-icon-config', 'true');
        document.head.appendChild(paperIconStyle);
      }
    }
  }
};// Export MaterialCommunityIcons for consistent usage
export { MaterialCommunityIcons };
export default MaterialCommunityIcons;
