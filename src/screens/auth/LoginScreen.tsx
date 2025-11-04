import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  Pressable,
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
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      {/* Background Image */}
      <Image
        source={require('../../../assets/login_screen_background.jpg')}
        style={authStyles.backgroundImage}
        resizeMode="cover"
      />

      {/* Blue Overlay - App Brand Color */}
      <View style={authStyles.blueOverlay} />

      <ScrollView
        style={authStyles.container}
        contentContainerStyle={authStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={authStyles.content}>
          {/* Back to Landing Button */}
          {onBackToLanding && (
            <View style={authStyles.backButtonContainer}>
              <Pressable onPress={onBackToLanding} style={authStyles.backButton}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color={colors.textInverse}
                />
              </Pressable>
              <Text style={authStyles.backText}>Back to Home</Text>
            </View>
          )}

          {/* K&T Transport Business Logo */}
          <View style={authStyles.logoHeader}>
            <View style={authStyles.businessLogo}>
              <MaterialCommunityIcons
                name="truck"
                size={48}
                color={colors.textInverse}
              />
            </View>
            <Text style={authStyles.logoText}>K & T Transport</Text>
            <Text style={authStyles.logoTagline}>Your Trusted Journey Partner</Text>
          </View>

          {/* Enhanced Demo Credentials */}
          <Card style={authStyles.enhancedDemoCard}>
            <Card.Content>
              <Title style={authStyles.demoTitle}>✨ Demo Credentials</Title>
              <Text style={authStyles.demoText}>
                Use password: <Text style={authStyles.demoPassword}>demo123</Text> for any account
              </Text>
              <View style={authStyles.demoEmailContainer}>
                <Text style={authStyles.demoEmail}>🚶 Commuter: commuter@ktransport.com</Text>
                <Text style={authStyles.demoEmail}>🚐 Driver: driver@ktransport.com</Text>
                <Text style={authStyles.demoEmail}>⚙️ Admin: admin@ktransport.com</Text>
              </View>
            </Card.Content>
          </Card>

          {/* Login Form */}
          <Card style={authStyles.formCard}>
            <Card.Content>
              <View style={authStyles.inputContainer}>
                <View style={authStyles.inputWithIcon}>
                  <View style={authStyles.inputIconLeft}>
                    <MaterialCommunityIcons name="email" size={20} color="#666" />
                  </View>
                  <TextInput
                    label="Email Address"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    mode="outlined"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[authStyles.input, authStyles.inputWithLeftIcon]}
                    disabled={loading}
                  />
                </View>
              </View>

              <View style={authStyles.inputContainer}>
                <View style={authStyles.inputWithIcon}>
                  <View style={authStyles.inputIconLeft}>
                    <MaterialCommunityIcons name="lock" size={20} color="#666" />
                  </View>
                  <TextInput
                    label="Password"
                    value={formData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    mode="outlined"
                    secureTextEntry={!showPassword}
                    style={[authStyles.input, authStyles.inputWithBothIcons]}
                    disabled={loading}
                  />
                  <Pressable
                    style={authStyles.inputIconRight}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <MaterialCommunityIcons
                      name={showPassword ? 'eye-off' : 'eye'}
                      size={20}
                      color="#666"
                    />
                  </Pressable>
                </View>
              </View>

              <Pressable
                onPress={handleLogin}
                disabled={loading}
                style={[authStyles.primaryButton, loading && authStyles.primaryButtonDisabled]}
              >
                <View style={authStyles.primaryButtonContent}>
                  {!loading && (
                    <MaterialCommunityIcons
                      name="login"
                      size={20}
                      color="#FFFFFF"
                      style={authStyles.buttonIcon}
                    />
                  )}
                  <Text style={authStyles.primaryButtonText}>
                    {loading ? 'Signing In...' : 'Sign In'}
                  </Text>
                </View>
              </Pressable>

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
