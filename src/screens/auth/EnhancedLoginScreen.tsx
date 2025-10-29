import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Text,
  Card,
  Title,
  Paragraph,
  Icon,
  Surface,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { AuthService } from '../../services/AuthService';
import { colors, spacing, borderRadius, shadows, typography, animations } from '../../styles';
import { LoginCredentials, User } from '../../types/User';
import {
  EnhancedCard,
  EnhancedButton,
  EnhancedInput,
  EnhancedLoading
} from '../../components/ui';

interface EnhancedLoginScreenProps {
  route: {
    params: {
      onLogin: (user: User) => void;
    };
  };
}

const { width, height } = Dimensions.get('window');

const EnhancedLoginScreen: React.FC<EnhancedLoginScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { onLogin } = route.params;

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return null;
  };

  const validatePassword = (password: string): string | null => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
  };

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

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

  const handleDemoLogin = async () => {
    setFormData({
      email: 'parent@ktransport.com',
      password: 'demo123',
    });

    // Auto-login after a short delay to show the form update
    setTimeout(() => {
      handleLogin();
    }, 500);
  };

  const navigateToRegister = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <EnhancedLoading loading={loading} variant="overlay" text="Signing you in...">
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <LinearGradient
          colors={colors.gradientHero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        >
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header Section */}
            <View style={styles.header}>
              <Surface style={styles.logoContainer} elevation={4}>
                <Icon source="truck" size={32} color={colors.primary} />
              </Surface>
              <Title style={styles.title}>Welcome Back</Title>
              <Paragraph style={styles.subtitle}>
                Sign in to continue your journey with K & T Transport
              </Paragraph>
            </View>

            {/* Demo Card */}
            <EnhancedCard
              variant="glass"
              style={styles.demoCard}
              icon={<Icon source="information" size={20} color={colors.info} />}
              title="Demo Account"
              subtitle="Try the app with sample data"
            >
              <View style={styles.demoContent}>
                <Text style={styles.demoText}>
                  Use the demo account to explore all features without creating an account.
                </Text>
                <EnhancedButton
                  title="Try Demo"
                  onPress={handleDemoLogin}
                  variant="outline"
                  size="small"
                  icon="play"
                  style={styles.demoButton}
                />
              </View>
            </EnhancedCard>

            {/* Login Form */}
            <EnhancedCard
              variant="elevated"
              title="Sign In"
              subtitle="Enter your credentials to access your account"
              style={styles.formCard}
            >
              <View style={styles.form}>
                <EnhancedInput
                  label="Email Address"
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  leftIcon="email"
                  error={errors.email}
                  validate={validateEmail}
                  required
                />

                <EnhancedInput
                  label="Password"
                  value={formData.password}
                  onChangeText={(value) => handleInputChange('password', value)}
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                  leftIcon="lock"
                  rightIcon={showPassword ? 'eye-off' : 'eye'}
                  onRightIconPress={() => setShowPassword(!showPassword)}
                  error={errors.password}
                  validate={validatePassword}
                  required
                />

                <EnhancedButton
                  title="Sign In"
                  onPress={handleLogin}
                  variant="gradient"
                  size="large"
                  icon="login"
                  fullWidth
                  loading={loading}
                  style={styles.loginButton}
                />
              </View>
            </EnhancedCard>

            {/* Register Link */}
            <View style={styles.registerSection}>
              <Text style={styles.registerText}>
                Don't have an account?
              </Text>
              <EnhancedButton
                title="Create Account"
                onPress={navigateToRegister}
                variant="ghost"
                size="medium"
                icon="account-plus"
              />
            </View>

            {/* Features Preview */}
            <EnhancedCard
              variant="default"
              title="Why Choose K & T Transport?"
              style={styles.featuresCard}
            >
              <View style={styles.features}>
                {[
                  { icon: 'shield-check', text: 'Safe & Reliable' },
                  { icon: 'map-marker', text: 'Real-time Tracking' },
                  { icon: 'clock', text: 'Punctual Service' },
                  { icon: 'phone', text: '24/7 Support' },
                ].map((feature, index) => (
                  <View key={index} style={styles.feature}>
                    <Icon source={feature.icon} size={16} color={colors.primary} />
                    <Text style={styles.featureText}>{feature.text}</Text>
                  </View>
                ))}
              </View>
            </EnhancedCard>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </EnhancedLoading>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },

  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
    marginTop: spacing.xl,
  },

  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textInverse,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  subtitle: {
    fontSize: 16,
    color: colors.textInverse,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
    paddingHorizontal: spacing.lg,
  },

  demoCard: {
    marginBottom: spacing.lg,
  },

  demoContent: {
    marginTop: spacing.md,
  },

  demoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },

  demoButton: {
    alignSelf: 'flex-start',
  },

  formCard: {
    marginBottom: spacing.lg,
  },

  form: {
    gap: spacing.lg,
  },

  loginButton: {
    marginTop: spacing.md,
  },

  registerSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    gap: spacing.sm,
  },

  registerText: {
    fontSize: 14,
    color: colors.textInverse,
    opacity: 0.8,
  },

  featuresCard: {
    marginBottom: spacing.lg,
  },

  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.md,
  },

  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
    minWidth: '45%',
  },

  featureText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});

export default EnhancedLoginScreen;
