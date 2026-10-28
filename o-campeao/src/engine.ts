// src/engine.ts

// =========================================================================
// 1. DADOS E CONSTANTES
// =========================================================================
export const IC = {
    trophy: `<svg class="ico" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    flag: `<svg class="ico" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    medal: `<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="14" r="6"/><path d="M8.21 8.89 7 2h10l-1.21 6.89"/></svg>`,
    star: `<svg class="ico" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    wallet: `<svg class="ico" viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
    home: `<svg class="ico" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    card: `<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/></svg>`,
    swords: `<svg class="ico" viewBox="0 0 24 24"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/></svg>`,
    check: `<svg class="ico" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    refresh: `<svg class="ico" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    rain: `<svg class="ico" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6M8 14v6M12 16v6"/></svg>`,
    bolt: `<svg class="ico" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    cap: `<svg class="ico" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    doc: `<svg class="ico" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    gauge: `<svg class="ico" viewBox="0 0 24 24"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
    disc: `<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
    brain: `<svg class="ico" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>`,
    gamepad: `<svg class="ico" viewBox="0 0 24 24"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>`,
    shirt: `<svg class="ico" viewBox="0 0 24 24"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
    plane: `<svg class="ico" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    car: `<svg class="ico" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`
};

export const MINAGE = [0, 14, 15, 16, 16, 17, 18];
export const MINOVR = [0, 50, 56, 62, 68, 73, 78];
export const SL_PTS = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 3, 2, 1, 0, 0, 0, 0, 0, 0],
    [12, 10, 7, 5, 3, 2, 1, 0, 0, 0],
    [25, 20, 15, 10, 7, 5, 3, 2, 1, 0],
    [30, 25, 20, 15, 12, 9, 7, 5, 3, 2],
    [40, 40, 40, 30, 20, 10, 8, 6, 4, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
export const AT = ['Qualificação', 'Ritmo de corrida', 'Largada', 'Ultrapassagem', 'Chuva', 'Gestão de pneus', 'Consistência', 'Mentalidade'];
export const NA = ['BRA · Brasil', 'ARG · Argentina', 'GBR · Reino Unido', 'GER · Alemanha', 'FRA · França', 'ESP · Espanha', 'ITA · Itália', 'NED · Holanda', 'MEX · México', 'USA · EUA', 'JPN · Japão', 'AUS · Austrália', 'CAN · Canadá', 'FIN · Finlândia', 'POR · Portugal', 'COL · Colômbia'];
export const TEAM_COLORS: any = { 'Mercedes': '#00A19B', 'McLaren': '#FF8000', 'Ferrari': '#E8002D', 'Red Bull': '#3671C6', 'Aston Martin': '#229971', 'Williams': '#64C4FF', 'Alpine': '#FF87BC', 'Haas': '#9A9895', 'Racing Bulls': '#6692FF', 'RB': '#6692FF', 'Sauber': '#52E252', 'Audi': '#F50537', 'Cadillac': '#D4AF37', 'Prema Racing': '#E11D48', 'Prema': '#E11D48', 'ART Grand Prix': '#DC2626', 'Trident': '#3B82F6', 'Campos Racing': '#F59E0B', 'Hitech Pulse-Eight': '#0EA5E9', 'MP Motorsport': '#EA580C', 'Van Amersfoort': '#F97316', 'Rodin Motorsport': '#10B981', 'DAMS Lucas Oil': '#38BDF8', 'Invicta Racing': '#EAB308', 'Tony Kart': '#16A34A', 'CRG': '#EA580C', 'KR Motorsport': '#2563EB', 'Birel ART': '#DC2626' };
export const F1T = [['Mercedes', 94], ['McLaren', 93], ['Ferrari', 91], ['Red Bull', 90], ['Aston Martin', 79], ['Williams', 76], ['Alpine', 73], ['Haas', 72], ['Racing Bulls', 70], ['Sauber', 67], ['Cadillac', 64]];
export const HIST_F1: any = {
    2018: [['F1 2018: Lewis Hamilton conquista o pentacampeonato mundial!', 'Em duelo intenso contra Sebastian Vettel, o britânico da Mercedes garante sua 5ª taça no México.'], ['MERCADO F1: Daniel Ricciardo choca o paddock e assina com a Renault', 'Charles Leclerc é promovido para a Ferrari em 2019 no lugar de Kimi Räikkönen, que retorna à Sauber.']],
    2019: [['F1 2019: Hamilton é hexacampeão; estreantes Norris, Russell e Albon chegam ao grid', 'A temporada também é marcada pelas primeiras vitórias de Charles Leclerc na Bélgica e em Monza pela Ferrari.'], ['BASTIDORES F1: Red Bull promove Alex Albon e Pierre Gasly retorna à Toro Rosso', 'Equipe austríaca muda sua dupla no meio do campeonato buscando maior regularidade.']],
    2020: [['F1 2020: Lewis Hamilton iguala os 7 títulos mundiais de Michael Schumacher!', 'Em temporada histórica com o dominante Mercedes W11, Hamilton bate o recorde de vitórias na categoria.'], ['MERCADO F1: Sebastian Vettel assina com a Aston Martin; Sainz vai para a Ferrari', 'Daniel Ricciardo assume a vaga na McLaren, enquanto Sergio Pérez é contratado pela Red Bull para 2021.']],
    2021: [['F1 2021: Max Verstappen vence Hamilton na última volta em Abu Dhabi e é campeão!', 'Após uma das maiores rivalidades da história da Fórmula 1, o holandês conquista seu primeiro título mundial pela Red Bull.'], ['MERCADO F1: George Russell é anunciado na Mercedes ao lado de Hamilton para 2022', 'Valtteri Bottas assina com a Alfa Romeo e Kimi Räikkönen se despede oficialmente da Fórmula 1.']],
    2022: [['F1 2022: Na nova era do efeito solo, Verstappen domina e conquista o bicampeonato!', 'Red Bull vence o Mundial de Construtores; Sebastian Vettel anuncia aposentadoria emocionante da F1.'], ['MERCADO F1: Fernando Alonso surpreende e assina com a Aston Martin para 2023', 'Oscar Piastri vence disputa contratual com a Alpine e estreará na F1 pela McLaren ao lado de Lando Norris.']],
    2023: [['F1 2023: Max Verstappen quebra todos os recordes com 19 vitórias e é tricampeão!', 'O RB19 da Red Bull vence 21 das 22 corridas do calendário; Carlos Sainz vence em Singapura pela Ferrari.'], ['BASE: Gabriel Bortoleto é campeão da FIA Fórmula 3 logo em seu ano de estreia!', 'O brasileiro impressiona o paddock da F1 e sobe para a Fórmula 2 na temporada seguinte.']],
    2024: [['BOMBA HISTÓRICA NA F1: Lewis Hamilton anuncia ida para a Ferrari em 2025!', 'O heptacampeão deixará a Mercedes após 12 anos para formar dupla com Charles Leclerc em Maranello.'], ['F1 2024: Verstappen segura pressão de Norris e conquista o tetracampeonato mundial!', 'McLaren encerra jejum de 26 anos e conquista o Mundial de Construtores; Bortoleto é campeão da F2.']],
    2025: [['F1 2025: Estreiam Kimi Antonelli na Mercedes, Gabriel Bortoleto na Sauber e Bearman na Haas!', 'Uma nova geração toma conta do grid enquanto Hamilton faz sua primeira temporada vestido de vermelho na Ferrari.'], ['PREPARAÇÃO 2026: Audi assume oficialmente a operação da Sauber e Cadillac entra no grid', 'O novo regulamento de motores e aerodinâmica ativa promete revolucionar a ordem de forças em 2026.']]
};
export const ACAD = [ { id: 'rbr', n: 'Red Bull Junior Team', c: '#3671C6', bonus: 'Prioridade na Red Bull / Racing Bulls e +1 Mentalidade por ano', tPref: ['Red Bull', 'Racing Bulls', 'RB'] }, { id: 'fda', n: 'Ferrari Driver Academy', c: '#E8002D', bonus: 'Prioridade na Ferrari / Haas e +1 Qualificação por ano', tPref: ['Ferrari', 'Haas', 'Sauber', 'Cadillac'] }, { id: 'mer', n: 'Mercedes Junior Team', c: '#00A19B', bonus: 'Prioridade na Mercedes / Williams e +1 Consistência por ano', tPref: ['Mercedes', 'Williams', 'McLaren'] } ];
export const LIFE_ITEMS = [ { id: 'vg', ico: IC.gamepad, n: 'SimRig Pro & Videogames', cost: 0.015, maint: 0.002, desc: 'Setup doméstico completo (+1 Consistência)', bonus: [6, 1] }, { id: 'cl', ico: IC.shirt, n: 'Guarda-Roupa de Grife', cost: 0.045, maint: 0.008, desc: 'Presença marcante no paddock (+1 Reputação)', rep: 1 }, { id: 'tr', ico: IC.plane, n: 'Férias VIP em Mônaco', cost: 0.12, maint: 0.025, desc: 'Descanso mental de luxo (+2 Mentalidade)', bonus: [7, 2] }, { id: 'ca', ico: IC.car, n: 'Supercarro V8 Biturbo', cost: 0.38, maint: 0.045, desc: 'Chegue aos autódromos em estilo (+1 Largada, +1 REP)', bonus: [2, 1], rep: 1 }, { id: 'ho', ico: IC.home, n: 'Mansão em Monte Carlo', cost: 3.2, maint: 0.18, desc: 'Endereço dos campeões (+2 Mentalidade, +2 REP)', bonus: [7, 2], rep: 2 } ];
export const SR: any[] = [
    { n: 'Karting', full: 'CIK-FIA World Karting', spec: '125cc 2T · Direct Drive', R: 8, lv: [46, 63], ageRange: [12, 15], driversPerTeam: 2, T: [['Tony Kart', 65], ['CRG', 63], ['KR Motorsport', 62], ['Birel ART', 60], ['Parolin', 58], ['Kosmic Racing', 56], ['Ward Racing', 55], ['Energy Corse', 53], ['Sodi Racing', 51], ['Lenzokart', 49]], tracks: ['South Garda', 'Adria', 'Sarno', 'Genk', 'Kristianstad', 'Le Mans', 'Portimão', 'Alahärmä'], roster: ['Lorenzo Travisanutto', 'Taylor Barnard', 'Dexter Patterson', 'Luigi Coluccio', 'Pedro Hiltbrand'] },
    { n: 'F-Delta / Vee', full: 'Fórmula Delta & Fórmula Vee', spec: 'Transição Escola · 130 cv', R: 8, lv: [51, 68], ageRange: [14, 18], driversPerTeam: 2, T: [['Fórmula Academy', 68], ['Lorenzetti Racing', 66], ['Rosset Racing', 65], ['W2 ProGP', 63], ['Bassani Jr', 62], ['TMG Escola', 60], ['Cesário Jr', 59], ['PropCar Base', 57]], tracks: ['Interlagos', 'Velocitta', 'Goiânia', 'Curvelo', 'Cascavel', 'Velopark', 'Tarumã', 'Interlagos Final'], roster: ['Gabriel Fonseca', 'Pedro Burger', 'Lucas Veloso'] },
    { n: 'Fórmula 4', full: 'FIA Formula 4 Championship', spec: 'Tatuus F4-T421 · 180 cv', R: 10, lv: [57, 74], ageRange: [15, 18], driversPerTeam: 2, T: [['Prema Racing', 76], ['US Racing', 74], ['Van Amersfoort', 73], ['MP Motorsport', 72], ['Campos Racing', 70], ['Cavaleiro Sports', 68], ['TMG Racing', 67]], tracks: ['Misano', 'Imola', 'Vallelunga', 'Mugello', 'Paul Ricard', 'Red Bull Ring', 'Barcelona', 'Spa', 'Monza', 'Interlagos'], roster: ['Freddie Slater', 'Akshay Bohra', 'Alex Powell'] },
    { n: 'FRECA', full: 'Formula Regional European', spec: 'Tatuus T-318 · 285 cv', R: 10, lv: [63, 79], ageRange: [16, 20], driversPerTeam: 2, T: [['Prema Racing', 81], ['R-ace GP', 80], ['ART Grand Prix', 78], ['Van Amersfoort', 77], ['Trident', 75], ['MP Motorsport', 74]], tracks: ['Hockenheim', 'Spa', 'Zandvoort', 'Hungaroring', 'Mugello', 'Paul Ricard', 'Imola', 'Red Bull Ring', 'Barcelona', 'Monza'], roster: ['Rafael Câmara', 'James Wharton', 'Brando Badoer'] },
    { n: 'Fórmula 3', full: 'FIA Formula 3 Championship', spec: 'Dallara F3 · 400 cv', R: 10, lv: [68, 84], ageRange: [16, 21], driversPerTeam: 3, T: [['Prema Racing', 85], ['Trident', 84], ['ART Grand Prix', 82], ['Campos Racing', 81], ['Hitech Pulse-Eight', 80], ['MP Motorsport', 78], ['Van Amersfoort', 76]], tracks: ['Sakhir', 'Melbourne', 'Imola', 'Monte Carlo', 'Barcelona', 'Red Bull Ring', 'Silverstone', 'Hungaroring', 'Spa', 'Monza'], roster: ['Leonardo Fornaroli', 'Gabriele Minì', 'Luke Browning'] },
    { n: 'Fórmula 2', full: 'FIA Formula 2 Championship', spec: 'Dallara F2 2024 · 620 cv', R: 14, lv: [74, 89], ageRange: [17, 23], driversPerTeam: 2, T: [['Invicta Racing', 90], ['Campos Racing', 89], ['MP Motorsport', 88], ['Prema Racing', 87], ['Rodin Motorsport', 86], ['Hitech Pulse-Eight', 85], ['ART Grand Prix', 84]], tracks: ['Sakhir', 'Jeddah', 'Melbourne', 'Imola', 'Monte Carlo', 'Barcelona', 'Red Bull Ring', 'Silverstone', 'Hungaroring', 'Spa', 'Monza', 'Baku', 'Lusail', 'Yas Marina'], roster: ['Paul Aron', 'Zane Maloney', 'Jak Crawford'] },
    { n: 'Fórmula 1', full: 'FIA Formula One World Champ.', spec: '1000 cv Híbrido', R: 24, tracks: ['Sakhir', 'Jeddah', 'Melbourne', 'Suzuka', 'Xangai', 'Miami', 'Imola', 'Monte Carlo', 'Montreal', 'Barcelona', 'Red Bull Ring', 'Silverstone', 'Hungaroring', 'Spa', 'Zandvoort', 'Monza', 'Baku', 'Marina Bay', 'Austin', 'México', 'Interlagos', 'Las Vegas', 'Lusail', 'Yas Marina'] }
];

const att = (d: any) => { const [e, r, a, p] = [d[3], d[4], d[5], d[6]]; return [p, (r + p) / 2, (r + a) / 2, r, a, e, (a + e) / 2, (e * 2 + a) / 3].map(Math.round); };
export const CUR = [
    ['Kimi Antonelli', 'ITA', 90, 75, 91, 90, 93, 20, 0, 2006],
    ['George Russell', 'GBR', 93, 85, 94, 91, 94, 28, 0, 1998],
    ['Lando Norris', 'GBR', 93, 85, 93, 88, 94, 26, 1, 1999],
    ['Max Verstappen', 'NED', 96, 92, 97, 92, 96, 29, 3, 1997],
    ['Charles Leclerc', 'MON', 93, 86, 93, 89, 95, 28, 2, 1997],
    ['Lewis Hamilton', 'GBR', 92, 99, 94, 91, 92, 41, 2, 1985],
    ['Oscar Piastri', 'AUS', 91, 81, 92, 87, 91, 25, 1, 2001],
    ['Fernando Alonso', 'ESP', 89, 99, 91, 88, 88, 45, 4, 1981],
    ['Carlos Sainz', 'ESP', 88, 89, 89, 85, 87, 32, 5, 1994],
    ['Pierre Gasly', 'FRA', 85, 85, 85, 82, 85, 30, 6, 1996],
    ['Alexander Albon', 'THA', 85, 85, 86, 81, 85, 30, 5, 1996]
];
export const L = [['Sebastian Vettel', 'GER', [96, 93, 94, 89, 88, 91, 92, 91]], ['Niki Lauda', 'AUT', [88, 94, 85, 88, 90, 95, 97, 98]], ['Jim Clark', 'GBR', [98, 97, 95, 93, 97, 90, 92, 94]], ['Jackie Stewart', 'GBR', [93, 95, 91, 92, 99, 92, 95, 95]], ['Mika Häkkinen', 'FIN', [96, 94, 91, 93, 92, 87, 89, 92]], ['Nelson Piquet', 'BRA', [92, 93, 88, 90, 92, 96, 93, 94]], ['Emerson Fittipaldi', 'BRA', [89, 91, 86, 89, 89, 93, 91, 92]]];
export const PRIME = [['Verstappen (2023)', 'NED', [97, 99, 95, 97, 99, 97, 99, 99]], ['Schumacher (2004)', 'GER', [98, 99, 96, 96, 96, 95, 99, 99]], ['Schumacher (2002)', 'GER', [96, 99, 95, 94, 98, 93, 99, 99]], ['Senna (1988)', 'BRA', [99, 98, 93, 97, 99, 87, 92, 98]], ['Senna (1991)', 'BRA', [98, 97, 94, 96, 99, 90, 95, 99]], ['Hamilton (2020)', 'GBR', [99, 98, 94, 95, 99, 98, 99, 99]]];
export const POOL = CUR.map((d: any) => ({ n: d[0], f: d[1], rtg: d[2], a: att(d), leg: 0 })).concat(L.map((l: any) => ({ n: l[0], f: l[1], rtg: Math.round(l[2].reduce((a:any, b:any) => a + b) / 8), a: l[2], leg: 1 }))).concat(PRIME.map((l: any) => ({ n: l[0], f: l[1], rtg: Math.round(l[2].reduce((a:any, b:any) => a + b) / 8), a: l[2], leg: 2 })));
export const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
export const SPT = [8, 7, 6, 5, 4, 3, 2, 1];
export const EV = [
    ['Chuva torrencial no circuito. O engenheiro pergunta no rádio se você quer arriscar tudo por fora ou manter o traçado seguro.', ['Arriscar tudo no molhado', .35, 'Manobra antológica na chuva! (Chuva +3)', 4, 3, 3, 'Aquaplanou na zebra e perdeu tempo. (Mentalidade -1)', 7, -1, -3], ['Manter traçado conservador', .78, 'Leitura fria da aderência e pontos garantidos. (Consistência +1)', 6, 1, 1, 'Ficou preso no spray de água e perdeu ritmo nas retas.', 6, 0, -1]],
    ['Janela de Pit Stop aberta. A degradação térmica dos pneus traseiros subiu. Qual é a chamada no rádio?', ['Parar cedo (Tentar Undercut)', .45, 'Undercut cirúrgico! Volta de saída voadora. (Gestão de pneus +3)', 5, 3, 2, 'Saiu atrás de tráfego lento com DRS e fritou os pneus.', 5, -1, -2], ['Esticar o stint na pista (Overcut)', .68, 'Gestão magistral de borracha em ar limpo! (Gestão de pneus +1)', 5, 1, 1, 'Os pneus caíram do penhasco nas últimas voltas. (Gestão -1)', 5, -1, -2]],
    ['Disputa roda a roda com seu companheiro de equipe na freada da Curva 1!', ['Mergulhar por dentro na freada', .40, 'Passou no limite! Mostrou quem manda. (Ultrapassagem +3)', 3, 3, 2, 'Toque entre os dois carros! Clima tenso no debriefing. (Mentalidade -2)', 7, -2, -3], ['Recolher e priorizar a equipe', .85, 'Jogo de equipe exemplar. O chefe elogiou. (Mentalidade +1)', 7, 1, 1, 'Perdeu embalo e acabou engolido pelo pelotão.', 7, -1, 0]],
    ['A fábrica trouxe um novo assoalho aerodinâmico experimental para o fim de semana.', ['Instalar especificação agressiva', .35, 'Correlação perfeita com o túnel de vento! O carro ganhou downforce. (Ritmo +2)', 1, 2, 4, 'O carro sofreu com porpoising severo nas retas. (Ritmo -1)', 1, -1, -3], ['Manter pacote aerodinâmico conhecido', .82, 'Acerto de suspensão refinado e carro na mão. (Ritmo +1)', 1, 1, 1, 'Sem ganho de velocidade frente aos rivais.', 1, 0, 0]]
];
export const FN = ['Lucas', 'Mateo', 'Jonas', 'Dennis', 'Kai', 'Luca', 'Theo', 'Oscar', 'Noah', 'Ethan', 'Gabriel', 'Enzo', 'Arthur', 'Rafael', 'Tom', 'Leo'];
export const LN = ['Silva', 'Moretti', 'Weber', 'Hansen', 'Garcia', 'Tanaka', 'Dubois', 'Keller', 'Novak', 'Ricci', 'Costa', 'Bianchi', 'Fischer', 'Rossi', 'Lopes', 'Meyer'];
export const TN = ['Piloto comum', 'Sensação de uma temporada', 'Piloto de ponta', 'Vencedor de GPs', 'Campeão do mundo', 'Bicampeão', 'Tricampeão', 'Lenda do grid', 'Top 5 de todos os tempos', 'Sempre citado no debate GOAT', 'O CAMPEÃO'];

// =========================================================================
// 2. ESTADO E LÓGICA
// =========================================================================
export let G: any = null;
export let S: any = null;

let listeners: (() => void)[] = [];
export const subscribe = (listener: () => void) => { listeners.push(listener); return () => { listeners = listeners.filter(l => l !== listener); }; };
export const notify = () => listeners.forEach(l => l());

export const R = (s: string) => {
    let h = 1779033703 ^ s.length;
    for (let i = 0; i < s.length; i++) { h = Math.imul(h ^ s.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
    let a = h >>> 0;
    return () => {
        a = a + 0x6D2B79F5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
};

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const gF = (a: number) => a <= 24 ? .7 + (a - 12) * .025 : a <= 33 ? 1 : 1 - (a - 33) * .02;
export const pot = () => S.v.reduce((a:number, b:number) => a + b) / 8;
export const ovr = () => S.god ? 100 : Math.round(pot() * gF(S.age));
export const nw = (t: string, d: string) => S.news.unshift({ y: S.year, t, d: d || '', i: S.nid++ });

const rn = (r:any) => FN[Math.floor(r() * 16)] + ' ' + LN[Math.floor(r() * 16)];
const rf = (r:any) => NA[Math.floor(r() * 16)].split(' ')[0];

// =========================================================================
// 3. DRAFT
// =========================================================================
export function startDraft(sd: string, cleanName: string, numStr: string, eggType: string | null) {
    const n = 'BRA';
    const isMax = eggType === 'max'; const isLec = eggType === 'lec'; const isEgg = isMax || isLec;
    G = {
        seed: sd,
        name: isLec ? 'CHARLES LECLERC' : isMax ? 'MAX VERSTAPPEN' : (cleanName || 'SEU PILOTO').toUpperCase(),
        num: isLec ? 16 : isMax ? 1 : clamp(+numStr || 7, 1, 99),
        flag: isLec ? 'MON' : isMax ? 'NED' : n,
        v: isEgg ? Array(8).fill(100) : Array(8).fill(null),
        used: [], spin: isEgg ? 8 : 0, k: 0, rr: 2,
        cur: isLec ? { n: 'Charles Leclerc', f: 'MON', rtg: 100, a: Array(8).fill(100), leg: 2 } : null,
        god: isEgg ? 1 : 0, egg: eggType
    };
    S = null;
    if (isEgg) notify(); else spinDraft();
}

export function spinDraft() {
    if (G.spin >= 8) { notify(); return; }
    const r = R(G.seed + 'd' + G.spin + '_' + G.k); const roll = r();
    let leg = roll < 0.03 ? 2 : roll < 0.11 ? 1 : 0;
    let p = POOL.filter(x => x.leg === leg && !G.used.includes(x.n));
    if (!p.length) p = POOL.filter(x => !G.used.includes(x.n));
    G.cur = p[Math.floor(r() * p.length)];
    notify();
}

export function pickAttribute(i: number) {
    G.v[i] = Math.min(99, G.cur.a[i]); G.used.push(G.cur.n); G.spin++; G.k = 0; spinDraft();
}
export function swapDriver() { if (G.rr > 0) { G.rr--; G.k++; spinDraft(); } }

export function startCareer() {
    S = {
        seed: G.seed, name: G.name, flag: G.flag, num: G.num, v: G.v.slice(), ser: 0, year: 2018, age: 12, sy: 1, team: 0, tn: '—',
        rows: [], rlog: [], news: [], tot: { t: 0, w: 0, pd: 0, pts: 0 }, peak: 0, bad: 0, tab: 0, F: [], T: [], me: { pts: 0, w: 0, pd: 0 },
        first: 1, msg: '', op: {}, pe: 0, nid: 0, rep: 0, cash: 0, sl: G.god ? 40 : 0, items: [], con: null, neg: null, god: G.god,
        brk: 0, f1Init: 0, acad: null, h2h: { qW: 0, qL: 0, rW: 0, rL: 0 }, trDone: 0
    };
    nw('Temporada 2018: Um novo talento surge no Kartismo: ' + S.name, 'Aos 12 anos, começa a sua caminhada rumo à F1.');
    const startVal = pot() * 0.7 + ovr() * 0.3;
    let eligible = startVal >= 82 ? [0,1,2,3] : startVal >= 72 ? [1,2,3,4,5] : startVal >= 62 ? [3,4,5,6,7] : [5,6,7,8,9];
    const r = R(S.seed + 'k');
    S.offs = eligible.sort(() => r() - 0.5).slice(0, 3).sort((a, b) => a - b).map(t => ({ ser: 0, t }));
    S.ph = 'offer';
    notify();
}

// =========================================================================
// 4. CARREIRA E MERCADO
// =========================================================================
export const carBase = (ser: number, t: number, y: number) => { const [n, b] = SR[ser].T[t], q = R(S.seed + 'cj' + ser + n + y); return clamp(Math.round(b + (q() + q() - 1) * 7), 45, 95); };

export function getCarRankInfo(ser: number, tIdx: number, fut: boolean = false) {
    const y = S.first ? S.year : S.year + 1;
    let cars;
    if (ser === 6) {
        if (!S.f1Init && fut) buildF1GridForYear(y);
        cars = (S.f1t && S.f1t.length ? S.f1t : F1T.map(([n, c]) => ({ n, c }))).map((t:any) => t.c);
    } else if (!fut && S.T && S.T.length && S.ser === ser) {
        cars = S.T.map((t:any) => t.c);
    } else {
        cars = SR[ser].T.map((_:any, i:number) => carBase(ser, i, y));
    }
    const order = cars.map((c:any, idx:number) => ({ idx, c: Math.round(c) })).sort((a:any, b:any) => b.c - a.c);
    const rank = order.findIndex((x:any) => x.idx === tIdx) + 1, total = order.length;
    let label = 'Intermediário';
    if (rank === 1) label = 'Melhor Carro'; else if (rank <= 3) label = 'Top 3 (Ponta)'; else if (rank === total) label = 'Pior Carro'; else if (rank >= total - 2) label = 'Fundo do grid';
    return { rank, total, label, ovr: Math.round(cars[tIdx]) };
}

export const carOf = (o: any) => getCarRankInfo(o.ser, o.t, true).ovr;
export const tnOf = (o: any) => o.ser === 6 ? (S && S.f1t && S.f1t.length ? S.f1t[o.t].n : F1T[o.t][0]) : SR[o.ser].T[o.t][0];
export const getTeammate = () => S.F ? S.F.find((d:any) => d.t === S.team && !d.p) : null;
export const rank = () => [...S.F].sort((a, b) => b.pts - a.pts || b.w - a.w || (b.r || 0) - (a.r || 0));
export const canGo = (s: number) => S.age + 1 >= MINAGE[s];

function buildF1GridForYear(y: number) {
    let teams, drivers;
    if (y <= 2024) {
        teams = [['McLaren', 95], ['Ferrari', 94], ['Red Bull', 94], ['Mercedes', 90], ['Aston Martin', 80], ['Alpine', 76], ['Haas', 75], ['RB', 74], ['Williams', 72], ['Sauber', 66]];
        drivers = [['Lando Norris', 'GBR', 92, 1999, 0], ['Oscar Piastri', 'AUS', 89, 2001, 0], ['Charles Leclerc', 'MON', 93, 1997, 1], ['Carlos Sainz', 'ESP', 89, 1994, 1], ['Max Verstappen', 'NED', 96, 1997, 2], ['Sergio Pérez', 'MEX', 82, 1990, 2], ['Lewis Hamilton', 'GBR', 92, 1985, 3], ['George Russell', 'GBR', 91, 1998, 3], ['Fernando Alonso', 'ESP', 90, 1981, 4], ['Lance Stroll', 'CAN', 78, 1998, 4], ['Pierre Gasly', 'FRA', 85, 1996, 5], ['Esteban Ocon', 'FRA', 84, 1996, 5], ['Nico Hülkenberg', 'GER', 85, 1987, 6], ['Kevin Magnussen', 'DEN', 79, 1992, 6], ['Yuki Tsunoda', 'JPN', 82, 2000, 7], ['Liam Lawson', 'NZL', 80, 2002, 7], ['Alexander Albon', 'THA', 85, 1996, 8], ['Franco Colapinto', 'ARG', 78, 2003, 8], ['Valtteri Bottas', 'FIN', 82, 1989, 9], ['Zhou Guanyu', 'CHN', 77, 1999, 9]];
    } else {
        teams = [['Mercedes', 95], ['McLaren', 93], ['Ferrari', 91], ['Red Bull', 89], ['Aston Martin', 80], ['Williams', 76], ['Alpine', 74], ['Haas', 72], ['Racing Bulls', 70], ['Audi', 68], ['Cadillac', 64]];
        drivers = CUR.slice(0, 20).map((d, idx) => [d[0], d[1], d[2], d[9], Math.floor(idx / 2)]);
    }
    S.f1t = teams.map(([n, c]) => ({ n, c, b: c, pts: 0 }));
    S.grid = drivers.map(([n, f, r, by, t]) => ({ n, f, r, by, age: y - (by as number), t, pts: 0, w: 0, pd: 0, qW: 0 }));
}

function init() {
    const y = S.year, sr = SR[S.ser], r = R(S.seed + 'i' + y + '_' + S.ser);
    S.me.pts = S.me.w = S.me.pd = 0; S.me.p = 1; S.me.n = S.name; S.me.f = S.flag; S.me.t = S.team;
    S.h2h = { qW: 0, qL: 0, rW: 0, rL: 0 };
    S.trDone = 0;
    const streakBonus = S.ser === 6 ? Math.min(5, (S.streak || 0) * 1.5) : 0;
    const playerOvr = ovr();

    if (S.ser < 6) {
        S.T = sr.T.map(([nome]:any, i:number) => ({ n: nome, c: carBase(S.ser, i, y), pts: 0 }));
        S.F = [];
        const dpt = sr.driversPerTeam || 2;
        const poolNames = [...(sr.roster || [])].sort(() => r() - 0.5);
        const [minA, maxA] = sr.ageRange || [15, 20];
        const catMid = (sr.lv[0] + sr.lv[1]) / 2;
        const adaptiveTarget = S.god ? catMid + 8 : Math.max(catMid, playerOvr * 0.68 + catMid * 0.32 + 1.5);

        sr.T.forEach((_:any, i:number) => {
            for (let k = 0; k < dpt; k++) {
                let dName = poolNames.pop();
                if (!dName || (S.sy > 1 && r() < 0.35)) dName = rn(r);
                const dAge = minA + Math.floor(r() * (maxA - minA + 1));
                const teamFactor = (5 - i) * 0.9;
                const spread = (r() + r() - 1) * 7.5;
                const dOvr = clamp(Math.round(adaptiveTarget + teamFactor + spread), sr.lv[0], 96);
                S.F.push({ n: dName, f: rf(r), t: i, r: dOvr, age: dAge, pts: 0, w: 0, pd: 0 });
            }
        });
        S.F[dpt * S.team + 1] = S.me;
        S.F.forEach((d:any) => { d.form = d.p ? 0 : (r() - .48) * 7 + (r() < .15 ? 4 : 0); });
        S.tn = S.T[S.team].n;
        S.sess = sr.tracks.map((trk:any) => ({ type: 'gp', track: trk }));
    } else {
        S.F = S.grid; S.T = S.f1t;
        S.F.forEach((d:any) => {
            d.pts = d.w = d.pd = 0;
            if (!d.p && !S.god && d.r < playerOvr - 8) { d.r = clamp(Math.round(d.r * 0.75 + playerOvr * 0.25), 72, 98); }
            d.form = d.p ? 0 : (r() - .48) * 7 + (r() < .15 ? 4 : 0) + streakBonus;
        });
        S.T.forEach((t:any) => t.pts = 0);
        S.tn = S.T[S.team].n;
        S.sess = [];
        SR[6].tracks.forEach((trk:any, i:number) => {
            if ([4, 5, 10, 18, 20, 22].includes(i)) S.sess.push({ type: 'sp', track: trk + ' (Sprint)' });
            S.sess.push({ type: 'gp', track: trk });
        });
    }
    S.mod = 0; S.ph = 'start'; S.msg = ''; S.ev = EV[Math.floor(R(S.seed + 'ev' + y + S.ser)() * EV.length)];
}

export function pick(o: any) {
    if (!S.first) {
        if (S.f1Init) market();
        S.year++; S.age++;
    }
    S.first = 0; if (o.ser === S.ser) S.sy++; else S.sy = 1;
    if (o.ser === 6) {
        if (!S.f1Init) {
            buildF1GridForYear(S.year);
            S.f1Init = 1;
            nw(`ESTREIA NA F1: ${S.name} assina com a ${S.f1t[o.t].n} para ${S.year}!`, `Aos ${S.age} anos, você entra na Fórmula 1.`);
        }
        S.ser = 6;
        place(o.t);
    } else { S.ser = o.ser; }
    S.team = o.t; init();
}

function place(t: number) {
    const g = S.grid;
    if (g.includes(S.me) && S.me.t !== t) g[g.indexOf(S.me)] = rookie(S.me.t);
    if (!g.includes(S.me)) { const c = g.filter((d:any) => d.t === t && !d.p).sort((a:any, b:any) => a.r - b.r)[0]; g[g.indexOf(c)] = S.me; }
    S.me.t = t;
}

function rookie(t: number) {
    S.nid++;
    const r = R(S.seed + 'rk' + S.year + t + S.nid);
    const age = 19 + Math.floor(r() * 3);
    return { n: rn(r), f: rf(r), t, r: Math.round(72 + r() * 9), pk: Math.round(78 + Math.pow(r(), 2) * 20), age, by: S.year - age, ct: 2, pts: 0, w: 0, pd: 0 };
}

function sim_races(a: number, b: number) {
    let res = null;
    const tm = getTeammate();
    const playerOvr = ovr();
    for (let i = a; i < b; i++) {
        const rr = R(S.seed + 'r' + S.year + S.ser + i);
        const sessObj = S.sess[i];
        const sp = sessObj.type === 'sp', wet = rr() < .18, P = sp ? SPT : PTS;
        let qs = S.F.map((d:any) => {
            let q_sk = d.p ? S.v[0]*gF(S.age) : d.r + (d.form||0);
            return {d, q: q_sk*0.42 + S.T[d.t].c*0.58 + (rr()-0.5)*13};
        }).sort((x:any,y:any) => y.q - x.q);
        qs.forEach((item:any, idx:number) => item.grid = idx + 1);

        const meQ = qs.find((x:any) => x.d.p), tmQ = tm ? qs.find((x:any) => x.d === tm) : null;
        if (!sp && meQ && tmQ) { if (meQ.grid < tmQ.grid) S.h2h.qW++; else S.h2h.qL++; }

        let rs = qs.map((item:any) => {
            let d = item.d;
            const car = S.T[d.t].c;
            if (rr() < clamp(.02 + (82 - car) * .002, .015, .10)) return {d, s: -999, grid: item.grid};
            let r_sk = d.p ? S.v[1]*gF(S.age) : d.r + (d.form||0);
            let start_bonus = d.p ? (S.v[2]-playerOvr)*0.07 : (rr()-0.45)*1.5;
            let overt_bonus = (d.p && item.grid > 6) ? (S.v[3]-playerOvr)*0.12 : 0;
            let rain_bonus  = wet ? (d.p ? (S.v[4]-playerOvr)*0.20 : (rr()-0.45)*3) : 0;
            let tire_bonus  = !sp ? (d.p ? (S.v[5]-playerOvr)*0.08 : (rr()-0.45)*1.5) : 0;
            let ment_bonus  = (d.p && i >= S.sess.length - 2) ? (S.v[7]-playerOvr)*0.12 : 0;
            let player_mod  = d.p ? S.mod : 0;
            let rng_spread  = d.p ? Math.max(5, 14 - (S.v[6]-70)*0.12) : 13.5;
            let s = r_sk*0.32 + car*0.48 + item.q*0.15 + start_bonus + overt_bonus + rain_bonus + tire_bonus + ment_bonus + player_mod + ((rr() + rr() + rr() - 1.5) * rng_spread);
            s -= item.grid * 0.5;
            return {d, s, grid: item.grid};
        }).sort((x:any,y:any) => y.s - x.s);

        let mePos = S.F.length, tmPos = S.F.length;
        const winnerName = rs[0] && rs[0].s > -50 ? rs[0].d.n : '—';
        rs.forEach((item:any, j:number) => {
            const d = item.d;
            if (d.p) mePos = j + 1;
            if (d === tm) tmPos = j + 1;
            if (item.s < -50) {
                if (d.p) res = { grid: item.grid, pos: j + 1, pts: 0, wet, sp, dnf: 1, tmPos, track: sessObj.track, win: winnerName };
                return;
            }
            const pts = P[j] || 0;
            d.pts += pts; S.T[d.t].pts += pts;
            if (!sp) { if (j === 0) d.w++; if (j < 3) d.pd++; }
            if (d.p) res = { grid: item.grid, pos: j + 1, pts, wet, sp, dnf: 0, tmPos, track: sessObj.track, win: winnerName };
        });
        if (res && tm) (res as any).tmPos = tmPos;
        if (!sp && tm) { if (mePos < tmPos) S.h2h.rW++; else S.h2h.rL++; }
        if (res) S.rlog.unshift({ y: S.year, ser: SR[S.ser].n, rnd: i + 1, track: sessObj.track, grid: (res as any).grid, pos: (res as any).dnf ? 'DNF' : (res as any).pos, pts: (res as any).pts, wet: (res as any).wet, sp: (res as any).sp, win: winnerName });
    }
    return res;
}

function market() {
    const g = S.grid, T = S.f1t, r = R(S.seed + 'm' + S.year), y = S.year + 1;
    const cn = (d:any) => T[d.t].n, pk1 = (a:any) => a[Math.floor(r() * a.length)];
    if (y === 2026) {
        const sb = T.find((t:any) => t.n === 'Sauber');
        if (sb) { sb.n = 'Audi'; nw('OFICIAL: Audi assume a operação da Sauber em 2026', ''); }
        if (T.length < 11) { const cadIdx = T.length; T.push({ n: 'Cadillac', c: 64, b: 64, pts: 0 }); g.push(rookie(cadIdx), rookie(cadIdx)); nw('GRID EXPANDIDO: Cadillac entra na Fórmula 1 em 2026', ''); }
    }
    g.forEach((d:any) => {
        if (d.p) return;
        d.age = d.by ? (y - d.by) : (d.age + 1);
        d.pk ??= Math.round(clamp(d.r + (d.age < 25 ? 3 + r() * 5 : 0), 60, 98));
        d.r = clamp(Math.round(d.age < 27 ? Math.min(d.pk, d.r + .5 + r() * 3) : d.age < 34 ? d.r + (r() - .5) * 2 : d.r - (.8 + r() * 2)), 60, 98);
        d.ct = (d.ct ?? 1 + Math.floor(r() * 3)) - 1;
    });
    g.forEach((d:any, i:number) => {
        if (d.p || d.age < 37 || r() >= Math.min(.6, (d.age - 35) * .15)) return;
        const n = rookie(d.t); g[i] = n;
        nw(...pk1([['ADEUS ÀS PISTAS: ' + d.n + ' anuncia aposentadoria da F1', ''], ['FIM DE UMA ERA: ' + d.n + ' se despede', '']]));
    });
    const open = g.filter((d:any) => !d.p && d.ct <= 0);
    for (let k = 0, x = 0; k < 80 && x < 2 && open.length > 1; k++) {
        const a = open[Math.floor(r() * open.length)], b = open[Math.floor(r() * open.length)];
        if (a.t === b.t || a.ct > 0 || b.ct > 0) continue;
        if (T[b.t].c < T[a.t].c + 6) continue;
        if (a.r < b.r + 2 || (b.r >= 86 && b.age < 35)) continue;
        const from = cn(a), to = cn(b); [a.t, b.t] = [b.t, a.t];
        a.ct = 2 + Math.floor(r() * 2); b.ct = 1 + Math.floor(r() * 2); x++;
        nw('OFICIAL: ' + a.n + ' assina com a ' + to + ' para ' + y, `Deixa a ${from}.`);
    }
    g.forEach((d:any) => { if (!d.p && d.ct <= 0) d.ct = d.r >= 86 ? 2 + Math.floor(r() * 3) : 1 + Math.floor(r() * 2); });
}

function carsStep() {
    const r = R(S.seed + 'cs' + S.year), T = S.f1t, old = T.map((t:any) => t.c), rk = [...T].sort((a:any, b:any) => b.pts - a.pts);
    if (S.nx) {
        T.forEach((t:any, i:number) => {
            t.b = Math.round(.5 * (t.b ?? t.c) + .5 * S.nx[i]);
            t.c = clamp(Math.round(.4 * t.c + .6 * t.b + (r() - .5) * 6), old[i] - 14, old[i] + 14);
        });
        S.nx = null;
    } else {
        T.forEach((t:any) => {
            t.b ??= t.c;
            const pos = rk.indexOf(t), atr = pos < 3 ? -1.5 : pos >= T.length - 3 ? 2 : 0;
            t.c = clamp(Math.round(t.c + clamp((t.b + atr - t.c) * .3 + (r() + r() - 1) * 7, -9, 9)), Math.max(50, t.b - 12), Math.min(97, t.b + 9));
        });
    }
}

// CORREÇÃO: A Lógica de Ofertas Restaurada Integralmente!
function offers() {
    const nextYear = S.first ? S.year : S.year + 1;
    const P = Math.max(1, S.last ? S.last.pos - (S.rep >= 2 ? 2 : S.rep <= -2 ? -2 : 0) : 5);
    const r = R(S.seed + 'o' + S.year), o:any[] = [];
    const pk = (a:any[], n:number) => { a = [...a]; const x = []; while (x.length < n && a.length) x.push(a.splice(Math.floor(r() * a.length), 1)[0]); return x; };
    const ser = S.ser, wonBase = (S.last && S.last.pos === 1 && ser < 6);
    const hasOvrNext = ovr() >= MINOVR[Math.min(6, ser + 1)] - (wonBase ? 4 : 0);

    let pro = ser < 6 && canGo(ser + 1) && hasOvrNext && (P <= 3 || (S.sy >= 2 && ser < 5 && P <= 7) || wonBase);
    if (ser === 5 && pro && S.sl < 40) { pro = false; S.msg += ` Você tem ${S.sl}/40 pontos de Superlicença FIA. Precisa acumular 40 pts para estrear na F1.`; }

    const jump = !wonBase && (ser >= 1 && ser <= 3) && canGo(ser + 2) && ovr() >= MINOVR[ser + 2] && P <= 2 && (S.brk || S.spons > 0) && r() < .45;
    if (jump) S.msg += ' Seu talento impressionou os olheiros: convite para saltar um degrau da base!';

    let tgt;
    if (ser === 6) tgt = 6;
    else if (wonBase && ser === 5) {
        tgt = (S.sl >= 40 && canGo(6)) ? 6 : 5;
    } else if (wonBase && canGo(ser + 1)) {
        tgt = ser + 1;
    } else {
        tgt = jump ? ser + 2 : pro ? ser + 1 : ser;
    }

    const driverVal = (ovr() * 0.55) + (pot() * 0.45) + (S.rep * 2) + (S.last ? (S.last.pos === 1 ? 10 : S.last.pos <= 3 ? 5 : S.last.pos <= 6 ? 1 : -4) : 0);

    if (tgt === 6) {
        if (!S.f1Init) buildF1GridForYear(nextYear);
        const cap = (ser === 6 ? ovr() + (P == 1 ? 10 : P <= 3 ? 6 : P <= 6 ? 3 : P <= 10 ? 0 : -6) : ovr() * .98 + (P == 1 ? 12 : P <= 3 ? 6 : 0)) + (S.spons > 0 ? 5 : 0) + S.rep * 2 + (S.acad ? 4 : 0);
        let el = S.f1t.map((_:any, i:number) => i).filter((i:number) => S.f1t[i].c <= cap && (ser !== 6 || i !== S.team));
        if (!el.length) el = [S.f1t.length - 3, S.f1t.length - 2, S.f1t.length - 1];
        if (S.acad && ser < 6) { const prefIdx = S.f1t.findIndex((t:any) => ACAD.find(a=>a.id===S.acad)?.tPref.includes(t.n)); if (prefIdx !== -1 && !el.includes(prefIdx)) el.unshift(prefIdx); }
        pk(el, ser === 6 ? 2 : 3).forEach(t => o.push({ ser: 6, t }));
        if (ser === 6 && !(P > 14 && r() < .5)) o.unshift({ ser: 6, t: S.team, re: 1 });
    } else {
        let band;
        if (wonBase) band = driverVal >= 76 ? [0, 1, 2, 3] : [1, 2, 3, 4, 5];
        else if (S.paid) band = [6, 7, 8, 9];
        else if (tgt > ser) {
            if (driverVal >= 82) band = [0, 1, 2, 3]; else if (driverVal >= 72) band = [1, 2, 3, 4, 5]; else if (driverVal >= 64) band = [3, 4, 5, 6, 7]; else band = [5, 6, 7, 8, 9];
        } else {
            if (P <= 2) band = [0, 1, 2, 3]; else if (P <= 5) band = [1, 2, 3, 4, 5, 6]; else band = [4, 5, 6, 7, 8, 9];
        }
        pk(band, 3).sort((a:any, b:any) => a - b).forEach(t => o.push({ ser: tgt, t }));
    }
    S.brk = 0; return o;
}

function prepOffers() {
    let of = offers();
    if (S.con && S.con.left > 0) { const P = S.last.pos; of = [{ ser: S.ser, t: S.team, cont: 1 }].concat(of.filter(x => !x.re && !(x.ser === S.ser && x.t === S.team) && (P <= 3 || S.rep >= 3)).slice(0, 1).map(x => ({ ...x, poach: 1 }))); }
    S.offs = of; if (S.spons > 0) S.spons--; S.ph = 'offer';
}

function evalCon() {
    const c = S.con, g = [];
    if (c.w) g.push(c.gw >= c.w); if (c.p) g.push(c.gp >= c.p); if (c.ti) g.push(c.gt > 0);
    S.con = null; if (!g.length) return;
    const r = g.filter(x => x).length / g.length;
    if (r >= 1) { S.rep += 3; S.msg += ' Metas batidas com sucesso!'; } else if (r >= .5) { S.rep += 1; } else { S.rep -= 2; S.msg += ' Falhou nas metas.'; }
    S.rep = clamp(S.rep, -6, 8);
}

function seasonEnd() {
    const rk = rank(), pos = rk.indexOf(S.me) + 1, me = S.me, F1 = S.ser === 6, N = SR[S.ser].n, r = R(S.seed + 'se' + S.year + S.ser);
    S.last = { pos, pts: me.pts }; S.rows.push({ y: S.year, age: S.age, s: N, tm: S.tn, pos, ovr: ovr() }); S.peak = Math.max(S.peak, ovr());

    const slEarned = (SL_PTS[S.ser] && SL_PTS[S.ser][pos - 1]) || 0;
    if (slEarned > 0 && !F1) S.sl = Math.min(40, (S.sl || 0) + slEarned);

    if (!F1) { nw(`${N} ${S.year}: ${rk[0].n} sagra-se campeão!`, `Você terminou em P${pos}.`); }
    else { nw(`F1 ${S.year}: ${rk[0].n} é o Campeão Mundial!`, ``); carsStep(); }

    const tm = getTeammate();
    if (tm) {
        if (S.h2h.rW > S.h2h.rL) { S.rep = clamp(S.rep + 1, -6, 8); S.msg = `Venceu duelo interno (+1 REP). `; }
        else if (S.h2h.rL > S.h2h.rW + 2) { S.rep = clamp(S.rep - 1, -6, 8); S.msg = `Superado pelo companheiro (-1 REP). `; }
    }

    if (slEarned > 0 && !F1) S.msg += `+${slEarned} pts de Superlicença. `;

    const maintCost = (S.items || []).reduce((acc:number, id:string) => acc + (LIFE_ITEMS.find(x => x.id === id)?.maint || 0), 0);
    if (maintCost > 0) { S.cash = Math.max(0, S.cash - maintCost); S.msg += `Manutenção de bens paga. `; }

    if (S.acad && !F1) { const attrIdx = S.acad === 'rbr' ? 7 : S.acad === 'fda' ? 0 : 6; S.v[attrIdx] = clamp(S.v[attrIdx] + 1, 40, S.god ? 100 : 99); }
    S.streak = (F1 && pos === 1) ? (S.streak || 0) + 1 : 0;

    if (F1) {
        S.f1n = (S.f1n || 0) + 1;
        if (S.f1n % 4 === 3) { S.nx = S.f1t.map((t:any) => clamp((t.b ?? t.c) + (r() - .5) * 24, 55, 96)); S.msg += ' Novo regulamento técnico da FIA anunciado!'; }
    }

    if (pos === 1 && !F1) S.msg += ` CAMPEÃO DA ${N}!`;

    if (S.con) { S.cash += S.con.sal; S.con.gw += me.w; S.con.gp += me.pd; if (pos === 1) S.con.gt = 1; S.con.left--; if (S.con.left <= 0) evalCon(); }
    if (F1) { S.tot.w += me.w; S.tot.pd += me.pd; S.tot.pts += me.pts; if (pos === 1) S.tot.t++; S.bad = (pos > 15 && S.h2h.rL > S.h2h.rW) ? S.bad + 1 : 0; }

    if (!F1 && r() < .15) { const a = Math.floor(r() * 8), b = (a + 1 + Math.floor(r() * 7)) % 8; S.v[a] = Math.min(S.god ? 100 : 99, S.v[a] + 4); S.v[b] = Math.min(S.god ? 100 : 99, S.v[b] + 3); S.brk = 1; S.msg += ` BREAKOUT: ${AT[a]} e ${AT[b]} evoluíram!`; }

    if ((!F1 && S.age >= 25) || (F1 && (S.age >= 41 || S.bad >= 2 || (S.age >= 36 && pos > 3 && r() < (S.age - 35) * .12)))) { S.ph = 'end'; return; }
    if (!S.acad && S.ser >= 1 && S.age >= 15 && pos <= 3 && !F1) { S.ph = 'acad_pick'; return; }

    prepOffers();
}

export function sbase(o: any) {
    const O = ovr(), P = pot(), c = carOf(o);
    if (o.ser === 6) return Math.min(60, .5 * Math.exp((O - 62) / 7) * Math.max(.55, Math.min(1.25, .55 + (c - 50) / 40 * .6)) * (1 + Math.max(0, P - O) * .008));
    const k = [[.001, 40], [.002, 44], [.004, 48], [.008, 52], [.014, 56], [.025, 60]][o.ser];
    return Math.min(60, k[0] * Math.exp((O - k[1]) / 9) * (1.2 - o.t * .07) * (1 + Math.max(0, P - O) * .008));
}

export const maxSal = (n: any) => sbase(n.o) * (1.1 + ((n.w / ((n.o.ser === 6 ? 24 : SR[n.o.ser].R) * n.yrs)) * 0.4 + (n.p / ((n.o.ser === 6 ? 24 : SR[n.o.ser].R) * n.yrs)) * 0.2 + (n.ti ? 0.15 : 0)));

export function fixNeg() {
    const n = S.neg, b = sbase(n.o);
    const totalRaces = (n.o.ser === 6 ? 24 : SR[n.o.ser].R) * n.yrs;
    n.w = clamp(n.w, 0, totalRaces); n.p = clamp(n.p, 0, totalRaces);
    const mx = maxSal(n);
    if (n.sal == null) n.sal = b;
    n.sal = clamp(n.sal, b * .5, mx);
}

// =========================================================================
// 5. AÇÕES PARA O REACT CHAMAR
// =========================================================================
export function actionTrain(type: number) {
    const cost = S.ser === 6 ? 1.5 : 0.08;
    if (S.cash >= cost && !S.trDone) {
        S.cash -= cost; S.trDone = 1; const cap = S.god ? 100 : 99;
        if (type === 0) { S.v[0] = clamp(S.v[0] + 2, 40, cap); S.v[1] = clamp(S.v[1] + 2, 40, cap); }
        if (type === 1) { S.v[4] = clamp(S.v[4] + 2, 40, cap); S.v[5] = clamp(S.v[5] + 2, 40, cap); }
        if (type === 2) { S.v[6] = clamp(S.v[6] + 2, 40, cap); S.v[7] = clamp(S.v[7] + 2, 40, cap); S.rep = clamp(S.rep + 1, -6, 8); }
    }
    notify();
}

export function actionBuyLife(id: string) {
    const item = LIFE_ITEMS.find(x => x.id === id);
    if (item && S.cash >= item.cost && !S.items.includes(id)) {
        S.cash -= item.cost; S.items.push(id); const cap = S.god ? 100 : 99;
        if (item.bonus) S.v[item.bonus[0]] = clamp(S.v[item.bonus[0]] + item.bonus[1], 40, cap);
        if (item.rep) S.rep = clamp(S.rep + item.rep, -6, 8);
        nw(`ESTILO DE VIDA: ${S.name} adquire ${item.n}`, `Novo investimento.`);
    }
    notify();
}

export function actionGo() { S.stops = [0, Math.floor(S.sess.length / 2), S.sess.length - 1]; S.next_race = 0; S.ph = 'mom_pre'; S.mom_idx = 0; notify(); }
export function actionRaceMom() { S.last_res = sim_races(S.stops[S.mom_idx], S.stops[S.mom_idx] + 1); S.next_race = S.stops[S.mom_idx] + 1; S.ph = 'mom_pos'; notify(); }

export function actionContMom() {
    if (S.mom_idx === 0) { sim_races(S.next_race, S.stops[1]); S.ph = 'event'; S.pp = [1, 2].map(i => { const o = S.ev[i]; const p = o[1] + (ovr() - 72) * .006 + (S.v[o[3]] - pot()) * .004 + (R(S.seed + 'pj' + S.year + S.ser + i)() - .5) * .18; return Math.round(clamp(p, .12, .92) * 100) / 100; }); }
    else if (S.mom_idx === 1) { sim_races(S.next_race, S.stops[2]); S.ph = 'mom_pre'; S.mom_idx = 2; }
    else if (S.mom_idx === 2) { sim_races(S.next_race, S.sess.length); seasonEnd(); }
    notify();
}

export function actionEventChoice(k: number) {
    const o = S.ev[1 + k]; const roll = R(S.seed + 'x' + S.year + S.ser + k)(); const ok = roll < S.pp[k]; const evnt = ok ? o.slice(2, 6) : o.slice(6, 10);
    S.v[evnt[1]] = clamp(S.v[evnt[1]] + evnt[2], 40, S.god ? 100 : 99);
    S.mod += evnt[3]; S.out = { roll, p: S.pp[k], ok, txt: evnt[0] }; S.ph = 'res'; notify();
}

export function actionResCont() { S.ph = 'mom_pre'; S.mom_idx = 1; notify(); }
export function actionAcadPick(k: number) { const ac = ACAD[k]; S.acad = ac.id; nw(`ACADEMIA F1: ${S.name} assina com a ${ac.n}!`, ``); prepOffers(); notify(); }
export function actionOffer(k: number) { const o = S.offs[k]; if (o.cont) { pick(o); } else { S.neg = { o, yrs: o.ser === 6 ? 2 : 1, w: 0, p: 0, ti: 0, sal: null }; fixNeg(); S.ph = 'neg'; } notify(); }
export function actionNegBack() { S.neg = null; S.ph = 'offer'; notify(); }
export function actionNegSign() { fixNeg(); S.con = { yrs: S.neg.yrs, left: S.neg.yrs, sal: S.neg.sal, w: S.neg.w, p: S.neg.p, ti: S.neg.ti, gw: 0, gp: 0, gt: 0 }; if (S.neg.o.poach) { S.rep -= 2; } const o = S.neg.o; S.neg = null; pick(o); notify(); }
export function actionNegYears(k: number) { S.neg.yrs = k; fixNeg(); notify(); }
export function actionNegUpdate(key: string, val: any) { S.neg[key] = val; fixNeg(); notify(); }

export function actionLoadGame(data: any) { G = data.G; S = data.S; notify(); }