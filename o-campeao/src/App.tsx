// src/App.tsx
import React, { useState, useEffect } from 'react';
import {
  G, S, subscribe, startDraft, pickAttribute, swapDriver, startCareer,
  IC, AT, NA, TEAM_COLORS, SR, maxSal, sbase, getCarRankInfo, tnOf, ovr, pot, getTeammate, rank, LIFE_ITEMS, TN, ACAD,
  actionTrain, actionBuyLife, actionGo, actionRaceMom, actionContMom, actionEventChoice,
  actionResCont, actionAcadPick, actionOffer, actionNegBack, actionNegSign, actionNegYears, actionNegUpdate, actionLoadGame
} from './engine';

const SvgIcon = ({ icon, className = "ico" }: { icon: string, className?: string }) => (
    <i className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: icon.replace('class="ico"', `class="${className}"`) }} />
);

export default function App() {
  const [view, setView] = useState<'home' | 'draft' | 'career' | 'res'>('home');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('tc_theme') || 'dark');
    return subscribe(() => setTick(t => t + 1));
  }, []);

  // Sistema de Auto-Save do React
  useEffect(() => {
    if (G) localStorage.setItem('tc_save', JSON.stringify({ G, S }));
  }, [tick]);

  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const newTheme = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tc_theme', newTheme);
    setTick(t => t + 1);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  return (
      <div className="app-shell">
        <header className="hd">
          <div className="hd-left">
            <a className="brand-logo" onClick={() => { setView('home'); setTick(t=>t+1); }}>
              <span className="brand-mark"><SvgIcon icon={IC.flag} /></span>
              <span>o campeão</span>
            </a>
            <div className="nav-pills">
              <span className={`nav-pill ${view === 'home' ? 'active' : ''}`}>Início</span>
              <span className={`nav-pill ${view === 'draft' ? 'active' : ''}`}>Draft</span>
              <span className={`nav-pill ${view === 'career' ? 'active' : ''}`}>Carreira</span>
              <span className={`nav-pill ${view === 'res' ? 'active' : ''}`}>Legado</span>
            </div>
          </div>
          <a className="sponsor-pill" href="#" target="_blank"><span>Espaço de patrocínio</span><strong>Anuncie aqui</strong></a>
          <div className="hd-right">
            {view !== 'home' && G && <i className="seed-pill">SEED {G.seed}</i>}
            <button type="button" className="icon-btn" onClick={toggleTheme} title="Alternar tema">
              {isDark ? (
                  <svg className="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
              ) : (
                  <svg className="ico" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
            <button type="button" className="icon-btn" onClick={toggleFullscreen} title="Tela cheia">
              <svg className="ico" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            </button>
          </div>
        </header>

        <main>
          {view === 'home' && <HomeView onStart={(isLoad) => setView(isLoad && S ? (S.ph === 'res' || S.ph === 'end' ? 'res' : 'career') : 'draft')} />}
          {view === 'draft' && <DraftView onDone={() => setView('career')} />}
          {view === 'career' && <CareerView onEnd={() => setView('res')} />}
          {view === 'res' && <ResultView onRestart={() => setView('home')} />}
        </main>

        <footer className="app-foot">
          <div className="foot-left"><span className="live-dot"></span>Simulador interativo · Resultados e notas fictícios</div>
          <div className="foot-right">
            <span className="foot-copy">FIA Road to F1 · 2018–2040</span>
            <div className="foot-socials">
              <a href="https://x.com/gabrielandrr" target="_blank" rel="noopener noreferrer"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg></a>
              <a href="https://www.linkedin.com/in/gabrielffrs/" target="_blank" rel="noopener noreferrer"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="https://www.instagram.com/gbrlfarias/" target="_blank" rel="noopener noreferrer"><svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            </div>
          </div>
        </footer>
      </div>
  );
}

// ---------------------------------------------------------
// TELA 1: HOME
// ---------------------------------------------------------
const HomeView = ({ onStart }: { onStart: (isLoad?: boolean) => void }) => {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [nat, setNat] = useState('BRA · Brasil');
  const [copied, setCopied] = useState(false);
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => { setHasSave(!!localStorage.getItem('tc_save')); }, []);

  const handleGo = () => {
    if (!name && !num) return alert('Dê um nome e número ao seu piloto.');
    const uStr = num.trim();
    const eggType = uStr === '19022006' ? 'max' : uStr === '11122005' ? 'lec' : null;
    startDraft(Math.random().toString(36).slice(2, 8).toUpperCase(), name, uStr, eggType);
    onStart(false);
  };

  const handleLoad = () => {
    try {
      const data = JSON.parse(localStorage.getItem('tc_save') || '{}');
      if (data.G) {
        actionLoadGame(data);
        onStart(true);
      }
    } catch(e) { localStorage.removeItem('tc_save'); }
  };

  const copyPix = () => {
    navigator.clipboard.writeText('1abb0f52-4642-4310-afdb-95ee6c09f030');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
                <input className="form-nm" placeholder="Nome do piloto" value={name} onChange={e => setName(e.target.value)} />
                <input className="form-nu" type="number" placeholder="Nº (1-99)" value={num} onChange={e => setNum(e.target.value)} />
                <select className="form-na" value={nat} onChange={e => setNat(e.target.value)}>{NA.map(n => <option key={n}>{n}</option>)}</select>
              </div>
              <div className="row">
                <button className="cta" onClick={handleGo}><span>Novo jogo</span><SvgIcon icon={IC.flag} className="ico ico-sm"/></button>
                {hasSave && <button className="g" onClick={handleLoad}>Continuar carreira</button>}
              </div>
            </div>
          </div>
          <div className="st3">
            {['Draft', 'Pirâmide FIA', 'Superlicença', 'História Viva'].map((title, i) => (
                <div key={i} className="sc"><div className="sc-top"><span>0{i+1}</span></div><h4>{title}</h4></div>
            ))}
          </div>
        </div>
        <div className="home-col-right">
          <div className="race-visual">
            <div className="rv-top"><span className="rv-dot"></span> RED BULL RING · SPIELBERG <span className="rv-season">4.318 KM</span></div>
            <div className="rv-track">
              <svg viewBox="0 0 520 330" role="img">
                <path className="track-shadow" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                <path id="rbr-path" className="track-line" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                <path className="track-dash" d="M 215 268 L 138 148 C 118 116 112 96 90 72 L 42 22 C 30 10 38 4 58 6 C 125 12 182 28 242 36 L 325 44 C 345 46 348 64 334 78 C 308 106 258 112 208 98 C 166 86 146 112 162 142 L 182 178 C 194 198 220 194 234 176 C 248 158 272 152 308 152 L 462 154 C 482 154 492 162 496 178 L 510 228 C 514 242 504 252 486 256 L 236 276 C 224 277 219 274 215 268 Z" />
                <circle className="car-dot" r="6.5"><animateMotion dur="6.8s" repeatCount="indefinite" rotate="auto"><mpath href="#rbr-path"/></animateMotion></circle>
              </svg>
              <div className="rv-caption">TELEMETRIA AO VIVO<br/><b>TODA LENDA COMEÇA AQUI.</b></div>
            </div>
          </div>
          <div className="pn lb-card"><h2><span>Melhores carreiras (Local)</span></h2><div className="lb-scroll tw"><p className="mut">Comece uma carreira para registrar dados.</p></div></div>
          <div className="sponsor-footer-grid">
            <div className="ad-card-minimal">
              <div className="ad-card-head"><span>Apoie o projeto</span><span>Chave Pix</span></div>
              <div className="ad-card-body"><div><strong>Curtiu o simulador?</strong><small>Ajude a manter online.</small></div><button className="sm" onClick={copyPix}>{copied ? 'Copiado!' : 'Copiar Pix'}</button></div>
            </div>
            <div className="ad-card-minimal">
              <div className="ad-card-head"><span>Anúncio</span><span>Patrocínio</span></div>
              <div className="ad-card-body"><div><strong>Sua Marca no Grid</strong><small>Destaque para fãs de F1.</small></div></div>
            </div>
          </div>
        </div>
      </section>
  );
};

