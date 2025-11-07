import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>K&T Transport App</Text>
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

registerRootComponent(App);
