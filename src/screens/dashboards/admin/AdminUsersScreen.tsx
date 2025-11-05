import React, { useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Button,
  Text,
  Avatar,
  IconButton,
  Chip,
  Menu,
  Divider,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../utils/theme';
import { adminDashboardStyles } from '../../../styles/screens/dashboards/adminDashboard';
import { AdminScreenProps } from '../../../types/Dashboard';
import { User } from '../../../types/User';

const AdminUsersScreen: React.FC<AdminScreenProps> = ({ user }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [menuVisible, setMenuVisible] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      email: 'john.smith@example.com',
      firstName: 'John',
      lastName: 'Smith',
      role: 'commuter',
      isActive: true,
      dateJoined: new Date(),
      lastLogin: new Date(),
    },
    {
      id: '2',
      email: 'mary.johnson@example.com',
      firstName: 'Mary',
      lastName: 'Johnson',
      role: 'driver',
      isActive: true,
      dateJoined: new Date(),
      lastLogin: new Date(),
    },
    {
      id: '3',
      email: 'bob.williams@example.com',
      firstName: 'Bob',
      lastName: 'Williams',
      role: 'parent',
      isActive: false,
      dateJoined: new Date(),
      lastLogin: new Date(),
    },
  ]);

  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch users from API
    setTimeout(() => setRefreshing(false), 2000);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return colors.error;
      case 'driver': return colors.primary;
      case 'parent': return colors.secondary;
      case 'commuter': return colors.success;
      case 'staff': return colors.warning;
      default: return colors.text;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return 'shield-account';
      case 'driver': return 'car';
      case 'parent': return 'account-supervisor';
      case 'commuter': return 'account';
      case 'staff': return 'badge-account';
      default: return 'account';
    }
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <Card style={adminDashboardStyles.userCard}>
      <Card.Content style={adminDashboardStyles.userCardContent}>
        <View style={adminDashboardStyles.userInfo}>
          <Avatar.Text
            size={50}
            label={`${item.firstName[0]}${item.lastName[0]}`}
            style={{ backgroundColor: getRoleColor(item.role) }}
          />
          <View style={adminDashboardStyles.userDetails}>
            <Text style={adminDashboardStyles.userName}>
              {item.firstName} {item.lastName}
            </Text>
            <Text style={adminDashboardStyles.userEmail}>{item.email}</Text>
            <View style={adminDashboardStyles.userMetaContainer}>
              <Chip
                mode="outlined"
                icon={getRoleIcon(item.role)}
                textStyle={{ color: getRoleColor(item.role) }}
                style={{ borderColor: getRoleColor(item.role) }}
              >
                {item.role.toUpperCase()}
              </Chip>
              <Chip
                mode="outlined"
                textStyle={{
                  color: item.isActive ? colors.success : colors.error
                }}
                style={{
                  borderColor: item.isActive ? colors.success : colors.error
                }}
              >
                {item.isActive ? 'Active' : 'Inactive'}
              </Chip>
            </View>
          </View>
        </View>
        <Menu
          visible={menuVisible === item.id}
          onDismiss={() => setMenuVisible(null)}
          anchor={
            <IconButton
              icon="dots-vertical"
              onPress={() => setMenuVisible(item.id)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: View user details
            }}
            title="View Details"
            leadingIcon="eye"
          />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Edit user
            }}
            title="Edit User"
            leadingIcon="pencil"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Toggle user status
            }}
            title={item.isActive ? "Deactivate" : "Activate"}
            leadingIcon={item.isActive ? "account-cancel" : "account-check"}
          />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Delete user
            }}
            title="Delete User"
            leadingIcon="delete"
            titleStyle={{ color: colors.error }}
          />
        </Menu>
      </Card.Content>
    </Card>
  );

  const styles = adminDashboardStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.screenTitle}>User Management</Text>
        <Button
          mode="contained"
          icon="account-plus"
          onPress={() => {/* Add new user */}}
          style={styles.headerButton}
        >
          Add User
        </Button>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AdminUsersScreen;
