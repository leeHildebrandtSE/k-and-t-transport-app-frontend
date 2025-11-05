import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {
  Card,
  Text,
  Button,
  Chip,
  IconButton,
  Searchbar,
  FAB,
  Badge,
  List,
  Divider,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import { LiftClub, LiftClubRequest } from '../types/LiftClub';
import DashboardHeader from '../components/ui/DashboardHeader';
import { liftClubBrowseStyles } from '../styles/screens/liftClubBrowseScreen';

interface LiftClubBrowseScreenProps {
  route: {
    params: {
      user: User;
      userType: 'parent' | 'staff';
    };
  };
}

const LiftClubBrowseScreen: React.FC<LiftClubBrowseScreenProps> = ({ route }) => {
  const { user, userType } = route.params;
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [liftClubs, setLiftClubs] = useState<LiftClub[]>([]);
  const [myRequests, setMyRequests] = useState<LiftClubRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'full'>('all');
  const [showRequests, setShowRequests] = useState(false);

  const clubType = userType === 'parent' ? 'school' : 'staff';
  const displayTitle = userType === 'parent' ? 'School Lift Clubs' : 'Staff Lift Clubs';

  // Mock data
  useEffect(() => {
    setLiftClubs([
      {
        id: '1',
        name: 'Central Primary Morning Club',
        type: 'school',
        description: 'Morning transport to Central Primary School from Residential Area A',
        pickupLocation: 'Residential Area A - Community Center',
        dropoffLocation: 'Central Primary School',
        departureTime: '07:00',
        arrivalTime: '07:30',
        daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
        maxCapacity: 12,
        currentMembers: 8,
        monthlyFee: 650,
        driverId: 'driver1',
        driverName: 'John Doe',
        status: 'active',
        createdAt: '2025-10-01T08:00:00Z',
        updatedAt: '2025-11-01T08:00:00Z',
        route: {
          distance: 8.5,
          estimatedDuration: 30,
          waypoints: ['Stop 1: Oak Street', 'Stop 2: Main Road', 'Central Primary School']
        }
      },
      {
        id: '2',
        name: 'Business District Staff Transport',
        type: 'staff',
        description: 'Daily transport for office workers to the Business District',
        pickupLocation: 'Suburban Train Station',
        dropoffLocation: 'Business District - Corporate Plaza',
        departureTime: '07:45',
        arrivalTime: '08:30',
        daysOfWeek: [1, 2, 3, 4, 5],
        maxCapacity: 15,
        currentMembers: 15,
        monthlyFee: 750,
        driverId: 'driver2',
        driverName: 'Sarah Wilson',
        status: 'full',
        createdAt: '2025-09-15T08:00:00Z',
        updatedAt: '2025-10-30T08:00:00Z',
      },
      {
        id: '3',
        name: 'Eastside Primary Afternoon Club',
        type: 'school',
        description: 'Afternoon pickup from Eastside Primary School',
        pickupLocation: 'Eastside Primary School',
        dropoffLocation: 'Eastside Residential Complex',
        departureTime: '14:30',
        arrivalTime: '15:15',
        daysOfWeek: [1, 2, 3, 4, 5],
        maxCapacity: 10,
        currentMembers: 6,
        monthlyFee: 580,
        driverId: 'driver3',
        driverName: 'Mike Johnson',
        status: 'active',
        createdAt: '2025-09-20T08:00:00Z',
        updatedAt: '2025-10-25T08:00:00Z',
      }
    ]);

    setMyRequests([
      {
        id: 'req1',
        requesterId: user.id,
        requesterName: `${user.firstName} ${user.lastName}`,
        requesterType: userType,
        type: clubType,
        proposedName: 'Westside Primary Morning Club',
        pickupLocation: 'Westside Shopping Center',
        dropoffLocation: 'Westside Primary School',
        preferredDepartureTime: '07:15',
        daysOfWeek: [1, 2, 3, 4, 5],
        estimatedMembers: 8,
        maxBudget: 600,
        description: 'Need morning transport for children attending Westside Primary School',
        status: 'pending',
        createdAt: '2025-11-01T10:00:00Z',
        updatedAt: '2025-11-01T10:00:00Z',
      }
    ]);
  }, [user.id, userType, clubType]);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#4caf50';
      case 'full':
        return '#ff9800';
      case 'inactive':
        return '#9e9e9e';
      default:
        return '#2196f3';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Available';
      case 'full':
        return 'Full';
      case 'inactive':
        return 'Inactive';
      default:
        return status;
    }
  };

  const getDaysText = (daysOfWeek: number[]) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map(day => days[day]).join(', ');
  };

  const handleJoinClub = (liftClub: LiftClub) => {
    Alert.alert(
      'Join Lift Club',
      `Would you like to join "${liftClub.name}"?\n\nMonthly Fee: R${liftClub.monthlyFee}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Join',
          onPress: () => {
            Alert.alert('Success', 'Your request to join has been submitted. You will be notified once approved.');
          }
        }
      ]
    );
  };

  const handleViewDetails = (liftClub: LiftClub) => {
    // navigation.navigate('LiftClubDetails', { liftClub, user });
    Alert.alert('View Details', `Viewing details for ${liftClub.name}`);
  };

  const handleCreateRequest = () => {
    // navigation.navigate('CreateLiftClubRequest', { user, userType });
    Alert.alert('Create Request', 'Navigate to Create Lift Club Request screen');
  };

  const filteredClubs = liftClubs
    .filter(club => club.type === clubType)
    .filter(club => {
      if (filterStatus === 'available') return club.status === 'active' && club.currentMembers < club.maxCapacity;
      if (filterStatus === 'full') return club.status === 'full';
      return true;
    })
    .filter(club =>
      searchQuery === '' ||
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.dropoffLocation.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const styles = liftClubBrowseStyles;

  return (
    <View style={styles.container}>
      <DashboardHeader
        user={user}
        title={displayTitle}
        subtitle={`${filteredClubs.length} clubs available`}
        showGradient={true}
        actions={[
          <Button
            key="requests"
            mode={showRequests ? 'contained' : 'outlined'}
            onPress={() => setShowRequests(!showRequests)}
            compact
            style={styles.toggleButton}
          >
            My Requests ({myRequests.length})
          </Button>
        ]}
      />

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!showRequests && (
          <>
            {/* Search and Filters */}
            <View style={styles.searchSection}>
              <Searchbar
                placeholder={`Search ${clubType === 'school' ? 'school' : 'staff'} lift clubs...`}
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchBar}
              />

              <View style={styles.filterChips}>
                <Chip
                  selected={filterStatus === 'all'}
                  onPress={() => setFilterStatus('all')}
                  style={styles.filterChip}
                >
                  All ({liftClubs.filter(c => c.type === clubType).length})
                </Chip>
                <Chip
                  selected={filterStatus === 'available'}
                  onPress={() => setFilterStatus('available')}
                  style={styles.filterChip}
                >
                  Available
                </Chip>
                <Chip
                  selected={filterStatus === 'full'}
                  onPress={() => setFilterStatus('full')}
                  style={styles.filterChip}
                >
                  Full
                </Chip>
              </View>
            </View>

            {/* Lift Clubs List */}
            {filteredClubs.length === 0 ? (
              <Card style={styles.emptyCard}>
                <Card.Content style={styles.emptyContent}>
                  <MaterialCommunityIcons
                    name={clubType === 'school' ? 'school' : 'office-building'}
                    size={64}
                    color="#ccc"
                    style={styles.emptyIcon}
                  />
                  <Text variant="titleLarge" style={styles.emptyTitle}>
                    No {clubType === 'school' ? 'School' : 'Staff'} Lift Clubs Found
                  </Text>
                  <Text style={styles.emptyText}>
                    {searchQuery
                      ? 'Try adjusting your search or filters'
                      : `No ${clubType} lift clubs are currently available in your area.`
                    }
                  </Text>
                  <Button
                    mode="contained"
                    onPress={handleCreateRequest}
                    style={styles.createButton}
                  >
                    Request New Lift Club
                  </Button>
                </Card.Content>
              </Card>
            ) : (
              filteredClubs.map((liftClub) => (
                <Card key={liftClub.id} style={styles.clubCard}>
                  <Card.Content>
                    {/* Club Header */}
                    <View style={styles.clubHeader}>
                      <View style={styles.clubInfo}>
                        <Text variant="titleLarge" style={styles.clubTitle}>{liftClub.name}</Text>
                        <View style={styles.clubMeta}>
                          <Chip
                            icon="account-group"
                            style={[styles.statusChip, { backgroundColor: getStatusColor(liftClub.status) + '20' }]}
                            textStyle={{ color: getStatusColor(liftClub.status) }}
                          >
                            {liftClub.currentMembers}/{liftClub.maxCapacity} • {getStatusText(liftClub.status)}
                          </Chip>
                        </View>
                      </View>
                      <Text style={styles.monthlyFee}>R{liftClub.monthlyFee}/month</Text>
                    </View>

                    {/* Club Details */}
                    <Text style={styles.clubDescription}>{liftClub.description}</Text>

                    <View style={styles.routeInfo}>
                      <View style={styles.routeItem}>
                        <MaterialCommunityIcons name="map-marker" size={16} color="#4caf50" />
                        <Text style={styles.routeText}>From: {liftClub.pickupLocation}</Text>
                      </View>
                      <View style={styles.routeItem}>
                        <MaterialCommunityIcons name="flag-checkered" size={16} color="#f44336" />
                        <Text style={styles.routeText}>To: {liftClub.dropoffLocation}</Text>
                      </View>
                    </View>

                    <View style={styles.scheduleInfo}>
                      <View style={styles.scheduleItem}>
                        <MaterialCommunityIcons name="clock" size={16} color="#ff9800" />
                        <Text style={styles.scheduleText}>{liftClub.departureTime} - {liftClub.arrivalTime}</Text>
                      </View>
                      <View style={styles.scheduleItem}>
                        <MaterialCommunityIcons name="calendar" size={16} color="#2196f3" />
                        <Text style={styles.scheduleText}>{getDaysText(liftClub.daysOfWeek)}</Text>
                      </View>
                    </View>

                    {liftClub.driverName && (
                      <View style={styles.driverInfo}>
                        <MaterialCommunityIcons name="account" size={16} color="#9c27b0" />
                        <Text style={styles.driverText}>Driver: {liftClub.driverName}</Text>
                      </View>
                    )}
                  </Card.Content>

                  <Card.Actions style={styles.cardActions}>
                    <Button
                      mode="outlined"
                      onPress={() => handleViewDetails(liftClub)}
                      style={styles.detailsButton}
                    >
                      View Details
                    </Button>
                    <Button
                      mode="contained"
                      onPress={() => handleJoinClub(liftClub)}
                      disabled={liftClub.status === 'full' || liftClub.status === 'inactive'}
                      style={styles.joinButton}
                    >
                      {liftClub.status === 'full' ? 'Full' : 'Join Club'}
                    </Button>
                  </Card.Actions>
                </Card>
              ))
            )}
          </>
        )}

        {showRequests && (
          <View style={styles.requestsSection}>
            <Text variant="titleLarge" style={styles.sectionTitle}>My Lift Club Requests</Text>

            {myRequests.length === 0 ? (
              <Card style={styles.emptyCard}>
                <Card.Content style={styles.emptyContent}>
                  <MaterialCommunityIcons
                    name="clipboard-text"
                    size={64}
                    color="#ccc"
                    style={styles.emptyIcon}
                  />
                  <Text variant="titleLarge" style={styles.emptyTitle}>No Requests Yet</Text>
                  <Text style={styles.emptyText}>
                    You haven't submitted any lift club requests yet.
                  </Text>
                </Card.Content>
              </Card>
            ) : (
              myRequests.map((request) => (
                <Card key={request.id} style={styles.requestCard}>
                  <Card.Content>
                    <View style={styles.requestHeader}>
                      <Text variant="titleLarge" style={styles.requestTitle}>{request.proposedName}</Text>
                      <Chip
                        style={[styles.statusChip, { backgroundColor: request.status === 'pending' ? '#ff9800' : '#4caf50' }]}
                        textStyle={{ color: 'white' }}
                      >
                        {request.status.toUpperCase()}
                      </Chip>
                    </View>

                    <Text style={styles.requestDescription}>{request.description}</Text>

                    <List.Item
                      title="Route"
                      description={`${request.pickupLocation} → ${request.dropoffLocation}`}
                      left={() => <MaterialCommunityIcons name="map-marker-path" size={24} />}
                      titleStyle={styles.listTitle}
                    />

                    <List.Item
                      title="Schedule"
                      description={`${request.preferredDepartureTime} • ${getDaysText(request.daysOfWeek)}`}
                      left={() => <MaterialCommunityIcons name="clock" size={24} />}
                      titleStyle={styles.listTitle}
                    />

                    <List.Item
                      title="Estimated Members"
                      description={`${request.estimatedMembers} people • Max budget: R${request.maxBudget}/month`}
                      left={() => <MaterialCommunityIcons name="account-group" size={24} />}
                      titleStyle={styles.listTitle}
                    />

                    <Text style={styles.requestDate}>
                      Submitted on {new Date(request.createdAt).toLocaleDateString()}
                    </Text>
                  </Card.Content>
                </Card>
              ))
            )}
          </View>
        )}

        <View style={styles.spacer} />
      </ScrollView>

      {/* Create Request FAB */}
      <FAB
        icon="plus"
        label="Request Lift Club"
        onPress={handleCreateRequest}
        style={styles.fab}
      />
    </View>
  );
};

export default LiftClubBrowseScreen;
