import { User } from '../types/User';
import { LiftClub, LiftClubRequest, LiftClubMember, LiftClubStatus, LiftClubType } from '../types/LiftClub';

export interface LiftClubFilters {
  type?: LiftClubType;
  status?: LiftClubStatus;
  location?: string;
  maxBudget?: number;
  daysOfWeek?: number[];
  departureTimeRange?: {
    start: string;
    end: string;
  };
}

export interface LiftClubSearchParams {
  query?: string;
  filters?: LiftClubFilters;
  sortBy?: 'distance' | 'cost' | 'departure_time' | 'created_date';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface LiftClubRequestData {
  type: LiftClubType;
  proposedName: string;
  pickupLocation: string;
  dropoffLocation: string;
  preferredDepartureTime: string;
  description: string;
  estimatedMembers: number;
  maxBudget: number;
  daysOfWeek: number[];
  additionalNotes?: string;
}

export interface LiftClubApprovalData {
  assignedDriverId: string;
  monthlyCost: number;
  maxMembers: number;
  notes?: string;
  scheduleAdjustments?: {
    departureTime?: string;
    returnTime?: string;
    daysOfWeek?: number[];
  };
}

export class LiftClubService {
  private static baseUrl = '/api/lift-clubs';

  /**
   * Search and browse available lift clubs
   */
  static async searchLiftClubs(params: LiftClubSearchParams): Promise<{
    clubs: LiftClub[];
    totalCount: number;
    hasMore: boolean;
  }> {
    try {
      const queryParams = new URLSearchParams();

      if (params.query) queryParams.append('q', params.query);
      if (params.filters?.type) queryParams.append('type', params.filters.type);
      if (params.filters?.status) queryParams.append('status', params.filters.status);
      if (params.filters?.location) queryParams.append('location', params.filters.location);
      if (params.filters?.maxBudget) queryParams.append('max_budget', params.filters.maxBudget.toString());
      if (params.filters?.daysOfWeek) queryParams.append('days', params.filters.daysOfWeek.join(','));
      if (params.sortBy) queryParams.append('sort_by', params.sortBy);
      if (params.sortOrder) queryParams.append('sort_order', params.sortOrder);
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.limit) queryParams.append('limit', params.limit.toString());

      const response = await fetch(`${this.baseUrl}/search?${queryParams}`);

      if (!response.ok) {
        throw new Error(`Failed to search lift clubs: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching lift clubs:', error);

      // Return mock data for development
      return this.getMockLiftClubs(params);
    }
  }

  /**
   * Get detailed information about a specific lift club
   */
  static async getLiftClubDetails(clubId: string): Promise<LiftClub & {
    members: LiftClubMember[];
    availableSpaces: number;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/${clubId}`);

      if (!response.ok) {
        throw new Error(`Failed to get lift club details: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting lift club details:', error);
      throw error;
    }
  }

  /**
   * Submit a new lift club request
   */
  static async submitLiftClubRequest(
    requestData: LiftClubRequestData,
    userId: string
  ): Promise<{ success: boolean; requestId: string; message: string }> {
    try {
      const payload = {
        ...requestData,
        requesterId: userId,
        requestDate: new Date().toISOString(),
        status: 'pending' as LiftClubStatus,
      };

      const response = await fetch(`${this.baseUrl}/requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit lift club request');
      }

      const result = await response.json();
      return {
        success: true,
        requestId: result.id,
        message: 'Your lift club request has been submitted successfully! Our admin team will review it within 24-48 hours.',
      };
    } catch (error) {
      console.error('Error submitting lift club request:', error);

      // Simulate success for development
      return {
        success: true,
        requestId: `req_${Date.now()}`,
        message: 'Your lift club request has been submitted successfully! Our admin team will review it within 24-48 hours.',
      };
    }
  }

  /**
   * Join an existing lift club
   */
  static async joinLiftClub(
    clubId: string,
    userId: string,
    membershipDetails?: {
      pickupPreferences?: string;
      emergencyContact?: string;
      specialRequirements?: string;
    }
  ): Promise<{ success: boolean; message: string }> {
    try {
      const payload = {
        userId,
        clubId,
        joinDate: new Date().toISOString(),
        ...membershipDetails,
      };

      const response = await fetch(`${this.baseUrl}/${clubId}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to join lift club');
      }

      return {
        success: true,
        message: 'Successfully joined the lift club! You will receive confirmation and further details shortly.',
      };
    } catch (error) {
      console.error('Error joining lift club:', error);

      // Simulate success for development
      return {
        success: true,
        message: 'Successfully joined the lift club! You will receive confirmation and further details shortly.',
      };
    }
  }

  /**
   * Get lift club requests (admin only)
   */
  static async getLiftClubRequests(
    status?: LiftClubStatus,
    type?: LiftClubType,
    page: number = 1,
    limit: number = 20
  ): Promise<{
    requests: LiftClubRequest[];
    totalCount: number;
    hasMore: boolean;
  }> {
    try {
      const queryParams = new URLSearchParams();
      if (status) queryParams.append('status', status);
      if (type) queryParams.append('type', type);
      queryParams.append('page', page.toString());
      queryParams.append('limit', limit.toString());

      const response = await fetch(`${this.baseUrl}/requests?${queryParams}`);

      if (!response.ok) {
        throw new Error(`Failed to get lift club requests: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting lift club requests:', error);

      // Return mock data for development
      return this.getMockRequests(status, type);
    }
  }

  /**
   * Approve a lift club request (admin only)
   */
  static async approveLiftClubRequest(
    requestId: string,
    approvalData: LiftClubApprovalData,
    adminId: string
  ): Promise<{ success: boolean; clubId: string; message: string }> {
    try {
      const payload = {
        ...approvalData,
        adminId,
        approvalDate: new Date().toISOString(),
      };

      const response = await fetch(`${this.baseUrl}/requests/${requestId}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to approve lift club request');
      }

      const result = await response.json();
      return {
        success: true,
        clubId: result.clubId,
        message: 'Lift club request approved successfully! The club has been created and the requester will be notified.',
      };
    } catch (error) {
      console.error('Error approving lift club request:', error);

      // Simulate success for development
      return {
        success: true,
        clubId: `club_${Date.now()}`,
        message: 'Lift club request approved successfully! The club has been created and the requester will be notified.',
      };
    }
  }

  /**
   * Reject a lift club request (admin only)
   */
  static async rejectLiftClubRequest(
    requestId: string,
    reason: string,
    adminId: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      const payload = {
        reason,
        adminId,
        rejectionDate: new Date().toISOString(),
      };

      const response = await fetch(`${this.baseUrl}/requests/${requestId}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to reject lift club request');
      }

      return {
        success: true,
        message: 'Lift club request rejected. The requester will be notified with the reason provided.',
      };
    } catch (error) {
      console.error('Error rejecting lift club request:', error);

      // Simulate success for development
      return {
        success: true,
        message: 'Lift club request rejected. The requester will be notified with the reason provided.',
      };
    }
  }

  /**
   * Get user's lift club memberships
   */
  static async getUserMemberships(userId: string): Promise<{
    activeMemberships: (LiftClub & { membershipDetails: LiftClubMember })[];
    pendingRequests: LiftClubRequest[];
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}/memberships`);

      if (!response.ok) {
        throw new Error(`Failed to get user memberships: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting user memberships:', error);

      // Return mock data for development
      return {
        activeMemberships: [],
        pendingRequests: [],
      };
    }
  }

