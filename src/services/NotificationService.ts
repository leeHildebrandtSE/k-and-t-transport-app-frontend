import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export interface NotificationData {
  title: string;
  body: string;
  data?: any;
  sound?: boolean;
  badge?: number;
}

export class NotificationService {
  private static isInitialized = false;

  /**
   * Initialize notification service
   */
  static async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Configure notification handling
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });

      // Request permissions
      await this.requestPermissions();

      this.isInitialized = true;
    } catch (error) {
      console.error('Error initializing notifications:', error);
    }
  }

  /**
   * Request notification permissions
   */
  static async requestPermissions(): Promise<boolean> {
    try {
      if (Platform.OS === 'web') {
        // For web, we would use browser notifications
        if ('Notification' in window) {
          const permission = await Notification.requestPermission();
          return permission === 'granted';
        }
        return false;
      }

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      return finalStatus === 'granted';
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
      return false;
    }
  }

  /**
   * Schedule a local notification
   */
  static async scheduleNotification(
    notification: NotificationData,
    trigger?: Notifications.NotificationTriggerInput
  ): Promise<string | null> {
    try {
      if (Platform.OS === 'web') {
        // For web, use browser notifications
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(notification.title, {
            body: notification.body,
            icon: '/assets/icon.png', // Update path as needed
            data: notification.data,
          });
          return 'web-notification';
        }
        return null;
      }

      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: notification.title,
          body: notification.body,
          data: notification.data || {},
          sound: notification.sound !== false,
          badge: notification.badge,
        },
        trigger: trigger || null,
      });

      return id;
    } catch (error) {
      console.error('Error scheduling notification:', error);
      return null;
    }
  }

  /**
   * Cancel a scheduled notification
   */
  static async cancelNotification(notificationId: string): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        // Web notifications can't be cancelled after being shown
        return;
      }

      await Notifications.cancelScheduledNotificationAsync(notificationId);
    } catch (error) {
      console.error('Error cancelling notification:', error);
    }
  }

  /**
   * Cancel all scheduled notifications
   */
  static async cancelAllNotifications(): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        return;
      }

      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch (error) {
      console.error('Error cancelling all notifications:', error);
    }
  }

  /**
   * Schedule trip reminder notification
   */
  static async scheduleTripReminder(
    tripId: string,
    tripDate: Date,
    pickupTime: Date,
    routeName: string
  ): Promise<string | null> {
    const reminderTime = new Date(pickupTime.getTime() - 30 * 60 * 1000); // 30 minutes before

    if (reminderTime <= new Date()) {
      // Don't schedule notifications for past times
      return null;
    }

    return await this.scheduleNotification(
      {
        title: 'Trip Reminder',
        body: `Your ${routeName} trip is starting in 30 minutes. Please be ready at your pickup location.`,
        data: { tripId, type: 'trip-reminder' },
      },
      {
        date: reminderTime,
      }
    );
  }

  /**
   * Schedule driver arrival notification
   */
  static async scheduleDriverArrival(
    tripId: string,
    driverName: string,
    estimatedArrival: Date
  ): Promise<string | null> {
    return await this.scheduleNotification(
      {
        title: 'Driver Arriving',
        body: `${driverName} is arriving at your pickup location in approximately 5 minutes.`,
        data: { tripId, type: 'driver-arrival' },
      },
      {
        date: new Date(estimatedArrival.getTime() - 5 * 60 * 1000), // 5 minutes before
      }
    );
  }

  /**
   * Send payment reminder notification
   */
  static async sendPaymentReminder(
    bookingId: string,
    amount: number,
    dueDate: Date
  ): Promise<string | null> {
    return await this.scheduleNotification({
      title: 'Payment Reminder',
      body: `Your transport payment of R${amount.toFixed(2)} is due on ${dueDate.toLocaleDateString()}. Please make payment to avoid service interruption.`,
      data: { bookingId, type: 'payment-reminder' },
    });
  }

  /**
   * Send booking confirmation notification
   */
  static async sendBookingConfirmation(
    bookingId: string,
    routeName: string,
    startDate: Date
  ): Promise<string | null> {
    return await this.scheduleNotification({
      title: 'Booking Confirmed',
      body: `Your booking for ${routeName} has been confirmed and will start on ${startDate.toLocaleDateString()}.`,
      data: { bookingId, type: 'booking-confirmed' },
    });
  }

  /**
   * Get push notification token (for backend registration)
   */
  static async getPushToken(): Promise<string | null> {
    try {
      if (Platform.OS === 'web') {
        return null; // Web doesn't use push tokens in the same way
      }

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      return token;
    } catch (error) {
      console.error('Error getting push token:', error);
      return null;
    }
  }

  /**
   * Add notification listener
   */
  static addNotificationListener(
    handler: (notification: Notifications.Notification) => void
  ): Notifications.Subscription {
    return Notifications.addNotificationReceivedListener(handler);
  }

  /**
   * Add notification response listener (when user taps notification)
   */
  static addNotificationResponseListener(
    handler: (response: Notifications.NotificationResponse) => void
  ): Notifications.Subscription {
    return Notifications.addNotificationResponseReceivedListener(handler);
  }
}