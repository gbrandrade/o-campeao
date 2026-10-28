// src/data/constants.ts
import type { DriverBase } from '../types/game';

export const MIN_AGE_PER_SERIES = [0, 14, 15, 16, 16, 17, 18];
export const MIN_OVR_PER_SERIES = [0, 50, 56, 62, 68, 73, 78];

export const CURRENT_DRIVERS: DriverBase[] = [
    { name: 'Max Verstappen', country: 'NED', rating: 96, attributes: [96, 92, 97, 92, 96, 29, 3, 97], legendTier: 0, birthYear: 1997 },
    { name: 'Charles Leclerc', country: 'MON', rating: 93, attributes: [93, 86, 93, 89, 95, 28, 2, 97], legendTier: 0, birthYear: 1997 },
    // Adicione o resto dos pilotos aqui copiando do arquivo original
];

export const TEAM_COLORS: Record<string, string> = {
    'Mercedes': '#00A19B',
    'McLaren': '#FF8000',
    'Ferrari': '#E8002D',
    'Red Bull': '#3671C6',
    // ...
};
