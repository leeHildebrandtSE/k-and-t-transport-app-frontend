export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  stops: RouteStop[];
  driverId: string;
  vehicleId: string;
  schedule: RouteSchedule[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RouteStop {
  id: string;
  routeId: string;
  location: Location;
  name: string;
  order: number;
  estimatedArrivalTime: string;
}

export interface RouteSchedule {
  id: string;
  routeId: string;
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  departureTime: string;
  arrivalTime: string;
  active: boolean;
}

export interface Vehicle {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  capacity: number;
  currentLocation?: Location;
  driverId?: string;
}

export interface Driver {
  id: string;
  userId: string;
  licenseNumber: string;
  licenseExpiry: string;
  vehicleId?: string;
  currentLocation?: Location;
  isActive: boolean;
  rating: number;
}