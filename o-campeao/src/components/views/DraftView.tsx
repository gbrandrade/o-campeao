// src/components/views/DraftView.tsx
import { useGame } from '../../store/GameContext';
import { AT, IC } from '../../data/constants';
import { pickAttribute, swapDriver, startCareer } from '../../engine';

const SvgIcon = ({ icon, className = "ico" }: { icon: string, className?: string }) => (
    <i className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: icon.replace('class="ico"', `class="${className}"`) }} />
);

export const DraftView = ({ onDone }: { onDone: () => void }) => {
    const { draftState, setGameState, setView } = useGame();
    const G = draftState;

    if (!G) return null;

    const isDone = G.v.every((x: any) => x !== null);
    const c = G.cur;

    const handlePickAttribute = (i: number) => {
        pickAttribute(i);
        onDone(); // Atualiza o estado global através do engine
    };

    const handleSwapDriver = () => {
        swapDriver();
        onDone();
    };

    const handleStartCareer = () => {
        const sState = startCareer();
        setGameState(sState);
        setView('career');
        if (onDone) onDone();
    };

    return (
        <section id="draft" className="view" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: '14px' }}>
            <div className="pn draft-left">
                <div>
                    <div className="tag">DRAFT · GIRO {Math.min(G.spin + 1, 8)}/8</div>
                    <h3>Atributos do seu piloto</h3>
                    <p className="mut" style={{ margin: '0 0 8px', fontSize: '12.5px' }}>Escolha 1 atributo de cada piloto sorteado para montar seu DNA de pista.</p>
                    <div className="bar"><i style={{ width: `${(G.spin / 8) * 100}%` }}></i></div>
                </div>
                <div className="slots">
                    {AT.map((a, i) => (
                        <div key={i} className={`slot ${G.v[i] !== null ? 'ok' : ''}`}>
                            <span>{a}</span><b>{G.v[i] ?? '—'}</b>
                            <i style={{ width: `${G.v[i] ?? 0}%` }}></i>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {isDone && <button className="cta" style={{ width: '100%' }} onClick={handleStartCareer}>Iniciar carreira →</button>}
                </div>
            </div>

            <div className="pn draft-right">
                {!isDone && c ? (
                    <div className={c.leg === 2 ? 'pcard' : c.leg === 1 ? 'gcard' : ''} style={{ height: '100%', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
                        <div className="row" style={{ margin: 0, gap: '16px' }}>
                            <span className={`rtg ${c.leg ? 'l' : ''}`}>{c.rtg}</span>
                            <div>
                                <h3 style={{ marginBottom: '6px' }}><span className="gd" style={{ fontSize: '12px' }}>{c.f}</span> {c.n}</h3>
                                {c.leg === 2 ? <span className="lg lg-red"><SvgIcon icon={IC.bolt}/> CARTA PRIME</span> : c.leg === 1 ? <span className="lg lg-gold"><SvgIcon icon={IC.star}/> CARTA LENDA</span> : <span className="tag" style={{ margin: 0 }}>PILOTO DO GRID</span>}
                            </div>
                        </div>
                        <div className="at">
                            {AT.map((a, i) => (
                                <button key={i} disabled={G.v[i] !== null} onClick={() => handlePickAttribute(i)}>
                                    <span>{a}</span><span>{c.a[i]}</span><u style={{ width: `${c.a[i]}%` }}></u>
                                </button>
                            ))}
                        </div>
                        <div className="row">
                            <button className="swap-btn" disabled={G.rr <= 0} onClick={handleSwapDriver}>
                                <SvgIcon icon={IC.refresh} /> Trocar piloto ({G.rr})
                            </button>
                        </div>
                    </div>
                ) : (
                    <div style={{ margin: 'auto', textAlign: 'center', padding: '32px' }}>
                        <div className="tag"><SvgIcon icon={IC.check} /> DRAFT CONCLUÍDO</div>
                        <h3 className="big">Potencial calculado: {Math.round(G.v.reduce((a:number, b:number) => a + (b || 0), 0) / 8)}</h3>
                        <p className="mut">As propostas para o Kart já estão na sua mesa. Clique em "Iniciar carreira" ao lado para começar.</p>
                        {G.egg === 'lec' && <p style={{ marginTop: '16px', fontWeight: 700, color: 'var(--tx)', borderTop: '1px solid var(--div)', paddingTop: '12px', marginBottom: 0, textAlign: 'center', fontSize: '16px' }}>te amo amor &lt;3</p>}
                    </div>
                )}
            </div>
        </section>
    );
};
