// src/store/GameContext.tsx
import { createContext, useState, type ReactNode } from 'react';
import type { GlobalDraftState, GameState } from '../types/game';

interface GameContextType {
    view: 'home' | 'draft' | 'career' | 'result';
    setView: (view: 'home' | 'draft' | 'career' | 'result') => void;
    draftState: GlobalDraftState | null;
    setDraftState: React.Dispatch<React.SetStateAction<GlobalDraftState | null>>;
    gameState: GameState | null;
    setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [view, setView] = useState<'home' | 'draft' | 'career' | 'result'>('home');
    const [draftState, setDraftState] = useState<GlobalDraftState | null>(null);
    const [gameState, setGameState] = useState<GameState | null>(null);

    return (
        <GameContext.Provider value={{ view, setView, draftState, setDraftState, gameState, setGameState }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error('useGame must be used within a GameProvider');
    return context;
};
