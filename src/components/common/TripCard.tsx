import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Chip, Text, Avatar, Icon } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows } from '../../styles/theme';
import { EnhancedCard, StatusIndicator } from '../ui';

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

  const getStatusMapping = () => {
    switch (trip.status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'active';
      case 'cancelled':
        return 'cancelled';
      case 'scheduled':
      default:
        return 'info';
    }
  };

  return (
    <EnhancedCard
      onPress={onPress}
      variant="elevated"
      style={styles.card}
      icon={
        <Icon
          source={trip.direction === 'pickup' ? 'bus' : 'home'}
          size={24}
          color={colors.primary}
        />
      }
      title={trip.routeName}
      subtitle={`${trip.direction === 'pickup' ? 'Pickup Service' : 'Drop-off Service'}`}
      headerAction={
        <StatusIndicator
          status={getStatusMapping() as any}
          text={getStatusText(trip.status)}
          variant="pill"
          size="small"
          animated={trip.status === 'in-progress'}
        />
      }
    >
      <View style={styles.content}>
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
              size={32}
              label={trip.driverName.charAt(0).toUpperCase()}
              style={styles.driverAvatar}
            />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>{trip.driverName}</Text>
              <Text style={styles.driverLabel}>Driver</Text>
            </View>
          </View>
        )}

        {trip.vehicleInfo && (
          <View style={styles.vehicleInfo}>
            <Icon source="car" size={16} color={colors.textSecondary} />
            <Text style={styles.vehicleText}>{trip.vehicleInfo}</Text>
          </View>
        )}

        {showPassengerCount && trip.passengerCount !== undefined && (
          <View style={styles.passengerInfo}>
            <Icon source="account-group" size={16} color={colors.textSecondary} />
            <Text style={styles.passengerText}>
              {trip.passengerCount} passenger{trip.passengerCount !== 1 ? 's' : ''}
            </Text>
          </View>
        )}
      </View>
    </EnhancedCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: spacing.xs,
    marginHorizontal: spacing.md,
  },
  content: {
    gap: spacing.md,
  },
  timeInfo: {
    gap: spacing.xs,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    elevation: 1,
  },
  driverAvatar: {
    backgroundColor: colors.primary,
    marginRight: spacing.md,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  driverLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.background,
    borderRadius: borderRadius.sm,
  },
  vehicleText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  passengerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.background,
    borderRadius: borderRadius.sm,
  },
  passengerText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
});

export default TripCard;
