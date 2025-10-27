import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Chip, Text, Avatar } from 'react-native-paper';
import { colors, spacing, borderRadius } from '../../utils/theme';

interface TripCardProps {
  trip: {
    id: string;
    routeName: string;
    direction: 'pickup' | 'dropoff';
    scheduledTime: string;
    actualTime?: string;
    status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
    driverName?: string;
    vehicleInfo?: string;
    passengerCount?: number;
  };
  onPress?: () => void;
  showDriver?: boolean;
  showPassengerCount?: boolean;
}

const TripCard: React.FC<TripCardProps> = ({
  trip,
  onPress,
  showDriver = false,
  showPassengerCount = false,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'in-progress':
        return colors.secondary;
      case 'cancelled':
        return colors.error;
      case 'scheduled':
      default:
        return colors.primary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      case 'scheduled':
      default:
        return 'Scheduled';
    }
  };

  const getDirectionIcon = (direction: string) => {
    return direction === 'pickup' ? '🚌 Pickup' : '🏠 Drop-off';
  };

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <View style={styles.routeInfo}>
              <Text style={styles.routeName}>{trip.routeName}</Text>
              <Text style={styles.direction}>{getDirectionIcon(trip.direction)}</Text>
            </View>
            <Chip
              mode="outlined"
              textStyle={{ color: getStatusColor(trip.status) }}
              style={{ borderColor: getStatusColor(trip.status) }}
            >
              {getStatusText(trip.status)}
            </Chip>
          </View>

          <View style={styles.timeInfo}>
            <View style={styles.timeRow}>
              <Text style={styles.timeLabel}>Scheduled:</Text>
              <Text style={styles.timeValue}>{formatTime(trip.scheduledTime)}</Text>
            </View>
            {trip.actualTime && (
              <View style={styles.timeRow}>
                <Text style={styles.timeLabel}>Actual:</Text>
                <Text style={[styles.timeValue, { color: colors.secondary }]}>
                  {formatTime(trip.actualTime)}
                </Text>
              </View>
            )}
          </View>

          {(showDriver && trip.driverName) && (
            <View style={styles.driverInfo}>
              <Avatar.Text
                size={24}
                label={trip.driverName.charAt(0)}
                style={styles.driverAvatar}
              />
              <Text style={styles.driverName}>Driver: {trip.driverName}</Text>
            </View>
          )}

          {trip.vehicleInfo && (
            <Text style={styles.vehicleInfo}>Vehicle: {trip.vehicleInfo}</Text>
          )}

          {showPassengerCount && trip.passengerCount !== undefined && (
            <Text style={styles.passengerCount}>
              Passengers: {trip.passengerCount}
            </Text>
          )}
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: spacing.xs,
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.medium,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  routeInfo: {
    flex: 1,
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  direction: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timeInfo: {
    marginBottom: spacing.sm,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  timeLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  driverAvatar: {
    backgroundColor: colors.primary,
    marginRight: spacing.sm,
  },
  driverName: {
    fontSize: 14,
    color: colors.text,
  },
  vehicleInfo: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  passengerCount: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});

export default TripCard;