// ---------------------------------------------------------
// TELA 2: DRAFT
// ---------------------------------------------------------
const DraftView = ({ onDone }: { onDone: () => void }) => {
  if (!G) return null;
  const isDone = G.v.every((x: any) => x !== null);
  const c = G.cur;

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
            {isDone && <button className="cta" style={{ width: '100%' }} onClick={() => { startCareer(); onDone(); }}>Iniciar carreira →</button>}
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
                      <button key={i} disabled={G.v[i] !== null} onClick={() => pickAttribute(i)}>
                        <span>{a}</span><span>{c.a[i]}</span><u style={{ width: `${c.a[i]}%` }}></u>
                      </button>
                  ))}
                </div>
                <div className="row">
                  <button className="swap-btn" disabled={G.rr <= 0} onClick={swapDriver}>
                    <SvgIcon icon={IC.refresh} /> Trocar piloto ({G.rr})
                  </button>
                </div>
              </div>
          ) : (
              <div style={{ margin: 'auto', textAlign: 'center', padding: '32px' }}>
                <div className="tag"><SvgIcon icon={IC.check} /> DRAFT CONCLUÍDO</div>
                <h3 className="big">Potencial calculado: {Math.round(G.v.reduce((a:number, b:number) => a + b) / 8)}</h3>
                <p className="mut">As propostas para o Kart já estão na sua mesa. Clique em "Iniciar carreira" ao lado para começar.</p>
              </div>
          )}
        </div>
      </section>
  );
};

