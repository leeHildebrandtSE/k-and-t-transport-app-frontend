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
  RadioButton,
  ActivityIndicator,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AuthService } from '../../services/AuthService';
import { registerScreenStyles } from '../../styles/screens/registerScreen';
import { authStyles, colors } from '../../styles';
import { RegisterData, User, UserRole } from '../../types/User';

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
  const { onLogin, onBackToLanding } = route.params;

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
      style={registerScreenStyles.container}
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

      <ScrollView contentContainerStyle={registerScreenStyles.scrollContent}>
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
              <Text style={authStyles.backText}>Back to Home</Text>
            </View>
          )}

          {/* Enhanced Header */}
          <View style={registerScreenStyles.header}>
            <Title style={[registerScreenStyles.title, authStyles.modernTitle]}>Create Account</Title>
            <Paragraph style={[registerScreenStyles.subtitle, authStyles.modernSubtitle]}>
              Join K & T Transport for reliable school and staff transport
            </Paragraph>
          </View>

          {/* Enhanced Registration Form */}
          <Card style={[registerScreenStyles.card, authStyles.floatingElement]}>
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
                    <RadioButton value="parent" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Parent/Guardian</Text>
                  </View>
                  <View style={registerScreenStyles.roleOption}>
                    <RadioButton value="staff" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Staff/Employee</Text>
                  </View>
                  <View style={registerScreenStyles.roleOption}>
                    <RadioButton value="driver" disabled={loading} />
                    <Text style={registerScreenStyles.roleLabel}>Driver</Text>
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
            <Text style={registerScreenStyles.loginText}>Already have an account?</Text>
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
