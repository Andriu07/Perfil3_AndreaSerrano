import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.titulo}>Datos del Estudiante</Text>
        <Text style={styles.dato}>Nombre: Andrea Serrano</Text>
        <Text style={styles.dato}>Carnet: 20240349</Text>
        <Text style={styles.dato}>Sección y Grupo: 1B</Text>
      </Card>

      <Button titulo="Ver personajes" onPress={() => navigation.navigate('Listado')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F3F0FA' },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#2B1B4F', marginBottom: 12 },
  dato: { fontSize: 16, marginBottom: 6, color: '#333' },
});