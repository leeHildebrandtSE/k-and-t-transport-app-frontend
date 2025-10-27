import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { colors, spacing, borderRadius } from '../../utils/theme';

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: string;
  actionText?: string;
  onAction?: () => void;
  imageSource?: any;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  icon,
  actionText,
  onAction,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          {imageSource && (
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
          )}
          
          <Title style={styles.title}>{title}</Title>
          <Paragraph style={styles.message}>{message}</Paragraph>
          
          {actionText && onAction && (
            <Button
              mode="contained"
              onPress={onAction}
              style={styles.actionButton}
              icon={icon}
            >
              {actionText}
            </Button>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: borderRadius.large,
  },
  content: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: spacing.lg,
    opacity: 0.6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  message: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 24,
  },
  actionButton: {
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing.lg,
  },
});

export default EmptyState;