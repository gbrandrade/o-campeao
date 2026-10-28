// src/data/constants.ts
import type { DriverBase } from '../types/game';

// =========================================================================
// ÍCONES SVG
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

// =========================================================================
// DADOS BASE DO JOGO
// =========================================================================
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

export const TEAM_COLORS: Record<string, string> = { 'Mercedes': '#00A19B', 'McLaren': '#FF8000', 'Ferrari': '#E8002D', 'Red Bull': '#3671C6', 'Aston Martin': '#229971', 'Williams': '#64C4FF', 'Alpine': '#FF87BC', 'Haas': '#9A9895', 'Racing Bulls': '#6692FF', 'RB': '#6692FF', 'Sauber': '#52E252', 'Audi': '#F50537', 'Cadillac': '#D4AF37', 'Prema Racing': '#E11D48', 'Prema': '#E11D48', 'ART Grand Prix': '#DC2626', 'Trident': '#3B82F6', 'Campos Racing': '#F59E0B', 'Hitech Pulse-Eight': '#0EA5E9', 'MP Motorsport': '#EA580C', 'Van Amersfoort': '#F97316', 'Rodin Motorsport': '#10B981', 'DAMS Lucas Oil': '#38BDF8', 'Invicta Racing': '#EAB308', 'Tony Kart': '#16A34A', 'CRG': '#EA580C', 'KR Motorsport': '#2563EB', 'Birel ART': '#DC2626' };

export const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
export const SPT = [8, 7, 6, 5, 4, 3, 2, 1];

export const EV = [
    ['Chuva torrencial no circuito. O engenheiro pergunta no rádio se você quer arriscar tudo por fora ou manter o traçado seguro.', ['Arriscar tudo no molhado', .35, 'Manobra antológica na chuva! Seu controle de carro impressionou o paddock. (Chuva +3)', 4, 3, 3, 'Aquaplanou na zebra e perdeu tempo voltando para a pista. (Mentalidade -1)', 7, -1, -3], ['Manter traçado conservador', .78, 'Leitura fria da aderência e pontos importantes garantidos. (Consistência +1)', 6, 1, 1, 'Ficou preso no spray de água e perdeu ritmo nas retas.', 6, 0, -1]],
    ['Janela de Pit Stop aberta. A degradação térmica dos pneus traseiros subiu. Qual é a chamada no rádio?', ['Parar cedo (Tentar Undercut)', .45, 'Undercut cirúrgico! Volta de saída voadora com pneus novos. (Gestão de pneus +3)', 5, 3, 2, 'Saiu atrás de tráfego lento com DRS e fritou os pneus novos.', 5, -1, -2], ['Esticar o stint na pista (Overcut)', .68, 'Gestão magistral de borracha em ar limpo! (Gestão de pneus +1)', 5, 1, 1, 'Os pneus caíram do penhasco nas últimas voltas. (Gestão -1)', 5, -1, -2]],
    ['Disputa roda a roda com seu companheiro de equipe na freada da Curva 1!', ['Mergulhar por dentro na freada', .40, 'Passou no limite! Mostrou quem manda na garagem. (Ultrapassagem +3)', 3, 3, 2, 'Toque entre os dois carros! Clima tenso no debriefing da equipe. (Mentalidade -2)', 7, -2, -3], ['Recolher e priorizar a equipe', .85, 'Jogo de equipe exemplar. O chefe de equipe elogiou sua maturidade. (Mentalidade +1)', 7, 1, 1, 'Perdeu embalo e acabou engolido pelo pelotão.', 7, -1, 0]],
    ['A fábrica trouxe um novo assoalho aerodinâmico experimental para o fim de semana.', ['Instalar especificação agressiva', .35, 'Correlação perfeita com o túnel de vento! O carro ganhou downforce. (Ritmo +2)', 1, 2, 4, 'O carro sofreu com porpoising severo nas retas. (Ritmo -1)', 1, -1, -3], ['Manter pacote aerodinâmico conhecido', .82, 'Acerto de suspensão refinado e carro na mão. (Ritmo +1)', 1, 1, 1, 'Sem ganho de velocidade frente aos rivais.', 1, 0, 0]]
];

