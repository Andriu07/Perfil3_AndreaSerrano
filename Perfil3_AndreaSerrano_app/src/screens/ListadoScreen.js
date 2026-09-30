import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import useCharacters from '../hooks/useCharacters';
import { colors } from '../theme/colors';

export default function ListadoScreen() {
  const { personajes, cargando, error, recargar } = useCharacters();

  if (cargando && personajes.length === 0) {
    return <Loader mensaje="Cargando personajes..." />;
  }

  if (error) {
    return <ErrorMessage mensaje={error} onReintentar={recargar} />;
  }

  return (
    <FlatList
      data={personajes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CharacterCard personaje={item} />}
      contentContainerStyle={styles.lista}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      ListEmptyComponent={<Text style={styles.vacio}>No hay personajes para mostrar.</Text>}
      onRefresh={recargar}
      refreshing={cargando}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
  },
  separador: {
    height: 14,
  },
  vacio: {
    textAlign: 'center',
    marginTop: 40,
    color: colors.textMuted,
  },
});