// ---------------------------------------------------------
// TELA 3: CARREIRA
// ---------------------------------------------------------
const CareerView = ({ onEnd }: { onEnd: () => void }) => {
  const [tab, setTab] = useState(0);
  const [openNews, setOpenNews] = useState<Record<number, boolean>>({});
  const [allNews, setAllNews] = useState(false);

  if (!S) return null;

  const sr = SR[S.ser];
  const rk = rank();
  const pos = rk.indexOf(S.me) + 1;
  const tm = getTeammate();
  const myCar = S.F.length ? getCarRankInfo(S.ser, S.team) : null;
  const ph = S.ph;

  const fmt = (m: number) => m >= 1 ? '€' + (m >= 10 ? Math.round(m) : m.toFixed(2)) + 'M' : '€' + Math.round(m * 1000) + ' mil';
  const oc = (v: number) => v >= 88 ? 'g' : v >= 78 ? 'h' : v >= 68 ? 'm' : 'l';

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

          {/* COLUNA ESQUERDA: Classificação */}
          <aside className="pn col-standings">
            <div className="tabs">
              <button className={tab === 0 ? 'on' : ''} onClick={() => setTab(0)}>Pilotos</button>
              <button className={tab === 1 ? 'on' : ''} onClick={() => setTab(1)}>Equipes</button>
              <button className={tab === 2 ? 'on' : ''} onClick={() => setTab(2)}>Histórico</button>
            </div>
            <div id="stn">
              <div className="tag">{tab === 2 ? `HISTÓRICO (${S.rlog?.length || 0})` : S.F.length ? `${sr.n} · ${S.year} (${S.F.length} CARROS)` : 'GRID'}</div>

              {tab === 0 && (
                  <div className="tw">
                    <table>
                      <thead><tr><th>#</th><th>PILOTO</th><th>OVR</th><th>CAR</th><th>PTS</th></tr></thead>
                      <tbody>
                      {rk.map((d: any, i: number) => {
                        const o = d.p ? ovr() : Math.round(d.r);
                        const cInfo = getCarRankInfo(S.ser, d.t);
                        const teamColor = TEAM_COLORS[S.T[d.t].n] || '#888';
                        return (
                            <tr key={i} className={d.p ? 'me' : ''}>
                              <td><span className="ps">{i + 1}</span></td>
                              <td><i className="dt" style={{ background: teamColor }}></i><b>{d.n}</b> <small className="mut">({d.p ? S.age : d.age}a)</small><br/><small className="mut">{S.T[d.t].n} ({cInfo.rank}º)</small></td>
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
                      {[...S.T].sort((a,b) => b.pts - a.pts).map((x: any, i: number) => {
                        const tIdx = S.T.indexOf(x);
                        const info = getCarRankInfo(S.ser, tIdx);
                        const teamColor = TEAM_COLORS[x.n] || '#888';
                        return (
                            <tr key={i} className={x.n === S.tn ? 'me' : ''}>
                              <td><span className="ps">{i + 1}</span></td>
                              <td><i className="dt" style={{ background: teamColor }}></i><b>{x.n}</b><br/><small className="mut">{S.F.filter((d:any) => d.t === tIdx).map((d:any) => d.n.split(' ').pop()).join(' / ')}</small></td>
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
                      <p className="mut" style={{ padding: '12px' }}>Nenhuma corrida disputada.</p>
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

          {/* COLUNA CENTRAL */}
          <div className="col-center">
            <div className="pn" id="pf">
              <div className="pf">
                <div className="ring" style={{ '--p': ovr() } as any}><b>{ovr()}</b><small>OVR</small></div>
                <div style={{ flex: 1, minWidth: '180px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '22px', margin: 0 }}><span className="gd" style={{ fontSize: '12px' }}>{S.flag}</span> {S.name} <span className="mut">#{S.num}</span></h3>
                    {S.con && <span className="ct"><SvgIcon icon={IC.doc}/> {S.con.left}a · {fmt(S.con.sal)}</span>}
                  </div>
                  <div className="chips">
                    <span>{S.tn} {myCar ? `· Carro ${myCar.ovr} (${myCar.rank}º)` : ''}</span>
                    <span>{sr.n} · {S.year} ({S.age}a)</span>
                    <span>POT {Math.round(pot())}</span>
                    <span className="sl-badge"><SvgIcon icon={IC.card}/> Superlicença: {S.sl}/40</span>
                    <span><SvgIcon icon={IC.wallet}/> {fmt(S.cash)}</span>
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
              </div>
            </div>

            <div className="pn bx" id="bx" style={{ overflowY: 'auto' }}>
              {ph === 'start' && (() => {
                const trainCost = S.ser === 6 ? 1.5 : 0.08;
                const canAffordTrain = S.cash >= trainCost;
                return (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div><span className="tag">Pré-temporada {S.year}</span><h3>{sr.n} · {S.tn}</h3></div>
                        <button className="cta" onClick={actionGo}>Largar {S.year} →</button>
                      </div>
                      {!S.trDone ? (
                          <>
                            <div className="nl">Centro de performance</div>
                            <div className="train-grid">
                              <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                <div><b><SvgIcon icon={IC.gauge}/> Simulador</b><small>+2 Qualy e Ritmo</small></div>
                                <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(0)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                              </div>
                              <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                <div><b><SvgIcon icon={IC.disc}/> Stint</b><small>+2 Pneus e Chuva</small></div>
                                <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(1)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                              </div>
                              <div className="train-card" style={!canAffordTrain ? { opacity: 0.7 } : {}}>
                                <div><b><SvgIcon icon={IC.brain}/> Psico</b><small>+2 Mental e Cons.</small></div>
                                <button className="sm" disabled={!canAffordTrain} onClick={() => actionTrain(2)}>{canAffordTrain ? `Investir (${fmt(trainCost)})` : `Sem saldo (${fmt(trainCost)})`}</button>
                              </div>
                            </div>
                          </>
                      ) : <p className="ok"><b><SvgIcon icon={IC.check}/> Preparação concluída.</b></p>}

                      <div className="nl">Estilo de vida</div>
                      <div className="train-grid">
                        {LIFE_ITEMS.map(item => {
                          const owned = (S.items || []).includes(item.id);
                          const canAfford = S.cash >= item.cost;
                          return (
                              <div key={item.id} className={`train-card ${owned ? 'owned' : ''}`} style={(!owned && !canAfford) ? { opacity: 0.7 } : {}}>
                                <div><b><SvgIcon icon={item.ico}/> {item.n}</b><small>{item.desc}</small></div>
                                <button className="sm" disabled={owned || !canAfford} onClick={() => actionBuyLife(item.id)}>
                                  {owned ? 'Comprado' : canAfford ? `Comprar (${fmt(item.cost)})` : `Sem saldo (${fmt(item.cost)})`}
                                </button>
                              </div>
                          );
                        })}
                      </div>
                    </>
                );
              })()}

              {ph === 'mom_pre' && (() => {
                const curSess = S.sess[S.stops[S.mom_idx]];
                return (
                    <>
                      <span className="tag"><SvgIcon icon={IC.flag}/> Etapa em destaque</span>
                      <h3 className="big">{curSess.track}</h3>
                      <p className="mut">Acelere fundo para bater a concorrência.</p>
                      <button className="cta" onClick={actionRaceMom}>Ir para a pista →</button>
                    </>
                );
              })()}

              {ph === 'mom_pos' && (() => {
                const r = S.last_res;
                return (
                    <>
                      <span className="tag">Telemetria pós-corrida · {r.track}</span>
                      <h3 className={`big ${r.dnf ? 'ko' : r.pos === 1 ? 'ok' : ''}`}>{r.dnf ? 'Abandono (DNF)' : `${r.pos}º Lugar`}</h3>
                      <p className="mut">Largou em P{r.grid}. {r.wet ? 'Pista molhada.' : ''} <b>(+{r.pts} pts)</b></p>
                      <button className="cta" onClick={actionContMom}>Continuar →</button>
                    </>
                );
              })()}

              {ph === 'event' && (
                  <>
                    <div className="radio-box"><div className="radio-hd">Team Radio</div><h3 style={{ margin: 0, fontSize: '17px' }}>"{S.ev[0]}"</h3></div>
                    {[1, 2].map((i, k) => (
                        <button key={k} className="op" onClick={() => actionEventChoice(k)}>
                          <b>{S.ev[i][0]}</b><small>Probabilidade técnica: {Math.round(S.pp[k] * 100)}%</small>
                        </button>
                    ))}
                  </>
              )}

              {ph === 'res' && (
                  <>
                    <div className="radio-box" style={{ borderLeftColor: S.out.ok ? 'var(--ok)' : 'var(--ko)' }}>
                      <h3 style={{ fontSize: '19px' }}>{S.out.ok ? 'Manobra executada com sucesso' : 'A estratégia falhou'}</h3>
                      <p className="mut">{S.out.txt}</p>
                    </div>
                    <button className="cta" onClick={actionResCont}>Continuar temporada →</button>
                  </>
              )}

              {ph === 'acad_pick' && (
                  <>
                    <span className="tag"><SvgIcon icon={IC.cap}/> Olheiros da Fórmula 1</span>
                    <h3 className="big">Convite para Academia de Pilotos</h3>
                    <p className="mut" style={{ fontSize: '13.5px' }}>Seu desempenho na base chamou a atenção das gigantes da F1. Escolha uma academia para representar:</p>
                    {ACAD.map((ac: any, idx: number) => (
                        <button key={idx} className="op" onClick={() => actionAcadPick(idx)} style={{ borderLeft: `5px solid ${ac.c}` }}>
                          <b>{ac.n}</b><small>Benefício: {ac.bonus}</small>
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
                      const teamCol = TEAM_COLORS[tName] || '#888';
                      return (
                          <button key={k} className="op" onClick={() => actionOffer(k)} style={{ borderLeft: `5px solid ${teamCol}` }}>
                            <b>{o.cont ? 'Cumprir contrato · ' : o.poach ? 'Quebrar contrato · ' : o.re ? 'Renovação · ' : ''}{SR[o.ser].n} · {tName}</b>
                            <div className="op-meta">
                              <span className={`ov ${oc(cInfo.ovr)}`}>Carro {cInfo.ovr}</span>
                              <span className="badge-rank">{cInfo.rank}º ({cInfo.label})</span>
                              <span className="mut" style={{ fontSize: '11px' }}>{SR[o.ser].spec || ''}</span>
                              {o.cont && <span className="badge-info">{S.con.left} ano(s) rest.</span>}
                              {o.poach && <span className="badge-info" style={{ color: 'var(--ko)' }}>Multa: -2 REP</span>}
                              {o.ser > S.ser + 1 ? <span className="badge-info" style={{ color: 'var(--gold)' }}>Salto de categoria</span> : o.ser > S.ser && !S.first ? <span className="badge-info" style={{ color: 'var(--ok)' }}>Promoção FIA</span> : null}
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

                      <div className="nl">Duração do contrato:</div>
                      <div className="yb">
                        {[...Array(S.neg.o.ser === 6 ? 4 : 2)].map((_, i) => (
                            <button key={i} className={S.neg.yrs === i + 1 ? 'on' : ''} onClick={() => actionNegYears(i + 1)}>{i + 1} ano</button>
                        ))}
                      </div>

                      <div className="nl">Objetivos obrigatórios (Máx: {maxRaces} corridas)</div>
                      <label style={{ display: 'block', margin: '6px 0', background: 'var(--surf-elev)', border: '1px solid var(--div)', borderRadius: 'var(--r-md)', padding: '10px 14px' }}>
                        Vitórias exigidas: <b>{S.neg.w}</b>
                        <input type="range" min="0" max={maxRaces} value={S.neg.w} onChange={e => actionNegUpdate('w', +e.target.value)} />
                      </label>
                      <label style={{ display: 'block', margin: '6px 0', background: 'var(--surf-elev)', border: '1px solid var(--div)', borderRadius: 'var(--r-md)', padding: '10px 14px' }}>
                        Pódios exigidos: <b>{S.neg.p}</b>
                        <input type="range" min="0" max={maxRaces} value={S.neg.p} onChange={e => actionNegUpdate('p', +e.target.value)} />
                      </label>
                      <label style={{ display: 'block', margin: '6px 0', background: 'var(--surf-elev)', border: '1px solid var(--div)', borderRadius: 'var(--r-md)', padding: '10px 14px' }}>
                        <input type="checkbox" checked={!!S.neg.ti} onChange={e => actionNegUpdate('ti', e.target.checked ? 1 : 0)} /> Obrigação de ser campeão da categoria
                      </label>

                      <div className="nl">Salário exigido: <b className="gd">{fmt(S.neg.sal)}</b></div>
                      <input type="range" min={sbase(S.neg.o) * 0.5} max={mxSal} step={mxSal / 300} value={S.neg.sal} onChange={e => actionNegUpdate('sal', +e.target.value)} />

                      <div className="row" style={{ marginTop: '20px' }}>
                        <button className="cta" onClick={actionNegSign}>Assinar contrato →</button>
                        <button className="g" onClick={actionNegBack}>Voltar</button>
                      </div>
                    </>
                );
              })()}
            </div>
          </div>

          {/* COLUNA DIREITA: Feed (News) */}
          <aside className="pn col-press">
            <div>
              <h2><span>Linha do tempo</span></h2>
              <div className="ys">
                {S.rows.map((r: any, i: number) => <span key={i} className={r.pos === 1 ? 't' : ''}>{r.y} · P{r.pos}</span>)}
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--div)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ font: '600 12px var(--f-head)', color: 'var(--tx-sec)', textTransform: 'uppercase' }}>Últimas atualizações</span>
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

// ---------------------------------------------------------
// TELA 4: RESULTADO FINAL
// ---------------------------------------------------------
const ResultView = ({ onRestart }: { onRestart: () => void }) => {
  const tier = () => { const { t, w, pd } = S.tot, b = S.rows.some((r:any) => r.s === 'Fórmula 1' && r.pos <= 5); return t >= 8 && w >= 100 ? 11 : t >= 7 ? 10 : t >= 5 ? 9 : t >= 4 ? 8 : t >= 3 ? 7 : t >= 2 ? 6 : t >= 1 ? 5 : w >= 10 ? 4 : (w >= 3 || pd >= 10) ? 3 : (pd >= 1 || b) ? 2 : 1; };
  const ti = tier();
  const fmt = (m: number) => m >= 1 ? '€' + (m >= 10 ? Math.round(m) : m.toFixed(2)) + 'M' : '€' + Math.round(m * 1000) + ' mil';

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
    onRestart();
  };

  return (
      <section id="res" className="view">
        <div className="pn res-left">
          <div style={{ textAlign: 'center' }}><span className="tag">Carreira encerrada</span></div>
          <div className="fifa">
            <div className="o">{S.peak}</div><span className="gd">{S.flag} #{S.num}</span><div className="n">{S.name}</div>
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
        <div className="pn res-right">
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