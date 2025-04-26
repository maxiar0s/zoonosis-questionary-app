import { Test } from '../interfaces/test';

export const tests: Test[] = [
  {
    id: 1,
    question: '¿Qué es una zoonosis?',
    options: [
      { id: 1, option: 'Enfermedad causada por hongos del ambiente' },
      { id: 2, option: 'Enfermedad transmitida entre humanos' },
      { id: 3, option: 'Enfermedad transmitida de animales a humanos' },
      { id: 4, option: 'Enfermedad causada por cambios genéticos' },
    ],
    correct: 'Enfermedad transmitida de animales a humanos',
  },
  {
    id: 2,
    question:
      '¿Cuál de estos animales representa un riesgo potencial de zoonosis?',
    options: [
      { id: 1, option: 'Conejos de criadero controlado' },
      { id: 2, option: 'Palomas urbanas' },
      { id: 3, option: 'Perros sin vacunación adecuada' },
      { id: 4, option: 'Caballos de competencia' },
    ],
    correct: 'Perros sin vacunación adecuada',
  },
  {
    id: 3,
    question: '¿Cuál es una vía común de transmisión de zoonosis?',
    options: [
      { id: 1, option: 'Ingesta de alimentos con conservantes' },
      {
        id: 2,
        option:
          'Contacto directo con fluidos o excretas de animales infectados',
      },
      { id: 3, option: 'Exposición a temperaturas extremas' },
      { id: 4, option: 'Herencia genética' },
    ],
    correct: 'Contacto directo con fluidos o excretas de animales infectados',
  },
  {
    id: 4,
    question:
      '¿Quién está capacitado específicamente para detectar y controlar una zoonosis en animales?',
    options: [
      { id: 1, option: 'Médico general' },
      { id: 2, option: 'Enfermero rural' },
      { id: 3, option: 'Médico veterinario' },
      { id: 4, option: 'Técnico agrícola' },
    ],
    correct: 'Médico veterinario',
  },
  {
    id: 5,
    question:
      '¿Qué enfermedad zoonótica se asocia más comúnmente con perros no vacunados?',
    options: [
      { id: 1, option: 'Brucelosis' },
      { id: 2, option: 'Leptospirosis' },
      { id: 3, option: 'Rabia' },
      { id: 4, option: 'Toxoplasmosis' },
    ],
    correct: 'Rabia',
  },
  {
    id: 6,
    question:
      '¿Qué estrategia es más efectiva para prevenir la aparición de una zoonosis en una comunidad?',
    options: [
      { id: 1, option: 'Aislar a los animales domésticos en jaulas' },
      { id: 2, option: 'Eliminar completamente los animales callejeros' },
      {
        id: 3,
        option: 'Implementar programas de vacunación y educación sanitaria',
      },
      { id: 4, option: 'Fumigar regularmente el entorno urbano' },
    ],
    correct: 'Implementar programas de vacunación y educación sanitaria',
  },
  {
    id: 7,
    question:
      '¿Qué grupo tiene mayor susceptibilidad frente a enfermedades zoonóticas?',
    options: [
      { id: 1, option: 'Personas con alta actividad física' },
      { id: 2, option: 'Personas inmunodeprimidas, niños y adultos mayores' },
      { id: 3, option: 'Personas con buena alimentación' },
      { id: 4, option: 'Personas que viven en ciudades' },
    ],
    correct: 'Personas inmunodeprimidas, niños y adultos mayores',
  },
  {
    id: 8,
    question:
      '¿Por qué es fundamental el conocimiento de zoonosis en la salud pública?',
    options: [
      {
        id: 1,
        option: 'Porque permite una mejor atención veterinaria individual',
      },
      {
        id: 2,
        option:
          'Porque ayuda a prevenir brotes y proteger la salud humana y animal',
      },
      { id: 3, option: 'Porque reduce la producción de residuos ganaderos' },
      {
        id: 4,
        option:
          'Porque mejora el comercio internacional de productos agrícolas',
      },
    ],
    correct:
      'Porque ayuda a prevenir brotes y proteger la salud humana y animal',
  },
  {
    id: 9,
    question:
      '¿Cuál es una forma común de infección humana por Cryptosporidium?',
    options: [
      { id: 1, option: 'Picadura de insectos vectores' },
      { id: 2, option: 'Ingesta de agua contaminada con ooquistes' },
      { id: 3, option: 'Inhalación de aerosoles generados por animales' },
      { id: 4, option: 'Contacto con piel de animales vacunados' },
    ],
    correct: 'Ingesta de agua contaminada con ooquistes',
  },
  {
    id: 10,
    question: '¿Qué tipo de parásito es Cryptosporidium?',
    options: [
      { id: 1, option: 'Trematodo' },
      { id: 2, option: 'Nematodo' },
      { id: 3, option: 'Cestodo' },
      { id: 4, option: 'Protozoario apicomplejo' },
    ],
    correct: 'Protozoario apicomplejo',
  },
];
