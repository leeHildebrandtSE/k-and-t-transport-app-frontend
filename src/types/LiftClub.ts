export type LiftClubType = 'school' | 'work';
export type LiftClubStatus = 'active' | 'inactive' | 'full' | 'pending';
export type RequestStatus = 'pending' | 'approved' | 'rejected' | 'completed';

export interface LiftClub {
  id: string;
  name: string;
  type: LiftClubType;
  description: string;
  pickupLocation: string;
  dropoffLocation: string;
  departureTime: string;
  arrivalTime: string;
  daysOfWeek: number[]; // 0 = Sunday, 6 = Saturday
  maxCapacity: number;
  currentMembers: number;
  monthlyFee: number;
  driverId?: string;
  driverName?: string;
  status: LiftClubStatus;
  createdAt: string;
  updatedAt: string;
  route?: {
    distance: number;
    estimatedDuration: number;
    waypoints: string[];
  };
}

export interface LiftClubMember {
  id: string;
  liftClubId: string;
  userId: string;
  userType: 'commuter';
  memberName: string;
  contactNumber: string;
  emergencyContact: string;
  specialRequirements?: string;
  joinedAt: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface LiftClubRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  requesterType: 'commuter';
  type: LiftClubType;
  proposedName: string;
  pickupLocation: string;
  dropoffLocation: string;
  preferredDepartureTime: string;
  daysOfWeek: number[];
  estimatedMembers: number;
  maxBudget: number;
  description: string;
  specialRequirements?: string;
  status: RequestStatus;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
  approvedBy?: string;
  assignedLiftClubId?: string;
}

export interface LiftClubDriver {
  id: string;
  driverId: string;
  driverName: string;
  licenseNumber: string;
  vehicleInfo: {
    make: string;
    model: string;
    year: number;
    plateNumber: string;
    capacity: number;
  };
  rating: number;
  totalTrips: number;
  assignedClubs: string[];
  availability: {
    [key: string]: boolean; // weekday availability
  };
}

export interface LiftClubBooking {
  id: string;
  liftClubId: string;
  memberId: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  pickupTime?: string;
  dropoffTime?: string;
  notes?: string;
}
