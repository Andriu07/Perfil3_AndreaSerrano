import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Button({ titulo, onPress, color = colors.accent, style }) {
  return (
    <TouchableOpacity
      style={[styles.boton, { backgroundColor: color, shadowColor: color }, style]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignItems: 'center',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  texto: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});