import { useState, useEffect } from 'react';

export default function useCharacters() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los datos');
        return res.json();
      })
      .then((data) => setPersonajes(data.results))
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  return { personajes, cargando, error };
}