export const FN = ['Lucas', 'Mateo', 'Jonas', 'Dennis', 'Kai', 'Luca', 'Theo', 'Oscar', 'Noah', 'Ethan', 'Gabriel', 'Enzo', 'Arthur', 'Rafael', 'Tom', 'Leo'];
export const LN = ['Silva', 'Moretti', 'Weber', 'Hansen', 'Garcia', 'Tanaka', 'Dubois', 'Keller', 'Novak', 'Ricci', 'Costa', 'Bianchi', 'Fischer', 'Rossi', 'Lopes', 'Meyer'];
export const TN = ['Piloto comum', 'Sensação de uma temporada', 'Piloto de ponta', 'Vencedor de GPs', 'Campeão do mundo', 'Bicampeão', 'Tricampeão', 'Lenda do grid', 'Top 5 de todos os tempos', 'Sempre citado no debate GOAT', 'O CAMPEÃO'];

// =========================================================================
// ESTRUTURA DE TEMPORADAS, ACADEMIAS E BENS
// =========================================================================
export const F1T = [['Mercedes', 94], ['McLaren', 93], ['Ferrari', 91], ['Red Bull', 90], ['Aston Martin', 79], ['Williams', 76], ['Alpine', 73], ['Haas', 72], ['Racing Bulls', 70], ['Sauber', 67], ['Cadillac', 64]];

export const ACAD = [
    { id: 'rbr', n: 'Red Bull Junior Team', c: '#3671C6', bonus: 'Prioridade na Red Bull / Racing Bulls e +1 Mentalidade por ano', tPref: ['Red Bull', 'Racing Bulls', 'RB'] },
    { id: 'fda', n: 'Ferrari Driver Academy', c: '#E8002D', bonus: 'Prioridade na Ferrari / Haas e +1 Qualificação por ano', tPref: ['Ferrari', 'Haas', 'Sauber', 'Cadillac'] },
    { id: 'mer', n: 'Mercedes Junior Team', c: '#00A19B', bonus: 'Prioridade na Mercedes / Williams e +1 Consistência por ano', tPref: ['Mercedes', 'Williams', 'McLaren'] }
];

export const LIFE_ITEMS = [
    { id: 'vg', ico: IC.gamepad, n: 'SimRig Pro & Videogames', cost: 0.015, maint: 0.002, desc: 'Setup doméstico completo (+1 Consistência)', bonus: [6, 1] },
    { id: 'cl', ico: IC.shirt, n: 'Guarda-Roupa de Grife', cost: 0.045, maint: 0.008, desc: 'Presença marcante no paddock (+1 Reputação)', rep: 1 },
    { id: 'tr', ico: IC.plane, n: 'Férias VIP em Mônaco', cost: 0.12, maint: 0.025, desc: 'Descanso mental de luxo (+2 Mentalidade)', bonus: [7, 2] },
    { id: 'ca', ico: IC.car, n: 'Supercarro V8 Biturbo', cost: 0.38, maint: 0.045, desc: 'Chegue aos autódromos em estilo (+1 Largada, +1 REP)', bonus: [2, 1], rep: 1 },
    { id: 'ho', ico: IC.home, n: 'Mansão em Monte Carlo', cost: 3.2, maint: 0.18, desc: 'Endereço dos campeões (+2 Mentalidade, +2 REP)', bonus: [7, 2], rep: 2 }
];

