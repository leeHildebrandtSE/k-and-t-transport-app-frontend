import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, TextInput as RNTextInput, Pressable } from 'react-native';
import { TextInput, Text, Icon, HelperText } from 'react-native-paper';
import { colors, spacing, borderRadius, animations, typography } from '../../styles/theme';

interface EnhancedInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  success?: string;
  helpText?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
  autoCorrect?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  required?: boolean;
  validate?: (text: string) => string | null;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: any;
}

const EnhancedInput: React.FC<EnhancedInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  success,
  helpText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  editable = true,
  required = false,
  validate,
  onFocus,
  onBlur,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);
  const [hasBeenTouched, setHasBeenTouched] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();

    Animated.timing(focusAnim, {
      toValue: 1,
      duration: animations.fast,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasBeenTouched(true);
    onBlur?.();

    // Validate on blur if validator is provided
    if (validate && value) {
      const validationError = validate(value);
      setInternalError(validationError);
    }

    Animated.timing(focusAnim, {
      toValue: 0,
      duration: animations.fast,
      useNativeDriver: false,
    }).start();
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);

    // Clear errors when user starts typing
    if (internalError && text !== value) {
      setInternalError(null);
    }

    // Real-time validation for some cases
    if (validate && text.length > 0 && hasBeenTouched) {
      const validationError = validate(text);
      setInternalError(validationError);
    }
  };

  const shakeInput = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Trigger shake animation when error appears
  React.useEffect(() => {
    if (error || internalError) {
      shakeInput();
    }
  }, [error, internalError]);

  const getInputState = () => {
    if (error || internalError) return 'error';
    if (success) return 'success';
    if (isFocused) return 'focused';
    return 'default';
  };

  const getBorderColor = () => {
    const state = getInputState();
    return focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [
        state === 'error' ? colors.error :
        state === 'success' ? colors.success : colors.border,
        state === 'error' ? colors.error :
        state === 'success' ? colors.success : colors.primary
      ],
    });
  };

  const displayError = error || internalError;
  const displaySuccess = success && !displayError;
  const displayHelp = helpText && !displayError && !displaySuccess;

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        { transform: [{ translateX: shakeAnim }] }
      ]}
    >
      <View style={styles.inputWrapper}>
        <Animated.View
          style={[
            styles.inputContainer,
            {
              borderColor: getBorderColor(),
              borderWidth: isFocused ? 2 : 1,
            }
          ]}
        >
          {leftIcon && (
            <View style={styles.leftIconContainer}>
              <Icon
                source={leftIcon}
                size={20}
                color={isFocused ? colors.primary : colors.textTertiary}
              />
            </View>
          )}

          <TextInput
            mode="flat"
            label={required ? `${label} *` : label}
            value={value}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            editable={editable}
            style={[
              styles.textInput,
              leftIcon ? styles.textInputWithLeftIcon : null,
              rightIcon ? styles.textInputWithRightIcon : null,
            ]}
            theme={{
              colors: {
                primary: getInputState() === 'error' ? colors.error :
                         getInputState() === 'success' ? colors.success : colors.primary,
                outline: colors.border,
                background: colors.surface,
                onSurfaceVariant: colors.textTertiary,
              },
            }}
            underlineStyle={{ backgroundColor: 'transparent' }}
            contentStyle={styles.textInputContent}
          />

          {rightIcon && (
            <Pressable
              style={styles.rightIconContainer}
              onPress={onRightIconPress}
            >
              <Icon
                source={rightIcon}
                size={20}
                color={
                  displayError ? colors.error :
                  displaySuccess ? colors.success :
                  isFocused ? colors.primary : colors.textTertiary
                }
              />
            </Pressable>
          )}
        </Animated.View>

        {/* Character count */}
        {maxLength && (
          <View style={styles.characterCount}>
            <Text style={[
              styles.characterCountText,
              value.length > maxLength * 0.9 && styles.characterCountWarning,
              value.length >= maxLength && styles.characterCountError,
            ]}>
              {value.length}/{maxLength}
            </Text>
          </View>
        )}
      </View>

      {/* Helper/Error/Success Text */}
      {(displayError || displaySuccess || displayHelp) && (
        <HelperText
          type={displayError ? 'error' : displaySuccess ? 'info' : 'info'}
          visible={true}
          style={[
            styles.helperText,
            displayError ? styles.errorText : null,
            displaySuccess ? styles.successText : null,
          ].filter(Boolean)}
        >
          {displayError || displaySuccess || displayHelp}
        </HelperText>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
  },

  inputWrapper: {
    position: 'relative',
  },

  inputContainer: {
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  leftIconContainer: {
    paddingLeft: spacing.md,
    paddingRight: spacing.sm,
  },

  rightIconContainer: {
    paddingRight: spacing.md,
    paddingLeft: spacing.sm,
  },

  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  textInputWithLeftIcon: {
    paddingLeft: 0,
  },

  textInputWithRightIcon: {
    paddingRight: 0,
  },

  textInputContent: {
    paddingHorizontal: spacing.md,
  },

  characterCount: {
    position: 'absolute',
    right: spacing.md,
    bottom: spacing.xs,
  },

  characterCountText: {
    fontSize: 12,
    color: colors.textTertiary,
  },

  characterCountWarning: {
    color: colors.warning,
  },

  characterCountError: {
    color: colors.error,
  },

  helperText: {
    marginHorizontal: spacing.xs,
    marginTop: spacing.xs,
  },

  errorText: {
    color: colors.error,
  },

  successText: {
    color: colors.success,
  },
});

export default EnhancedInput;
