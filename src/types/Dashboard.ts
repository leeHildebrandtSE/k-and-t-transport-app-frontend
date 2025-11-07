import { User } from './User';
import { Trip } from './Booking';

export interface DashboardStats {
  tripsCompleted: number;
  passengersServed: number;
  hoursOnDuty: number;
  earnings: number;
}

export interface PassengerStats {
  totalPassengers: number;
  confirmedToday: number;
  pendingConfirmation: number;
  noShow: number;
}

export interface DriverDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

export interface DriverScreenProps {
  user: User;
}

export interface DriverProfileScreenProps {
  user: User;
  onLogout: () => void;
}

// Commuter Dashboard Types
export interface CommuterDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

export interface CommuterScreenProps {
  user: User;
}

export interface CommuterProfileScreenProps {
  user: User;
  onLogout: () => void;
}

export interface CommuterStats {
  monthlyTrips: number;
  onTimePercentage: number;
  activeRoutes: number;
  moneySaved: number;
}

export interface QuickAction {
  label: string;
  icon: string;
  action: () => void;
}

// Admin Dashboard Types
export interface AdminDashboardProps {
  route: {
    params: {
      user: User;
      onLogout: () => void;
    };
  };
}

export interface AdminScreenProps {
  user: User;
}

export interface AdminProfileScreenProps {
  user: User;
  onLogout?: () => void;
}

export interface AdminStats {
  totalUsers: number;
  activeBookings: number;
  totalDrivers: number;
  revenue: number;
}

export interface ActivityItem {
  icon: string;
  text: string;
  time: string;
  color: string;
}

export interface SystemStatus {
  label: string;
  status: 'online' | 'offline' | 'active' | 'inactive';
  color: string;
}
