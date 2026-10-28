// src/components/views/HomeView.tsx
import { useState, useEffect } from 'react';
import { useGame } from '../../store/GameContext';
import { NA, IC } from '../../data/constants';
import type { GlobalDraftState } from '../../types/game';

const SvgIcon = ({ icon, className = "ico" }: { icon: string, className?: string }) => (
    <i className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: icon.replace('class="ico"', `class="${className}"`) }} />
);

export const HomeView = ({ onStart }: { onStart: (isLoad?: boolean) => void }) => {
    const { setView, setDraftState, setGameState } = useGame();
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [nationality, setNationality] = useState('BRA · Brasil');
    
    const [modalMsg, setModalMsg] = useState('');
    const [errName, setErrName] = useState(false);
    const [errNum, setErrNum] = useState(false);
    const [hasSave, setHasSave] = useState(false);
    const [copied, setCopied] = useState(false);
    const [lb, setLb] = useState<any[]>([]);

    useEffect(() => {
        setHasSave(!!localStorage.getItem('tc_save'));
        try { setLb(JSON.parse(localStorage.getItem('tc_best') || '[]')); } catch(e){}
    }, []);

    const handleStartGame = () => {
        const rawName = name.replace(/[<>]/g, '').trim();
        const uStr = num.trim();
        const u = +uStr;
        const eggType = uStr === '19022006' ? 'max' : uStr === '11122005' ? 'lec' : null;
        const badNum = !uStr || isNaN(u) || (!eggType && (u < 1 || u > 99));

        setErrName(!rawName && !eggType);
        setErrNum(badNum);

        if (!rawName && !eggType && badNum) return setModalMsg('Dê um nome ao seu piloto e escolha um número entre 1 e 99 para largar.');
        if (!rawName && !eggType) return setModalMsg('Dê um nome ao seu piloto para largar.');
        if (badNum) return setModalMsg('Escolha um número entre 1 e 99 para o seu carro.');

        const sd = Math.random().toString(36).slice(2, 8).toUpperCase();
        const isMax = eggType === 'max';
        const isLec = eggType === 'lec';
        const isEgg = isMax || isLec;

        const newDraftState: GlobalDraftState = {
            seed: sd,
            name: isLec ? (rawName ? rawName.toUpperCase() : 'CHARLES LECLERC') : isMax ? 'MAX VERSTAPPEN' : (rawName || 'SEU PILOTO').toUpperCase(),
            num: isLec ? 16 : isMax ? 1 : Math.max(1, Math.min(99, +uStr || 7)),
            flag: isLec ? 'MON' : isMax ? 'NED' : nationality.split(' ')[0],
            v: isEgg ? Array(8).fill(100) : Array(8).fill(null),
            used: [],
            spin: isEgg ? 8 : 0,
            k: 0,
            rr: 2,
            cur: isLec ? { n: 'Charles Leclerc (2022)', f: 'MON', rtg: 100, a: Array(8).fill(100), leg: 2 } : isMax ? { n: 'Verstappen (Prime)', f: 'NED', rtg: 100, a: Array(8).fill(100), leg: 2 } : null,
            god: isEgg ? 1 : 0,
            egg: eggType
        };

        setDraftState(newDraftState);
        setView(isEgg ? 'career' : 'draft');
        if (onStart) onStart(false);
    };

    const handleLoadGame = () => {
        try {
            const data = JSON.parse(localStorage.getItem('tc_save') || '{}');
            if (data.G) {
                setDraftState(data.G);
                setGameState(data.S);
                if (data.S) {
                    setView(data.S.ph === 'res' || data.S.ph === 'end' ? 'res' : 'career');
                } else if (data.G) {
                    setView('draft');
                }
                if (onStart) onStart(true);
            }
        } catch (e) {
            localStorage.removeItem('tc_save');
            setHasSave(false);
        }
    };

    const copyPix = () => {
        navigator.clipboard.writeText('1abb0f52-4642-4310-afdb-95ee6c09f030');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const oc = (v: number) => v >= 88 ? 'g' : v >= 78 ? 'h' : v >= 68 ? 'm' : 'l';

    return (
        <section id="home" className="view" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: '14px' }}>
            <div className="home-col-left">
                <div className="pn hero-card">
                    <div>
                        <div className="tag"><SvgIcon icon={IC.check} className="ico ico-sm"/> SIMULADOR DE CARREIRA · FIA ROAD TO F1</div>
                        <h1>Você é o<br/><em>campeão?</em></h1>
                        <p className="sub">Combine atributos de pilotos atuais ou Lendas. Suba cada degrau da pirâmide oficial da FIA — do Kart à F4, FRECA, F3 e F2 — conquiste 40 pontos de Superlicença e chegue à Fórmula 1.</p>
                    </div>
                    <div>
                        <div className="form-bar">
                            <input 
                                className={`form-nm ${errName ? 'err' : ''}`} 
                                placeholder="Nome do piloto" 
                                maxLength={18} 
                                autoComplete="off" 
                                value={name} 
                                onChange={e => { setName(e.target.value); setErrName(false); }} 
                            />
                            <input 
                                className={`form-nu ${errNum ? 'err' : ''}`} 
                                type="text" 
                                inputMode="numeric" 
                                maxLength={8} 
                                placeholder="Nº (1-99)" 
                                value={num} 
                                onChange={e => { setNum(e.target.value); setErrNum(false); }} 
                            />
                            <select className="form-na" value={nationality} onChange={e => setNationality(e.target.value)}>
                                {NA.map(n => <option key={n}>{n}</option>)}
                            </select>
                        </div>
                        <div className="row">
                            <button className="cta" onClick={handleStartGame}>
                                <span>Novo jogo</span>
                                <SvgIcon icon={IC.flag} className="ico ico-sm"/>
                            </button>
                            {hasSave && <button className="g" onClick={handleLoadGame}>Continuar carreira</button>}
                        </div>
                    </div>
                </div>

                <div className="st3">
                    <div className="sc"><div className="sc-top"><span>01</span></div><h4>Draft</h4><p>Combine atributos de pilotos atuais, Lendas ou cartas PRIME.</p></div>
                    <div className="sc"><div className="sc-top"><span>02</span></div><h4>Pirâmide FIA</h4><p>Progrida por 7 categorias reais: Kart, F-Vee, F4, FRECA, F3, F2 e F1.</p></div>
                    <div className="sc"><div className="sc-top"><span>03</span></div><h4>Superlicença</h4><p>Acumule 40 pontos da FIA na base e gerencie seu patrimônio.</p></div>
                    <div className="sc"><div className="sc-top"><span>04</span></div><h4>História Viva</h4><p>Acompanhe a cronologia real da F1 desde 2018 pista a pista.</p></div>
                </div>
            </div>

            <div className="home-col-right">
                <div className="race-visual" aria-label="Traçado do circuito Red Bull Ring em Spielberg">
                    <div className="rv-top"><span className="rv-dot"></span> RED BULL RING · SPIELBERG <span className="rv-season">4.318 KM · 10 CURVAS</span></div>
                    <div className="rv-track" aria-hidden="true">
                        <svg viewBox="0 0 520 330" role="img">
                            <path className="track-shadow" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                            <path id="rbr-path" className="track-line" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                            <path className="track-dash" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                            <circle className="car-dot" r="6.5"><animateMotion dur="6.8s" repeatCount="indefinite" rotate="auto"><mpath href="#rbr-path"/></animateMotion></circle>
                        </svg>
                        <div className="rv-caption">TELEMETRIA AO VIVO<br/><b>TODA LENDA COMEÇA AQUI.</b></div>
                    </div>
                    <div className="rv-bottom"><span>DO KART À GLÓRIA</span><span className="rv-line"></span><span>TEMPORADA 2018–2040</span></div>
                </div>

                <div className="pn lb-card">
                    <h2>
                        <span>Melhores carreiras (Local)</span>
                        <SvgIcon icon={IC.trophy} className="ico ico-sm"/>
                    </h2>
                    <div id="lb" className="lb-scroll tw">
                        {lb.length ? (
                            <table>
                                <thead><tr><th>#</th><th>PILOTO</th><th>NÍVEL</th><th>TÍTULOS</th><th>VIT</th><th>OVR</th></tr></thead>
                                <tbody>
                                    {lb.map((r, i) => (
                                        <tr key={i}>
                                            <td><span className="ps">{i + 1}</span></td>
                                            <td><b>{r.n}</b></td>
                                            <td>{r.t}</td>
                                            <td>{r.ti}</td>
                                            <td>{r.w}</td>
                                            <td><span className={`ov ${oc(r.o)}`}>{r.o}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--tx-sec)', fontSize: '12.5px' }}>
                                Nenhuma carreira encerrada ainda. Complete uma trajetória para registrar seu recorde no Hall da Fama local.
                            </div>
                        )}
                    </div>
                </div>

                <div className="sponsor-footer-grid">
                    <div className="ad-card-minimal">
                        <div className="ad-card-head"><span>Apoie o projeto</span><span>Chave Pix</span></div>
                        <div className="ad-card-body">
                            <div><strong>Curtiu o simulador?</strong><small>Ajude a manter o jogo online.</small></div>
                            <button type="button" className="sm" onClick={copyPix}>{copied ? 'Copiado!' : 'Copiar Pix'}</button>
                        </div>
                        <div className="ad-card-foot"><code className="pix-key">1abb0f52-4642-4310-afdb-95ee6c09f030</code></div>
                    </div>

                    <div className="ad-card-minimal">
                        <div className="ad-card-head"><span>Anúncio</span><span>Patrocínio</span></div>
                        <div className="ad-card-body"><div><strong>Sua Marca no Grid</strong><small>Destaque para fãs de F1.</small></div></div>
                        <div className="ad-card-foot">
                            <span>Este espaço</span>
                            <a href="https://wa.me/5549989139808?text=Ol%C3%A1!%20Quero%20anunciar%20no%20jogo%20O%20Campe%C3%A3o." target="_blank" rel="noopener noreferrer">Anunciar agora →</a>
                        </div>
                    </div>
                </div>
            </div>

            {modalMsg && (
                <div className="modal" role="dialog" aria-modal="true" onClick={() => setModalMsg('')}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <div className="modal-ico">
                            <svg className="ico ico-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <h3>Falta algo no grid</h3>
                        <p>{modalMsg}</p>
                        <button className="cta" style={{ width: '100%' }} onClick={() => setModalMsg('')}>Entendi</button>
                    </div>
                </div>
            )}
        </section>
    );
};
