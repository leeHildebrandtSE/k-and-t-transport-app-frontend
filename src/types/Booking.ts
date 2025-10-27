export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type BookingType = 'school' | 'work';
export type TripDirection = 'pickup' | 'dropoff';

export interface Booking {
  id: string;
  userId: string;
  routeId: string;
  bookingType: BookingType;
  pickupLocationId: string;
  dropoffLocationId: string;
  recurringSchedule: RecurringSchedule;
  status: BookingStatus;
  totalCost: number;
  paymentStatus: 'pending' | 'paid' | 'overdue';
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface RecurringSchedule {
  id: string;
  bookingId: string;
  startDate: string;
  endDate: string;
  daysOfWeek: number[]; // 0 = Sunday, 6 = Saturday
  morningTrip: boolean;
  afternoonTrip: boolean;
  active: boolean;
}

export interface Trip {
  id: string;
  bookingId: string;
  routeId: string;
  driverId: string;
  date: string;
  direction: TripDirection;
  scheduledDepartureTime: string;
  actualDepartureTime?: string;
  scheduledArrivalTime: string;
  actualArrivalTime?: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  passengers: TripPassenger[];
}

export interface TripPassenger {
  id: string;
  tripId: string;
  userId: string;
  pickupLocationId: string;
  dropoffLocationId: string;
  status: 'waiting' | 'picked-up' | 'dropped-off' | 'no-show';
  boardingTime?: string;
  alightingTime?: string;
}