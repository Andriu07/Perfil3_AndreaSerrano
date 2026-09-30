import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.centro}>
      <ActivityIndicator size="large" color="#5B3E96" />
      <Text style={styles.texto}>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { marginTop: 10, color: '#666' },
});