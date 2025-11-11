import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardHeader from '../components/ui/DashboardHeader';
import { bookingDetailsScreenStyles } from '../styles/screens/bookingDetailsScreen';
import { colors } from '../styles/theme';

interface Driver {
  id: string;
  name: string;
  rating: number;
  vehicle: string;
  licensePlate: string;
  phone: string;
  profileImage?: string;
}

interface BookingDetails {
  id: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  pickupLocation: string;
  pickupAddress: string;
  pickupTime: string;
  dropoffLocation: string;
  dropoffAddress: string;
  dropoffTime: string;
  distance: number;
  duration: string;
  fare: number;
  serviceFee: number;
  total: number;
  driver?: Driver;
  passengers: number;
  bookingDate: string;
  paymentMethod: string;
  notes?: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

const BookingDetailsScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Mock booking data
  const booking: BookingDetails = {
    id: 'BK-20251110-001',
    status: 'upcoming',
    pickupLocation: 'Stellenbosch University',
    pickupAddress: 'Merriman Ave, Stellenbosch Central, Stellenbosch, 7600',
    pickupTime: '2025-11-10T14:30:00',
    dropoffLocation: 'V&A Waterfront',
    dropoffAddress: 'Victoria & Alfred Waterfront, Cape Town, 8002',
    dropoffTime: '2025-11-10T15:45:00',
    distance: 45.2,
    duration: '1h 15m',
    fare: 180.00,
    serviceFee: 20.00,
    total: 200.00,
    passengers: 1,
    bookingDate: '2025-11-08T10:30:00',
    paymentMethod: 'Credit Card',
    notes: 'Please call when you arrive at the pickup point.',
    driver: {
      id: 'DRV-001',
      name: 'Michael Johnson',
      rating: 4.8,
      vehicle: 'Toyota Quantum',
      licensePlate: 'CA 123 456',
      phone: '+27 82 123 4567',
    },
  };

  const timeline: TimelineEvent[] = [
    {
      id: '1',
      title: 'Booking Confirmed',
      time: '08 Nov, 10:30 AM',
      completed: true,
    },
    {
      id: '2',
      title: 'Driver Assigned',
      time: '08 Nov, 10:45 AM',
      completed: true,
    },
    {
      id: '3',
      title: 'Trip Start',
      time: '10 Nov, 14:30 PM',
      completed: false,
    },
    {
      id: '4',
      title: 'Trip Complete',
      time: '10 Nov, 15:45 PM',
      completed: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return colors.primary;
      case 'ongoing':
        return colors.warning;
      case 'completed':
        return colors.success;
      case 'cancelled':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Trip Scheduled';
      case 'ongoing':
        return 'Trip in Progress';
      case 'completed':
        return 'Trip Completed';
      case 'cancelled':
        return 'Trip Cancelled';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'calendar-clock';
      case 'ongoing':
        return 'car';
      case 'completed':
        return 'check-circle';
      case 'cancelled':
        return 'cancel';
      default:
        return 'information';
    }
  };

  const formatCurrency = (amount: number) => {
    return `R ${amount.toFixed(2)}`;
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-ZA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('en-ZA', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  const handleCancelBooking = () => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking? This action cannot be undone.',
      [
        {
          text: 'Keep Booking',
          style: 'cancel',
        },
        {
          text: 'Cancel Booking',
          style: 'destructive',
          onPress: () => {
            console.log('Booking cancelled');
          },
        },
      ]
    );
  };

