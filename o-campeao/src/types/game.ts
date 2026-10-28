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
    name: string;
    country: string;
    rating: number;
    attributes: number[];
    legendTier: number; // 0 = Current, 1 = Legend, 2 = Prime
    birthYear?: number;
}

export interface GlobalDraftState {
    seed: string;
    name: string;
    num: number;
    flag: string;
    attributes: (number | null)[];
    usedDrivers: string[];
    spinsLeft: number;
    currentCard: DriverBase | null;
    isGodMode: boolean;
}

export interface GameState {
    year: number;
    age: number;
    series: number; // 0 = Kart ... 6 = F1
    teamIndex: number;
    money: number;
    superLicense: number;
    reputation: number;
    items: string[];
    attributes: number[]; // O DNA final do piloto
}