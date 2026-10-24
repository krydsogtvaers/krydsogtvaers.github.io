/* KFL Bingo – fælles logik til siden (browser) og printgeneratoren (node).
   Alt er deterministisk: samme sæt + kortnummer giver altid samme kort. */
(function (root) {
  "use strict";
  const POOL_STR = 80;      // begreber i et sæt (trukket fra alle kapitler)
  const KORT_PR_SAET = 36;  // antal kort pr. sæt
  const ANTAL_SAET = 10;

  // Begreber, der ikke må ligge i samme pulje (næsten ens ledetråde eller svaret står i ledetråden)
  const KONFLIKT = [
    ["DG", "DÆKNINGSGRAD"], ["DB", "DÆKNINGSBIDRAG"], ["OG", "OVERSKUDSGRAD"],
    ["AG", "AFKASTNINGSGRAD"], ["APS", "ANPARTSSELSKAB"], ["ESG", "ENVIRONMENT", "GOVERNANCE"],
    ["SOLIDITET", "SOLIDITETSGRAD"], ["LIKVIDE", "LIKVIDITET", "LIKVIDITETSGRAD"],
    ["INDTÆGT", "INDBETALING"], ["UDGIFT", "UDBETALING", "OMKOSTNING"]
  ];
  const VISNING = {
    STARTUP: "Start-up", SCALEUP: "Scale-up", BUSINESSANGEL: "Business angel", LOWEND: "Low-end",
    NEWMARKET: "New market", GLOBALCOMPACT: "Global Compact", CODEOFCONDUCT: "Code of Conduct",
    REDWASHING: "Red washing", PINKWASHING: "Pink washing", BLUEWASHING: "Blue washing",
    APS: "ApS", GHG: "GHG", VIRK: "virk", ASHRIDGE: "Ashridge", CSRD: "CSRD"
  };

  function rng(seed) {
    let a = seed >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function shuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function visning(o) {
    if (VISNING[o.ord]) return VISNING[o.ord];
    if (/\(fork\.\)/.test(o.ledetraad)) return o.ord;            // forkortelser skrives med store bogstaver
    const s = o.ord.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function ledetraad(o) { return o.ledetraad.replace(/\s*\((?:\d ord[^)]*)\)/g, "").trim(); }

  // Puljen til et sæt: vægtet trækning, så små kapitler ikke drukner i kap. 11 (vægt ~ 1/√kapitelstørrelse)
  function pool(bank, saet) {
    const r = rng(7000 + saet), n = {};
    bank.forEach(o => n[o.kap] = (n[o.kap] || 0) + 1);
    const gruppe = {}; KONFLIKT.forEach((g, gi) => g.forEach(w => gruppe[w] = gi));
    const keyed = bank.map((o, i) => ({ i, k: Math.pow(r(), Math.sqrt(n[o.kap])) })).sort((a, b) => b.k - a.k);
    const valgt = [], brugteGrupper = new Set(), brugteLedetraade = new Set();
    for (const { i } of keyed) {
      const o = bank[i], g = gruppe[o.ord], l = ledetraad(o);
      if (g !== undefined && brugteGrupper.has(g)) continue;
      if (brugteLedetraade.has(l)) continue;
      valgt.push(i); if (g !== undefined) brugteGrupper.add(g); brugteLedetraade.add(l);
      if (valgt.length === POOL_STR) break;
    }
    return valgt;
  }
  function kort(poolIdx, saet, nr) { return shuffle(poolIdx, rng(7000 + saet * 100 + nr)).slice(0, 16); }

  const LINJER = [];
  for (let i = 0; i < 4; i++) { LINJER.push([0, 1, 2, 3].map(c => i * 4 + c)); LINJER.push([0, 1, 2, 3].map(r => r * 4 + i)); }
  LINJER.push([0, 5, 10, 15], [3, 6, 9, 12]);

  // kaldte: Set af indeks i ordbanken
  function status(kortIdx, kaldte) {
    const klar = LINJER.filter(l => l.every(p => kaldte.has(kortIdx[p])));
    const antal = kortIdx.filter(i => kaldte.has(i)).length;
    const mangler = Math.min(...LINJER.map(l => l.filter(p => !kaldte.has(kortIdx[p])).length));
    return { linjer: klar, antal, fuld: antal === 16, manglerLinje: mangler };
  }

  const API = { POOL_STR, KORT_PR_SAET, ANTAL_SAET, LINJER, rng, shuffle, visning, ledetraad, pool, kort, status };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.BINGO = API;
})(typeof window !== "undefined" ? window : globalThis);
