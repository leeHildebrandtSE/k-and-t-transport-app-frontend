import React, { useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  ImageBackground,
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
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createIcon } from '../../../components/Icon';

import { AdminHeroBackground } from '../../../../assets';

import { colors, spacing, borderRadius, shadows, typography } from '../../../styles/theme';
import { adminDashboardStyles, adminGradientConfigs } from '../../../styles/screens/dashboards/adminDashboard';
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
      role: 'commuter',
      isActive: false,
      dateJoined: new Date(),
      lastLogin: new Date(),
    },
    {
      id: '4',
      email: 'admin@ktransport.com',
      firstName: 'Sarah',
      lastName: 'Admin',
      role: 'admin',
      isActive: true,
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
      case 'commuter': return colors.success;
      default: return colors.text;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return 'shield-account';
      case 'driver': return 'car';
      case 'commuter': return 'account';
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
                icon={createIcon(getRoleIcon(item.role), 16, getRoleColor(item.role))}
                textStyle={{ color: getRoleColor(item.role) }}
                style={{ borderColor: getRoleColor(item.role) }}
              >
                {item.role.toUpperCase()}
              </Chip>
              <Chip
                mode="outlined"
                icon={createIcon(item.isActive ? "check-circle" : "close-circle", 16, item.isActive ? colors.success : colors.error)}
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
              icon={createIcon("dots-vertical", 24, "#666")}
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
            leadingIcon={createIcon("eye", 20, "#666")}
          />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Edit user
            }}
            title="Edit User"
            leadingIcon={createIcon("pencil", 20, "#666")}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Toggle user status
            }}
            title={item.isActive ? "Deactivate" : "Activate"}
            leadingIcon={createIcon(item.isActive ? "account-cancel" : "account-check", 20, "#666")}
          />
          <Menu.Item
            onPress={() => {
              setMenuVisible(null);
              // TODO: Delete user
            }}
            title="Delete User"
            leadingIcon={createIcon("delete", 20, colors.error)}
            titleStyle={{ color: colors.error }}
          />
        </Menu>
      </Card.Content>
    </Card>
  );

  const styles = adminDashboardStyles;

  return (
    <View style={styles.container}>
      {/* Cape Town Admin Background */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Premium Background Overlay */}
        <View style={styles.premiumBackgroundOverlay} />
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero User Management Header */}
        <View style={styles.heroProfileCard}>
          <ImageBackground
            source={AdminHeroBackground}
            style={styles.heroBackgroundImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={adminGradientConfigs.hero.colors}
              start={adminGradientConfigs.hero.start}
              end={adminGradientConfigs.hero.end}
              style={styles.heroGradientOverlay}
            >
            {/* African Pattern Overlay */}
                        {/* Decorative overlay removed for production compatibility */}

            <View style={styles.heroContent}>
              {/* User Management Icon */}
              <View style={styles.profileImageFrame}>
                <View style={[styles.adminStatusIcon, { backgroundColor: colors.tertiary }]}>
                  <MaterialCommunityIcons
                    name="account-group"
                    size={60}
                    color="#fff"
                  />
                </View>
                <View style={[styles.onlineIndicator, { backgroundColor: colors.success }]} />
              </View>

              {/* User Management Info */}
              <View style={styles.heroProfileInfo}>
                <Text style={styles.heroName}>User Management</Text>
                <Text style={styles.heroRole}>Manage System Users & Permissions</Text>

                {/* User Stats */}
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{users.length}</Text>
                    <Text style={styles.heroStatLabel}>TOTAL</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{users.filter(u => u.isActive).length}</Text>
                    <Text style={styles.heroStatLabel}>ACTIVE</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Text style={styles.heroStatValue}>{users.filter(u => u.role === 'driver').length}</Text>
                    <Text style={styles.heroStatLabel}>DRIVERS</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          </ImageBackground>
        </View>

        {/* User List */}
        <View style={styles.listContainer}>
          {users.map((user) => (
            <View key={user.id}>
              {renderUserItem({ item: user })}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AdminUsersScreen;
