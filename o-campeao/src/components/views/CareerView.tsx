// src/components/views/CareerView.tsx
import { useState } from 'react';
import { useGame } from '../../store/GameContext';
import { SR, TEAM_COLORS, ACAD, LIFE_ITEMS, AT, IC } from '../../data/constants';
import { 
    ovr, pot, rank, getCarRankInfo, tnOf, maxSal, sbase, 
    actionTrain, actionBuyLife, actionGo, actionRaceMom, actionContMom, 
    actionEventChoice, actionResCont, actionAcadPick, actionOffer, 
    actionNegBack, actionNegSign, actionNegYears, actionNegUpdate 
} from '../../engine';

const SvgIcon = ({ icon, className = "ico" }: { icon: string, className?: string }) => (
    <i className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: icon.replace('ico', className) }} />
);

export const CareerView = ({ onEnd }: { onEnd: () => void }) => {
    const { gameState } = useGame();
    const S = gameState;

    const [tab, setTab] = useState(0);
    const [openNews, setOpenNews] = useState<Record<number, boolean>>({});
    const [allNews, setAllNews] = useState(false);

    if (!S) return null;

    const sr = SR[S.ser];
    const rk = rank();
    const pos = rk.indexOf(S.me) + 1;
    const myCar = S.F.length ? getCarRankInfo(S.ser, S.team) : null;
    const ph = S.ph;

    const fmt = (m: number) => m >= 1 ? '€' + (m >= 10 ? Math.round(m) : m.toFixed(2)) + 'M' : '€' + Math.round(m * 1000) + ' mil';
    const oc = (v: number) => v >= 88 ? 'g' : v >= 78 ? 'h' : v >= 68 ? 'm' : 'l';
    const getTeamColor = (tName: string, tIdx: number) => TEAM_COLORS[tName] || `hsl(${(tIdx * 42) % 360} 65% 50%)`;

    if (ph === 'end') {
        return (
            <section id="car" className="view">
                <div className="pn" style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', padding: '40px' }}>
                    <p style={{ fontSize: '14.5px' }}><b>{S.msg}</b></p>
                    <h3 className="big">Fim da Carreira.</h3>
                    <button className="cta" onClick={onEnd}>Ver resultado final →</button>
                </div>
            </section>
        );
    }

    return (
        <section id="car" className="view">
            <div className="cg">
                {/* Coluna Esquerda: Classificação */}
                <aside className="pn col-standings">
                    <div className="tabs">
                        <button className={tab === 0 ? 'on' : ''} onClick={() => setTab(0)}>Pilotos</button>
                        <button className={tab === 1 ? 'on' : ''} onClick={() => setTab(1)}>Equipes</button>
                        <button className={tab === 2 ? 'on' : ''} onClick={() => setTab(2)}>Histórico</button>
                    </div>
                    <div id="stn">
                        <div className="tag" style={{ margin: '4px 0 10px' }}>{tab === 2 ? `HISTÓRICO DE GPs (${S.rlog?.length || 0})` : S.F.length ? `${sr.n} · ${S.year} (${S.F.length} CARROS)` : 'GRID'}</div>

                        {tab === 0 && (
                            <div className="tw">
                                <table>
                                    <thead><tr><th>#</th><th>PILOTO</th><th>OVR</th><th>CAR</th><th>PTS</th></tr></thead>
                                    <tbody>
                                        {rk.map((d: any, i: number) => {
                                            const o = d.p ? ovr() : Math.round(d.r);
                                            const cInfo = getCarRankInfo(S.ser, d.t);
                                            const teamColor = getTeamColor(S.T[d.t].n, d.t);
                                            return (
                                                <tr key={i} className={d.p ? 'me' : ''}>
                                                    <td><span className="ps">{i + 1}</span></td>
                                                    <td><i className="dt" style={{ background: teamColor }}></i><b style={{ fontFamily: 'var(--f-head)' }}>{d.n}</b> <small className="mut">({d.p ? S.age : d.age}a)</small><br/><small className="mut">{S.T[d.t].n} ({cInfo.rank}º)</small></td>
                                                    <td><span className={`ov ${oc(o)}`}>{o}</span></td>
                                                    <td><span className={`ov ${oc(cInfo.ovr)}`}>{cInfo.ovr}</span></td>
                                                    <td className="pp">{d.pts}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {tab === 1 && (
                            <div className="tw">
                                <table>
                                    <thead><tr><th>#</th><th>EQUIPE</th><th>CAR</th><th>STATUS</th><th>PTS</th></tr></thead>
                                    <tbody>
                                        {[...S.T].sort((a:any, b:any) => b.pts - a.pts).map((x: any, i: number) => {
                                            const tIdx = S.T.indexOf(x);
                                            const info = getCarRankInfo(S.ser, tIdx);
                                            const teamColor = getTeamColor(x.n, tIdx);
                                            return (
                                                <tr key={i} className={x.n === S.tn ? 'me' : ''}>
                                                    <td><span className="ps">{i + 1}</span></td>
                                                    <td><i className="dt" style={{ background: teamColor }}></i><b style={{ fontFamily: 'var(--f-head)' }}>{x.n}</b><br/><small className="mut">{S.F.filter((d:any) => d.t === tIdx).map((d:any) => d.n.split(' ').pop()).join(' / ')}</small></td>
                                                    <td><span className={`ov ${oc(info.ovr)}`}>{info.ovr}</span></td>
                                                    <td><small className="mut"><b>{info.rank}º</b>/{info.total}</small></td>
                                                    <td className="pp">{x.pts}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {tab === 2 && (
                            (!S.rlog || S.rlog.length === 0) ? (
                                <p className="mut" style={{ padding: '12px' }}>Nenhuma corrida disputada ainda.</p>
                            ) : (
                                <div className="tw">
                                    <table>
                                        <thead><tr><th style={{ width: '72px', paddingLeft: '12px', textAlign: 'left' }}>ANO</th><th>PISTA</th><th>LARG</th><th>CHEG</th><th>PTS</th></tr></thead>
                                        <tbody>
                                            {S.rlog.slice(0, 80).map((r: any, i: number) => (
                                                <tr key={i} className={r.pos === 1 ? 'me' : ''}>
                                                    <td style={{ width: '72px', paddingLeft: '12px', textAlign: 'left' }}><b>{r.y}</b><br/><small className="mut" style={{ fontSize: '10px' }}>{r.ser}</small></td>
                                                    <td><b style={{ fontSize: '11.5px' }}>{r.track}</b> {r.wet ? <SvgIcon icon={IC.rain}/> : ''}<br/><small className="mut">Venc: {r.win}</small></td>
                                                    <td>P{r.grid}</td>
                                                    <td><b>{r.pos === 'DNF' ? 'DNF' : 'P' + r.pos}</b></td>
                                                    <td className="pp">{r.pts}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        )}
                    </div>
                </aside>

                {/* Coluna Central */}
                <div className="col-center">
                    <div className="pn" id="pf" style={{ padding: '16px 20px', flexShrink: 0 }}>
                        <div className="pf" style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                            <div className="ring" style={{ '--p': ovr() } as any}><b>{ovr()}</b><small>OVR</small></div>
                            <div style={{ flex: 1, minWidth: '180px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '22px', margin: 0 }}><span className="gd" style={{ fontSize: '12px' }}>{S.flag}</span> {S.name} <span className="mut">#{S.num}</span></h3>
                                    {S.con && <span className="ct"><SvgIcon icon={IC.doc}/> {S.con.left}a · {fmt(S.con.sal)}/ano</span>}
                                </div>
                                <div className="chips">
                                    <span><i className="dt" style={{ background: S.F.length ? getTeamColor(S.tn, S.team) : '#888', marginRight: '3px' }}></i>{S.tn} {myCar ? `· Carro ${myCar.ovr} (${myCar.rank}º)` : ''}</span>
                                    <span>{sr.n} · {S.year} ({S.age}a)</span>
                                    <span>POT {Math.round(pot())}</span>
                                    <span className="sl-badge"><SvgIcon icon={IC.card}/> Superlicença: {S.sl}/40</span>
                                    <span><SvgIcon icon={IC.wallet}/> {fmt(S.cash)}</span>
                                    {S.acad && (() => {
                                        const acObj = ACAD.find(a => a.id === S.acad);
                                        return acObj ? <span style={{ borderColor: acObj.c, color: 'var(--tx)' }}><SvgIcon icon={IC.cap}/> {acObj.n}</span> : null;
                                    })()}
                                </div>
                            </div>
                        </div>
                        <div className="pf-bottom">
                            <div className="stats">
                                <div>POS<b>{S.F.length ? `${pos}º` : '—'}</b></div>
                                <div>PONTOS<b>{S.me.pts}</b></div>
                                <div>VITÓRIAS<b>{S.me.w}</b></div>
                                <div>PÓDIOS<b>{S.me.pd}</b></div>
                            </div>
                            {S.F.find((d: any) => d.t === S.team && !d.p) && (() => {
                                const tm = S.F.find((d: any) => d.t === S.team && !d.p);
                                return (
                                    <div className="h2h-bar">
                                        <span><SvgIcon icon={IC.swords}/> vs <b>{tm.n.split(' ').pop()}</b> ({Math.round(tm.r)})</span>
                                        <span>Q <b className="h2h-score">{S.h2h.qW}-{S.h2h.qL}</b></span>
                                        <span>R <b className="h2h-score">{S.h2h.rW}-{S.h2h.rL}</b></span>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                    <div className="pn bx" id="bx" style={{ flex: 1, overflowY: 'auto', padding: '20px 22px' }}>
                        {ph === 'start' && (() => {
                            const trainCost = S.ser === 6 ? 1.5 : 0.08;
                            const canAffordTrain = S.cash >= trainCost;
                            return (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                        <div><span className="tag">Pré-temporada {S.year}</span><h3>{sr.full || sr.n} · {S.tn}</h3></div>
                                        <button className="cta" onClick={actionGo}>Largar temporada {S.year} →</button>
                                    </div>
                                    <p className="mut" style={{ fontSize: '12.5px', margin: '4px 0 12px' }}>
                                        <b>Especificação:</b> {sr.spec || ''} · <b>Calendário:</b> {S.sess.length} etapas · Companheiro: <b>{(() => {
                                            const tm = S.F.find((d: any) => d.t === S.team && !d.p);
                                            return tm ? `${tm.n} (OVR ${Math.round(tm.r)})` : '—';
                                        })()}</b>.
                                    </p>
                                    {!S.trDone ? (
                                        <>
                                            <div className="nl">Centro de performance e preparação</div>
                                            <div className="train-grid">
                                                <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                                    <div><b><SvgIcon icon={IC.gauge}/> Simulador</b><small>+2 Qualificação e Ritmo</small></div>
                                                    <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(0)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                                                </div>
                                                <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                                    <div><b><SvgIcon icon={IC.disc}/> Stint</b><small>+2 Pneus e Chuva</small></div>
                                                    <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(1)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                                                </div>
                                                <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                                    <div><b><SvgIcon icon={IC.brain}/> Psico</b><small>+2 Mental, Consist.</small></div>
                                                    <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(2)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                                                </div>
                                            </div>
                                        </>
                                    ) : <p className="ok" style={{ fontWeight: 600, fontSize: '12.5px' }}><b><SvgIcon icon={IC.check}/> Preparação concluída.</b></p>}

                                    <div className="nl">Estilo de vida & patrimônio</div>
                                    <div className="train-grid">
                                        {LIFE_ITEMS.map(item => {
                                            const owned = (S.items || []).includes(item.id);
                                            const canAfford = S.cash >= item.cost;
                                            return (
                                                <div key={item.id} className={`train-card ${owned ? 'owned' : ''}`} style={(!owned && !canAfford) ? { opacity: 0.7 } : {}}>
                                                    <div>
                                                        <b><SvgIcon icon={item.ico}/> {item.n}</b>
                                                        <small>{item.desc}</small>
                                                        <small style={{ color: 'var(--tx)', fontWeight: 600, marginTop: '4px', display: 'block' }}>Manut: {fmt(item.maint)}/ano</small>
                                                    </div>
                                                    <button className="sm" disabled={owned || !canAfford} onClick={() => actionBuyLife(item.id)}>
                                                        {owned ? 'Adquirido' : canAfford ? `Comprar (${fmt(item.cost)})` : `Sem saldo (${fmt(item.cost)})`}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })}

                        {ph === 'mom_pre' && (() => {
                            const curSess = S.sess[S.stops[S.mom_idx]];
                            const m = S.mom_idx;
                            const tit = m === 0 ? `Abertura · ${curSess.track}` : m === 1 ? `Meio de temporada · ${curSess.track}` : `Grande Final · ${curSess.track}`;
                            const sub = m === 0 ? `Etapa 1 em ${curSess.track}. Foco total na largada.` : m === 1 ? `Etapa ${S.stops[1]+1} (${curSess.track}). Você está em P${pos} (${S.me.pts} pts) e o duelo interno está ${S.h2h.rW}x${S.h2h.rL}.` : `Decisão em ${curSess.track}! Você soma ${S.me.pts} pts na P${pos} geral.`;
                            return (
                                <>
                                    <span className="tag"><SvgIcon icon={IC.flag}/> Etapa em destaque · {sr.n}</span>
                                    <h3 className="big">{tit}</h3>
                                    <p className="mut" style={{ fontSize: '14.5px' }}>{sub}</p>
                                    <div className="row"><button className="cta" onClick={actionRaceMom}>Ir para a pista →</button></div>
                                </>
                            );
                        })}

                        {ph === 'mom_pos' && (() => {
                            const r = S.last_res;
                            const tm = S.F.find((d: any) => d.t === S.team && !d.p);
                            const headline = r.dnf ? 'Abandonou (DNF)' : `${r.pos}º Lugar`;
                            const tmTxt = (tm && r.tmPos) ? ` Companheiro ${tm.n} terminou em P${r.tmPos}.` : '';
                            const desc = r.dnf ? `Em ${r.track}, largou em P${r.grid}, mas sofreu um abandono. Vencedor: ${r.win}.` : `Em ${r.track}, largou em P${r.grid} e cruzou em P${r.pos} (Vencedor: ${r.win}).${tmTxt}`;
                            return (
                                <>
                                    <span className="tag">Telemetria pós-corrida · {r.track}</span>
                                    <h3 className={`big ${r.dnf ? 'ko' : r.pos === 1 ? 'ok' : ''}`}>{headline}</h3>
                                    <p className="mut" style={{ fontSize: '14.5px' }}>{desc} <b>(+{r.pts} pts)</b></p>
                                    <div className="row"><button className="cta" onClick={actionContMom}>Continuar campeonato →</button></div>
                                </>
                            );
                        })}

                        {ph === 'event' && (
                            <>
                                <div className="radio-box">
                                    <div className="radio-hd"><span className="radio-wave"><i></i><i></i><i></i></span> Team Radio · Engenheiro de corrida</div>
                                    <h3 style={{ margin: 0, fontSize: '17px' }}>"{S.ev[0]}"</h3>
                                </div>
                                {[1, 2].map((i, k) => (
                                    <button key={k} className="op" onClick={() => actionEventChoice(k)}>
                                        <b>{S.ev[i][0]}</b><small>Chance de sucesso: <b>{Math.round(S.pp[k] * 100)}%</b> ({AT[S.ev[i][3]]}: {S.v[S.ev[i][3]]})</small>
                                    </button>
                                ))}
                            </>
                        )}

                        {ph === 'res' && (
                            <>
                                <div className="radio-box" style={{ borderLeftColor: S.out.ok ? 'var(--ok)' : 'var(--ko)' }}>
                                    <div className="radio-hd" style={{ color: S.out.ok ? 'var(--ok)' : 'var(--ko)' }}>Relatório de telemetria</div>
                                    <h3 style={{ fontSize: '19px', marginBottom: '6px' }}>{S.out.ok ? 'Manobra executada com sucesso' : 'A estratégia não funcionou'}</h3>
                                    <p className="mut" style={{ margin: 0, fontSize: '13.5px' }}>{S.out.txt}</p>
                                </div>
                                <div className="row"><button className="cta" onClick={actionResCont}>Continuar temporada →</button></div>
                            </>
                        )}

                        {ph === 'acad_pick' && (
                            <>
                                <span className="tag"><SvgIcon icon={IC.cap}/> Olheiros da Fórmula 1</span>
                                <h3 className="big">Convite para Academia de Pilotos</h3>
                                <p className="mut" style={{ fontSize: '13.5px' }}>Escolha uma academia para representar:</p>
                                {ACAD.map((ac: any, idx: number) => (
                                    <button key={idx} className="op" onClick={() => actionAcadPick(idx)} style={{ borderLeft: `5px solid ${ac.c}` }}>
                                        <b>{ac.n}</b><small>{ac.bonus}</small>
                                    </button>
                                ))}
                            </>
                        )}

                        {ph === 'offer' && (
                            <>
                                {S.msg && <p style={{ fontSize: '13px', borderLeft: '3px solid var(--tx-sec)', padding: '8px 12px', background: 'var(--surf-elev)' }}>{S.msg}</p>}
                                <div className="tag">{S.first ? 'Escolha sua equipe no Kart (2018)' : 'Propostas para ' + (S.year + 1)}</div>
                                {S.offs?.map((o: any, k: number) => {
                                    const cInfo = getCarRankInfo(o.ser, o.t, true);
                                    const tName = tnOf(o);
                                    return (
                                        <button key={k} className="op" onClick={() => actionOffer(k)} style={{ borderLeft: `5px solid ${TEAM_COLORS[tName] || '#888'}` }}>
                                            <b>{o.cont ? 'Cumprir · ' : o.poach ? 'Quebrar · ' : o.re ? 'Renovação · ' : ''}{SR[o.ser].n} · {tName}</b>
                                            <div className="op-meta">
                                                <span className={`ov ${oc(cInfo.ovr)}`}>Carro {cInfo.ovr}</span>
                                                <span className="badge-rank">{cInfo.rank}º ({cInfo.label})</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </>
                        )}

                        {ph === 'neg' && (() => {
                            const maxRaces = (S.neg.o.ser === 6 ? 24 : SR[S.neg.o.ser].R) * S.neg.yrs;
                            const mxSal = maxSal(S.neg);
                            return (
                                <>
                                    <span className="tag">Mesa de negociação</span>
                                    <h3>{SR[S.neg.o.ser].n} · {tnOf(S.neg.o)}</h3>
                                    <div className="nl">Duração do contrato</div>
                                    <div className="yb">
                                        {[...Array(S.neg.o.ser === 6 ? 4 : 2)].map((_, i) => (
                                            <button key={i} className={S.neg.yrs === i + 1 ? 'on' : ''} onClick={() => actionNegYears(i + 1)}>{i + 1} ano</button>
                                        ))}
                                    </div>
                                    <div className="nl">Objetivos obrigatórios</div>
                                    <label>Vitórias exigidas: <b>{S.neg.w}</b><input type="range" min="0" max={maxRaces} value={S.neg.w} onChange={e => actionNegUpdate('w', +e.target.value)} /></label>
                                    <label>Pódios exigidos: <b>{S.neg.p}</b><input type="range" min="0" max={maxRaces} value={S.neg.p} onChange={e => actionNegUpdate('p', +e.target.value)} /></label>
                                    <div className="nl">Salário: <b className="gd">{fmt(S.neg.sal)}</b></div>
                                    <input type="range" min={sbase(S.neg.o) * 0.5} max={mxSal} step={mxSal / 300} value={S.neg.sal} onChange={e => actionNegUpdate('sal', +e.target.value)} />
                                    <div className="row"><button className="cta" onClick={actionNegSign}>Assinar →</button><button className="g" onClick={actionNegBack}>Voltar</button></div>
                                </>
                            );
                        })}
                    </div>
                </div>

                {/* Coluna Direita: Imprensa */}
                <aside className="pn col-press">
                    <div>
                        <h2><span>Linha do tempo</span></h2>
                        <div className="ys">
                            {S.rows.length === 0 ? <span className="mut">Início em 2018</span> : S.rows.map((r: any, i: number) => <span key={i} className={r.pos === 1 ? 't' : ''}>{r.y} · P{r.pos}</span>)}
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid var(--div)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ font: '600 12px var(--f-head)', color: 'var(--tx-sec)' }}>Atualizações</span>
                        <button className="g sm" onClick={() => setAllNews(!allNews)}>{allNews ? 'Recolher' : 'Ver tudo'}</button>
                    </div>
                    <div id="pr">
                        {S.news.slice(0, allNews ? 30 : 8).map((n: any, i: number) => (
                            <div key={i} className={`nw ${openNews[n.i] ? 'o' : ''}`} onClick={() => setOpenNews(prev => ({ ...prev, [n.i]: !prev[n.i] }))}>
                                <div className="nh"><span>{n.y}</span><b>{n.t}</b><em>+</em></div>
                                <p>{n.d}</p>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
};
