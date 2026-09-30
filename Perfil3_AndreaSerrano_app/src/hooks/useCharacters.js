import { useState, useEffect, useCallback } from 'react';
import { colors } from '../theme/colors';

const API_URL = 'https://rickandmortyapi.com/api/character';

const ESTADOS = {
  Alive: { texto: 'Vivo', color: colors.alive },
  Dead: { texto: 'Muerto', color: colors.dead },
  unknown: { texto: 'Desconocido', color: colors.unknown },
};

// Convierte la respuesta de la API al formato que usa la UI
const mapearPersonaje = (p) => ({
  id: p.id.toString(),
  nombre: p.name,
  imagen: p.image,
  especie: p.species,
  genero: p.gender,
  ubicacion: p.location?.name ?? 'Desconocida',
  estadoTexto: ESTADOS[p.status]?.texto ?? p.status,
  estadoColor: ESTADOS[p.status]?.color ?? colors.unknown,
});

export default function useCharacters() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargarDatos = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) {
        throw new Error(`Error del servidor (${respuesta.status})`);
      }
      const data = await respuesta.json();
      setPersonajes((data.results ?? []).map(mapearPersonaje));
    } catch (e) {
      setError(e.message || 'No se pudieron cargar los datos');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarDatos();
  }, [cargarDatos]);

  return { personajes, cargando, error, recargar: cargarDatos };
}