import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { commuterDashboardStyles } from '../../../styles/screens/dashboards/commuterDashboard';

const CommuterTrackingScreen: React.FC = () => {
  const styles = commuterDashboardStyles;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={80}
            color={colors.textSecondary}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Live Tracking</Text>
          <Text style={styles.emptySubtitle}>
            Track your transport in real-time when available
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CommuterTrackingScreen;
