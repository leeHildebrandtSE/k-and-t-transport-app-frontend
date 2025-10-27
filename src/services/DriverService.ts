import { AuthService } from './AuthService';
import { Trip, TripPassenger } from '../types/Booking';
import { Route, Driver, Vehicle } from '../types/Transport';
import { Location } from '../types/Transport';

const API_BASE_URL = 'http://localhost:8080/api'; // Change this to your backend URL

export class DriverService {
  /**
   * Get driver's assigned routes
   */
  static async getDriverRoutes(): Promise<Route[]> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/routes`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch driver routes');
      }

      return await response.json();
    } catch (error) {
      console.error('Get driver routes error:', error);
      throw error;
    }
  }

  /**
   * Get driver's scheduled trips
   */
  static async getDriverTrips(date?: string): Promise<Trip[]> {
    try {
      const token = await AuthService.getToken();
      const queryDate = date || new Date().toISOString().split('T')[0];
      
      const response = await fetch(`${API_BASE_URL}/driver/trips?date=${queryDate}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch driver trips');
      }

      return await response.json();
    } catch (error) {
      console.error('Get driver trips error:', error);
      throw error;
    }
  }

  /**
   * Start a trip
   */
  static async startTrip(tripId: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/trips/${tripId}/start`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startTime: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to start trip');
      }
    } catch (error) {
      console.error('Start trip error:', error);
      throw error;
    }
  }

  /**
   * Complete a trip
   */
  static async completeTrip(tripId: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/trips/${tripId}/complete`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          endTime: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to complete trip');
      }
    } catch (error) {
      console.error('Complete trip error:', error);
      throw error;
    }
  }

  /**
   * Update passenger status (picked up / dropped off)
   */
  static async updatePassengerStatus(
    tripId: string,
    passengerId: string,
    status: 'picked-up' | 'dropped-off' | 'no-show'
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(
        `${API_BASE_URL}/driver/trips/${tripId}/passengers/${passengerId}/status`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update passenger status');
      }
    } catch (error) {
      console.error('Update passenger status error:', error);
      throw error;
    }
  }

  /**
   * Update driver location for real-time tracking
   */
  static async updateDriverLocation(location: Location): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/location`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...location,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update location');
      }
    } catch (error) {
      console.error('Update location error:', error);
      throw error;
    }
  }

  /**
   * Set driver duty status
   */
  static async setDutyStatus(onDuty: boolean): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/duty-status`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          onDuty,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update duty status');
      }
    } catch (error) {
      console.error('Set duty status error:', error);
      throw error;
    }
  }

  /**
   * Get trip passengers
   */
  static async getTripPassengers(tripId: string): Promise<TripPassenger[]> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/trips/${tripId}/passengers`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch trip passengers');
      }

      return await response.json();
    } catch (error) {
      console.error('Get trip passengers error:', error);
      throw error;
    }
  }

  /**
   * Report vehicle issue
   */
  static async reportVehicleIssue(
    vehicleId: string,
    issueType: string,
    description: string,
    severity: 'low' | 'medium' | 'high' | 'critical'
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/vehicle-issue`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicleId,
          issueType,
          description,
          severity,
          reportedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to report vehicle issue');
      }
    } catch (error) {
      console.error('Report vehicle issue error:', error);
      throw error;
    }
  }

  /**
   * Log fuel consumption
   */
  static async logFuelConsumption(
    vehicleId: string,
    liters: number,
    cost: number,
    odometerReading: number
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/fuel-log`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicleId,
          liters,
          cost,
          odometerReading,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to log fuel consumption');
      }
    } catch (error) {
      console.error('Log fuel consumption error:', error);
      throw error;
    }
  }

  /**
   * Get driver performance metrics
   */
  static async getDriverMetrics(period: 'week' | 'month' | 'year' = 'month'): Promise<any> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/metrics?period=${period}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch driver metrics');
      }

      return await response.json();
    } catch (error) {
      console.error('Get driver metrics error:', error);
      throw error;
    }
  }

  /**
   * Send emergency alert
   */
  static async sendEmergencyAlert(
    location: Location,
    message?: string
  ): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/emergency`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location,
          message: message || 'Emergency alert from driver',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send emergency alert');
      }
    } catch (error) {
      console.error('Send emergency alert error:', error);
      throw error;
    }
  }

  /**
   * Get assigned vehicle information
   */
  static async getAssignedVehicle(): Promise<Vehicle | null> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/vehicle`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // No vehicle assigned
        }
        throw new Error('Failed to fetch assigned vehicle');
      }

      return await response.json();
    } catch (error) {
      console.error('Get assigned vehicle error:', error);
      throw error;
    }
  }

  /**
   * Update trip ETA
   */
  static async updateTripETA(tripId: string, eta: string): Promise<void> {
    try {
      const token = await AuthService.getToken();
      const response = await fetch(`${API_BASE_URL}/driver/trips/${tripId}/eta`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          estimatedArrival: eta,
          updatedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update ETA');
      }
    } catch (error) {
      console.error('Update ETA error:', error);
      throw error;
    }
  }
}