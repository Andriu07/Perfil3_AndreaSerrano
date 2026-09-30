import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import { colors } from '../theme/colors';

export default function CharacterCard({ personaje }) {
  const { nombre, imagen, especie, genero, ubicacion, estadoTexto, estadoColor } = personaje;

  return (
    <Card style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre} numberOfLines={1}>{nombre}</Text>

        <View style={styles.estadoFila}>
          <View style={[styles.punto, { backgroundColor: estadoColor }]} />
          <Text style={styles.detalle}>{estadoTexto} · {especie}</Text>
        </View>

        <Text style={styles.etiqueta}>Última ubicación</Text>
        <Text style={styles.detalle} numberOfLines={1}>{ubicacion}</Text>

        <Text style={styles.etiqueta}>Género</Text>
        <Text style={styles.detalle}>{genero}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 18,
  },
  imagen: {
    width: 120,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  estadoFila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  punto: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 6,
  },
  etiqueta: {
    fontSize: 11,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  detalle: {
    fontSize: 14,
    color: colors.text,
  },
});