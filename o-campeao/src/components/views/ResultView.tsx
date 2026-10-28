// src/components/views/ResultView.tsx
import { useEffect } from 'react';
import { useGame } from '../../store/GameContext';
import { TN, IC } from '../../data/constants';

const SvgIcon = ({ icon, className = "ico" }: { icon: string, className?: string }) => (
    <i className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: icon.replace('ico', className) }} />
);

export const ResultView = ({ onRestart }: { onRestart: () => void }) => {
    const { gameState, setGameState, setDraftState, setView } = useGame();
    const S = gameState;

    if (!S) return null;

    const tier = () => { 
        const { t, w, pd } = S.tot; 
        const b = S.rows.some((r:any) => r.s === 'Fórmula 1' && r.pos <= 5); 
        return t >= 8 && w >= 100 ? 11 : t >= 7 ? 10 : t >= 5 ? 9 : t >= 4 ? 8 : t >= 3 ? 7 : t >= 2 ? 6 : t >= 1 ? 5 : w >= 10 ? 4 : (w >= 3 || pd >= 10) ? 3 : (pd >= 1 || b) ? 2 : 1; 
    };

    const ti = tier();
    const fmt = (m: number) => m >= 1 ? '€' + (m >= 10 ? Math.round(m) : m.toFixed(2)) + 'M' : '€' + Math.round(m * 1000) + ' mil';

    useEffect(() => {
        try {
            const a = JSON.parse(localStorage.getItem('tc_best') || '[]');
            a.push({ n: S.name, s: S.tot.t * 100 + S.tot.w * 2 + S.tot.pd, t: ti, ti: S.tot.t, w: S.tot.w, o: S.peak });
            a.sort((x: any, y: any) => y.s - x.s);
            localStorage.setItem('tc_best', JSON.stringify(a.slice(0, 10)));
        } catch (e) {}
    }, []);

    const handleSaveImage = () => {
        const c = document.createElement('canvas'); c.width = 600; c.height = 800; const ctx = c.getContext('2d');
        if(!ctx) return;
        
        ctx.fillStyle = '#0F0E0D'; ctx.fillRect(0, 0, 600, 800);
        ctx.fillStyle = '#191816'; ctx.fillRect(28, 28, 544, 744);
        ctx.strokeStyle = '#272724'; ctx.lineWidth = 2; ctx.strokeRect(28, 28, 544, 744);

        ctx.fillStyle = '#FAFAF9'; ctx.font = '700 120px "Space Grotesk"'; ctx.fillText(S.peak.toString(), 48, 160);
        ctx.fillStyle = '#85827C'; ctx.font = '600 15px "Space Grotesk"'; ctx.fillText('OVR MÁXIMO ALCANÇADO', 52, 192);

        ctx.fillStyle = '#FAFAF9'; ctx.font = '700 36px "Space Grotesk"'; ctx.fillText(`${S.flag} · ${S.name.toUpperCase()} #${S.num}`, 48, 265);
        ctx.fillStyle = '#272724'; ctx.fillRect(48, 290, 504, 1);
        ctx.fillStyle = '#F5C842'; ctx.font = '700 22px "Space Grotesk"'; ctx.fillText(`NÍVEL ${ti} · ${TN[ti-1].toUpperCase()}`, 48, 335);

        ctx.fillStyle = '#141412'; ctx.fillRect(48, 370, 504, 270);
        ctx.strokeStyle = '#272724'; ctx.strokeRect(48, 370, 504, 270);
        ctx.fillStyle = '#FAFAF9'; ctx.font = '600 22px "Inter"';
        ctx.fillText(`TÍTULOS MUNDIAIS F1: ${S.tot.t}`, 76, 425);
        ctx.fillText(`VITÓRIAS NA F1: ${S.tot.w}`, 76, 478);
        ctx.fillText(`PÓDIOS NA F1: ${S.tot.pd}`, 76, 531);
        ctx.fillText(`PONTOS NA CARREIRA: ${S.tot.pts}`, 76, 584);
        ctx.fillStyle = '#85827C'; ctx.font = '600 18px "Space Grotesk"';
        ctx.fillText(`PATRIMÔNIO ACUMULADO: ${fmt(S.cash)}`, 76, 622);

        ctx.fillStyle = '#FAFAF9'; ctx.fillRect(48, 690, 290, 44);
        ctx.fillStyle = '#111010'; ctx.font = '700 16px "Space Grotesk"'; ctx.fillText('O CAMPEÃO · FIA SIMULATOR', 68, 718);

        const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = 'O_CAMPEAO_' + S.name.replace(/\s+/g,'_') + '.png'; a.click();
    };

    const clearAndRestart = () => {
        localStorage.removeItem('tc_save');
        setGameState(null);
        setDraftState(null);
        setView('home');
        if (onRestart) onRestart();
    };

    return (
        <section id="res" className="view" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '14px' }}>
            <div className="pn res-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}><span className="tag">Carreira encerrada</span></div>
                <div className="fifa">
                    <div className="o">{S.peak}</div><span className="gd">{S.flag} #${S.num}</span><div className="n">{S.name}</div>
                    <div className="gr">
                        <span><SvgIcon icon={IC.trophy}/> {S.tot.t} Títulos F1</span>
                        <span><SvgIcon icon={IC.flag}/> {S.tot.w} Vitórias</span>
                        <span><SvgIcon icon={IC.medal}/> {S.tot.pd} Pódios</span>
                        <span><SvgIcon icon={IC.star}/> {S.tot.pts} Pontos</span>
                        <span><SvgIcon icon={IC.wallet}/> {fmt(S.cash)}</span>
                        <span><SvgIcon icon={IC.home}/> {S.items.length} Bens</span>
                    </div>
                    <p style={{ fontWeight: 700, fontFamily: 'var(--f-head)', fontSize: '15px', marginTop: '14px', color: 'var(--tx)' }}>
                        NÍVEL {ti} · {TN[ti - 1].toUpperCase()}
                    </p>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                    <button className="cta" onClick={handleSaveImage}>Salvar cartão (Imagem)</button>
                    <button className="g" onClick={clearAndRestart}>Jogar de novo</button>
                </div>
            </div>
            <div className="pn res-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2><span>Os 11 níveis de legado</span></h2>
                <div className="lad">
                    {TN.map((n, i) => (
                        <div key={i} className={i + 1 === ti ? 'on' : i + 1 < ti ? 'p' : ''}>{i + 1}. {n}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};
