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
  RadioButton,
  ActivityIndicator,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthService } from '../../services/AuthService';
import { registerScreenStyles } from '../../styles/screens/registerScreen';
import { authStyles, colors } from '../../styles';
import { RegisterData, User, UserRole } from '../../types/User';
import { useResponsive } from '../../hooks/useResponsive';

interface RegisterScreenProps {
  route: {
    params: {
      onLogin: (user: User) => void;
      onBackToLanding?: () => void;
    };
  };
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const responsive = useResponsive(); // Added responsive hook
  const { onLogin, onBackToLanding } = route.params;

  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
    role: 'commuter',
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
      style={registerScreenStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Background Image */}
      <Image
        source={require('../../../assets/login_screen_background.jpg')}
        style={authStyles.backgroundImage}
        resizeMode="cover"
      />

      {/* UPDATED: Cape Town Ocean to Mountain Gradient Overlay - Better Visibility */}
      <LinearGradient
        colors={[
          `${colors.primary}CC`, // Cape Town ocean blue with 80% opacity
          `${colors.tertiary}99`, // Table Mountain green with 60% opacity
          `${colors.secondary}66`  // Cape Town sunshine with 40% opacity
        ]}
        locations={[0, 0.6, 1]}
        style={authStyles.enhancedGradientOverlay} // Using improved overlay (50% opacity)
      />

      <ScrollView
        contentContainerStyle={[
          registerScreenStyles.scrollContent,
          // Responsive padding
          { paddingHorizontal: responsive.mobile ? 20 : responsive.tablet ? 32 : 48 }
        ]}
      >
        <View style={registerScreenStyles.content}>
          {/* Back to Landing Button */}
          {onBackToLanding && (
            <View style={registerScreenStyles.backButtonContainer}>
              <Pressable
                onPress={onBackToLanding}
                style={registerScreenStyles.backButton}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#FFFFFF"
                />
              </Pressable>
              <Text style={authStyles.enhancedBackText}>Back to Home</Text>
            </View>
          )}

          {/* K&T Transport Business Logo */}
          <View style={authStyles.logoHeader}>
            <View style={authStyles.businessLogo}>
              <MaterialCommunityIcons
                name="truck"
                size={48}
                color="#FFFFFF"
              />
            </View>
            <Text style={authStyles.enhancedLogoTitle}>K & T Transport</Text>
            <Text style={authStyles.enhancedLogoTagline}>Your Trusted Journey Partner</Text>
          </View>

          {/* UPDATED: Enhanced Registration Form - Better Contrast */}
          <Card style={[
            authStyles.enhancedFormCard, // Using improved card (98% opacity)
            authStyles.floatingElement
          ]}>
            <Card.Content>
              <View style={registerScreenStyles.nameRow}>
                <TextInput
                  label="First Name"
                  value={formData.firstName}
                  onChangeText={(text) => handleInputChange('firstName', text)}
                  mode="outlined"
                  style={[registerScreenStyles.input, registerScreenStyles.nameInput]}
                  disabled={loading}
                />
                <TextInput
                  label="Last Name"
                  value={formData.lastName}
                  onChangeText={(text) => handleInputChange('lastName', text)}
                  mode="outlined"
                  style={[registerScreenStyles.input, registerScreenStyles.nameInput]}
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
                style={registerScreenStyles.input}
                disabled={loading}
              />

              <TextInput
                label="Phone Number"
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                mode="outlined"
                keyboardType="phone-pad"
                placeholder="+27 xx xxx xxxx"
                style={registerScreenStyles.input}
                disabled={loading}
              />

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
                  style={[registerScreenStyles.input, authStyles.inputWithBothIcons]}
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

              <View style={authStyles.inputWithIcon}>
                <View style={authStyles.inputIconLeft}>
                  <MaterialCommunityIcons name="lock" size={20} color="#666" />
                </View>
                <TextInput
                  label="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  mode="outlined"
                  secureTextEntry={!showConfirmPassword}
                  style={[registerScreenStyles.input, authStyles.inputWithBothIcons]}
                />
                <Pressable
                  style={authStyles.inputIconRight}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <MaterialCommunityIcons
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#666"
                  />
                </Pressable>
              </View>

              {/* User Role Selection */}
              <View style={registerScreenStyles.roleSection}>
                <Text style={registerScreenStyles.roleTitle}>I am a:</Text>
                <RadioButton.Group
                  onValueChange={(value) => handleInputChange('role', value as UserRole)}
                  value={formData.role}
                >
                  <View style={registerScreenStyles.roleOption}>
                    <RadioButton value="commuter" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Commuter</Text>
                  </View>
                  <View style={registerScreenStyles.roleOption}>
                    <RadioButton value="driver" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Driver</Text>
                  </View>
                  <View style={registerScreenStyles.roleOption}>
                    <RadioButton value="admin" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Administrator</Text>
                  </View>
                </RadioButton.Group>
              </View>

              <Button
                mode="contained"
                onPress={handleRegister}
                loading={loading}
                disabled={loading}
                style={registerScreenStyles.registerButton}
                contentStyle={registerScreenStyles.buttonContent}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </Card.Content>
          </Card>

          {/* Login Link */}
          <View style={registerScreenStyles.loginSection}>
            <Text style={authStyles.enhancedRegisterText}>Already have an account?</Text>
            <Button
              mode="text"
              onPress={navigateToLogin}
              disabled={loading}
              labelStyle={registerScreenStyles.loginButtonLabel}
            >
              Sign In
            </Button>
          </View>

          {/* Loading Indicator */}
          {loading && (
            <View style={registerScreenStyles.loadingOverlay}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
