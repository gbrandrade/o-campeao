// src/components/views/HomeView.tsx
import { useState } from 'react';
import { useGame } from '../../store/GameContext';

export const HomeView = () => {
    const { setView, setDraftState } = useGame();
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [nationality, setNationality] = useState('BRA · Brasil');

    const handleStartGame = () => {
        if (!name || !num) return alert("Preencha nome e número!");

        // Inicia o estado global do Draft (a antiga função start())
        setDraftState({
            seed: Math.random().toString(36).slice(2, 8).toUpperCase(),
            name: name.toUpperCase(),
            num: parseInt(num),
            flag: nationality.split(' ')[0],
            attributes: Array(8).fill(null),
            usedDrivers: [],
            spinsLeft: 8,
            currentCard: null,
            isGodMode: false
        });
        setView('draft');
    };

    return (
        <section id="home" className="view" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '14px' }}>
            <div className="home-col-left">
                <div className="pn hero-card">
                    <div>
                        <div className="tag">SIMULADOR DE CARREIRA · FIA ROAD TO F1</div>
                        <h1>Você é o<br/><em>campeão?</em></h1>
                        <p className="sub">Combine atributos de pilotos atuais ou Lendas. Suba cada degrau da pirâmide oficial da FIA.</p>
                    </div>
                    <div>
                        <div className="form-bar">
                            <input className="form-nm" placeholder="Nome do piloto" value={name} onChange={e => setName(e.target.value)} />
                            <input className="form-nu" type="number" placeholder="Nº (1-99)" value={num} onChange={e => setNum(e.target.value)} />
                            <select className="form-na" value={nationality} onChange={e => setNationality(e.target.value)}>
                                <option>BRA · Brasil</option>
                                <option>ARG · Argentina</option>
                                <option>GBR · Reino Unido</option>
                            </select>
                        </div>
                        <div className="row">
                            <button className="cta" onClick={handleStartGame}>Novo jogo →</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Coluna da direita com o SVG da pista viria aqui */}
        </section>
    );
};
