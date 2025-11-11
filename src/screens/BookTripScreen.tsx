import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardHeader from '../components/ui/DashboardHeader';
import { bookTripScreenStyles } from '../styles/screens/bookTripScreen';
import { colors } from '../styles/theme';

interface TripOption {
  id: string;
  driver: string;
  vehicle: string;
  rating: number;
  price: number;
  duration: string;
  departureTime: string;
  availableSeats: number;
  features: string[];
}

type TripType = 'one-way' | 'round-trip' | 'schedule';

const BookTripScreen: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [tripDate, setTripDate] = useState<Date | null>(null);
  const [tripTime, setTripTime] = useState<string>('');
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [passengers, setPassengers] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Mock route options
  const routeOptions: TripOption[] = [
    {
      id: '1',
      driver: 'Michael Johnson',
      vehicle: 'Toyota Quantum (16 seater)',
      rating: 4.8,
      price: 180.00,
      duration: '1h 15m',
      departureTime: '14:30',
      availableSeats: 8,
      features: ['WiFi', 'AC', 'USB Charging'],
    },
    {
      id: '2',
      driver: 'Sarah Williams',
      vehicle: 'Ford Transit (12 seater)',
      rating: 4.6,
      price: 200.00,
      duration: '1h 20m',
      departureTime: '14:45',
      availableSeats: 5,
      features: ['AC', 'USB Charging', 'Music System'],
    },
    {
      id: '3',
      driver: 'David Brown',
      vehicle: 'Toyota Hiace (14 seater)',
      rating: 4.9,
      price: 175.00,
      duration: '1h 10m',
      departureTime: '15:00',
      availableSeats: 12,
      features: ['WiFi', 'AC', 'USB Charging', 'Refreshments'],
    },
  ];

  const formatCurrency = (amount: number) => {
    return `R ${amount.toFixed(2)}`;
  };

  const handleSwapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropoffLocation);
    setDropoffLocation(temp);
  };

  const handleSearchTrips = () => {
    if (!pickupLocation || !dropoffLocation) {
      Alert.alert('Missing Information', 'Please enter both pickup and dropoff locations');
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  const handleBookTrip = () => {
    if (!selectedRoute) {
      Alert.alert('Select Route', 'Please select a route to continue with booking');
      return;
    }

    const selectedOption = routeOptions.find(option => option.id === selectedRoute);
    if (selectedOption) {
      Alert.alert(
        'Confirm Booking',
        `Book trip with ${selectedOption.driver} for ${formatCurrency(selectedOption.price)}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Confirm', onPress: () => console.log('Trip booked!') },
        ]
      );
    }
  };

  const handleDatePress = () => {
    // In a real app, this would open a date picker
    Alert.alert('Date Picker', 'Date picker would open here');
  };

  const handleTimePress = () => {
    // In a real app, this would open a time picker
    Alert.alert('Time Picker', 'Time picker would open here');
  };

  const getSelectedRoutePrice = () => {
    const selected = routeOptions.find(option => option.id === selectedRoute);
    return selected ? selected.price * passengers : 0;
  };

  const getServiceFee = () => {
    const basePrice = getSelectedRoutePrice();
    return basePrice * 0.1; // 10% service fee
  };

  const getTotalPrice = () => {
    return getSelectedRoutePrice() + getServiceFee();
  };

  const renderTripTypeOption = (type: TripType, icon: string, label: string) => (
    <TouchableOpacity
      key={type}
      style={[
        bookTripScreenStyles.tripTypeOption,
        tripType === type && bookTripScreenStyles.tripTypeOptionSelected
      ]}
      onPress={() => setTripType(type)}
    >
      <MaterialCommunityIcons
        name={icon as any}
        size={24}
        color={tripType === type ? colors.primary : colors.textSecondary}
        style={bookTripScreenStyles.tripTypeIcon}
      />
      <Text style={[
        bookTripScreenStyles.tripTypeText,
        tripType === type && bookTripScreenStyles.tripTypeTextSelected
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderRouteOption = (option: TripOption) => (
    <TouchableOpacity
      key={option.id}
      style={[
        bookTripScreenStyles.routeOption,
        selectedRoute === option.id && bookTripScreenStyles.routeOptionSelected
      ]}
      onPress={() => setSelectedRoute(option.id)}
    >
      <View style={bookTripScreenStyles.routeHeader}>
        <View style={bookTripScreenStyles.routeInfo}>
          <Text style={bookTripScreenStyles.routeDriver}>{option.driver}</Text>
          <Text style={bookTripScreenStyles.routeVehicle}>{option.vehicle}</Text>
          <View style={bookTripScreenStyles.routeRating}>
            <MaterialCommunityIcons
              name="star"
              size={14}
              color={colors.warning}
            />
            <Text style={bookTripScreenStyles.ratingText}>
              {option.rating} rating
            </Text>
          </View>
        </View>
        <View style={bookTripScreenStyles.routePrice}>
          <Text style={bookTripScreenStyles.routePriceValue}>
            {formatCurrency(option.price)}
          </Text>
          <Text style={bookTripScreenStyles.routePriceLabel}>per person</Text>
        </View>
      </View>

      <View style={bookTripScreenStyles.routeDetails}>
        <View style={bookTripScreenStyles.routeDetailItem}>
          <Text style={bookTripScreenStyles.routeDetailValue}>{option.departureTime}</Text>
          <Text style={bookTripScreenStyles.routeDetailLabel}>Departure</Text>
        </View>
        <View style={bookTripScreenStyles.routeDetailItem}>
          <Text style={bookTripScreenStyles.routeDetailValue}>{option.duration}</Text>
          <Text style={bookTripScreenStyles.routeDetailLabel}>Duration</Text>
        </View>
        <View style={bookTripScreenStyles.routeDetailItem}>
          <Text style={bookTripScreenStyles.routeDetailValue}>{option.availableSeats}</Text>
          <Text style={bookTripScreenStyles.routeDetailLabel}>Seats Left</Text>
        </View>
      </View>

      <View style={bookTripScreenStyles.routeFeatures}>
        {option.features.map((feature, index) => (
          <View key={index} style={bookTripScreenStyles.routeFeature}>
            <Text style={bookTripScreenStyles.routeFeatureText}>{feature}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
      style={bookTripScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'User',
          role: 'commuter'
        }}
        title="Book a Trip"
        notificationCount={2}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={bookTripScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={bookTripScreenStyles.header}>
          <Text style={bookTripScreenStyles.title}>Book Your Trip</Text>
          <Text style={bookTripScreenStyles.subtitle}>
            Find and book comfortable rides to your destination
          </Text>
        </View>

        {/* Route Selection */}
        <View style={bookTripScreenStyles.formSection}>
          <Text style={bookTripScreenStyles.sectionTitle}>Where are you going?</Text>

          <View style={bookTripScreenStyles.locationContainer}>
            <TouchableOpacity style={bookTripScreenStyles.locationInput}>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color={colors.success}
                style={bookTripScreenStyles.locationIcon}
              />
              <TextInput
                style={bookTripScreenStyles.locationTextInput}
                placeholder="Pickup location"
                value={pickupLocation}
                onChangeText={setPickupLocation}
                placeholderTextColor={colors.textSecondary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={bookTripScreenStyles.swapButton}
              onPress={handleSwapLocations}
            >
              <MaterialCommunityIcons
                name="swap-vertical"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity style={bookTripScreenStyles.locationInput}>
              <MaterialCommunityIcons
                name="flag-checkered"
                size={24}
                color={colors.error}
                style={bookTripScreenStyles.locationIcon}
              />
              <TextInput
                style={bookTripScreenStyles.locationTextInput}
                placeholder="Dropoff location"
                value={dropoffLocation}
                onChangeText={setDropoffLocation}
                placeholderTextColor={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Date and Time Selection */}
        <View style={bookTripScreenStyles.formSection}>
          <Text style={bookTripScreenStyles.sectionTitle}>When do you want to travel?</Text>

          <View style={bookTripScreenStyles.dateTimeContainer}>
            <TouchableOpacity
              style={bookTripScreenStyles.dateTimeInput}
              onPress={handleDatePress}
            >
              <Text style={bookTripScreenStyles.dateTimeLabel}>Date</Text>
              <Text style={[
                tripDate ? bookTripScreenStyles.dateTimeValue : bookTripScreenStyles.dateTimePlaceholder
              ]}>
                {tripDate ? tripDate.toLocaleDateString('en-ZA') : 'Select date'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={bookTripScreenStyles.dateTimeInput}
              onPress={handleTimePress}
            >
              <Text style={bookTripScreenStyles.dateTimeLabel}>Time</Text>
              <Text style={[
                tripTime ? bookTripScreenStyles.dateTimeValue : bookTripScreenStyles.dateTimePlaceholder
              ]}>
                {tripTime || 'Select time'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Trip Type Selection */}
        <View style={bookTripScreenStyles.formSection}>
          <Text style={bookTripScreenStyles.sectionTitle}>Trip Type</Text>

          <View style={bookTripScreenStyles.tripTypeOptions}>
            {renderTripTypeOption('one-way', 'arrow-right', 'One Way')}
            {renderTripTypeOption('round-trip', 'arrow-left-right', 'Round Trip')}
            {renderTripTypeOption('schedule', 'calendar-clock', 'Scheduled')}
          </View>
        </View>

        {/* Passengers Selection */}
        <View style={bookTripScreenStyles.formSection}>
          <Text style={bookTripScreenStyles.sectionTitle}>Passengers</Text>

          <View style={bookTripScreenStyles.passengersSelector}>
            <Text style={bookTripScreenStyles.passengersLabel}>Number of passengers</Text>
            <View style={bookTripScreenStyles.passengersControls}>
              <TouchableOpacity
                style={[
                  bookTripScreenStyles.passengersButton,
                  passengers <= 1 && bookTripScreenStyles.passengersButtonDisabled
                ]}
                onPress={() => passengers > 1 && setPassengers(passengers - 1)}
                disabled={passengers <= 1}
              >
                <Text style={[
                  bookTripScreenStyles.passengersButtonText,
                  passengers <= 1 && bookTripScreenStyles.passengersButtonTextDisabled
                ]}>
                  -
                </Text>
              </TouchableOpacity>

              <Text style={bookTripScreenStyles.passengersCount}>{passengers}</Text>

              <TouchableOpacity
                style={[
                  bookTripScreenStyles.passengersButton,
                  passengers >= 8 && bookTripScreenStyles.passengersButtonDisabled
                ]}
                onPress={() => passengers < 8 && setPassengers(passengers + 1)}
                disabled={passengers >= 8}
              >
                <Text style={[
                  bookTripScreenStyles.passengersButtonText,
                  passengers >= 8 && bookTripScreenStyles.passengersButtonTextDisabled
                ]}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Special Requests */}
        <View style={bookTripScreenStyles.formSection}>
          <Text style={bookTripScreenStyles.sectionTitle}>Special Requests (Optional)</Text>
          <Text style={bookTripScreenStyles.sectionDescription}>
            Any special requirements or notes for your trip
          </Text>

          <TextInput
            style={bookTripScreenStyles.specialRequestsInput}
            placeholder="e.g., Child seat required, wheelchair accessible, luggage space..."
            value={specialRequests}
            onChangeText={setSpecialRequests}
            multiline
            numberOfLines={3}
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        {/* Search Button */}
        {!isSearching && routeOptions.length === 0 && (
          <View style={bookTripScreenStyles.actionSection}>
            <TouchableOpacity
              style={[
                bookTripScreenStyles.actionButton,
                (!pickupLocation || !dropoffLocation) && bookTripScreenStyles.actionButtonDisabled
              ]}
              onPress={handleSearchTrips}
              disabled={!pickupLocation || !dropoffLocation}
            >
              <Text style={[
                bookTripScreenStyles.actionButtonText,
                (!pickupLocation || !dropoffLocation) && bookTripScreenStyles.actionButtonTextDisabled
              ]}>
                Search Available Trips
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Loading State */}
        {isSearching && (
          <View style={bookTripScreenStyles.loadingContainer}>
            <MaterialCommunityIcons
              name="car-clock"
              size={48}
              color={colors.primary}
            />
            <Text style={bookTripScreenStyles.loadingText}>
              Searching for available trips...
            </Text>
          </View>
        )}

        {/* Route Options */}
        {!isSearching && routeOptions.length > 0 && (
          <View style={bookTripScreenStyles.routeOptionsContainer}>
            <Text style={bookTripScreenStyles.sectionTitle}>Available Routes</Text>
            {routeOptions.map(renderRouteOption)}
          </View>
        )}

        {/* Booking Summary */}
        {selectedRoute && (
          <View style={bookTripScreenStyles.summarySection}>
            <Text style={bookTripScreenStyles.summaryTitle}>Booking Summary</Text>

            <View style={bookTripScreenStyles.summaryRow}>
              <Text style={bookTripScreenStyles.summaryLabel}>Route</Text>
              <Text style={bookTripScreenStyles.summaryValue}>
                {pickupLocation} → {dropoffLocation}
              </Text>
            </View>

            <View style={bookTripScreenStyles.summaryRow}>
              <Text style={bookTripScreenStyles.summaryLabel}>Passengers</Text>
              <Text style={bookTripScreenStyles.summaryValue}>
                {passengers} {passengers === 1 ? 'person' : 'people'}
              </Text>
            </View>

            <View style={bookTripScreenStyles.summaryRow}>
              <Text style={bookTripScreenStyles.summaryLabel}>Trip Fare</Text>
              <Text style={bookTripScreenStyles.summaryValue}>
                {formatCurrency(getSelectedRoutePrice())}
              </Text>
            </View>

            <View style={bookTripScreenStyles.summaryRow}>
              <Text style={bookTripScreenStyles.summaryLabel}>Service Fee</Text>
              <Text style={bookTripScreenStyles.summaryValue}>
                {formatCurrency(getServiceFee())}
              </Text>
            </View>

            <View style={[
              bookTripScreenStyles.summaryRow,
              bookTripScreenStyles.summaryTotal
            ]}>
              <Text style={bookTripScreenStyles.summaryTotalLabel}>Total</Text>
              <Text style={bookTripScreenStyles.summaryTotalValue}>
                {formatCurrency(getTotalPrice())}
              </Text>
            </View>
          </View>
        )}

        {/* Action Buttons */}
        {selectedRoute && (
          <View style={bookTripScreenStyles.actionSection}>
            <TouchableOpacity
              style={bookTripScreenStyles.actionButton}
              onPress={handleBookTrip}
            >
              <Text style={bookTripScreenStyles.actionButtonText}>
                Confirm Booking
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                bookTripScreenStyles.actionButton,
                bookTripScreenStyles.secondaryActionButton
              ]}
              onPress={() => setSelectedRoute('')}
            >
              <Text style={[
                bookTripScreenStyles.actionButtonText,
                bookTripScreenStyles.secondaryActionButtonText
              ]}>
                Choose Different Route
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Empty State */}
        {!isSearching && routeOptions.length === 0 && pickupLocation && dropoffLocation && (
          <View style={bookTripScreenStyles.emptyState}>
            <MaterialCommunityIcons
              name="car-off"
              size={64}
              color={colors.textSecondary}
              style={bookTripScreenStyles.emptyStateIcon}
            />
            <Text style={bookTripScreenStyles.emptyStateTitle}>
              No Routes Available
            </Text>
            <Text style={bookTripScreenStyles.emptyStateMessage}>
              No trips found for your selected route and time. Try adjusting your search criteria.
            </Text>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default BookTripScreen;