export const SR: any[] = [
    { n: 'Karting', full: 'CIK-FIA World Karting', spec: '125cc 2T · Direct Drive', R: 8, lv: [46, 63], ageRange: [12, 15], driversPerTeam: 2, T: [['Tony Kart', 65], ['CRG', 63], ['KR Motorsport', 62], ['Birel ART', 60], ['Parolin', 58], ['Kosmic Racing', 56], ['Ward Racing', 55], ['Energy Corse', 53], ['Sodi Racing', 51], ['Lenzokart', 49]], tracks: ['South Garda (Lonato)', 'Adria Karting', 'Sarno (Napoli)', 'Genk (Bélgica)', 'Kristianstad (Suécia)', 'Le Mans Karting', 'Portimão Kart', 'Alahärmä (Finlândia)'], roster: ['Lorenzo Travisanutto', 'Taylor Barnard', 'Dexter Patterson', 'Luigi Coluccio', 'Pedro Hiltbrand', 'Callum Bradshaw', 'Joe Turney', 'Matheus Morgatto', 'Tuukka Taponen', 'Kean Nakamura-Berta', 'Rene Lammers', 'Evan Giltaire', 'Yuanpu Cui', 'James Egozi', 'Enzo Tarnvanichkul', 'Maciej Gladysz', 'Kirill Kutskov', 'Gabriel Gomez', 'Juho Valtanen', 'Harry Thompson'] },
    { n: 'F-Delta / Vee', full: 'Fórmula Delta & Fórmula Vee', spec: 'Transição Escola · 130 cv · Pneus Radiais', R: 8, lv: [51, 68], ageRange: [14, 18], driversPerTeam: 2, T: [['Fórmula Academy', 68], ['Lorenzetti Racing', 66], ['Rosset Racing', 65], ['W2 ProGP', 63], ['Bassani Jr', 62], ['TMG Escola', 60], ['Cesário Jr', 59], ['PropCar Base', 57], ['D4U Racing', 55], ['Vee Motorsport', 53]], tracks: ['Interlagos (SP)', 'Velocitta (Mogi Guaçu)', 'Goiânia', 'Curvelo (MG)', 'Cascavel (PR)', 'Velopark (RS)', 'Tarumã (RS)', 'Interlagos Final'], roster: ['Gabriel Fonseca', 'Pedro Burger', 'Lucas Veloso', 'Caio Castro Jr', 'Breno Moura', 'Murilo Fiore', 'Guto Rotta', 'Henrique Pettinari', 'João Pedro Maia', 'Pietro Nalesso', 'Yuri Morelli', 'Cauã Mendes', 'Levi Simões', 'Davi Braga', 'Artur Lira', 'Vitor Hugo', 'Augusto Santin', 'Bruno Ribeiro', 'André Novaes', 'Renan Guerra'] },
    { n: 'Fórmula 4', full: 'FIA Formula 4 Championship', spec: 'Tatuus F4-T421 · Chassi Carbono · 180 cv', R: 10, lv: [57, 74], ageRange: [15, 18], driversPerTeam: 2, T: [['Prema Racing', 76], ['US Racing', 74], ['Van Amersfoort', 73], ['MP Motorsport', 72], ['Campos Racing', 70], ['Cavaleiro Sports', 68], ['TMG Racing', 67], ['Oakberry Bassani', 65], ['R-ace GP', 64], ['PHM Racing', 62]], tracks: ['Misano', 'Imola', 'Vallelunga', 'Mugello', 'Paul Ricard', 'Red Bull Ring', 'Barcelona', 'Spa-Francorchamps', 'Monza', 'Interlagos'], roster: ['Freddie Slater', 'Akshay Bohra', 'Alex Powell', 'Jack Beeton', 'Hiyu Yamakoshi', 'Rashid Al Dhaheri', 'Gianmarco Pradel', 'Matheus Ferreira', 'Álvaro Cho', 'Filippo Fiorentino', 'Rafaela Ferreira', 'Ethan Ischer', 'Luka Sammalisto', 'Dion Gowda', 'Keanu Al Azhari', 'Maximilian Popov', 'Emanuele Olivieri', 'Kabir Anurag', 'Tomass Stolcermanis', 'Gustav Jonsson'] },
    { n: 'FRECA', full: 'Formula Regional European (FRECA)', spec: 'Tatuus T-318 · Halo · 285 cv', R: 10, lv: [63, 79], ageRange: [16, 20], driversPerTeam: 2, T: [['Prema Racing', 81], ['R-ace GP', 80], ['ART Grand Prix', 78], ['Van Amersfoort', 77], ['Trident', 75], ['MP Motorsport', 74], ['RPM', 72], ['Saintéloc Racing', 71], ['KIC Motorsport', 69], ['G4 Racing', 67]], tracks: ['Hockenheim', 'Spa-Francorchamps', 'Zandvoort', 'Hungaroring', 'Mugello', 'Paul Ricard', 'Imola', 'Red Bull Ring', 'Barcelona', 'Monza'], roster: ['Rafael Câmara', 'James Wharton', 'Brando Badoer', 'Pedro Clerot', 'Ugo Ugochukwu', 'Noah Strømsted', 'Théophile Naël', 'Alessandro Giusti', 'Ivan Domingues', 'Kanato Le', 'Nikita Bedrin', 'Valerio Rinicella', 'Zachary David', 'Enzo Deligny', 'Enzo Peugeot', 'Roman Bilinski', 'Tasanapol Inthraphuvasak', 'Matteo De Palo', 'Nandhavud Bhirombhakdi', 'Giovanni Maschio'] },
    { n: 'Fórmula 3', full: 'FIA Formula 3 Championship', spec: 'Dallara F3 · 400 cv · DRS · Grid 30 Carros', R: 10, lv: [68, 84], ageRange: [16, 21], driversPerTeam: 3, T: [['Prema Racing', 85], ['Trident', 84], ['ART Grand Prix', 82], ['Campos Racing', 81], ['Hitech Pulse-Eight', 80], ['MP Motorsport', 78], ['Van Amersfoort', 76], ['Rodin Motorsport', 75], ['AIX Racing', 73], ['Jenzer Motorsport', 71]], tracks: ['Sakhir (Bahrein)', 'Melbourne (Austrália)', 'Imola (Emília-Romanha)', 'Monte Carlo (Mônaco)', 'Barcelona (Espanha)', 'Red Bull Ring (Áustria)', 'Silverstone (Reino Unido)', 'Hungaroring (Hungria)', 'Spa-Francorchamps (Bélgica)', 'Monza (Itália)'], roster: ['Leonardo Fornaroli', 'Gabriele Minì', 'Luke Browning', 'Dino Beganovic', 'Christian Mansell', 'Nikola Tsolov', 'Tim Tramnitz', 'Sami Meguetounif', 'Laurens van Hoepen', 'Mari Boya', 'Noel León', 'Charlie Wurz', 'Callum Voisin', 'Martinius Stenshorne', 'Sebastián Montoya', 'Oliver Goethe', 'Kacper Sztuka', 'Santiago Ramos', 'Max Esterson', 'Cian Shields', 'Matías Zagazeta', 'Tommy Smith', 'Sophia Flörsch', 'Piotr Wisnicki', 'Tasanapol Inthraphuvasak', 'Joseph Loake', 'Joshua Dufek', 'Nikita Bedrin', 'Alex Dunne', 'Oleksandr Bondarev'] },
    { n: 'Fórmula 2', full: 'FIA Formula 2 Championship', spec: 'Dallara F2 2024 · V6 Turbo 620 cv · Preliminar F1', R: 14, lv: [74, 89], ageRange: [17, 23], driversPerTeam: 2, T: [['Invicta Racing', 90], ['Campos Racing', 89], ['MP Motorsport', 88], ['Prema Racing', 87], ['Rodin Motorsport', 86], ['Hitech Pulse-Eight', 85], ['ART Grand Prix', 84], ['DAMS Lucas Oil', 82], ['Trident', 80], ['Van Amersfoort', 78]], tracks: ['Sakhir (Bahrein)', 'Jeddah (Arábia Saudita)', 'Melbourne (Austrália)', 'Imola (Itália)', 'Monte Carlo (Mônaco)', 'Barcelona (Espanha)', 'Red Bull Ring (Áustria)', 'Silverstone (Reino Unido)', 'Hungaroring (Hungria)', 'Spa-Francorchamps (Bélgica)', 'Monza (Itália)', 'Baku (Azerbaijão)', 'Lusail (Catar)', 'Yas Marina (Abu Dhabi)'], roster: ['Paul Aron', 'Zane Maloney', 'Jak Crawford', 'Victor Martins', 'Dennis Hauger', 'Kush Maini', 'Zak O\'Sullivan', 'Ritomo Miyata', 'Pepe Martí', 'Richard Verschoor', 'Enzo Fittipaldi', 'Joshua Dürksen', 'Amaury Cordeel', 'Juan Manuel Correa', 'Roman Staněk', 'Clement Novalak', 'Rafael Villagómez', 'Niels Koolen', 'Troy Miyazaki', 'Arthur Leclerc'] },
    { n: 'Fórmula 1', full: 'FIA Formula One World Championship', spec: 'Ápice Mundial · 1000 cv Híbrido · 20 Vagas', R: 24, tracks: ['Sakhir (Bahrein)', 'Jeddah (Arábia Saudita)', 'Melbourne (Austrália)', 'Suzuka (Japão)', 'Xangai (China)', 'Miami (EUA)', 'Imola (Emília-Romanha)', 'Monte Carlo (Mônaco)', 'Montreal (Canadá)', 'Barcelona (Espanha)', 'Red Bull Ring (Áustria)', 'Silverstone (Reino Unido)', 'Hungaroring (Hungria)', 'Spa-Francorchamps (Bélgica)', 'Zandvoort (Holanda)', 'Monza (Itália)', 'Baku (Azerbaijão)', 'Marina Bay (Singapura)', 'Austin (EUA)', 'Cidade do México', 'Interlagos (Brasil)', 'Las Vegas (EUA)', 'Lusail (Catar)', 'Yas Marina (Abu Dhabi)'] }
];

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

