import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Text,
  Button,
  Chip,
  IconButton,
  Avatar,
  Badge,
  Divider,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import DashboardHeader from '../components/ui/DashboardHeader';
import { notificationsScreenStyles } from '../styles/screens/notificationsScreen';

interface Notification {
  id: string;
  type: 'booking' | 'payment' | 'trip' | 'system' | 'reminder';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionable?: boolean;
  actionText?: string;
  actionHandler?: () => void;
}

interface NotificationsScreenProps {
  route: {
    params: {
      user: User;
    };
  };
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'important'>('all');

  // Mock notifications data
  useEffect(() => {
    setNotifications([
      {
        id: '1',
        type: 'trip',
        title: 'Trip Starting Soon',
        message: 'Your morning trip to Central Primary School starts in 10 minutes. Driver: John D.',
        timestamp: '2025-11-03T07:20:00Z',
        read: false,
        priority: 'high',
        actionable: true,
        actionText: 'Track Trip',
        actionHandler: () => navigation.navigate('Tracking' as never),
      },
      {
        id: '2',
        type: 'payment',
        title: 'Payment Successful',
        message: 'Your monthly transport payment of R850.00 has been processed successfully.',
        timestamp: '2025-11-01T09:15:00Z',
        read: false,
        priority: 'medium',
      },
      {
        id: '3',
        type: 'booking',
        title: 'Booking Confirmed',
        message: 'Your recurring booking for Central Primary School has been confirmed for November.',
        timestamp: '2025-10-30T16:45:00Z',
        read: true,
        priority: 'medium',
        actionable: true,
        actionText: 'View Booking',
      },
      {
        id: '4',
        type: 'system',
        title: 'App Update Available',
        message: 'A new version of K & T Transport is available with improved features and bug fixes.',
        timestamp: '2025-10-28T12:00:00Z',
        read: true,
        priority: 'low',
        actionable: true,
        actionText: 'Update Now',
      },
      {
        id: '5',
        type: 'reminder',
        title: 'Payment Due Reminder',
        message: 'Your next payment of R850.00 is due on November 30th. Set up auto-pay to avoid late fees.',
        timestamp: '2025-10-25T10:30:00Z',
        read: true,
        priority: 'medium',
        actionable: true,
        actionText: 'Pay Now',
      },
    ]);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'booking':
        return 'calendar-check';
      case 'payment':
        return 'credit-card';
      case 'trip':
        return 'bus';
      case 'system':
        return 'cog';
      case 'reminder':
        return 'bell-ring';
      default:
        return 'information';
    }
  };

  const getNotificationColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#2196f3';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    switch (filter) {
      case 'unread':
        return !notification.read;
      case 'important':
        return notification.priority === 'high' || notification.priority === 'medium';
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const styles = notificationsScreenStyles;

  return (
    <View style={styles.container}>
      <DashboardHeader
        user={user}
        title="Notifications"
        subtitle={`${unreadCount} unread notifications`}
        showGradient={true}
      />

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Filter Chips */}
        <View style={styles.filterContainer}>
          <Chip
            selected={filter === 'all'}
            onPress={() => setFilter('all')}
            style={styles.filterChip}
          >
            All ({notifications.length})
          </Chip>
          <Chip
            selected={filter === 'unread'}
            onPress={() => setFilter('unread')}
            style={styles.filterChip}
          >
            Unread ({unreadCount})
          </Chip>
          <Chip
            selected={filter === 'important'}
            onPress={() => setFilter('important')}
            style={styles.filterChip}
          >
            Important
          </Chip>
        </View>

        {/* Actions Bar */}
        {unreadCount > 0 && (
          <Card style={styles.actionsCard}>
            <Card.Content style={styles.actionsContent}>
              <Text style={styles.actionsText}>
                {unreadCount} unread notifications
              </Text>
              <Button
                mode="outlined"
                compact
                onPress={markAllAsRead}
              >
                Mark all as read
              </Button>
            </Card.Content>
          </Card>
        )}

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <Card style={styles.emptyCard}>
            <Card.Content style={styles.emptyContent}>
              <MaterialCommunityIcons
                name="bell-off"
                size={64}
                color="#ccc"
                style={styles.emptyIcon}
              />
              <Text variant="titleLarge" style={styles.emptyTitle}>No Notifications</Text>
              <Text style={styles.emptyText}>
                {filter === 'all'
                  ? "You're all caught up! No new notifications."
                  : `No ${filter} notifications found.`
                }
              </Text>
            </Card.Content>
          </Card>
        ) : (
          filteredNotifications.map((notification, index) => (
            <Card
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.unreadCard
              ]}
            >
              <Card.Content style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <View style={styles.notificationMeta}>
                    <Avatar.Icon
                      size={40}
                      icon={getNotificationIcon(notification.type)}
                      style={[
                        styles.notificationIcon,
                        { backgroundColor: getNotificationColor(notification.priority) }
                      ]}
                    />
                    <View style={styles.notificationInfo}>
                      <View style={styles.titleRow}>
                        <Text style={styles.notificationTitle}>
                          {notification.title}
                        </Text>
                        {!notification.read && (
                          <Badge size={8} style={styles.unreadBadge} />
                        )}
                      </View>
                      <Text style={styles.notificationTime}>
                        {formatTimestamp(notification.timestamp)}
                      </Text>
                    </View>
                  </View>
                  <IconButton
                    icon="close"
                    size={20}
                    onPress={() => deleteNotification(notification.id)}
                    style={styles.deleteButton}
                  />
                </View>

                <Text style={styles.notificationMessage}>
                  {notification.message}
                </Text>

                {notification.actionable && (
                  <View style={styles.actionButtonContainer}>
                    <Button
                      mode="outlined"
                      compact
                      onPress={() => {
                        markAsRead(notification.id);
                        notification.actionHandler?.();
                      }}
                      style={styles.actionButton}
                    >
                      {notification.actionText}
                    </Button>
                  </View>
                )}
              </Card.Content>

              {!notification.read && (
                <Card.Actions>
                  <Button
                    onPress={() => markAsRead(notification.id)}
                    compact
                  >
                    Mark as Read
                  </Button>
                </Card.Actions>
              )}
            </Card>
          ))
        )}

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
