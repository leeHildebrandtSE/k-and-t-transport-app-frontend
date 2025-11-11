import React from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CommuterHeroBackground } from '../../../../assets';
import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { commuterDashboardStyles, commuterGradientConfigs } from '../../../styles/screens/dashboards/commuterDashboard';

const CommuterBookingsScreen: React.FC = () => {
  const styles = commuterDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Transport Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView style={styles.scrollContainer}>
        {/* Hero Booking Management Header */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={CommuterHeroBackground}
            style={styles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={commuterGradientConfigs.hero.colors}
              start={commuterGradientConfigs.hero.start}
              end={commuterGradientConfigs.hero.end}
              style={styles.heroGradientOverlay}
            >
            {/* African Pattern Overlay */}
            {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* Booking Management Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.commuterStatusIcon, { backgroundColor: colors.info }]}>
                  <MaterialCommunityIcons
                    name="calendar-multiple"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Booking Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>Booking Management</Text>
                <Text style={styles.heroRole}>Transport Reservations & History</Text>

                {/* Booking Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>3</Text>
                    <Text style={styles.heroStatLabel}>ACTIVE</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>12</Text>
                    <Text style={styles.heroStatLabel}>THIS MONTH</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>98%</Text>
                    <Text style={styles.heroStatLabel}>SUCCESS</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

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
