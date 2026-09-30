import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import InfoRow from '../components/InfoRow';
import Button from '../components/Button';
import useStudent from '../hooks/useStudent';
import { colors } from '../theme/colors';

export default function PerfilScreen({ navigation }) {
  const { estudiante, iniciales, datos } = useStudent();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <View style={styles.header}>
          <Avatar texto={iniciales} />
          <Text style={styles.nombre}>{estudiante.nombre}</Text>
          <Text style={styles.subtitulo}>Estudiante</Text>
        </View>

        <View style={styles.body}>
          {datos.map((dato, i) => (
            <InfoRow
              key={dato.etiqueta}
              etiqueta={dato.etiqueta}
              valor={dato.valor}
              ultima={i === datos.length - 1}
            />
          ))}
        </View>
      </Card>

      <Button
        titulo="Ver personajes  →"
        onPress={() => navigation.navigate('Listado')}
        style={styles.boton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 32,
  },
  nombre: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 14,
  },
  subtitulo: {
    color: '#CFC6E8',
    fontSize: 14,
    marginTop: 4,
  },
  body: {
    paddingHorizontal: 22,
    paddingVertical: 8,
  },
  boton: {
    marginTop: 28,
  },
});