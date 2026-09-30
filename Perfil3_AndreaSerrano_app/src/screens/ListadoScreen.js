import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Loader from '../components/Loader';
import useCharacters from '../hooks/useCharacters';

export default function ListadoScreen() {
  const { personajes, cargando, error } = useCharacters();

  if (cargando) return <Loader />;

  if (error) {
    return (
      <View style={styles.centro}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={personajes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.imagen} />
          <View style={styles.info}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text>Estado: {item.status}</Text>
            <Text>Especie: {item.species}</Text>
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16, backgroundColor: '#F3F0FA' },
  card: { flexDirection: 'row', marginBottom: 12, alignItems: 'center' },
  imagen: { width: 80, height: 80, borderRadius: 40 },
  info: { marginLeft: 14, flex: 1 },
  nombre: { fontSize: 17, fontWeight: 'bold', color: '#2B1B4F' },
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 16 },
});