// =========================================================================
// DADOS DE PILOTOS (DRAFT)
// =========================================================================
const att = (d: any[]) => { 
    const [e, r, a, p] = [d[3], d[4], d[5], d[6]]; 
    return [p, (r + p) / 2, (r + a) / 2, r, a, e, (a + e) / 2, (e * 2 + a) / 3].map(Math.round); 
};

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
    ['Alexander Albon', 'THA', 85, 85, 86, 81, 85, 30, 5, 1996],
    ['Nico Hülkenberg', 'GER', 84, 91, 84, 84, 85, 39, 9, 1987],
    ['Esteban Ocon', 'FRA', 84, 85, 85, 82, 83, 30, 7, 1996],
    ['Sergio Pérez', 'MEX', 83, 93, 82, 81, 83, 36, 10, 1990],
    ['Valtteri Bottas', 'FIN', 82, 91, 80, 88, 83, 37, 10, 1989],
    ['Isack Hadjar', 'FRA', 81, 73, 83, 80, 84, 22, 3, 2004],
    ['Oliver Bearman', 'GBR', 82, 74, 84, 79, 83, 21, 7, 2005],
    ['Gabriel Bortoleto', 'BRA', 82, 74, 84, 81, 83, 21, 9, 2004],
    ['Liam Lawson', 'NZL', 81, 76, 81, 79, 81, 24, 8, 2002],
    ['Lance Stroll', 'CAN', 78, 85, 78, 75, 78, 27, 4, 1998],
    ['Franco Colapinto', 'ARG', 79, 73, 80, 78, 80, 23, 6, 2003],
    ['Arvid Lindblad', 'GBR', 77, 68, 78, 76, 79, 19, 8, 2007]
];