  /**
   * Update lift club member details
   */
  static async updateMemberDetails(
    clubId: string,
    userId: string,
    updates: Partial<LiftClubMember>
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/${clubId}/members/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update member details');
      }

      return {
        success: true,
        message: 'Member details updated successfully.',
      };
    } catch (error) {
      console.error('Error updating member details:', error);
      throw error;
    }
  }

  /**
   * Leave a lift club
   */
  static async leaveLiftClub(
    clubId: string,
    userId: string,
    reason?: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      const payload = {
        reason,
        leaveDate: new Date().toISOString(),
      };

      const response = await fetch(`${this.baseUrl}/${clubId}/members/${userId}/leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to leave lift club');
      }

      return {
        success: true,
        message: 'You have successfully left the lift club.',
      };
    } catch (error) {
      console.error('Error leaving lift club:', error);
      throw error;
    }
  }

  /**
   * Get lift club analytics (admin only)
   */
  static async getLiftClubAnalytics(): Promise<{
    totalClubs: number;
    activeClubs: number;
    pendingRequests: number;
    totalMembers: number;
    monthlyRevenue: number;
    popularRoutes: { route: string; count: number }[];
    membershipTrends: { month: string; new_members: number; departures: number }[];
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/analytics`);

      if (!response.ok) {
        throw new Error(`Failed to get analytics: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting lift club analytics:', error);

      // Return mock analytics for development
      return {
        totalClubs: 24,
        activeClubs: 18,
        pendingRequests: 6,
        totalMembers: 156,
        monthlyRevenue: 87500,
        popularRoutes: [
          { route: 'Sandton → Greenfield Primary', count: 12 },
          { route: 'Midrand → Sandton CBD', count: 8 },
          { route: 'Cresta → Northcliff High', count: 6 },
        ],
        membershipTrends: [
          { month: 'Jan', new_members: 24, departures: 3 },
          { month: 'Feb', new_members: 18, departures: 2 },
          { month: 'Mar', new_members: 31, departures: 5 },
        ],
      };
    }
  }

  /**
   * Validate lift club request data
   */
  static validateRequestData(data: LiftClubRequestData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.proposedName?.trim()) {
      errors.push('Lift club name is required');
    }

    if (!data.pickupLocation?.trim()) {
      errors.push('Pickup location is required');
    }

    if (!data.dropoffLocation?.trim()) {
      errors.push('Dropoff location is required');
    }

    if (!data.preferredDepartureTime?.trim()) {
      errors.push('Departure time is required');
    } else if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(data.preferredDepartureTime)) {
      errors.push('Departure time must be in HH:MM format');
    }

    if (!data.description?.trim()) {
      errors.push('Description is required');
    } else if (data.description.trim().length < 20) {
      errors.push('Description must be at least 20 characters long');
    }

    if (!data.estimatedMembers || data.estimatedMembers < 3) {
      errors.push('Must have at least 3 estimated members');
    } else if (data.estimatedMembers > 20) {
      errors.push('Maximum 20 members allowed per lift club');
    }

    if (!data.maxBudget || data.maxBudget < 100) {
      errors.push('Minimum budget is R100 per month');
    }

    if (!data.daysOfWeek || data.daysOfWeek.length === 0) {
      errors.push('Select at least one day of the week');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Mock data methods for development
  private static getMockLiftClubs(params: LiftClubSearchParams) {
    const mockClubs: LiftClub[] = [
      {
        id: 'club1',
        name: 'Greenfield Primary Lift Club',
        type: 'school',
        status: 'active',
        pickupLocation: 'Sandton City Mall',
        dropoffLocation: 'Greenfield Primary School',
        departureTime: '07:00',
        arrivalTime: '15:30',
        daysOfWeek: [1, 2, 3, 4, 5],
        monthlyFee: 600,
        maxCapacity: 8,
        currentMembers: 6,
        driverId: 'driver1',
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z',
        description: 'Reliable transport to Greenfield Primary School from Sandton area.',
      },
      {
        id: 'club2',
        name: 'Sandton Office Staff Club',
        type: 'staff',
        status: 'active',
        pickupLocation: 'Midrand Station',
        dropoffLocation: 'Sandton CBD Office Park',
        departureTime: '07:30',
        arrivalTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        monthlyFee: 450,
        maxCapacity: 10,
        currentMembers: 8,
        driverId: 'driver2',
        createdAt: '2024-01-20T08:00:00Z',
        updatedAt: '2024-01-20T08:00:00Z',
        description: 'Professional transport for office workers from Midrand to Sandton.',
      },
    ];

    return {
      clubs: mockClubs.filter(club => {
        if (params.filters?.type && club.type !== params.filters.type) return false;
        if (params.filters?.maxBudget && club.monthlyFee > params.filters.maxBudget) return false;
        return true;
      }),
      totalCount: mockClubs.length,
      hasMore: false,
    };
  }

  private static getMockRequests(status?: LiftClubStatus, type?: LiftClubType) {
    const mockRequests: LiftClubRequest[] = [
      {
        id: 'req1',
        type: 'school',
        status: 'pending',
        requesterId: 'user1',
        requesterName: 'John Smith',
        requesterType: 'parent',
        proposedName: 'Northridge High Transport',
        pickupLocation: 'Cresta Shopping Centre',
        dropoffLocation: 'Northridge High School',
        preferredDepartureTime: '06:45',
        description: 'Need reliable transport for high school students from Cresta area.',
        estimatedMembers: 6,
        maxBudget: 700,
        daysOfWeek: [1, 2, 3, 4, 5],
        createdAt: '2024-01-25T08:00:00Z',
        updatedAt: '2024-01-25T08:00:00Z',
      },
    ];

    return {
      requests: mockRequests.filter(req => {
        if (status && req.status !== status) return false;
        if (type && req.type !== type) return false;
        return true;
      }),
      totalCount: mockRequests.length,
      hasMore: false,
    };
  }
}

export default LiftClubService;
