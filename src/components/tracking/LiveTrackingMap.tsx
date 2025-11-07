import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import {
  Card,
  Button,
  Chip,
  Text,
  ActivityIndicator,
  FAB,
} from 'react-native-paper';
import MapView, { Marker, Polyline, Region } from 'react-native-maps';
import { io, Socket } from 'socket.io-client';

import { colors, spacing, borderRadius } from '../../styles/theme';
import { Location } from '../../types/Transport';

interface LiveTrackingMapProps {
  tripId?: string;
  driverId?: string;
  routeId?: string;
  onDriverLocationUpdate?: (location: Location) => void;
}

interface DriverLocation extends Location {
  timestamp: string;
  heading: number;
  speed: number;
}

interface RouteStop extends Location {
  id: string;
  name: string;
  estimatedTime: string;
  status: 'upcoming' | 'current' | 'completed';
}

const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
  tripId,
  driverId,
  routeId,
  onDriverLocationUpdate,
}) => {
  const [driverLocation, setDriverLocation] = useState<DriverLocation | null>(null);
  const [routeStops, setRouteStops] = useState<RouteStop[]>([]);
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');
  const [estimatedArrival, setEstimatedArrival] = useState<string>('');
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);

  const mapRef = useRef<MapView>(null);
  const socketRef = useRef<Socket | null>(null);

  // Default region (Cape Town area)
  const [region, setRegion] = useState<Region>({
    latitude: -33.9249,
    longitude: 18.4241,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  useEffect(() => {
    if (tripId || driverId) {
      initializeTracking();
    }

    return () => {
      disconnectSocket();
    };
  }, [tripId, driverId]);

  const initializeTracking = async () => {
    try {
      // Initialize WebSocket connection for real-time updates
      connectToTrackingService();

      // Fetch initial route data
      await fetchRouteData();

      setIsTracking(true);
    } catch (error) {
      console.error('Error initializing tracking:', error);
      Alert.alert('Tracking Error', 'Failed to initialize live tracking. Please try again.');
    }
  };

  const connectToTrackingService = () => {
    try {
      // Replace with your actual WebSocket server URL
      const SOCKET_URL = 'ws://localhost:8080';

      socketRef.current = io(SOCKET_URL, {
        transports: ['websocket'],
        timeout: 5000,
      });

      socketRef.current.on('connect', () => {
        console.log('Connected to tracking service');
        setConnectionStatus('connected');

        // Join tracking room for specific trip/driver
        if (tripId) {
          socketRef.current?.emit('join-trip', tripId);
        }
        if (driverId) {
          socketRef.current?.emit('join-driver', driverId);
        }
      });

      socketRef.current.on('disconnect', () => {
        console.log('Disconnected from tracking service');
        setConnectionStatus('disconnected');
      });

      socketRef.current.on('driver-location-update', (locationData: DriverLocation) => {
        setDriverLocation(locationData);
        setCurrentSpeed(locationData.speed);

        // Update map region to follow driver
        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }, 1000);
        }

        // Callback to parent component
        if (onDriverLocationUpdate) {
          onDriverLocationUpdate(locationData);
        }
      });

      socketRef.current.on('route-update', (routeData: any) => {
        setRouteStops(routeData.stops);
        setEstimatedArrival(routeData.estimatedArrival);
      });

      socketRef.current.on('trip-status-update', (statusData: any) => {
        // Handle trip status changes (started, in-progress, completed, etc.)
        console.log('Trip status update:', statusData);
      });

    } catch (error) {
      console.error('Error connecting to tracking service:', error);
      setConnectionStatus('disconnected');
    }
  };

  const disconnectSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    setConnectionStatus('disconnected');
  };

  const fetchRouteData = async () => {
    try {
      // Mock route data - replace with actual API call
      const mockRouteStops: RouteStop[] = [
        {
          id: 'stop-1',
          latitude: -33.9150,
          longitude: 18.4200,
          name: 'Residential Area A',
          estimatedTime: '07:15',
          status: 'completed',
        },
        {
          id: 'stop-2',
          latitude: -33.9200,
          longitude: 18.4250,
          name: 'Residential Area B',
          estimatedTime: '07:25',
          status: 'current',
        },
        {
          id: 'stop-3',
          latitude: -33.9300,
          longitude: 18.4300,
          name: 'Central Primary School',
          estimatedTime: '07:35',
          status: 'upcoming',
        },
      ];

      setRouteStops(mockRouteStops);

      // Mock driver location
      setDriverLocation({
        latitude: -33.9200,
        longitude: 18.4250,
        timestamp: new Date().toISOString(),
        heading: 45,
        speed: 35,
      });

    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  };

  const centerOnDriver = () => {
    if (driverLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }, 1000);
    }
  };

  const getStopMarkerColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'current':
        return colors.secondary;
      case 'upcoming':
        return colors.textSecondary;
      default:
        return colors.textSecondary;
    }
  };

  const renderRoutePolyline = () => {
    if (routeStops.length < 2) return null;

    const coordinates = routeStops.map(stop => ({
      latitude: stop.latitude,
      longitude: stop.longitude,
    }));

    return (
      <Polyline
        coordinates={coordinates}
        strokeColor={colors.primary}
        strokeWidth={3}
      />
    );
  };

  if (Platform.OS === 'web') {
    // Fallback for web - show a placeholder or use a web-compatible map
    return (
      <View style={styles.container}>
        <Card style={styles.webMapCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.webMapTitle}>Live Tracking</Text>
            <Text variant="bodyMedium" style={styles.webMapText}>
              Interactive map tracking is available on mobile devices.
            </Text>

            {driverLocation && (
              <View style={styles.locationInfo}>
                <Text style={styles.locationLabel}>Current Location:</Text>
                <Text style={styles.locationCoords}>
                  {driverLocation.latitude.toFixed(4)}, {driverLocation.longitude.toFixed(4)}
                </Text>
                <Text style={styles.speedLabel}>Speed: {currentSpeed} km/h</Text>
                {estimatedArrival && (
                  <Text style={styles.etaLabel}>ETA: {estimatedArrival}</Text>
                )}
              </View>
            )}

            {routeStops.length > 0 && (
              <View style={styles.stopsInfo}>
                <Text style={styles.stopsTitle}>Route Stops:</Text>
                {routeStops.map((stop) => (
                  <View key={stop.id} style={styles.stopItem}>
                    <Chip
                      mode="outlined"
                      textStyle={{ color: getStopMarkerColor(stop.status) }}
                      style={{ borderColor: getStopMarkerColor(stop.status) }}
                    >
                      {stop.status}
                    </Chip>
                    <Text style={styles.stopName}>{stop.name}</Text>
                    <Text style={styles.stopTime}>{stop.estimatedTime}</Text>
                  </View>
                ))}
              </View>
            )}
          </Card.Content>
        </Card>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Connection Status */}
      <Card style={styles.statusCard}>
        <Card.Content style={styles.statusContent}>
          <View style={styles.statusIndicator}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: connectionStatus === 'connected' ? colors.success : colors.error }
              ]}
            />
            <Text style={styles.statusText}>
              {connectionStatus === 'connected' ? 'Live Tracking Active' : 'Connecting...'}
            </Text>
          </View>

          {driverLocation && (
            <View style={styles.driverInfo}>
              <Text style={styles.speedText}>{currentSpeed} km/h</Text>
              {estimatedArrival && (
                <Text style={styles.etaText}>ETA: {estimatedArrival}</Text>
              )}
            </View>
          )}
        </Card.Content>
      </Card>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          region={region}
          onRegionChangeComplete={setRegion}
          showsUserLocation={true}
          showsMyLocationButton={false}
          followsUserLocation={false}
          showsCompass={true}
          showsScale={true}
        >
          {/* Driver Location Marker */}
          {driverLocation && (
            <Marker
              coordinate={{
                latitude: driverLocation.latitude,
                longitude: driverLocation.longitude,
              }}
              title="Driver Location"
              description={`Speed: ${driverLocation.speed} km/h`}
              rotation={driverLocation.heading}
            >
              <View style={styles.driverMarker}>
                <View style={styles.driverIcon} />
              </View>
            </Marker>
          )}

          {/* Route Stops */}
          {routeStops.map((stop) => (
            <Marker
              key={stop.id}
              coordinate={{
                latitude: stop.latitude,
                longitude: stop.longitude,
              }}
              title={stop.name}
              description={`Estimated: ${stop.estimatedTime} - ${stop.status}`}
            >
              <View style={[
                styles.stopMarker,
                { backgroundColor: getStopMarkerColor(stop.status) }
              ]}>
                <Text style={styles.stopMarkerText}>
                  {routeStops.indexOf(stop) + 1}
                </Text>
              </View>
            </Marker>
          ))}

          {/* Route Polyline */}
          {renderRoutePolyline()}
        </MapView>

        {/* Center on Driver FAB */}
        {driverLocation && (
          <FAB
            style={styles.centerFab}
            icon="crosshairs-gps"
            onPress={centerOnDriver}
            size="small"
          />
        )}
      </View>

      {/* Loading Indicator */}
      {connectionStatus === 'connecting' && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Connecting to live tracking...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  statusCard: {
    margin: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.md,
  },
  statusContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  driverInfo: {
    alignItems: 'flex-end',
  },
  speedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  etaText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  mapContainer: {
    flex: 1,
    margin: spacing.md,
    marginTop: 0,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  driverMarker: {
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.background,
  },
  driverIcon: {
    width: 12,
    height: 12,
    backgroundColor: colors.background,
    borderRadius: 6,
  },
  stopMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  stopMarkerText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: 'bold',
  },
  centerFab: {
    position: 'absolute',
    right: spacing.md,
    bottom: spacing.md,
    backgroundColor: colors.primary,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
  // Web-specific styles
  webMapCard: {
    margin: spacing.md,
    borderRadius: borderRadius.lg,
  },
  webMapTitle: {
    textAlign: 'center',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  webMapText: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  locationInfo: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  locationCoords: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  speedLabel: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: spacing.sm,
  },
  etaLabel: {
    fontSize: 14,
    color: colors.primary,
  },
  stopsInfo: {
    marginTop: spacing.md,
  },
  stopsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  stopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  stopName: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    marginLeft: spacing.md,
  },
  stopTime: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default LiveTrackingMap;
