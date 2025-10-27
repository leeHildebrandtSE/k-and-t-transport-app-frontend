import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Card,
  Title,
  Paragraph,
  RadioButton,
  ActivityIndicator,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AuthService } from '../../services/AuthService';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { RegisterData, User, UserRole } from '../../types/User';

interface RegisterScreenProps {
  route: {
    params: {
      onLogin: (user: User) => void;
    };
  };
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { onLogin } = route.params;

  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
    role: 'parent',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: keyof RegisterData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.phone || !formData.firstName || 
        !formData.lastName || !formData.password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }

    if (formData.password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(formData.phone)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const authResponse = await AuthService.register(formData);
      onLogin(authResponse.user);
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert(
        'Registration Failed',
        error instanceof Error ? error.message : 'Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Title style={styles.title}>Create Account</Title>
            <Paragraph style={styles.subtitle}>
              Join K & T Transport for reliable school and staff transport
            </Paragraph>
          </View>

          {/* Registration Form */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.nameRow}>
                <TextInput
                  label="First Name"
                  value={formData.firstName}
                  onChangeText={(text) => handleInputChange('firstName', text)}
                  mode="outlined"
                  style={[styles.input, styles.nameInput]}
                  disabled={loading}
                />
                <TextInput
                  label="Last Name"
                  value={formData.lastName}
                  onChangeText={(text) => handleInputChange('lastName', text)}
                  mode="outlined"
                  style={[styles.input, styles.nameInput]}
                  disabled={loading}
                />
              </View>

              <TextInput
                label="Email Address"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                disabled={loading}
              />

              <TextInput
                label="Phone Number"
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                mode="outlined"
                keyboardType="phone-pad"
                placeholder="+27 xx xxx xxxx"
                style={styles.input}
                disabled={loading}
              />

              <TextInput
                label="Password"
                value={formData.password}
                onChangeText={(text) => handleInputChange('password', text)}
                mode="outlined"
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={styles.input}
                disabled={loading}
              />

              <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                mode="outlined"
                secureTextEntry={!showConfirmPassword}
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
                style={styles.input}
                disabled={loading}
              />

              {/* User Role Selection */}
              <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>I am a:</Text>
                <RadioButton.Group
                  onValueChange={(value) => handleInputChange('role', value as UserRole)}
                  value={formData.role}
                >
                  <View style={styles.roleOption}>
                    <RadioButton value="parent" disabled={loading} />
                    <Text style={styles.roleLabel}>Parent/Guardian</Text>
                  </View>
                  <View style={styles.roleOption}>
                    <RadioButton value="staff" disabled={loading} />
                    <Text style={styles.roleLabel}>Staff/Employee</Text>
                  </View>
                  <View style={styles.roleOption}>
                    <RadioButton value="driver" disabled={loading} />
                    <Text style={styles.roleLabel}>Driver</Text>
                  </View>
                </RadioButton.Group>
              </View>

              <Button
                mode="contained"
                onPress={handleRegister}
                loading={loading}
                disabled={loading}
                style={styles.registerButton}
                contentStyle={styles.buttonContent}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </Card.Content>
          </Card>

          {/* Login Link */}
          <View style={styles.loginSection}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Button
              mode="text"
              onPress={navigateToLogin}
              disabled={loading}
              labelStyle={styles.loginButtonLabel}
            >
              Sign In
            </Button>
          </View>

          {/* Loading Indicator */}
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    marginBottom: spacing.lg,
    borderRadius: borderRadius.large,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  input: {
    marginBottom: spacing.md,
  },
  roleSection: {
    marginBottom: spacing.lg,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  roleLabel: {
    fontSize: 16,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  registerButton: {
    marginTop: spacing.md,
    borderRadius: borderRadius.medium,
  },
  buttonContent: {
    paddingVertical: spacing.sm,
  },
  loginSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  loginText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  loginButtonLabel: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;