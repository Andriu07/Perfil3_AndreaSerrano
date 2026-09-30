import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Loader({ mensaje = 'Cargando...' }) {
  return (
    <View style={styles.centro}>
      <ActivityIndicator size="large" color={colors.primaryLight} />
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  mensaje: {
    marginTop: 12,
    fontSize: 15,
    color: colors.textMuted,
  },
});