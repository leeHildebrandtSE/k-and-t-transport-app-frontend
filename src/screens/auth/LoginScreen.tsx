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
  ActivityIndicator,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AuthService } from '../../services/AuthService';
import { colors, spacing, borderRadius } from '../../utils/theme';
import { LoginCredentials, User } from '../../types/User';

interface LoginScreenProps {
  route: {
    params: {
      onLogin: (user: User) => void;
    };
  };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { onLogin } = route.params;

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const authResponse = await AuthService.login(formData);
      onLogin(authResponse.user);
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert(
        'Login Failed',
        error instanceof Error ? error.message : 'Please check your credentials and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Logo and Welcome Text */}
          <View style={styles.header}>
            <Title style={styles.title}>Welcome Back</Title>
            <Paragraph style={styles.subtitle}>
              Sign in to access your K & T Transport account
            </Paragraph>
          </View>

          {/* Login Form */}
          <Card style={styles.card}>
            <Card.Content>
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

              <Button
                mode="contained"
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
                style={styles.loginButton}
                contentStyle={styles.buttonContent}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>

              <Button
                mode="text"
                onPress={() => {
                  // TODO: Implement forgot password
                  Alert.alert('Forgot Password', 'This feature will be implemented soon.');
                }}
                style={styles.forgotButton}
                disabled={loading}
              >
                Forgot Password?
              </Button>
            </Card.Content>
          </Card>

          {/* Register Link */}
          <View style={styles.registerSection}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <Button
              mode="text"
              onPress={navigateToRegister}
              disabled={loading}
              labelStyle={styles.registerButtonLabel}
            >
              Create Account
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
    justifyContent: 'center',
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
  input: {
    marginBottom: spacing.md,
  },
  loginButton: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.medium,
  },
  buttonContent: {
    paddingVertical: spacing.sm,
  },
  forgotButton: {
    alignSelf: 'center',
  },
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  registerText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  registerButtonLabel: {
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

export default LoginScreen;