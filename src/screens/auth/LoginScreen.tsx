import React, { useState } from 'react';
import {
  View,
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
  Icon,
  IconButton,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AuthService } from '../../services/AuthService';
import { authStyles, colors } from '../../styles';
import { LoginCredentials, User } from '../../types/User';

interface LoginScreenProps {
  route: {
    params: {
      onLogin: (user: User) => void;
      onBackToLanding?: () => void;
    };
  };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { onLogin, onBackToLanding } = route.params;

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
      style={authStyles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={authStyles.container}
        contentContainerStyle={authStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={authStyles.content}>
          {/* Back to Landing Button */}
          {onBackToLanding && (
            <View style={authStyles.backButtonContainer}>
              <IconButton
                icon="arrow-left"
                size={24}
                onPress={onBackToLanding}
                style={authStyles.backButton}
              />
              <Text style={authStyles.backText}>Back to Home</Text>
            </View>
          )}

          {/* Enhanced Header with Logo */}
          <View style={authStyles.header}>
            <View style={[authStyles.logo, authStyles.floatingElement]}>
              <Icon source="truck" size={44} color={colors.textInverse} />
            </View>
            <Title style={authStyles.modernTitle}>Welcome Back</Title>
            <Paragraph style={authStyles.modernSubtitle}>
              Sign in to access your K & T Transport account and manage your journey with us
            </Paragraph>
          </View>

          {/* Enhanced Demo Credentials */}
          <Card style={authStyles.enhancedDemoCard}>
            <Card.Content>
              <Title style={authStyles.demoTitle}>✨ Demo Credentials</Title>
              <Text style={authStyles.demoText}>
                Use password: <Text style={authStyles.demoPassword}>demo123</Text> for any account
              </Text>
              <View style={authStyles.demoEmailContainer}>
                <Text style={authStyles.demoEmail}>👨‍👩‍👧‍👦 Parent: parent@ktransport.com</Text>
                <Text style={authStyles.demoEmail}>👔 Staff: staff@ktransport.com</Text>
                <Text style={authStyles.demoEmail}>🚐 Driver: driver@ktransport.com</Text>
                <Text style={authStyles.demoEmail}>⚙️ Admin: admin@ktransport.com</Text>
              </View>
            </Card.Content>
          </Card>

          {/* Login Form */}
          <Card style={authStyles.formCard}>
            <Card.Content>
              <View style={authStyles.inputContainer}>
                <TextInput
                  label="Email Address"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  mode="outlined"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={authStyles.input}
                  disabled={loading}
                  left={<TextInput.Icon icon="email" />}
                />
              </View>

              <View style={authStyles.inputContainer}>
                <TextInput
                  label="Password"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange('password', text)}
                  mode="outlined"
                  secureTextEntry={!showPassword}
                  style={authStyles.input}
                  disabled={loading}
                  left={<TextInput.Icon icon="lock" />}
                  right={
                    <TextInput.Icon
                      icon={showPassword ? 'eye-off' : 'eye'}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
              </View>

              <Button
                mode="contained"
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
                style={authStyles.primaryButton}
                contentStyle={authStyles.primaryButtonContent}
                labelStyle={authStyles.primaryButtonText}
                icon={loading ? undefined : 'login'}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>

              <Button
                mode="text"
                onPress={() => {
                  Alert.alert('Forgot Password', 'This feature will be implemented soon.');
                }}
                style={authStyles.forgotButton}
                disabled={loading}
                labelStyle={authStyles.textButtonText}
              >
                Forgot Password?
              </Button>
            </Card.Content>
          </Card>

          {/* Register Link */}
          <View style={authStyles.registerSection}>
            <Text style={authStyles.registerText}>Don't have an account?</Text>
            <Button
              mode="text"
              onPress={navigateToRegister}
              disabled={loading}
              style={authStyles.registerButton}
              labelStyle={authStyles.registerButtonText}
            >
              Create Account
            </Button>
          </View>

          {/* Loading Overlay */}
          {loading && (
            <View style={authStyles.loadingOverlay}>
              <View style={authStyles.loadingContent}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={authStyles.loadingText}>Signing you in...</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
