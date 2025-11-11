import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { refundRequestStyles as styles } from '../styles/screens/refundRequestScreen';
import { colors } from '../styles/theme';
import DashboardHeader from '../components/ui/DashboardHeader';
import { User } from '../types/User';

interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  tripId?: string;
  status: 'completed' | 'pending' | 'failed';
}

interface RefundReason {
  id: string;
  title: string;
  description?: string;
}

export const RefundRequestScreen: React.FC = () => {
  // Mock user data - replace with actual user context
  const mockUser: User = {
    id: 'user-001',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'commuter',
  };

  // Mock transaction data - this would come from navigation params or API
  const transaction: Transaction = {
    id: 'TXN-001',
    amount: 25.50,
    description: 'Downtown to CBD - Morning commute',
    date: '2024-01-15T08:30:00Z',
    tripId: 'TRIP-12345',
    status: 'completed',
  };

  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customReason, setCustomReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [customReasonFocused, setCustomReasonFocused] = useState(false);
  const [additionalInfoFocused, setAdditionalInfoFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const refundReasons: RefundReason[] = [
    {
      id: 'trip_cancelled',
      title: 'Trip was cancelled by driver',
      description: 'The driver cancelled the trip without proper notice',
    },
    {
      id: 'service_issue',
      title: 'Service quality issues',
      description: 'Poor service quality or unprofessional behavior',
    },
    {
      id: 'wrong_charge',
      title: 'Incorrect charge amount',
      description: 'I was charged more than the agreed amount',
    },
    {
      id: 'vehicle_issue',
      title: 'Vehicle problems',
      description: 'Vehicle breakdown or safety concerns',
    },
    {
      id: 'route_change',
      title: 'Unauthorized route change',
      description: 'Driver took a different route without consent',
    },
    {
      id: 'other',
      title: 'Other reason',
      description: 'Please specify your reason below',
    },
  ];

  const formatCurrency = (amount: number) => {
    return `R${amount.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateRefundAmount = () => {
    // This would include any processing fees, partial refunds, etc.
    return transaction.amount * 0.95; // 95% refund after processing fee
  };

  const handleReasonSelect = (reasonId: string) => {
    setSelectedReason(reasonId);
    if (reasonId !== 'other') {
      setCustomReason('');
    }
  };

  const handleSubmit = async () => {
    if (!selectedReason) {
      Alert.alert('Error', 'Please select a reason for the refund request');
      return;
    }

    if (selectedReason === 'other' && !customReason.trim()) {
      Alert.alert('Error', 'Please provide a reason for the refund request');
      return;
    }

    Alert.alert(
      'Submit Refund Request',
      'Are you sure you want to submit this refund request?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Submit',
          onPress: submitRefundRequest,
        },
      ]
    );
  };

  const submitRefundRequest = async () => {
    try {
      setLoading(true);

      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));

      Alert.alert(
        'Request Submitted',
        'Your refund request has been submitted successfully. We will review it within 3-5 business days.',
        [{ text: 'OK', onPress: () => {/* Navigate back */} }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to submit refund request. Please try again.');
      console.error('Refund request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderTransaction = () => (
    <View style={styles.transactionSection}>
      <Text style={styles.transactionTitle}>Transaction Details</Text>

      <View style={styles.transactionCard}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionAmount}>
            {formatCurrency(transaction.amount)}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(transaction.date)}
          </Text>
        </View>

        <Text style={styles.transactionDescription}>
          {transaction.description}
        </Text>

        <Text style={styles.transactionId}>
          Transaction ID: {transaction.id}
        </Text>

        {transaction.tripId && (
          <Text style={styles.transactionId}>
            Trip ID: {transaction.tripId}
          </Text>
        )}
      </View>
    </View>
  );

  const renderReasonSelection = () => (
    <View style={styles.reasonSection}>
      <Text style={styles.reasonTitle}>Reason for Refund</Text>

      {refundReasons.map((reason) => (
        <TouchableOpacity
          key={reason.id}
          style={[
            styles.reasonOption,
            selectedReason === reason.id && styles.reasonOptionSelected,
          ]}
          onPress={() => handleReasonSelect(reason.id)}
        >
          <View style={styles.reasonOptionContent}>
            <View style={[
              styles.reasonRadio,
              selectedReason === reason.id && styles.reasonRadioSelected,
            ]}>
              {selectedReason === reason.id && (
                <View style={styles.reasonRadioInner} />
              )}
            </View>

            <Text style={[
              styles.reasonText,
              selectedReason === reason.id && styles.reasonTextSelected,
            ]}>
              {reason.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {selectedReason === 'other' && (
        <View style={styles.customReasonSection}>
          <Text style={styles.customReasonLabel}>
            Please specify your reason
          </Text>
          <TextInput
            style={[
              styles.customReasonInput,
              customReasonFocused && styles.customReasonInputFocused,
            ]}
            placeholder="Describe the issue in detail..."
            placeholderTextColor={colors.placeholder}
            value={customReason}
            onChangeText={setCustomReason}
            multiline
            maxLength={500}
            onFocus={() => setCustomReasonFocused(true)}
            onBlur={() => setCustomReasonFocused(false)}
          />
          <Text style={styles.characterCount}>
            {customReason.length}/500
          </Text>
        </View>
      )}
    </View>
  );

  const renderAdditionalInfo = () => (
    <View style={styles.additionalSection}>
      <Text style={styles.additionalTitle}>
        Additional Information (Optional)
      </Text>

      <TextInput
        style={[
          styles.additionalInput,
          additionalInfoFocused && styles.additionalInputFocused,
        ]}
        placeholder="Any additional details that might help with your refund request..."
        placeholderTextColor={colors.placeholder}
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
        multiline
        maxLength={1000}
        onFocus={() => setAdditionalInfoFocused(true)}
        onBlur={() => setAdditionalInfoFocused(false)}
      />

      <Text style={styles.characterCount}>
        {additionalInfo.length}/1000
      </Text>
    </View>
  );

  const renderRefundPolicy = () => (
    <View style={styles.policySection}>
      <View style={styles.policyHeader}>
        <MaterialCommunityIcons
          name="information"
          size={20}
          color={colors.info}
        />
        <Text style={styles.policyTitle}>Refund Policy</Text>
      </View>

      <View style={styles.policyList}>
        <View style={styles.policyItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={12}
            color={colors.success}
          />
          <Text style={styles.policyItemText}>
            Refund requests are reviewed within 3-5 business days
          </Text>
        </View>

        <View style={styles.policyItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={12}
            color={colors.success}
          />
          <Text style={styles.policyItemText}>
            Processing fee of 5% may apply to cover transaction costs
          </Text>
        </View>

        <View style={styles.policyItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={12}
            color={colors.success}
          />
          <Text style={styles.policyItemText}>
            Refunds are processed back to the original payment method
          </Text>
        </View>

        <View style={styles.policyItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={12}
            color={colors.success}
          />
          <Text style={styles.policyItemText}>
            Disputed refunds may require additional documentation
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSubmitSection = () => {
    const isValidSubmission = selectedReason && (selectedReason !== 'other' || customReason.trim());
    const estimatedRefund = calculateRefundAmount();

    return (
      <View style={styles.submitSection}>
        <View style={styles.estimatedRefund}>
          <Text style={styles.estimatedLabel}>Estimated Refund:</Text>
          <Text style={styles.estimatedAmount}>
            {formatCurrency(estimatedRefund)}
          </Text>
        </View>

        <View style={styles.warningSection}>
          <Text style={styles.warningText}>
            Processing fee may apply. Final refund amount will be confirmed after review.
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.submitButton,
            !isValidSubmission && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!isValidSubmission || loading}
        >
          <Text style={[
            styles.submitButtonText,
            !isValidSubmission && styles.submitButtonTextDisabled,
          ]}>
            {loading ? 'Submitting...' : 'Submit Refund Request'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {/* Navigate back */}}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <DashboardHeader title="Refund Request" user={mockUser} />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Request Refund</Text>
          <Text style={styles.subtitle}>
            Tell us why you'd like a refund for this transaction
          </Text>
        </View>

        {renderTransaction()}
        {renderReasonSelection()}
        {renderAdditionalInfo()}
        {renderRefundPolicy()}
        {renderSubmitSection()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
