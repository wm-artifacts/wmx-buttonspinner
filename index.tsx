// NOTE: This component requires 'react-native' types for development. Install '@types/react-native' as a dev dependency if you see type errors in your IDE.
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View, GestureResponderEvent } from 'react-native';

interface ButtonSpinnerProps {
  label: string;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: object;
  spinnerColor?: string;
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({
  label,
  loading = false,
  onPress,
  disabled = false,
  style = {},
  spinnerColor = '#fff',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled ? styles.disabled : null]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="small" color={spinnerColor} style={styles.spinner} />
        ) : null}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  disabled: {
    backgroundColor: '#b0b0b0',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spinner: {
    marginRight: 8,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonSpinner; 
