export interface DriverAttributes {
    qualifying: number;
    racePace: number;
    start: number;
    overtaking: number;
    wet: number;
    tyres: number;
    consistency: number;
    mentality: number;
}

export interface DriverBase {
    n: string;       // name
    f: string;       // flag/country
    rtg: number;     // rating
    a: number[];     // attributes array
    leg: number;     // legendTier: 0 = Current, 1 = Legend, 2 = Prime
    by?: number;     // birthYear
}

export interface GlobalDraftState {
    seed: string;
    name: string;
    num: number;
    flag: string;
    v: (number | null)[];  // attributes draftados
    used: string[];        // usedDrivers
    spin: number;          // spins / turnos jogados
    k: number;             // iterador da seed
    rr: number;            // rerolls disponíveis
    cur: DriverBase | null;// currentCard
    god: number;           // isGodMode (0 ou 1)
    egg: string | null;    // easter egg ativado
}

export interface GameState {
    seed: string;
    name: string;
    flag: string;
    num: number;
    v: number[];           // DNA final (8 atributos)
    ser: number;           // 0 = Kart ... 6 = F1
    year: number;
    age: number;
    sy: number;            // anos na categoria atual
    team: number;          // index da equipe atual
    tn: string;            // nome da equipe atual
    rows: SeasonHistory[]; // histórico de temporadas
    rlog: RaceLog[];       // histórico de corridas
    news: NewsItem[];      // feed de imprensa
    tot: CareerTotals;     // totais da carreira (vitórias, títulos, pts)
    peak: number;          // OVR máximo alcançado
    bad: number;           // contador de anos ruins na F1
    tab: number;           // aba ativa na interface
    F: ActiveDriver[];     // Grid de pilotos atual
    T: ActiveTeam[];       // Grid de equipes atual
    me: ActiveDriver;      // Referência ao piloto do jogador
    first: number;         // 1 se for o primeiro ano
    msg: string;           // mensagem de feedback da UI
    op: Record<number, boolean>; // estado dos cards de notícia (aberto/fechado)
    pe: boolean | number;
    nid: number;           // ID do gerador de notícias
    rep: number;           // reputation (-6 a +8)
    cash: number;          // money (em milhões)
    sl: number;            // superLicense (0 a 40)
    items: string[];       // bens comprados (estilo de vida)
    con: Contract | null;  // contrato atual
    neg: Negotiation | null;// negociação em andamento
    god: number;           // isGodMode
    brk: number;           // flag de breakout season
    f1Init: number;        // flag se o grid da F1 já foi inicializado
    acad: string | null;   // academia (fda, rbr, mer)
    h2h: H2HStats;         // duelo interno com companheiro
    trDone: number;        // flag de treino de pré-temporada feito
    
    // Fases e etapas transitórias do Game Loop
    ph: 'start' | 'mom_pre' | 'mom_pos' | 'event' | 'res' | 'acad_pick' | 'offer' | 'neg' | 'end';
    stops?: number[];
    mom_idx?: number;
    next_race?: number;
    last_res?: any;
    ev?: any;
    pp?: number[];
    mod?: number;
    out?: any;
    offs?: any[];
    spons?: number;
    paid?: number;
    last?: { pos: number; pts: number };
    streak?: number;
    f1n?: number;
    nx?: number[];
    f1t?: ActiveTeam[];
    grid?: ActiveDriver[];
    sess?: Session[];
}

export interface ActiveDriver {
    n: string;
    f: string;
    t: number;       // team index
    r: number;       // current rating/OVR
    age: number;
    pts: number;
    w: number;       // vitórias na temporada
    pd: number;      // pódios na temporada
    p?: number;      // 1 se for o jogador
    form?: number;   // boa forma (buff/nerf da temporada)
    pk?: number;     // potencial de crescimento (peak)
    by?: number;     // ano de nascimento
    ct?: number;     // tempo de contrato restante
    qW?: number;
}

export interface ActiveTeam {
    n: string;
    c: number;       // nível do carro na temporada
    b?: number;      // base car rating
    pts: number;
}

export interface RaceLog {
    y: number;
    ser: string;
    rnd: number;
    track: string;
    grid: number;
    pos: number | 'DNF';
    pts: number;
    wet: boolean;
    sp: boolean;
    win: string;
}

export interface NewsItem {
    y: number;
    t: string;       // título
    d: string;       // descrição
    i: number;       // id
}

export interface SeasonHistory {
    y: number;
    age: number;
    s: string;       // nome da categoria
    tm: string;      // equipe
    pos: number;
    ovr: number;
}

export interface CareerTotals {
    t: number;       // titles
    w: number;       // wins
    pd: number;      // podiums
    pts: number;
}

export interface H2HStats {
    qW: number;
    qL: number;
    rW: number;
    rL: number;
}

export interface Contract {
    yrs: number;
    left: number;
    sal: number;
    w: number;
    p: number;
    ti: number;
    gw: number;
    gp: number;
    gt: number;
}

export interface Negotiation {
    o: any;          // oferta de origem
    yrs: number;
    w: number;
    p: number;
    ti: number;
    sal: number | null;
}

export interface Session {
    type: 'gp' | 'sp';
    track: string;
}
