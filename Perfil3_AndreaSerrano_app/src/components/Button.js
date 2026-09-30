import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    marginTop: 24,
    backgroundColor: '#D6336C',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  texto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});