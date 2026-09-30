import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function InfoRow({ etiqueta, valor, ultima = false }) {
  return (
    <View style={[styles.fila, ultima && styles.sinBorde]}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDD8EA',
  },
  sinBorde: {
    borderBottomWidth: 0,
  },
  etiqueta: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  valor: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});