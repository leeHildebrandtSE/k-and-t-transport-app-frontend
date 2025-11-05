export type UserRole = 'commuter' | 'driver' | 'admin';

export type CommuterType = 'school_transport' | 'work_transport' | 'lift_club' | 'general_commuting';

export interface CommuterPreferences {
  commuterType: CommuterType;
  preferredRoutes?: string[];
  schoolName?: string;
  workLocation?: string;
  schedule?: {
    days: string[];
    pickupTime?: string;
    dropoffTime?: string;
  };
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  verified?: boolean;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  dateJoined?: Date;
  lastLogin?: Date;
  // Commuter-specific preferences (only populated for commuter role)
  commuterPreferences?: CommuterPreferences;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
  role: UserRole;
}
