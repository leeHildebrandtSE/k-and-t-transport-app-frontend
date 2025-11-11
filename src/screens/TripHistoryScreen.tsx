import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardHeader from '../components/ui/DashboardHeader';
import { tripHistoryScreenStyles } from '../styles/screens/tripHistoryScreen';
import { colors } from '../styles/theme';

interface TripHistoryItem {
  id: string;
  date: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  dropoffTime: string;
  distance: number;
  duration: string;
  amount: number;
  status: 'completed' | 'cancelled';
  driver: string;
  vehicle: string;
  passengers: number;
  rating?: number;
  paymentMethod: string;
}

interface TripSummary {
  totalTrips: number;
  totalSpent: number;
  averageTrip: number;
  favoriteRoute: string;
}

const TripHistoryScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'thisMonth' | 'lastMonth' | 'thisYear'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'cancelled'>('all');

  // Mock data
  const tripSummary: TripSummary = {
    totalTrips: 47,
    totalSpent: 2840.50,
    averageTrip: 60.43,
    favoriteRoute: 'Stellenbosch → Cape Town',
  };

  const tripHistory: TripHistoryItem[] = [
    {
      id: 'TRP-001',
      date: '2025-11-09',
      pickupLocation: 'Stellenbosch University',
      dropoffLocation: 'V&A Waterfront',
      pickupTime: '14:30',
      dropoffTime: '15:45',
      distance: 45.2,
      duration: '1h 15m',
      amount: 200.00,
      status: 'completed',
      driver: 'Michael Johnson',
      vehicle: 'Toyota Quantum',
      passengers: 1,
      rating: 5,
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TRP-002',
      date: '2025-11-07',
      pickupLocation: 'Cape Town CBD',
      dropoffLocation: 'Stellenbosch Central',
      pickupTime: '08:00',
      dropoffTime: '09:20',
      distance: 48.1,
      duration: '1h 20m',
      amount: 180.00,
      status: 'completed',
      driver: 'Sarah Williams',
      vehicle: 'Ford Transit',
      passengers: 2,
      rating: 4,
      paymentMethod: 'EFT',
    },
    {
      id: 'TRP-003',
      date: '2025-11-05',
      pickupLocation: 'Paarl Main Road',
      dropoffLocation: 'Cape Town Station',
      pickupTime: '16:15',
      dropoffTime: '17:45',
      distance: 62.3,
      duration: '1h 30m',
      amount: 220.00,
      status: 'completed',
      driver: 'David Brown',
      vehicle: 'Toyota Hiace',
      passengers: 1,
      rating: 5,
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TRP-004',
      date: '2025-11-03',
      pickupLocation: 'Stellenbosch University',
      dropoffLocation: 'Bellville CBD',
      pickupTime: '10:00',
      dropoffTime: '10:45',
      distance: 25.7,
      duration: '45m',
      amount: 120.00,
      status: 'cancelled',
      driver: 'John Smith',
      vehicle: 'Toyota Quantum',
      passengers: 1,
      paymentMethod: 'Credit Card',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
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
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  const formatCurrency = (amount: number) => {
    return `R ${amount.toFixed(2)}`;
  };

  const handleViewDetails = (tripId: string) => {
    console.log('View details for trip:', tripId);
    // Navigate to BookingDetailsScreen
  };

  const handleBookAgain = (trip: TripHistoryItem) => {
    console.log('Book again:', trip.pickupLocation, 'to', trip.dropoffLocation);
    // Navigate to BookTripScreen with pre-filled details
  };

  const handleRateTrip = (tripId: string) => {
    console.log('Rate trip:', tripId);
    // Open rating dialog
  };

  const handleExportPDF = () => {
    console.log('Export trip history to PDF');
  };

  const handleExportExcel = () => {
    console.log('Export trip history to Excel');
  };

  const renderSummaryCard = (label: string, value: string | number, icon: string) => (
    <View style={tripHistoryScreenStyles.summaryItem}>
      <View style={tripHistoryScreenStyles.summaryCard}>
        <MaterialCommunityIcons
          name={icon as any}
          size={24}
          color={colors.primary}
          style={{ marginBottom: 8 }}
        />
        <Text style={tripHistoryScreenStyles.summaryValue}>
          {typeof value === 'number' && label.includes('Spent') || label.includes('Average') ?
            formatCurrency(value as number) : value}
        </Text>
        <Text style={tripHistoryScreenStyles.summaryLabel}>{label}</Text>
      </View>
    </View>
  );

  const renderTripItem = (trip: TripHistoryItem) => (
    <View key={trip.id} style={tripHistoryScreenStyles.tripItem}>
      <View style={tripHistoryScreenStyles.tripHeader}>
        <View style={tripHistoryScreenStyles.tripInfo}>
          <Text style={tripHistoryScreenStyles.tripDate}>
            {new Date(trip.date).toLocaleDateString('en-ZA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Text style={tripHistoryScreenStyles.tripRoute}>
            {trip.pickupLocation} → {trip.dropoffLocation}
          </Text>
          <Text style={tripHistoryScreenStyles.tripTime}>
            {trip.pickupTime} - {trip.dropoffTime} • {trip.duration}
          </Text>
        </View>
        <View style={tripHistoryScreenStyles.tripAmount}>
          <Text style={tripHistoryScreenStyles.tripPrice}>
            {formatCurrency(trip.amount)}
          </Text>
          <View style={[
            tripHistoryScreenStyles.tripStatus,
            { backgroundColor: `${getStatusColor(trip.status)}20` }
          ]}>
            <Text style={[
              tripHistoryScreenStyles.tripStatusText,
              { color: getStatusColor(trip.status) }
            ]}>
              {getStatusText(trip.status)}
            </Text>
          </View>
        </View>
      </View>

      {/* Route Visualization */}
      <View style={tripHistoryScreenStyles.routeContainer}>
        <View style={[tripHistoryScreenStyles.routePoint, tripHistoryScreenStyles.pickupPoint]} />
        <Text style={tripHistoryScreenStyles.routeText}>{trip.pickupLocation}</Text>
      </View>

      <View style={tripHistoryScreenStyles.routeLine} />

      <View style={tripHistoryScreenStyles.routeContainer}>
        <View style={[tripHistoryScreenStyles.routePoint, tripHistoryScreenStyles.dropoffPoint]} />
        <Text style={tripHistoryScreenStyles.routeText}>{trip.dropoffLocation}</Text>
      </View>

      <View style={tripHistoryScreenStyles.tripDetails}>
        <View style={tripHistoryScreenStyles.detailsGrid}>
          <View style={tripHistoryScreenStyles.detailItem}>
            <Text style={tripHistoryScreenStyles.detailValue}>{trip.distance}km</Text>
            <Text style={tripHistoryScreenStyles.detailLabel}>Distance</Text>
          </View>
          <View style={tripHistoryScreenStyles.detailItem}>
            <Text style={tripHistoryScreenStyles.detailValue}>{trip.passengers}</Text>
            <Text style={tripHistoryScreenStyles.detailLabel}>Passengers</Text>
          </View>
          <View style={tripHistoryScreenStyles.detailItem}>
            <Text style={tripHistoryScreenStyles.detailValue}>
              {trip.rating ? `${trip.rating}★` : 'N/A'}
            </Text>
            <Text style={tripHistoryScreenStyles.detailLabel}>Rating</Text>
          </View>
          <View style={tripHistoryScreenStyles.detailItem}>
            <Text style={tripHistoryScreenStyles.detailValue}>{trip.paymentMethod}</Text>
            <Text style={tripHistoryScreenStyles.detailLabel}>Payment</Text>
          </View>
        </View>

        <View style={tripHistoryScreenStyles.detailsRow}>
          <Text style={tripHistoryScreenStyles.detailLabel}>Driver: {trip.driver}</Text>
          <Text style={tripHistoryScreenStyles.detailLabel}>{trip.vehicle}</Text>
        </View>
      </View>

      <View style={tripHistoryScreenStyles.tripActions}>
        <TouchableOpacity
          style={[
            tripHistoryScreenStyles.actionButton,
            tripHistoryScreenStyles.secondaryActionButton
          ]}
          onPress={() => handleViewDetails(trip.id)}
        >
          <Text style={[
            tripHistoryScreenStyles.actionButtonText,
            tripHistoryScreenStyles.secondaryActionButtonText
          ]}>
            View Details
          </Text>
        </TouchableOpacity>

        {trip.status === 'completed' && !trip.rating && (
          <TouchableOpacity
            style={tripHistoryScreenStyles.actionButton}
            onPress={() => handleRateTrip(trip.id)}
          >
            <Text style={tripHistoryScreenStyles.actionButtonText}>
              Rate Trip
            </Text>
          </TouchableOpacity>
        )}

        {trip.status === 'completed' && (
          <TouchableOpacity
            style={tripHistoryScreenStyles.actionButton}
            onPress={() => handleBookAgain(trip)}
          >
            <Text style={tripHistoryScreenStyles.actionButtonText}>
              Book Again
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const filteredTrips = tripHistory.filter(trip => {
    if (statusFilter !== 'all' && trip.status !== statusFilter) {
      return false;
    }

    const tripDate = new Date(trip.date);
    const now = new Date();

    switch (selectedFilter) {
      case 'thisMonth':
        return tripDate.getMonth() === now.getMonth() && tripDate.getFullYear() === now.getFullYear();
      case 'lastMonth':
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        return tripDate.getMonth() === lastMonth.getMonth() && tripDate.getFullYear() === lastMonth.getFullYear();
      case 'thisYear':
        return tripDate.getFullYear() === now.getFullYear();
      default:
        return true;
    }
  });

  return (
    <LinearGradient
      colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
      style={tripHistoryScreenStyles.container}
    >
      <DashboardHeader
        user={{
          id: '1',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'User',
          role: 'commuter'
        }}
        title="Trip History"
        notificationCount={2}
        onNotificationPress={() => console.log('Notifications pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />

      <ScrollView
        style={tripHistoryScreenStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={tripHistoryScreenStyles.header}>
          <Text style={tripHistoryScreenStyles.title}>Trip History</Text>
          <Text style={tripHistoryScreenStyles.subtitle}>
            View your travel history and trip details
          </Text>
        </View>

        {/* Summary Section */}
        <View style={tripHistoryScreenStyles.summarySection}>
          <Text style={tripHistoryScreenStyles.summaryTitle}>Travel Summary</Text>
          <View style={tripHistoryScreenStyles.summaryGrid}>
            {renderSummaryCard('Total Trips', tripSummary.totalTrips, 'map-marker-path')}
            {renderSummaryCard('Total Spent', tripSummary.totalSpent, 'cash')}
            {renderSummaryCard('Average Trip', tripSummary.averageTrip, 'chart-line')}
            {renderSummaryCard('Favorite Route', tripSummary.favoriteRoute, 'heart')}
          </View>
        </View>

        {/* Filter Section */}
        <View style={tripHistoryScreenStyles.filterSection}>
          <Text style={tripHistoryScreenStyles.filterTitle}>Filter Options</Text>

          <View style={tripHistoryScreenStyles.filterRow}>
            <Text style={tripHistoryScreenStyles.filterLabel}>Time Period:</Text>
            <TouchableOpacity
              style={tripHistoryScreenStyles.filterButton}
              onPress={() => {
                const periods: ('all' | 'thisMonth' | 'lastMonth' | 'thisYear')[] = ['all', 'thisMonth', 'lastMonth', 'thisYear'];
                const currentIndex = periods.indexOf(selectedFilter);
                const nextIndex = (currentIndex + 1) % periods.length;
                setSelectedFilter(periods[nextIndex]);
              }}
            >
              <Text style={tripHistoryScreenStyles.filterButtonText}>
                {selectedFilter === 'all' ? 'All Time' :
                 selectedFilter === 'thisMonth' ? 'This Month' :
                 selectedFilter === 'lastMonth' ? 'Last Month' : 'This Year'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tripHistoryScreenStyles.filterRow}>
            <Text style={tripHistoryScreenStyles.filterLabel}>Status:</Text>
            <TouchableOpacity
              style={tripHistoryScreenStyles.filterButton}
              onPress={() => {
                const statuses: ('all' | 'completed' | 'cancelled')[] = ['all', 'completed', 'cancelled'];
                const currentIndex = statuses.indexOf(statusFilter);
                const nextIndex = (currentIndex + 1) % statuses.length;
                setStatusFilter(statuses[nextIndex]);
              }}
            >
              <Text style={tripHistoryScreenStyles.filterButtonText}>
                {statusFilter === 'all' ? 'All Status' :
                 statusFilter === 'completed' ? 'Completed' : 'Cancelled'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Active Filters */}
          <View style={tripHistoryScreenStyles.filterTags}>
            {selectedFilter !== 'all' && (
              <View style={tripHistoryScreenStyles.filterTag}>
                <Text style={tripHistoryScreenStyles.filterTagText}>
                  {selectedFilter === 'thisMonth' ? 'This Month' :
                   selectedFilter === 'lastMonth' ? 'Last Month' : 'This Year'}
                </Text>
              </View>
            )}
            {statusFilter !== 'all' && (
              <View style={tripHistoryScreenStyles.filterTag}>
                <Text style={tripHistoryScreenStyles.filterTagText}>
                  {statusFilter === 'completed' ? 'Completed' : 'Cancelled'}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Trip History List */}
        <View style={tripHistoryScreenStyles.tripList}>
          {filteredTrips.length > 0 ? (
            filteredTrips.map(renderTripItem)
          ) : (
            <View style={tripHistoryScreenStyles.emptyState}>
              <MaterialCommunityIcons
                name="map-marker-off"
                size={64}
                color={colors.textSecondary}
                style={tripHistoryScreenStyles.emptyStateIcon}
              />
              <Text style={tripHistoryScreenStyles.emptyStateTitle}>
                No Trips Found
              </Text>
              <Text style={tripHistoryScreenStyles.emptyStateMessage}>
                {selectedFilter !== 'all' || statusFilter !== 'all'
                  ? 'No trips match your current filter criteria'
                  : 'Start your journey with K&T Commute today'
                }
              </Text>
              {selectedFilter === 'all' && statusFilter === 'all' && (
                <TouchableOpacity
                  style={tripHistoryScreenStyles.emptyStateAction}
                  onPress={() => console.log('Book your first trip')}
                >
                  <Text style={tripHistoryScreenStyles.emptyStateActionText}>
                    Book Your First Trip
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>

        {/* Export Section */}
        {filteredTrips.length > 0 && (
          <View style={tripHistoryScreenStyles.exportSection}>
            <Text style={tripHistoryScreenStyles.exportTitle}>Export Trip History</Text>
            <Text style={tripHistoryScreenStyles.exportDescription}>
              Download your trip history for records or expense claims
            </Text>

            <View style={tripHistoryScreenStyles.exportButtonsRow}>
              <TouchableOpacity
                style={tripHistoryScreenStyles.exportButton}
                onPress={handleExportPDF}
              >
                <Text style={tripHistoryScreenStyles.exportButtonText}>Export PDF</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={tripHistoryScreenStyles.exportButton}
                onPress={handleExportExcel}
              >
                <Text style={tripHistoryScreenStyles.exportButtonText}>Export Excel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default TripHistoryScreen;
