import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import {
  Card,
  Button,
  Text,
  Chip,
  IconButton,
  Menu,
  Divider,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createIcon } from '../../../components/Icon';

import { colors } from '../../../utils/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../../styles/screens/dashboards/adminDashboard';
import { AdminScreenProps } from '../../../types/Dashboard';
import { Booking } from '../../../types/Booking';

const AdminBookingsScreen: React.FC<AdminScreenProps> = ({ user }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [menuVisible, setMenuVisible] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      userId: 'user1',
      routeId: 'route1',
      bookingType: 'work',
      pickupLocationId: 'loc1',
      dropoffLocationId: 'loc2',
      recurringSchedule: {
        id: 'rs1',
        bookingId: '1',
        startDate: '2024-01-15',
        endDate: '2024-12-31',
        daysOfWeek: [1, 2, 3, 4, 5],
        morningTrip: true,
        afternoonTrip: true,
        active: true,
      },
      status: 'confirmed',
      totalCost: 150.00,
      paymentStatus: 'paid',
      createdAt: '2024-01-10T10:30:00Z',
      updatedAt: '2024-01-10T10:30:00Z',
    },
    {
      id: '2',
      userId: 'user2',
      routeId: 'route2',
      bookingType: 'school',
      pickupLocationId: 'loc3',
      dropoffLocationId: 'loc4',
      recurringSchedule: {
        id: 'rs2',
        bookingId: '2',
        startDate: '2024-01-15',
        endDate: '2024-12-31',
        daysOfWeek: [1, 2, 3, 4, 5],
        morningTrip: true,
        afternoonTrip: false,
        active: true,
      },
      status: 'pending',
      totalCost: 75.00,
      paymentStatus: 'pending',
      createdAt: '2024-01-12T14:15:00Z',
      updatedAt: '2024-01-12T14:15:00Z',
    },
    {
      id: '3',
      userId: 'user3',
      routeId: 'route3',
      bookingType: 'work',
      pickupLocationId: 'loc5',
      dropoffLocationId: 'loc6',
      recurringSchedule: {
        id: 'rs3',
        bookingId: '3',
        startDate: '2024-01-08',
        endDate: '2024-01-14',
        daysOfWeek: [1, 2, 3, 4, 5],
        morningTrip: true,
        afternoonTrip: true,
        active: false,
      },
      status: 'completed',
      totalCost: 200.00,
      paymentStatus: 'paid',
      createdAt: '2024-01-08T09:20:00Z',
      updatedAt: '2024-01-14T16:30:00Z',
    },
  ]);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch bookings from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return colors.success;
      case 'pending': return colors.warning;
      case 'cancelled': return colors.error;
      case 'completed': return colors.primary;
      default: return colors.text;
    }
  };

  const getStatusIcon = (status: string) => {
    const iconName = (() => {
      switch (status) {
        case 'confirmed': return 'check-circle';
        case 'pending': return 'clock';
        case 'cancelled': return 'cancel';
        case 'completed': return 'check-circle-outline';
        default: return 'help-circle';
      }
    })();

    return createIcon(iconName, 16, getStatusColor(status));
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderBookingItem = ({ item }: { item: Booking }) => (
    <Card style={adminDashboardStyles.userCard}>
      <Card.Content style={adminDashboardStyles.userCardContent}>
        <View style={adminDashboardStyles.userInfo}>
          <View style={[adminDashboardStyles.userDetails, { flex: 1 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Text style={adminDashboardStyles.userName}>
                Booking #{item.id.slice(-6).toUpperCase()}
              </Text>
              <Chip
                mode="outlined"
                icon={getStatusIcon(item.status)}
                textStyle={{ color: getStatusColor(item.status) }}
                style={{ borderColor: getStatusColor(item.status) }}
              >
                {item.status.toUpperCase()}
              </Chip>
            </View>

            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                <MaterialCommunityIcons name="map-marker" size={16} color={colors.primary} />
                <Text style={[adminDashboardStyles.userEmail, { marginLeft: 6, marginBottom: 0 }]}>
                  Pickup: {item.pickupLocationId}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                <MaterialCommunityIcons name="map-marker-check" size={16} color={colors.secondary} />
                <Text style={[adminDashboardStyles.userEmail, { marginLeft: 6, marginBottom: 0 }]}>
                  Dropoff: {item.dropoffLocationId}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="clock-outline" size={16} color={colors.warning} />
                <Text style={[adminDashboardStyles.userEmail, { marginLeft: 6, marginBottom: 0 }]}>
                  {formatDateTime(item.createdAt)}
                </Text>
              </View>
            </View>

            <View style={adminDashboardStyles.userMetaContainer}>
              <Chip
                mode="outlined"
                icon={createIcon('briefcase', 16, colors.primary)}
                textStyle={{ color: colors.primary }}
                style={{ borderColor: colors.primary }}
              >
                {item.bookingType.toUpperCase()}
              </Chip>
              <Chip
                mode="outlined"
                icon={createIcon('currency-usd', 16, colors.success)}
                textStyle={{ color: colors.success }}
                style={{ borderColor: colors.success }}
              >
                R{item.totalCost.toFixed(2)}
              </Chip>
              <Chip
                mode="outlined"
                icon={createIcon(
                  item.paymentStatus === 'paid' ? 'check-circle' : item.paymentStatus === 'pending' ? 'clock' : 'alert-circle',
                  16,
                  item.paymentStatus === 'paid' ? colors.success : item.paymentStatus === 'pending' ? colors.warning : colors.error
                )}
                textStyle={{
                  color: item.paymentStatus === 'paid' ? colors.success :
                         item.paymentStatus === 'pending' ? colors.warning : colors.error
                }}
                style={{
                  borderColor: item.paymentStatus === 'paid' ? colors.success :
                              item.paymentStatus === 'pending' ? colors.warning : colors.error
                }}
              >
                {item.paymentStatus.toUpperCase()}
              </Chip>
            </View>
          </View>

          <Menu
            visible={menuVisible === item.id}
            onDismiss={() => setMenuVisible(null)}
            anchor={
              <IconButton
                icon={createIcon('dots-vertical', 24, '#666')}
                onPress={() => setMenuVisible(item.id)}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setMenuVisible(null);
                // TODO: View booking details
              }}
              title="View Details"
              leadingIcon={createIcon('eye', 20, '#666')}
            />
            <Menu.Item
              onPress={() => {
                setMenuVisible(null);
                // TODO: Edit booking
              }}
              title="Edit Booking"
              leadingIcon={createIcon('pencil', 20, '#666')}
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                setMenuVisible(null);
                // TODO: Cancel booking
              }}
              title="Cancel Booking"
              leadingIcon={createIcon('cancel', 20, colors.error)}
              titleStyle={{ color: colors.error }}
            />
          </Menu>
        </View>
      </Card.Content>
    </Card>
  );

  const styles = adminDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Bookings Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1592119/pexels-photo-1592119.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero Booking Management Header */}
        <View style={styles.heroProfileCard}>
          <LinearGradient
            colors={adminGradientConfigs.hero.colors}
            start={adminGradientConfigs.hero.start}
            end={adminGradientConfigs.hero.end}
            style={styles.heroGradientOverlay}
          >
            {/* African Pattern Overlay */}
            <View style={[styles.africanPatternOverlay, styles.mountainAfricanPattern]}>
              <View style={styles.africanPatternDot1} />
              <View style={styles.africanPatternDot2} />
              <View style={styles.africanPatternDot3} />
              <View style={styles.africanTriangle1} />
              <View style={styles.africanTriangle2} />
              <View style={styles.africanZigzag} />
            </View>

            <View style={styles.heroContent}>
              {/* Booking Management Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.adminStatusIcon, { backgroundColor: colors.info }]}>
                  <MaterialCommunityIcons
                    name="calendar-multiple-check"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* Booking Management Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>Booking Management</Text>
                <Text style={styles.heroRole}>Transport Reservations & Scheduling</Text>

                {/* Booking Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{bookings.length}</Text>
                    <Text style={styles.heroStatLabel}>TOTAL</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{bookings.filter(b => b.status === 'confirmed').length}</Text>
                    <Text style={styles.heroStatLabel}>CONFIRMED</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{bookings.filter(b => b.paymentStatus === 'paid').length}</Text>
                    <Text style={styles.heroStatLabel}>PAID</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Booking List */}
        <View style={styles.listContainer}>
          {bookings.map((booking) => (
            <View key={booking.id}>
              {renderBookingItem({ item: booking })}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AdminBookingsScreen;
