import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Title,
  Text,
  Button,
  Chip,
  Badge,
  List,
  Dialog,
  Portal,
  TextInput,
  HelperText,
  Menu,
  Divider,
  FAB,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import { LiftClub, LiftClubRequest, RequestStatus } from '../types/LiftClub';
import DashboardHeader from '../components/ui/DashboardHeader';
import { liftClubManagementStyles } from '../styles/screens/liftClubManagementScreen';

interface LiftClubManagementProps {
  route: {
    params: {
      user: User;
    };
  };
}

interface RequestWithDetails extends LiftClubRequest {
  estimatedCost: number;
  availableDrivers: number;
}

const LiftClubManagementScreen: React.FC<LiftClubManagementProps> = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState<'pending' | 'active' | 'all'>('pending');
  const [requests, setRequests] = useState<RequestWithDetails[]>([]);
  const [activeLiftClubs, setActiveLiftClubs] = useState<LiftClub[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<RequestWithDetails | null>(null);
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);
  const [showRejectionDialog, setShowRejectionDialog] = useState(false);
  const [approvalData, setApprovalData] = useState({
    assignedDriverId: '',
    monthlyCost: '',
    maxMembers: '',
    notes: '',
  });
  const [rejectionReason, setRejectionReason] = useState('');
  const [menuVisible, setMenuVisible] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      // Simulate API calls
      const mockRequests: RequestWithDetails[] = [
        {
          id: '1',
          type: 'school',
          status: 'pending',
          requesterId: 'user1',
          requesterName: 'Sarah Johnson',
          requesterType: 'parent',
          proposedName: 'Greenfield Primary Lift Club',
          pickupLocation: 'Sandton City, Sandton',
          dropoffLocation: 'Greenfield Primary School, Bryanston',
          preferredDepartureTime: '07:00',
          description: 'Looking for reliable transport for Grade 3 learner. Preferred departure from Sandton City area around 7:00 AM.',
          estimatedMembers: 5,
          maxBudget: 600,
          daysOfWeek: [1, 2, 3, 4, 5],
          createdAt: '2024-01-15T08:00:00Z',
          updatedAt: '2024-01-15T08:00:00Z',
          estimatedCost: 550,
          availableDrivers: 3,
        },
        {
          id: '2',
          type: 'staff',
          status: 'pending',
          requesterId: 'user2',
          requesterName: 'Michael Chen',
          requesterType: 'staff',
          proposedName: 'Sandton Office Staff Club',
          pickupLocation: 'Midrand Station',
          dropoffLocation: 'Sandton CBD Office Park',
          preferredDepartureTime: '07:30',
          description: 'Professional staff transport from Midrand to Sandton. Looking for punctual, comfortable transport.',
          estimatedMembers: 8,
          maxBudget: 450,
          daysOfWeek: [1, 2, 3, 4, 5],
          createdAt: '2024-01-16T08:00:00Z',
          updatedAt: '2024-01-16T08:00:00Z',
          estimatedCost: 420,
          availableDrivers: 2,
        },
        {
          id: '3',
          type: 'school',
          status: 'approved',
          requesterId: 'user3',
          requesterName: 'Lisa Williams',
          requesterType: 'parent',
          proposedName: 'Northcliff High Club',
          pickupLocation: 'Cresta Shopping Centre',
          dropoffLocation: 'Northcliff High School',
          preferredDepartureTime: '06:45',
          description: 'High school transport for teenagers. Need reliable morning transport from Cresta area.',
          estimatedMembers: 6,
          maxBudget: 700,
          daysOfWeek: [1, 2, 3, 4, 5],
          createdAt: '2024-01-10T08:00:00Z',
          updatedAt: '2024-01-10T08:00:00Z',
          estimatedCost: 650,
          availableDrivers: 4,
        },
      ];

      const mockActiveLiftClubs: LiftClub[] = [
        {
          id: 'club1',
          name: 'Northcliff High Club',
          type: 'school',
          status: 'active',
          pickupLocation: 'Cresta Shopping Centre',
          dropoffLocation: 'Northcliff High School',
          departureTime: '06:45',
          arrivalTime: '15:30',
          daysOfWeek: [1, 2, 3, 4, 5],
          monthlyFee: 650,
          maxCapacity: 8,
          currentMembers: 6,
          driverId: 'driver1',
          createdAt: '2024-01-10T08:00:00Z',
          updatedAt: '2024-01-10T08:00:00Z',
          description: 'Professional transport service for Northcliff High School students.',
        },
      ];

      setRequests(mockRequests);
      setActiveLiftClubs(mockActiveLiftClubs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
    setIsRefreshing(false);
  };

  const getFilteredRequests = () => {
    switch (activeTab) {
      case 'pending':
        return requests.filter(req => req.status === 'pending');
      case 'active':
        return requests.filter(req => req.status === 'approved');
      case 'all':
      default:
        return requests;
    }
  };

  const handleApprove = (request: RequestWithDetails) => {
    setSelectedRequest(request);
    setApprovalData({
      assignedDriverId: '',
      monthlyCost: request.estimatedCost.toString(),
      maxMembers: request.estimatedMembers.toString(),
      notes: '',
    });
    setShowApprovalDialog(true);
  };

  const handleReject = (request: RequestWithDetails) => {
    setSelectedRequest(request);
    setRejectionReason('');
    setShowRejectionDialog(true);
  };

  const submitApproval = async () => {
    if (!selectedRequest) return;

    try {
      // Simulate API call to approve and create lift club
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update request status
      setRequests(prev => prev.map(req =>
        req.id === selectedRequest.id
          ? { ...req, status: 'approved' as RequestStatus }
          : req
      ));

      // Create new lift club
      const newLiftClub: LiftClub = {
        id: `club_${Date.now()}`,
        name: selectedRequest.proposedName,
        type: selectedRequest.type,
        status: 'active',
        pickupLocation: selectedRequest.pickupLocation,
        dropoffLocation: selectedRequest.dropoffLocation,
        departureTime: selectedRequest.preferredDepartureTime,
        arrivalTime: selectedRequest.type === 'school' ? '15:30' : '17:00',
        daysOfWeek: selectedRequest.daysOfWeek,
        monthlyFee: Number(approvalData.monthlyCost),
        maxCapacity: Number(approvalData.maxMembers),
        currentMembers: 1, // Requester automatically joins
        driverId: approvalData.assignedDriverId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        description: selectedRequest.description,
      };

      setActiveLiftClubs(prev => [...prev, newLiftClub]);
      setShowApprovalDialog(false);
      setSelectedRequest(null);
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const submitRejection = async () => {
    if (!selectedRequest) return;

    try {
      // Simulate API call to reject request
      await new Promise(resolve => setTimeout(resolve, 1000));

      setRequests(prev => prev.map(req =>
        req.id === selectedRequest.id
          ? { ...req, status: 'rejected' as RequestStatus }
          : req
      ));

      setShowRejectionDialog(false);
      setSelectedRequest(null);
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'pending':
        return '#FFA500';
      case 'approved':
        return '#4CAF50';
      case 'rejected':
        return '#F44336';
      case 'completed':
        return '#2196F3';
      default:
        return '#757575';
    }
  };

  const toggleMenu = (requestId: string) => {
    setMenuVisible(prev => ({
      ...prev,
      [requestId]: !prev[requestId],
    }));
  };

  const filteredRequests = getFilteredRequests();

  return (
    <View style={liftClubManagementStyles.container}>
      <DashboardHeader
        user={user}
        title="Lift Club Management"
        subtitle="Review and manage lift club requests"
      />

      {/* Tab Navigation */}
      <View style={liftClubManagementStyles.tabContainer}>
        <Button
          mode={activeTab === 'pending' ? 'contained' : 'outlined'}
          onPress={() => setActiveTab('pending')}
          style={liftClubManagementStyles.tabButton}
          compact
        >
          Pending ({requests.filter(r => r.status === 'pending').length})
        </Button>
        <Button
          mode={activeTab === 'active' ? 'contained' : 'outlined'}
          onPress={() => setActiveTab('active')}
          style={liftClubManagementStyles.tabButton}
          compact
        >
          Active ({activeLiftClubs.length})
        </Button>
        <Button
          mode={activeTab === 'all' ? 'contained' : 'outlined'}
          onPress={() => setActiveTab('all')}
          style={liftClubManagementStyles.tabButton}
          compact
        >
          All Requests
        </Button>
      </View>

      <ScrollView
        style={liftClubManagementStyles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        {activeTab !== 'active' && (
          <>
            {filteredRequests.length === 0 ? (
              <Card style={liftClubManagementStyles.emptyCard}>
                <Card.Content style={liftClubManagementStyles.emptyContent}>
                  <MaterialCommunityIcons name="clipboard-list-outline" size={48} color="#ccc" />
                  <Text style={liftClubManagementStyles.emptyTitle}>No Requests Found</Text>
                  <Text style={liftClubManagementStyles.emptyText}>
                    {activeTab === 'pending'
                      ? 'No pending lift club requests to review.'
                      : 'No lift club requests match the current filter.'}
                  </Text>
                </Card.Content>
              </Card>
            ) : (
              filteredRequests.map((request) => (
                <Card key={request.id} style={liftClubManagementStyles.requestCard}>
                  <Card.Content>
                    <View style={liftClubManagementStyles.requestHeader}>
                      <View style={liftClubManagementStyles.requestHeaderLeft}>
                        <Title style={liftClubManagementStyles.requestTitle}>
                          {request.proposedName}
                        </Title>
                        <Text style={liftClubManagementStyles.requesterName}>
                          Requested by: {request.requesterName}
                        </Text>
                      </View>
                      <View style={liftClubManagementStyles.requestHeaderRight}>
                        <Chip
                          style={[
                            liftClubManagementStyles.statusChip,
                            { backgroundColor: getStatusColor(request.status) + '20' }
                          ]}
                          textStyle={{ color: getStatusColor(request.status) }}
                        >
                          {request.status.toUpperCase()}
                        </Chip>
                        <Chip
                          style={liftClubManagementStyles.typeChip}
                          icon={request.type === 'school' ? 'school' : 'office-building'}
                        >
                          {request.type === 'school' ? 'School' : 'Staff'}
                        </Chip>
                      </View>
                    </View>

                    <View style={liftClubManagementStyles.requestDetails}>
                      <View style={liftClubManagementStyles.routeInfo}>
                        <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
                        <Text style={liftClubManagementStyles.routeText}>
                          {request.pickupLocation} → {request.dropoffLocation}
                        </Text>
                      </View>

                      <View style={liftClubManagementStyles.detailsGrid}>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="clock-outline" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            {request.preferredDepartureTime}
                          </Text>
                        </View>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="account-group" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            {request.estimatedMembers} members
                          </Text>
                        </View>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="currency-usd" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            R{request.maxBudget}/month
                          </Text>
                        </View>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="car" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            {request.availableDrivers} drivers available
                          </Text>
                        </View>
                      </View>

                      <Text style={liftClubManagementStyles.description}>
                        {request.description}
                      </Text>

                      <View style={liftClubManagementStyles.daysContainer}>
                        {request.daysOfWeek.map((dayIndex) => (
                          <Chip
                            key={dayIndex}
                            style={liftClubManagementStyles.dayChip}
                            compact
                          >
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex]}
                          </Chip>
                        ))}
                      </View>
                    </View>

                    {request.status === 'pending' && (
                      <View style={liftClubManagementStyles.actionButtons}>
                        <Button
                          mode="contained"
                          onPress={() => handleApprove(request)}
                          style={liftClubManagementStyles.approveButton}
                          icon="check"
                        >
                          Approve
                        </Button>
                        <Button
                          mode="outlined"
                          onPress={() => handleReject(request)}
                          style={liftClubManagementStyles.rejectButton}
                          icon="close"
                        >
                          Reject
                        </Button>
                      </View>
                    )}
                  </Card.Content>
                </Card>
              ))
            )}
          </>
        )}

        {activeTab === 'active' && (
          <>
            {activeLiftClubs.length === 0 ? (
              <Card style={liftClubManagementStyles.emptyCard}>
                <Card.Content style={liftClubManagementStyles.emptyContent}>
                  <MaterialCommunityIcons name="car-multiple" size={48} color="#ccc" />
                  <Text style={liftClubManagementStyles.emptyTitle}>No Active Lift Clubs</Text>
                  <Text style={liftClubManagementStyles.emptyText}>
                    No active lift clubs found. Approve pending requests to create new clubs.
                  </Text>
                </Card.Content>
              </Card>
            ) : (
              activeLiftClubs.map((club) => (
                <Card key={club.id} style={liftClubManagementStyles.liftClubCard}>
                  <Card.Content>
                    <View style={liftClubManagementStyles.clubHeader}>
                      <Title style={liftClubManagementStyles.clubTitle}>{club.name}</Title>
                      <View style={liftClubManagementStyles.clubBadges}>
                        <Text style={liftClubManagementStyles.membersBadge}>
                          {club.currentMembers}/{club.maxCapacity}
                        </Text>
                        <Chip
                          style={liftClubManagementStyles.activeChip}
                          textStyle={{ color: '#4CAF50' }}
                        >
                          ACTIVE
                        </Chip>
                      </View>
                    </View>

                    <View style={liftClubManagementStyles.clubDetails}>
                      <View style={liftClubManagementStyles.routeInfo}>
                        <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
                        <Text style={liftClubManagementStyles.routeText}>
                          {club.pickupLocation} → {club.dropoffLocation}
                        </Text>
                      </View>

                      <View style={liftClubManagementStyles.detailsGrid}>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="clock-outline" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            {club.departureTime} - {club.arrivalTime}
                          </Text>
                        </View>
                        <View style={liftClubManagementStyles.detailItem}>
                          <MaterialCommunityIcons name="currency-usd" size={16} color="#666" />
                          <Text style={liftClubManagementStyles.detailText}>
                            R{club.monthlyFee}/month
                          </Text>
                        </View>
                      </View>

                      <View style={liftClubManagementStyles.daysContainer}>
                        {club.daysOfWeek.map((dayIndex) => (
                          <Chip
                            key={dayIndex}
                            style={liftClubManagementStyles.dayChip}
                            compact
                          >
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex]}
                          </Chip>
                        ))}
                      </View>
                    </View>

                    <View style={liftClubManagementStyles.clubActions}>
                      <Button
                        mode="outlined"
                        onPress={() => {/* Navigate to club details */}}
                        icon="eye"
                        compact
                      >
                        View Details
                      </Button>
                      <Button
                        mode="outlined"
                        onPress={() => {/* Navigate to member management */}}
                        icon="account-group"
                        compact
                      >
                        Manage Members
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
              ))
            )}
          </>
        )}
      </ScrollView>

      {/* Approval Dialog */}
      <Portal>
        <Dialog visible={showApprovalDialog} onDismiss={() => setShowApprovalDialog(false)}>
          <Dialog.Title>Approve Lift Club Request</Dialog.Title>
          <Dialog.Content>
            <Text style={liftClubManagementStyles.dialogText}>
              Approving: {selectedRequest?.proposedName}
            </Text>

            <TextInput
              label="Assigned Driver ID"
              value={approvalData.assignedDriverId}
              onChangeText={(text) => setApprovalData(prev => ({ ...prev, assignedDriverId: text }))}
              mode="outlined"
              style={liftClubManagementStyles.dialogInput}
            />

            <View style={liftClubManagementStyles.dialogRow}>
              <TextInput
                label="Monthly Cost (R)"
                value={approvalData.monthlyCost}
                onChangeText={(text) => setApprovalData(prev => ({ ...prev, monthlyCost: text }))}
                mode="outlined"
                keyboardType="numeric"
                style={[liftClubManagementStyles.dialogInput, { flex: 1 }]}
              />
              <TextInput
                label="Max Members"
                value={approvalData.maxMembers}
                onChangeText={(text) => setApprovalData(prev => ({ ...prev, maxMembers: text }))}
                mode="outlined"
                keyboardType="numeric"
                style={[liftClubManagementStyles.dialogInput, { flex: 1, marginLeft: 8 }]}
              />
            </View>

            <TextInput
              label="Admin Notes (Optional)"
              value={approvalData.notes}
              onChangeText={(text) => setApprovalData(prev => ({ ...prev, notes: text }))}
              mode="outlined"
              multiline
              numberOfLines={3}
              style={liftClubManagementStyles.dialogInput}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowApprovalDialog(false)}>Cancel</Button>
            <Button mode="contained" onPress={submitApproval}>Approve</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Rejection Dialog */}
      <Portal>
        <Dialog visible={showRejectionDialog} onDismiss={() => setShowRejectionDialog(false)}>
          <Dialog.Title>Reject Lift Club Request</Dialog.Title>
          <Dialog.Content>
            <Text style={liftClubManagementStyles.dialogText}>
              Rejecting: {selectedRequest?.proposedName}
            </Text>

            <TextInput
              label="Rejection Reason"
              value={rejectionReason}
              onChangeText={setRejectionReason}
              mode="outlined"
              multiline
              numberOfLines={4}
              style={liftClubManagementStyles.dialogInput}
              placeholder="Please provide a clear reason for rejection..."
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowRejectionDialog(false)}>Cancel</Button>
            <Button mode="contained" onPress={submitRejection} buttonColor="#F44336">
              Reject
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default LiftClubManagementScreen;
