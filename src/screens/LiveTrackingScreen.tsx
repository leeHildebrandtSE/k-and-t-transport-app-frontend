import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Alert,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Text,
  Button,
  Chip,
  Avatar,
  List,
  ProgressBar,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import DashboardHeader from '../components/ui/DashboardHeader';
import { liveTrackingScreenStyles } from '../styles/screens/liveTrackingScreen';
import { colors } from '../styles/theme';

interface TripStatus {
  id: string;
  routeName: string;
  driverName: string;
  vehicleNumber: string;
  status: 'scheduled' | 'en-route' | 'picking-up' | 'in-transit' | 'dropping-off' | 'completed';
  estimatedArrival: string;
  currentLocation: string;
  progress: number;
  passengers: number;
  maxPassengers: number;
  lastUpdate: string;
}

interface LiveTrackingScreenProps {
  route: {
    params: {
      user: User;
    };
  };
}

const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [activeTrips, setActiveTrips] = useState<TripStatus[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  // Mock data for demonstration
  useEffect(() => {
    setActiveTrips([
      {
        id: '1',
        routeName: 'Central Primary School - Morning',
        driverName: 'John Doe',
        vehicleNumber: 'BUS-001',
        status: 'in-transit',
        estimatedArrival: '07:45',
        currentLocation: 'Main Street & Oak Avenue',
        progress: 0.65,
        passengers: 12,
        maxPassengers: 15,
        lastUpdate: new Date().toISOString(),
      },
      {
        id: '2',
        routeName: 'Business District - Staff Route',
        driverName: 'Sarah Wilson',
        vehicleNumber: 'VAN-003',
        status: 'picking-up',
        estimatedArrival: '08:15',
        currentLocation: 'Residential Complex A',
        progress: 0.3,
        passengers: 8,
        maxPassengers: 12,
        lastUpdate: new Date(Date.now() - 2 * 60 * 1000).toISOString(), // 2 minutes ago
      },
    ]);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate API call to update trip statuses
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const getStatusColor = (status: TripStatus['status']) => {
    switch (status) {
      case 'scheduled':
        return '#9e9e9e';
      case 'en-route':
        return '#2196f3';
      case 'picking-up':
        return '#ff9800';
      case 'in-transit':
        return '#4caf50';
      case 'dropping-off':
        return '#ff5722';
      case 'completed':
        return '#388e3c';
      default:
        return '#9e9e9e';
    }
  };

  const getStatusText = (status: TripStatus['status']) => {
    switch (status) {
      case 'scheduled':
        return 'Scheduled';
      case 'en-route':
        return 'En Route';
      case 'picking-up':
        return 'Picking Up';
      case 'in-transit':
        return 'In Transit';
      case 'dropping-off':
        return 'Dropping Off';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  const getStatusIcon = (status: TripStatus['status']) => {
    switch (status) {
      case 'scheduled':
        return 'clock';
      case 'en-route':
        return 'bus';
      case 'picking-up':
        return 'account-plus';
      case 'in-transit':
        return 'map-marker-path';
      case 'dropping-off':
        return 'account-minus';
      case 'completed':
        return 'check-circle';
      default:
        return 'help-circle';
    }
  };

  const formatLastUpdate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours} hours ago`;
    }
  };

  const handleTripSelect = (tripId: string) => {
    setSelectedTrip(selectedTrip === tripId ? null : tripId);
  };

  const handleEmergencyContact = () => {
    Alert.alert(
      'Emergency Contact',
      'Are you sure you want to contact emergency services?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call Emergency', onPress: () => {
          // Implement emergency contact functionality
          Alert.alert('Emergency Called', 'Emergency services have been contacted.');
        }}
      ]
    );
  };

  const styles = liveTrackingScreenStyles;

  return (
    <View style={styles.container}>
      <DashboardHeader
        user={user}
        title="Live Tracking"
        subtitle="Real-time transport monitoring"
        showGradient={true}
        actions={[
          <Button
            key="emergency"
            mode="contained"
            icon="phone"
            onPress={handleEmergencyContact}
            style={styles.emergencyButton}
            buttonColor="#f44336"
            compact
          >
            Emergency
          </Button>
        ]}
      />

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Quick Stats */}
        <Card style={styles.statsCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.statsTitle}>Current Activity</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{activeTrips.length}</Text>
                <Text style={styles.statLabel}>Active Trips</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {activeTrips.reduce((sum, trip) => sum + trip.passengers, 0)}
                </Text>
                <Text style={styles.statLabel}>Total Passengers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {activeTrips.filter(trip => trip.status === 'in-transit').length}
                </Text>
                <Text style={styles.statLabel}>In Transit</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Active Trips */}
        {activeTrips.length === 0 ? (
          <Card style={styles.emptyCard}>
            <Card.Content style={styles.emptyContent}>
              <MaterialCommunityIcons
                name="bus-alert"
                size={64}
                color="#ccc"
                style={styles.emptyIcon}
              />
              <Text variant="titleLarge" style={styles.emptyTitle}>No Active Trips</Text>
              <Text style={styles.emptyText}>
                There are no trips currently active. Check back during transport hours.
              </Text>
            </Card.Content>
          </Card>
        ) : (
          activeTrips.map((trip) => (
            <Card key={trip.id} style={styles.tripCard}>
              <Card.Content>
                {/* Trip Header */}
                <View style={styles.tripHeader}>
                  <View style={styles.tripInfo}>
                    <Text style={styles.tripTitle}>{trip.routeName}</Text>
                    <View style={styles.tripMeta}>
                      <Chip
                        icon={getStatusIcon(trip.status)}
                        style={[styles.statusChip, { backgroundColor: getStatusColor(trip.status) + '20' }]}
                        textStyle={{ color: getStatusColor(trip.status) }}
                      >
                        {getStatusText(trip.status)}
                      </Chip>
                      <Text style={styles.estimatedTime}>ETA: {trip.estimatedArrival}</Text>
                    </View>
                  </View>
                  <Button
                    mode="outlined"
                    onPress={() => handleTripSelect(trip.id)}
                    compact
                  >
                    {selectedTrip === trip.id ? 'Hide' : 'Details'}
                  </Button>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressSection}>
                  <Text style={styles.progressLabel}>Trip Progress</Text>
                  <ProgressBar
                    progress={trip.progress}
                    color={getStatusColor(trip.status)}
                    style={styles.progressBar}
                  />
                  <Text style={styles.progressText}>
                    {Math.round(trip.progress * 100)}% Complete
                  </Text>
                </View>

                {/* Current Location */}
                <View style={styles.locationSection}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={20}
                    color={getStatusColor(trip.status)}
                  />
                  <Text style={styles.locationText}>{trip.currentLocation}</Text>
                  <Text style={styles.lastUpdate}>
                    Updated {formatLastUpdate(trip.lastUpdate)}
                  </Text>
                </View>

                {/* Expanded Details */}
                {selectedTrip === trip.id && (
                  <View style={styles.expandedDetails}>
                    <List.Item
                      title="Driver"
                      description={trip.driverName}
                      left={(props) => <List.Icon {...props} icon="account" />}
                    />
                    <List.Item
                      title="Vehicle"
                      description={trip.vehicleNumber}
                      left={(props) => <List.Icon {...props} icon="bus" />}
                    />
                    <List.Item
                      title="Passengers"
                      description={`${trip.passengers} / ${trip.maxPassengers} passengers`}
                      left={(props) => <List.Icon {...props} icon="account-group" />}
                    />
                    <View style={styles.actionButtons}>
                      <Button
                        mode="outlined"
                        icon="phone"
                        onPress={() => Alert.alert('Call Driver', `Calling ${trip.driverName}...`)}
                        style={styles.actionButton}
                      >
                        Call Driver
                      </Button>
                      <Button
                        mode="outlined"
                        icon="map"
                        onPress={() => Alert.alert('View Map', 'Opening map view...')}
                        style={styles.actionButton}
                      >
                        View Route
                      </Button>
                    </View>
                  </View>
                )}
              </Card.Content>
            </Card>
          ))
        )}

        {/* Safety Information */}
        <Card style={styles.safetyCard}>
          <Card.Content>
            <View style={styles.safetyHeader}>
              <MaterialCommunityIcons
                name="shield-check"
                size={24}
                color={colors.success}
              />
              <Text variant="titleLarge" style={styles.safetyTitle}>Safety Features</Text>
            </View>
            <Text style={styles.safetyText}>
              • Real-time GPS tracking for all vehicles{'\n'}
              • Professional drivers with background checks{'\n'}
              • Emergency contact available 24/7{'\n'}
              • Automated parent notifications
            </Text>
          </Card.Content>
        </Card>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default LiveTrackingScreen;
