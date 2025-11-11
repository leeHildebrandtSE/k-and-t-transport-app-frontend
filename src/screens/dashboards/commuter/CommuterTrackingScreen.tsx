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

const CommuterTrackingScreen: React.FC = () => {
  const styles = commuterDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Live Tracking Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView style={styles.scrollContainer}>
        {/* Hero Live Tracking Header */}
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
              {/* Live Tracking Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.commuterStatusIcon, { backgroundColor: colors.warning }]}>
                  <MaterialCommunityIcons
                    name="map-marker-radius"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Tracking Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>Live Tracking</Text>
                <Text style={styles.heroRole}>Real-time Transport Monitoring</Text>

                {/* Tracking Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>GPS</Text>
                    <Text style={styles.heroStatLabel}>ENABLED</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>LIVE</Text>
                    <Text style={styles.heroStatLabel}>STATUS</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>5min</Text>
                    <Text style={styles.heroStatLabel}>ETA</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

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
