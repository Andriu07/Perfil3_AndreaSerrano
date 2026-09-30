import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { colors } from '../theme/colors';

export default function ErrorMessage({ mensaje, onReintentar }) {
  return (
    <View style={styles.centro}>
      <Text style={styles.titulo}>Ocurrió un error</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>
      {onReintentar && (
        <Button
          titulo="Reintentar"
          onPress={onReintentar}
          color={colors.primary}
          style={styles.boton}
        />
      )}
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
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.dead,
  },
  mensaje: {
    marginTop: 8,
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
  },
  boton: {
    marginTop: 20,
  },
});