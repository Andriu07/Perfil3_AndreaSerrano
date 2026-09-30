import { useMemo } from 'react';

const ESTUDIANTE = {
  nombre: 'Andrea Serrano',
  carnet: '20240349',
  seccion: '1B',
};

export default function useStudent() {
  const iniciales = useMemo(
    () =>
      ESTUDIANTE.nombre
        .split(' ')
        .map((parte) => parte[0])
        .join('')
        .toUpperCase(),
    []
  );

  const datos = useMemo(
    () => [
      { etiqueta: 'Nombre', valor: ESTUDIANTE.nombre },
      { etiqueta: 'Carnet', valor: ESTUDIANTE.carnet },
      { etiqueta: 'Sección y Grupo', valor: ESTUDIANTE.seccion },
    ],
    []
  );

  return { estudiante: ESTUDIANTE, iniciales, datos };
}