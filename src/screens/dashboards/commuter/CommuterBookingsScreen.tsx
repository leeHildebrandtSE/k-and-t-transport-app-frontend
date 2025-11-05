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

const CommuterBookingsScreen: React.FC = () => {
  const styles = commuterDashboardStyles;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.emptyState}>
          <MaterialCommunityIcons
            name="calendar-multiple"
            size={80}
            color={colors.textSecondary}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Booking Management</Text>
          <Text style={styles.emptySubtitle}>
            Manage all your transport bookings in one place
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CommuterBookingsScreen;
