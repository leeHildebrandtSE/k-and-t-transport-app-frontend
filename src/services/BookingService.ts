import { AuthService } from './AuthService';
import { Booking, BookingStatus, Trip } from '../types/Booking';
import { Route } from '../types/Transport';

const API_BASE_URL = 'http://localhost:8080/api'; // Change this to your backend URL

export class BookingService {
  /**
   * Create a new booking
   */
  static async createBooking(bookingData: any): Promise<Booking> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create booking');
      }

      return await response.json();
    } catch (error) {
      console.error('Create booking error:', error);
      throw error;
    }
  }

  /**
   * Get user's bookings
   */
  static async getUserBookings(status?: BookingStatus): Promise<Booking[]> {
    try {
      const token = await AuthService.getToken();
      const queryParams = status ? `?status=${status}` : '';
      
      const response = await fetch(`${API_BASE_URL}/bookings${queryParams}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      return await response.json();
    } catch (error) {
      console.error('Get bookings error:', error);
      throw error;
    }
  }

  /**
   * Get booking by ID
   */
  static async getBookingById(bookingId: string): Promise<Booking> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch booking');
      }

      return await response.json();
    } catch (error) {
      console.error('Get booking error:', error);
      throw error;
    }
  }

  /**
   * Update booking
   */
  static async updateBooking(bookingId: string, updateData: Partial<Booking>): Promise<Booking> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update booking');
      }

      return await response.json();
    } catch (error) {
      console.error('Update booking error:', error);
      throw error;
    }
  }

  /**
   * Cancel booking
   */
  static async cancelBooking(bookingId: string, reason?: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/cancel`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reason }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to cancel booking');
      }
    } catch (error) {
      console.error('Cancel booking error:', error);
      throw error;
    }
  }

  /**
   * Pause/Resume booking
   */
  static async pauseBooking(bookingId: string, pauseUntil: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/pause`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pauseUntil }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to pause booking');
      }
    } catch (error) {
      console.error('Pause booking error:', error);
      throw error;
    }
  }

  /**
   * Resume paused booking
   */
  static async resumeBooking(bookingId: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/resume`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to resume booking');
      }
    } catch (error) {
      console.error('Resume booking error:', error);
      throw error;
    }
  }

  /**
   * Get available routes
   */
  static async getAvailableRoutes(bookingType: 'school' | 'work'): Promise<Route[]> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/routes?type=${bookingType}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch routes');
      }

      return await response.json();
    } catch (error) {
      console.error('Get routes error:', error);
      throw error;
    }
  }

  /**
   * Get trips for a booking
   */
  static async getBookingTrips(bookingId: string): Promise<Trip[]> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/trips`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch trips');
      }

      return await response.json();
    } catch (error) {
      console.error('Get trips error:', error);
      throw error;
    }
  }

  /**
   * Get today's trips for user
   */
  static async getTodaysTrips(): Promise<Trip[]> {
    try {
      const token = await AuthService.getToken();
      const today = new Date().toISOString().split('T')[0];
      
      const response = await fetch(`${API_BASE_URL}/trips?date=${today}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch today\'s trips');
      }

      return await response.json();
    } catch (error) {
      console.error('Get today\'s trips error:', error);
      throw error;
    }
  }

  /**
   * Request trip modification
   */
  static async requestTripModification(
    tripId: string, 
    modifications: {
      pickupTime?: string;
      pickupLocation?: string;
      dropoffLocation?: string;
      notes?: string;
    }
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/trips/${tripId}/modify`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifications),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to request modification');
      }
    } catch (error) {
      console.error('Request modification error:', error);
      throw error;
    }
  }

  /**
   * Rate completed trip
   */
  static async rateTrip(
    tripId: string, 
    rating: number, 
    feedback?: string
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/trips/${tripId}/rate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedback }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to rate trip');
      }
    } catch (error) {
      console.error('Rate trip error:', error);
      throw error;
    }
  }

  /**
   * Get booking history with pagination
   */
  static async getBookingHistory(
    page: number = 1, 
    limit: number = 20
  ): Promise<{ bookings: Booking[], totalCount: number, hasMore: boolean }> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(
        `${API_BASE_URL}/bookings/history?page=${page}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch booking history');
      }

      return await response.json();
    } catch (error) {
      console.error('Get booking history error:', error);
      throw error;
    }
  }

  /**
   * Get payment receipts for a booking
   */
  static async getBookingReceipts(bookingId: string): Promise<any[]> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/receipts`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch receipts');
      }

      return await response.json();
    } catch (error) {
      console.error('Get receipts error:', error);
      throw error;
    }
  }
}