import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Card,
  Button,
  TextInput,
  RadioButton,
  Checkbox,
  Chip,
  Text,
  Divider,
} from 'react-native-paper';

import { colors, spacing, borderRadius } from '../../utils/theme';
import { BookingType, RecurringSchedule } from '../../types/Booking';
import { Route, RouteStop } from '../../types/Transport';

interface BookingFormProps {
  onSubmit: (bookingData: any) => void;
  onCancel: () => void;
  initialData?: any;
  commuterType: 'school_transport' | 'work_transport';
}

const BookingForm: React.FC<BookingFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  commuterType,
}) => {
  const [bookingType, setBookingType] = useState<BookingType>(
    commuterType === 'school_transport' ? 'school' : 'work'
  );
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropoffLocation, setDropoffLocation] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5]); // Mon-Fri
  const [morningTrip, setMorningTrip] = useState<boolean>(true);
  const [afternoonTrip, setAfternoonTrip] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    // TODO: Fetch available routes from API
    fetchRoutes();
  }, [bookingType]);

  const fetchRoutes = async () => {
    try {
      // Mock data - replace with actual API call
      const mockRoutes: Route[] = [
        {
          id: 'route-1',
          name: commuterType === 'school_transport' ? 'Central Primary School' : 'Business District A',
          description: commuterType === 'school_transport'
            ? 'Morning and afternoon school transport'
            : 'Corporate office transport',
          stops: [],
          driverId: 'driver-1',
          vehicleId: 'vehicle-1',
          schedule: [],
          active: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 'route-2',
          name: commuterType === 'school_transport' ? 'Westside Primary School' : 'Business District B',
          description: commuterType === 'school_transport'
            ? 'Westside area school transport'
            : 'Financial district transport',
          stops: [],
          driverId: 'driver-2',
          vehicleId: 'vehicle-2',
          schedule: [],
          active: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      setRoutes(mockRoutes);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const toggleDay = (dayIndex: number) => {
    setSelectedDays(prev =>
      prev.includes(dayIndex)
        ? prev.filter(day => day !== dayIndex)
        : [...prev, dayIndex]
    );
  };

  const validateForm = (): boolean => {
    if (!selectedRoute) {
      Alert.alert('Error', 'Please select a route');
      return false;
    }
    if (!pickupLocation.trim()) {
      Alert.alert('Error', 'Please enter a pickup location');
      return false;
    }
    if (!dropoffLocation.trim()) {
      Alert.alert('Error', 'Please enter a drop-off location');
      return false;
    }
    if (!startDate) {
      Alert.alert('Error', 'Please select a start date');
      return false;
    }
    if (!endDate) {
      Alert.alert('Error', 'Please select an end date');
      return false;
    }
    if (selectedDays.length === 0) {
      Alert.alert('Error', 'Please select at least one day');
      return false;
    }
    if (!morningTrip && !afternoonTrip) {
      Alert.alert('Error', 'Please select at least one trip (morning or afternoon)');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const bookingData = {
      bookingType,
      routeId: selectedRoute,
      pickupLocation,
      dropoffLocation,
      recurringSchedule: {
        startDate,
        endDate,
        daysOfWeek: selectedDays,
        morningTrip,
        afternoonTrip,
      },
      notes: notes.trim(),
    };

    onSubmit(bookingData);
  };

  const calculateEstimatedCost = (): number => {
    // Mock calculation - replace with actual pricing logic
    const basePrice = commuterType === 'school_transport' ? 800 : 950;
    const tripMultiplier = (morningTrip ? 1 : 0) + (afternoonTrip ? 1 : 0);
    const dayMultiplier = selectedDays.length / 5; // Normalize to work week
    return Math.round(basePrice * tripMultiplier * dayMultiplier);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            {commuterType === 'school_transport' ? 'School Transport Booking' : 'Work Transport Booking'}
          </Text>

          {/* Route Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Route</Text>
            <RadioButton.Group
              onValueChange={setSelectedRoute}
              value={selectedRoute}
            >
              {routes.map((route) => (
                <View key={route.id} style={styles.routeOption}>
                  <RadioButton value={route.id} />
                  <View style={styles.routeInfo}>
                    <Text style={styles.routeName}>{route.name}</Text>
                    <Text style={styles.routeDescription}>{route.description}</Text>
                  </View>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          <Divider style={styles.divider} />

          {/* Location Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location Details</Text>
            <TextInput
              label="Home Address (Pickup)"
              value={pickupLocation}
              onChangeText={setPickupLocation}
              mode="outlined"
              style={styles.input}
              placeholder="Enter your pickup address"
            />
            <TextInput
              label={commuterType === 'school_transport' ? 'School Address (Drop-off)' : 'Work Address (Drop-off)'}
              value={dropoffLocation}
              onChangeText={setDropoffLocation}
              mode="outlined"
              style={styles.input}
              placeholder={commuterType === 'school_transport' ? 'Enter school address' : 'Enter work address'}
            />
          </View>

          <Divider style={styles.divider} />

          {/* Schedule */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Schedule</Text>
            <View style={styles.dateInputs}>
              <TextInput
                label="Start Date"
                value={startDate}
                onChangeText={setStartDate}
                mode="outlined"
                style={[styles.input, styles.dateInput]}
                placeholder="YYYY-MM-DD"
              />
              <TextInput
                label="End Date"
                value={endDate}
                onChangeText={setEndDate}
                mode="outlined"
                style={[styles.input, styles.dateInput]}
                placeholder="YYYY-MM-DD"
              />
            </View>

            <Text style={styles.subSectionTitle}>Days of the Week</Text>
            <View style={styles.daysContainer}>
              {dayLabels.map((day, index) => (
                <Chip
                  key={index}
                  mode={selectedDays.includes(index) ? 'flat' : 'outlined'}
                  selected={selectedDays.includes(index)}
                  onPress={() => toggleDay(index)}
                  style={styles.dayChip}
                  textStyle={selectedDays.includes(index) ? { color: colors.background } : {}}
                >
                  {day}
                </Chip>
              ))}
            </View>

            <Text style={styles.subSectionTitle}>Trip Times</Text>
            <View style={styles.tripTimes}>
              <View style={styles.checkboxRow}>
                <Checkbox
                  status={morningTrip ? 'checked' : 'unchecked'}
                  onPress={() => setMorningTrip(!morningTrip)}
                />
                <Text style={styles.checkboxLabel}>
                  Morning Trip ({commuterType === 'school_transport' ? 'To School' : 'To Work'})
                </Text>
              </View>
              <View style={styles.checkboxRow}>
                <Checkbox
                  status={afternoonTrip ? 'checked' : 'unchecked'}
                  onPress={() => setAfternoonTrip(!afternoonTrip)}
                />
                <Text style={styles.checkboxLabel}>
                  Afternoon Trip ({commuterType === 'school_transport' ? 'From School' : 'From Work'})
                </Text>
              </View>
            </View>
          </View>

          <Divider style={styles.divider} />

          {/* Additional Notes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Notes (Optional)</Text>
            <TextInput
              label="Special instructions or requirements"
              value={notes}
              onChangeText={setNotes}
              mode="outlined"
              multiline
              numberOfLines={3}
              style={styles.input}
              placeholder="Any special pickup instructions, medical requirements, etc."
            />
          </View>

          <Divider style={styles.divider} />

          {/* Cost Estimate */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Estimated Monthly Cost</Text>
            <Card style={styles.costCard}>
              <Card.Content>
                <Text style={styles.costAmount}>R{calculateEstimatedCost().toLocaleString()}</Text>
                <Text style={styles.costNote}>
                  * Final cost may vary based on exact pickup location and route optimization
                </Text>
              </Card.Content>
            </Card>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Button
              mode="outlined"
              onPress={onCancel}
              style={styles.button}
            >
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
              loading={loading}
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Booking'}
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    margin: spacing.md,
    borderRadius: borderRadius.large,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  routeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  routeInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  routeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  routeDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  input: {
    marginBottom: spacing.md,
  },
  dateInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayChip: {
    marginBottom: spacing.sm,
    minWidth: 45,
  },
  tripTimes: {
    marginTop: spacing.sm,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkboxLabel: {
    fontSize: 16,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  costCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.medium,
  },
  costAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  costNote: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  button: {
    flex: 1,
    marginHorizontal: spacing.xs,
    borderRadius: borderRadius.medium,
  },
  divider: {
    marginVertical: spacing.lg,
  },
});

export default BookingForm;
