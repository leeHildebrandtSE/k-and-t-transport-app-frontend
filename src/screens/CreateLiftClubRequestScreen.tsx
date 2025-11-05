import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Card,
  Text,
  Button,
  TextInput,
  Chip,
  HelperText,
  RadioButton,
  Switch,
  List,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { User } from '../types/User';
import { LiftClubType } from '../types/LiftClub';
import DashboardHeader from '../components/ui/DashboardHeader';
import { createLiftClubRequestStyles } from '../styles/screens/createLiftClubRequestScreen';
import { colors } from '../styles/theme';

interface CreateLiftClubRequestProps {
  route: {
    params: {
      user: User;
      commuterType: 'school_transport' | 'work_transport';
    };
  };
}

const CreateLiftClubRequestScreen: React.FC<CreateLiftClubRequestProps> = ({ route }) => {
  const { user, commuterType } = route.params;
  const navigation = useNavigation();

  // Form state
  const [formData, setFormData] = useState({
    proposedName: '',
    pickupLocation: '',
    dropoffLocation: '',
    preferredDepartureTime: '',
    estimatedMembers: '',
    maxBudget: '',
    description: '',
    specialRequirements: '',
  });

  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5]); // Default weekdays
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clubType: LiftClubType = commuterType === 'school_transport' ? 'school' : 'work';
  const displayTitle = commuterType === 'school_transport' ? 'Request School Lift Club' : 'Request Work Lift Club';

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.proposedName.trim()) {
      newErrors.proposedName = 'Lift club name is required';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = 'Dropoff location is required';
    }

    if (!formData.preferredDepartureTime.trim()) {
      newErrors.preferredDepartureTime = 'Departure time is required';
    } else if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(formData.preferredDepartureTime)) {
      newErrors.preferredDepartureTime = 'Time must be in HH:MM format';
    }

    if (!formData.estimatedMembers.trim()) {
      newErrors.estimatedMembers = 'Estimated members is required';
    } else if (isNaN(Number(formData.estimatedMembers)) || Number(formData.estimatedMembers) < 3) {
      newErrors.estimatedMembers = 'Must be at least 3 members';
    } else if (Number(formData.estimatedMembers) > 20) {
      newErrors.estimatedMembers = 'Maximum 20 members allowed';
    }

    if (!formData.maxBudget.trim()) {
      newErrors.maxBudget = 'Maximum budget is required';
    } else if (isNaN(Number(formData.maxBudget)) || Number(formData.maxBudget) < 100) {
      newErrors.maxBudget = 'Minimum budget is R100';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (selectedDays.length === 0) {
      newErrors.selectedDays = 'Select at least one day';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      Alert.alert(
        'Request Submitted',
        'Your lift club request has been submitted successfully! Our admin team will review it within 24-48 hours and contact you with updates.',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDay = (dayIndex: number) => {
    setSelectedDays(prev =>
      prev.includes(dayIndex)
        ? prev.filter(d => d !== dayIndex)
        : [...prev, dayIndex].sort()
    );
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const styles = createLiftClubRequestStyles;

  return (
    <View style={styles.container}>
      <DashboardHeader
        user={user}
        title={displayTitle}
        subtitle="Tell us about your transport needs"
        showGradient={true}
      />

      <ScrollView style={styles.scrollContainer}>
        {/* Info Card */}
        <Card style={styles.infoCard}>
          <Card.Content>
            <View style={styles.infoHeader}>
              <MaterialCommunityIcons
                name="information"
                size={24}
                color={colors.primary}
              />
              <Text variant="titleLarge" style={styles.infoTitle}>How it Works</Text>
            </View>
            <Text style={styles.infoText}>
              1. Submit your lift club request with details{'\n'}
              2. Our team reviews and finds suitable drivers{'\n'}
              3. We notify interested members in your area{'\n'}
              4. Once we have enough members, we create the club
            </Text>
          </Card.Content>
        </Card>

        {/* Basic Information */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Basic Information</Text>

            <TextInput
              label="Lift Club Name"
              value={formData.proposedName}
              onChangeText={(value) => updateFormData('proposedName', value)}
              mode="outlined"
              style={styles.input}
              error={!!errors.proposedName}
              placeholder={commuterType === 'school_transport' ? 'e.g., Westside Primary Morning Club' : 'e.g., Business District Work Transport'}
            />
            <HelperText type="error" visible={!!errors.proposedName}>
              {errors.proposedName}
            </HelperText>

            <TextInput
              label="Description"
              value={formData.description}
              onChangeText={(value) => updateFormData('description', value)}
              mode="outlined"
              multiline
              numberOfLines={3}
              style={styles.input}
              error={!!errors.description}
              placeholder="Describe your transport needs, preferred routes, and any specific requirements..."
            />
            <HelperText type="error" visible={!!errors.description}>
              {errors.description}
            </HelperText>

            <TextInput
              label="Special Requirements (Optional)"
              value={formData.specialRequirements}
              onChangeText={(value) => updateFormData('specialRequirements', value)}
              mode="outlined"
              multiline
              numberOfLines={2}
              style={styles.input}
              placeholder="Child safety seats, wheelchair access, air conditioning, etc."
            />
          </Card.Content>
        </Card>

        {/* Route Information */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Route Information</Text>

            <TextInput
              label="Pickup Location"
              value={formData.pickupLocation}
              onChangeText={(value) => updateFormData('pickupLocation', value)}
              mode="outlined"
              style={styles.input}
              error={!!errors.pickupLocation}
              placeholder="e.g., Residential Area A - Community Center"
              left={<TextInput.Icon icon="map-marker" />}
            />
            <HelperText type="error" visible={!!errors.pickupLocation}>
              {errors.pickupLocation}
            </HelperText>

            <TextInput
              label="Dropoff Location"
              value={formData.dropoffLocation}
              onChangeText={(value) => updateFormData('dropoffLocation', value)}
              mode="outlined"
              style={styles.input}
              error={!!errors.dropoffLocation}
              placeholder={commuterType === 'school_transport' ? 'e.g., Central Primary School' : 'e.g., Business District - Corporate Plaza'}
              left={<TextInput.Icon icon="flag-checkered" />}
            />
            <HelperText type="error" visible={!!errors.dropoffLocation}>
              {errors.dropoffLocation}
            </HelperText>
          </Card.Content>
        </Card>

        {/* Schedule Information */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Schedule</Text>

            <TextInput
              label="Preferred Departure Time"
              value={formData.preferredDepartureTime}
              onChangeText={(value) => updateFormData('preferredDepartureTime', value)}
              mode="outlined"
              style={styles.input}
              error={!!errors.preferredDepartureTime}
              placeholder="e.g., 07:30"
              left={<TextInput.Icon icon="clock" />}
            />
            <HelperText type="error" visible={!!errors.preferredDepartureTime}>
              {errors.preferredDepartureTime}
            </HelperText>

            <Text style={styles.daySelectionLabel}>Select Days of the Week:</Text>
            {errors.selectedDays && (
              <HelperText type="error" visible={true}>
                {errors.selectedDays}
              </HelperText>
            )}

            <View style={styles.daysContainer}>
              {dayNames.map((day, index) => (
                <Chip
                  key={index}
                  selected={selectedDays.includes(index)}
                  onPress={() => toggleDay(index)}
                  style={[
                    styles.dayChip,
                    selectedDays.includes(index) && styles.selectedDayChip
                  ]}
                  textStyle={selectedDays.includes(index) ? styles.selectedDayText : styles.dayText}
                >
                  {dayAbbr[index]}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Membership & Budget */}
        <Card style={styles.formCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>Membership & Budget</Text>

            <TextInput
              label="Estimated Members"
              value={formData.estimatedMembers}
              onChangeText={(value) => updateFormData('estimatedMembers', value)}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              error={!!errors.estimatedMembers}
              placeholder="Number of people interested"
              left={<TextInput.Icon icon="account-group" />}
            />
            <HelperText type="error" visible={!!errors.estimatedMembers}>
              {errors.estimatedMembers}
            </HelperText>

            <TextInput
              label="Maximum Budget per Month (R)"
              value={formData.maxBudget}
              onChangeText={(value) => updateFormData('maxBudget', value)}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              error={!!errors.maxBudget}
              placeholder="e.g., 600"
              left={<TextInput.Icon icon="currency-usd" />}
            />
            <HelperText type="error" visible={!!errors.maxBudget}>
              {errors.maxBudget}
            </HelperText>

            <View style={styles.budgetInfo}>
              <MaterialCommunityIcons name="information-outline" size={16} color={colors.textSecondary} />
              <Text style={styles.budgetInfoText}>
                Budget includes fuel, driver fees, vehicle maintenance, and insurance.
              </Text>
            </View>
          </Card.Content>
        </Card>

        {/* Submit Section */}
        <Card style={styles.submitCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.submitTitle}>Review & Submit</Text>
            <Text style={styles.submitText}>
              By submitting this request, you agree to be contacted by our team and
              potentially matched with other interested members in your area.
            </Text>

            <Button
              mode="contained"
              onPress={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
              style={styles.submitButton}
              icon="send"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </Card.Content>
        </Card>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default CreateLiftClubRequestScreen;