export const L = [
    ['Sebastian Vettel', 'GER', [96, 93, 94, 89, 88, 91, 92, 91]], 
    ['Niki Lauda', 'AUT', [88, 94, 85, 88, 90, 95, 97, 98]], 
    ['Jim Clark', 'GBR', [98, 97, 95, 93, 97, 90, 92, 94]], 
    ['Jackie Stewart', 'GBR', [93, 95, 91, 92, 99, 92, 95, 95]], 
    ['Mika Häkkinen', 'FIN', [96, 94, 91, 93, 92, 87, 89, 92]], 
    ['Nelson Piquet', 'BRA', [92, 93, 88, 90, 92, 96, 93, 94]], 
    ['Emerson Fittipaldi', 'BRA', [89, 91, 86, 89, 89, 93, 91, 92]], 
    ['Nigel Mansell', 'GBR', [94, 92, 91, 98, 95, 84, 85, 93]], 
    ['Kimi Räikkönen', 'FIN', [94, 96, 92, 95, 90, 90, 89, 96]], 
    ['Felipe Massa', 'BRA', [93, 89, 91, 86, 82, 87, 85, 86]]
];

export const PRIME = [
    ['Verstappen (2023)', 'NED', [97, 99, 95, 97, 99, 97, 99, 99]], 
    ['Schumacher (2004)', 'GER', [98, 99, 96, 96, 96, 95, 99, 99]], 
    ['Schumacher (2002)', 'GER', [96, 99, 95, 94, 98, 93, 99, 99]], 
    ['Senna (1988)', 'BRA', [99, 98, 93, 97, 99, 87, 92, 98]], 
    ['Senna (1991)', 'BRA', [98, 97, 94, 96, 99, 90, 95, 99]], 
    ['Hamilton (2020)', 'GBR', [99, 98, 94, 95, 99, 98, 99, 99]], 
    ['Hamilton (2018)', 'GBR', [98, 97, 93, 96, 98, 96, 98, 98]], 
    ['Prost (1986)', 'FRA', [92, 98, 91, 93, 89, 99, 99, 99]], 
    ['Prost (1989)', 'FRA', [93, 98, 90, 92, 90, 98, 99, 98]], 
    ['Fangio (1957)', 'ARG', [96, 98, 90, 99, 95, 93, 96, 99]], 
    ['Fangio (1955)', 'ARG', [95, 97, 91, 94, 93, 96, 97, 98]]
];

export const POOL: DriverBase[] = CUR.map((d: any) => ({ n: d[0], f: d[1], rtg: d[2], a: att(d), leg: 0, by: d[9] }))
    .concat(L.map((l: any) => ({ n: l[0], f: l[1], rtg: Math.round(l[2].reduce((a:any, b:any) => a + b) / 8), a: l[2], leg: 1 })))
    .concat(PRIME.map((l: any) => ({ n: l[0], f: l[1], rtg: Math.round(l[2].reduce((a:any, b:any) => a + b) / 8), a: l[2], leg: 2 })));
