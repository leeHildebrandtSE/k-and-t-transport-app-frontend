import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  return <MaterialCommunityIcons name={name as any} size={size} color={color} />;
};

// Helper function to create icon functions for React Native Paper
export const createIcon = (name: string, size: number = 20, color: string = '#666') => {
  return () => <Icon name={name} size={size} color={color} />;
};