  const handleCallDriver = () => {
    if (booking.driver) {
      Alert.alert(
        'Call Driver',
        `Call ${booking.driver.name} at ${booking.driver.phone}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Call', onPress: () => console.log('Calling driver...') },
        ]
      );
    }
  };

  const handleMessageDriver = () => {
    Alert.alert('Message Driver', 'Open messaging with driver');
  };

  const handleContactSupport = () => {
    Alert.alert('Contact Support', 'Opening support chat...');
  };

  const handleReportIssue = () => {
    Alert.alert('Report Issue', 'Open issue reporting form');
  };

  const renderTimelineItem = (item: TimelineEvent, index: number) => (
    <View key={item.id}>
      <View style={bookingDetailsScreenStyles.timelineItem}>
        <View style={[
          bookingDetailsScreenStyles.timelineIcon,
          { backgroundColor: item.completed ? colors.success : colors.surfaceVariant }
        ]}>
          <MaterialCommunityIcons
            name={item.completed ? 'check' : 'clock-outline'}
            size={16}
            color={item.completed ? '#FFFFFF' : colors.textSecondary}
          />
        </View>
        <View style={bookingDetailsScreenStyles.timelineContent}>
          <Text style={bookingDetailsScreenStyles.timelineTitle}>{item.title}</Text>
          <Text style={bookingDetailsScreenStyles.timelineTime}>{item.time}</Text>
        </View>
      </View>
      {index < timeline.length - 1 && (
        <View style={bookingDetailsScreenStyles.timelineConnector} />
      )}
    </View>
  );

  return (
    <LinearGradient
      colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
      style={bookingDetailsScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'User',
          role: 'commuter'
        }}
        title="Booking Details"
        notificationCount={2}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={bookingDetailsScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={bookingDetailsScreenStyles.header}>
          <Text style={bookingDetailsScreenStyles.title}>Trip Details</Text>
          <Text style={bookingDetailsScreenStyles.subtitle}>
            Booking ID: {booking.id}
          </Text>
        </View>

        {/* Status Banner */}
        <View style={[
          bookingDetailsScreenStyles.statusBanner,
          { backgroundColor: getStatusColor(booking.status) }
        ]}>
          <View style={bookingDetailsScreenStyles.statusRow}>
            <MaterialCommunityIcons
              name={getStatusIcon(booking.status)}
              size={32}
              color="#FFFFFF"
              style={bookingDetailsScreenStyles.statusIcon}
            />
            <View style={{ flex: 1 }}>
              <Text style={[
                bookingDetailsScreenStyles.statusTitle,
                { color: '#FFFFFF' }
              ]}>
                {getStatusText(booking.status)}
              </Text>
              <Text style={[
                bookingDetailsScreenStyles.statusSubtitle,
                { color: '#FFFFFF' }
              ]}>
                {booking.status === 'upcoming' ?
                  `Departing ${formatDateTime(booking.pickupTime).time}` :
                  `Trip ${booking.status}`
                }
              </Text>
            </View>
          </View>

          <View style={bookingDetailsScreenStyles.statusDetails}>
            <View style={bookingDetailsScreenStyles.statusDetailRow}>
              <Text style={[
                bookingDetailsScreenStyles.statusDetailLabel,
                { color: '#FFFFFF' }
              ]}>
                Booked on
              </Text>
              <Text style={[
                bookingDetailsScreenStyles.statusDetailValue,
                { color: '#FFFFFF' }
              ]}>
                {formatDateTime(booking.bookingDate).date}
              </Text>
            </View>
            <View style={bookingDetailsScreenStyles.statusDetailRow}>
              <Text style={[
                bookingDetailsScreenStyles.statusDetailLabel,
                { color: '#FFFFFF' }
              ]}>
                Passengers
              </Text>
              <Text style={[
                bookingDetailsScreenStyles.statusDetailValue,
                { color: '#FFFFFF' }
              ]}>
                {booking.passengers}
              </Text>
            </View>
          </View>
        </View>

        {/* Route Information */}
        <View style={bookingDetailsScreenStyles.infoSection}>
          <Text style={bookingDetailsScreenStyles.sectionTitle}>Route Details</Text>

          <View style={bookingDetailsScreenStyles.routeContainer}>
            <View style={bookingDetailsScreenStyles.routeRow}>
              <View style={bookingDetailsScreenStyles.routeIcon}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={24}
                  color={colors.success}
                />
              </View>
              <View style={bookingDetailsScreenStyles.routeDetails}>
                <Text style={bookingDetailsScreenStyles.routeLocation}>
                  {booking.pickupLocation}
                </Text>
                <Text style={bookingDetailsScreenStyles.routeTime}>
                  {formatDateTime(booking.pickupTime).time} • {formatDateTime(booking.pickupTime).date}
                </Text>
                <Text style={bookingDetailsScreenStyles.routeAddress}>
                  {booking.pickupAddress}
                </Text>
              </View>
            </View>

            <View style={bookingDetailsScreenStyles.routeLine} />

            <View style={bookingDetailsScreenStyles.routeRow}>
              <View style={bookingDetailsScreenStyles.routeIcon}>
                <MaterialCommunityIcons
                  name="flag-checkered"
                  size={24}
                  color={colors.error}
                />
              </View>
              <View style={bookingDetailsScreenStyles.routeDetails}>
                <Text style={bookingDetailsScreenStyles.routeLocation}>
                  {booking.dropoffLocation}
                </Text>
                <Text style={bookingDetailsScreenStyles.routeTime}>
                  {formatDateTime(booking.dropoffTime).time} • {formatDateTime(booking.dropoffTime).date}
                </Text>
                <Text style={bookingDetailsScreenStyles.routeAddress}>
                  {booking.dropoffAddress}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Trip Details */}
        <View style={bookingDetailsScreenStyles.infoSection}>
          <Text style={bookingDetailsScreenStyles.sectionTitle}>Trip Information</Text>

          <View style={bookingDetailsScreenStyles.detailsGrid}>
            <View style={bookingDetailsScreenStyles.detailItem}>
              <View style={bookingDetailsScreenStyles.detailCard}>
                <Text style={bookingDetailsScreenStyles.detailValue}>
                  {booking.distance} km
                </Text>
                <Text style={bookingDetailsScreenStyles.detailLabel}>Distance</Text>
              </View>
            </View>

            <View style={bookingDetailsScreenStyles.detailItem}>
              <View style={bookingDetailsScreenStyles.detailCard}>
                <Text style={bookingDetailsScreenStyles.detailValue}>
                  {booking.duration}
                </Text>
                <Text style={bookingDetailsScreenStyles.detailLabel}>Duration</Text>
              </View>
            </View>

            <View style={bookingDetailsScreenStyles.detailItem}>
              <View style={bookingDetailsScreenStyles.detailCard}>
                <Text style={bookingDetailsScreenStyles.detailValue}>
                  {booking.passengers}
                </Text>
                <Text style={bookingDetailsScreenStyles.detailLabel}>Passengers</Text>
              </View>
            </View>

            <View style={bookingDetailsScreenStyles.detailItem}>
              <View style={bookingDetailsScreenStyles.detailCard}>
                <Text style={bookingDetailsScreenStyles.detailValue}>
                  {booking.paymentMethod}
                </Text>
                <Text style={bookingDetailsScreenStyles.detailLabel}>Payment</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Driver Information */}
        {booking.driver && (
          <View style={bookingDetailsScreenStyles.infoSection}>
            <Text style={bookingDetailsScreenStyles.sectionTitle}>Driver Details</Text>

            <View style={bookingDetailsScreenStyles.driverSection}>
              <View style={bookingDetailsScreenStyles.driverAvatar}>
                <MaterialCommunityIcons
                  name="account"
                  size={32}
                  color={colors.primary}
                />
              </View>

              <View style={bookingDetailsScreenStyles.driverInfo}>
                <Text style={bookingDetailsScreenStyles.driverName}>
                  {booking.driver.name}
                </Text>
                <Text style={bookingDetailsScreenStyles.driverDetails}>
                  {booking.driver.vehicle} • {booking.driver.licensePlate}
                </Text>
                <View style={bookingDetailsScreenStyles.driverRating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={16}
                    color={colors.warning}
                  />
                  <Text style={bookingDetailsScreenStyles.ratingText}>
                    {booking.driver.rating} rating
                  </Text>
                </View>
              </View>

              <View style={bookingDetailsScreenStyles.driverActions}>
                <TouchableOpacity
                  style={bookingDetailsScreenStyles.driverActionButton}
                  onPress={handleCallDriver}
                >
                  <MaterialCommunityIcons
                    name="phone"
                    size={20}
                    color={colors.primary}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={bookingDetailsScreenStyles.driverActionButton}
                  onPress={handleMessageDriver}
                >
                  <MaterialCommunityIcons
                    name="message"
                    size={20}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Payment Information */}
        <View style={bookingDetailsScreenStyles.paymentSection}>
          <Text style={[
            bookingDetailsScreenStyles.sectionTitle,
            { color: colors.success }
          ]}>
            Payment Summary
          </Text>

          <View style={bookingDetailsScreenStyles.paymentRow}>
            <Text style={bookingDetailsScreenStyles.paymentLabel}>Trip Fare</Text>
            <Text style={bookingDetailsScreenStyles.paymentValue}>
              {formatCurrency(booking.fare)}
            </Text>
          </View>

          <View style={bookingDetailsScreenStyles.paymentRow}>
            <Text style={bookingDetailsScreenStyles.paymentLabel}>Service Fee</Text>
            <Text style={bookingDetailsScreenStyles.paymentValue}>
              {formatCurrency(booking.serviceFee)}
            </Text>
          </View>

          <View style={[
            bookingDetailsScreenStyles.paymentRow,
            bookingDetailsScreenStyles.paymentTotal
          ]}>
            <Text style={bookingDetailsScreenStyles.paymentTotalLabel}>Total</Text>
            <Text style={bookingDetailsScreenStyles.paymentTotalValue}>
              {formatCurrency(booking.total)}
            </Text>
          </View>
        </View>

        {/* Trip Timeline */}
        <View style={bookingDetailsScreenStyles.timelineSection}>
          <Text style={bookingDetailsScreenStyles.sectionTitle}>Trip Timeline</Text>
          {timeline.map((item, index) => renderTimelineItem(item, index))}
        </View>

        {/* Support Section */}
        <View style={bookingDetailsScreenStyles.supportSection}>
          <Text style={bookingDetailsScreenStyles.supportTitle}>Need Help?</Text>
          <Text style={bookingDetailsScreenStyles.supportDescription}>
            Contact our support team for assistance with your booking
          </Text>

          <View style={bookingDetailsScreenStyles.supportActions}>
            <TouchableOpacity
              style={bookingDetailsScreenStyles.supportButton}
              onPress={handleContactSupport}
            >
              <Text style={bookingDetailsScreenStyles.supportButtonText}>
                Contact Support
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={bookingDetailsScreenStyles.supportButton}
              onPress={handleReportIssue}
            >
              <Text style={bookingDetailsScreenStyles.supportButtonText}>
                Report Issue
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        {booking.status === 'upcoming' && (
          <View style={bookingDetailsScreenStyles.actionSection}>
            <TouchableOpacity
              style={bookingDetailsScreenStyles.actionButton}
              onPress={() => console.log('Modify booking')}
            >
              <Text style={bookingDetailsScreenStyles.actionButtonText}>
                Modify Booking
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                bookingDetailsScreenStyles.actionButton,
                bookingDetailsScreenStyles.secondaryActionButton,
                bookingDetailsScreenStyles.dangerActionButton
              ]}
              onPress={handleCancelBooking}
            >
              <Text style={[
                bookingDetailsScreenStyles.actionButtonText,
                bookingDetailsScreenStyles.dangerActionButtonText
              ]}>
                Cancel Booking
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {booking.status === 'completed' && (
          <View style={bookingDetailsScreenStyles.actionSection}>
            <TouchableOpacity
              style={bookingDetailsScreenStyles.actionButton}
              onPress={() => console.log('Rate trip')}
            >
              <Text style={bookingDetailsScreenStyles.actionButtonText}>
                Rate This Trip
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                bookingDetailsScreenStyles.actionButton,
                bookingDetailsScreenStyles.secondaryActionButton
              ]}
              onPress={() => console.log('Book again')}
            >
              <Text style={[
                bookingDetailsScreenStyles.actionButtonText,
                bookingDetailsScreenStyles.secondaryActionButtonText
              ]}>
                Book This Trip Again
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default BookingDetailsScreen;
