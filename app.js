/* KFL Kryds og tværs – app.js
   Ordbanken ligger i data.js (ORDBANK). Denne fil bygger krydsen og styrer spillet. */
(function () {
  "use strict";

  // ---------- Opgavesæt ----------
  const KAPITELNAVNE = {
    1: "Iværksætteri", 2: "Virksomhedstyper og ejerformer", 3: "Regnskabets opbygning",
    4: "Omkostninger og afskrivninger", 5: "Dækningsbidrag og nulpunkt", 6: "Etablering og finansiering",
    7: "Interessenter", 8: "Vækst, vision og mission", 11: "Årsrapporten", 13: "Indtjeningsevne",
    14: "Kapitaltilpasningsevne", 15: "Rentabilitet", 16: "Soliditet og likviditet", 17: "CSR", 18: "CSR-rapportering"
  };
  const SAMLINGER = [
    { id: "1-4", navn: "Kapitel 1–4 · Virksomheden og økonomi", kap: [1, 2, 3, 4] },
    { id: "5-8", navn: "Kapitel 5–8 · Etablering og vækst", kap: [5, 6, 7, 8] },
    { id: "11-15", navn: "Kapitel 11–15 · Årsrapport og nøgletal", kap: [11, 13, 14, 15] },
    { id: "16-18", navn: "Kapitel 16–18 · Soliditet og CSR", kap: [16, 17, 18] },
  ];
  const ENKELTE = [1, 2, 3, 4, 5, 6, 7, 8, 11, [13, 14, 15], 16, 17, 18];
  const MAX_ORD = 12, MIN_ORD = 8, MAX_GRID = 15;

  function saetListe() {
    const liste = SAMLINGER.map(s => ({ id: s.id, navn: s.navn, kap: s.kap, gruppe: "Samlinger" }));
    ENKELTE.forEach(k => {
      if (Array.isArray(k)) liste.push({ id: "k" + k.join("-"), navn: `Kapitel ${k[0]}–${k[k.length - 1]} · ${KAPITELNAVNE[15]}`, kap: k, gruppe: "Enkelte kapitler" });
      else liste.push({ id: "k" + k, navn: `Kapitel ${k} · ${KAPITELNAVNE[k] || ""}`, kap: [k], gruppe: "Enkelte kapitler" });
    });
    return liste;
  }
  const SAET = saetListe();
  const ordFor = saet => ORDBANK.filter(o => saet.kap.includes(o.kap)).map(o => ({ ...o, ord: normaliser(o.ord) })).filter(o => o.ord.length >= 2 && o.ord.length <= MAX_GRID);

  function normaliser(s) {
    return (s || "").toUpperCase().replace(/\s+|-/g, "").replace(/É/g, "E").replace(/Ä/g, "Æ").replace(/Ö/g, "Ø");
  }

  // ---------- Tilfældighed med seed (så samme seed giver samme kryds) ----------
  function rng(seed) {
    let a = seed >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function shuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // ---------- Generator ----------
  function byg(ordliste, seed) {
    const r = rng(seed);
    const antal = Math.min(MAX_ORD, ordliste.length);
    let bedst = null;
    for (let fors = 0; fors < 150; fors++) {
      const pool = shuffle(ordliste, r);
      // start med et langt ord
      pool.sort((a, b) => (b.ord.length >= 7) - (a.ord.length >= 7) || 0);
      const N = 21, g = Array.from({ length: N }, () => Array(N).fill(null));
      const placeret = [];
      let bb = null; // [rmin, rmax, cmin, cmax]
      const bbMed = (w, r0, c0, d) => {
        const dr = d === "D" ? 1 : 0, dc = d === "A" ? 1 : 0;
        const r1 = r0 + dr * (w.length - 1), c1 = c0 + dc * (w.length - 1);
        return bb ? [Math.min(bb[0], r0), Math.max(bb[1], r1), Math.min(bb[2], c0), Math.max(bb[3], c1)] : [r0, r1, c0, c1];
      };
      const ok = (w, r0, c0, d) => {
        const dr = d === "D" ? 1 : 0, dc = d === "A" ? 1 : 0;
        if (r0 < 0 || c0 < 0 || r0 + dr * w.length > N || c0 + dc * w.length > N) return false;
        const nb = bbMed(w, r0, c0, d);
        if (nb[1] - nb[0] >= MAX_GRID || nb[3] - nb[2] >= MAX_GRID) return false;
        const pr = r0 - dr, pc = c0 - dc, er = r0 + dr * w.length, ec = c0 + dc * w.length;
        if (pr >= 0 && pc >= 0 && g[pr][pc]) return false;
        if (er < N && ec < N && g[er][ec]) return false;
        let kryds = 0;
        for (let i = 0; i < w.length; i++) {
          const rr = r0 + dr * i, cc = c0 + dc * i, cell = g[rr][cc];
          if (cell) { if (cell !== w[i]) return false; kryds++; }
          else {
            const s1r = rr + dc, s1c = cc + dr, s2r = rr - dc, s2c = cc - dr;
            if (s1r < N && s1c < N && g[s1r][s1c]) return false;
            if (s2r >= 0 && s2c >= 0 && g[s2r][s2c]) return false;
          }
        }
        return kryds > 0 || placeret.length === 0;
      };
      const put = (o, r0, c0, d) => {
        const dr = d === "D" ? 1 : 0, dc = d === "A" ? 1 : 0;
        for (let i = 0; i < o.ord.length; i++) g[r0 + dr * i][c0 + dc * i] = o.ord[i];
        bb = bbMed(o.ord, r0, c0, d);
        placeret.push({ ...o, r: r0, c: c0, dir: d });
      };
      put(pool[0], 10, Math.floor((N - pool[0].ord.length) / 2), "A");
      for (const o of pool.slice(1)) {
        if (placeret.length >= antal) break;
        const w = o.ord, muligheder = [];
        for (const p of placeret) {
          for (let i = 0; i < p.ord.length; i++) {
            for (let j = 0; j < w.length; j++) {
              if (p.ord[i] !== w[j]) continue;
              const pr = p.r + (p.dir === "D" ? i : 0), pc = p.c + (p.dir === "A" ? i : 0);
              const d = p.dir === "A" ? "D" : "A";
              const r0 = d === "D" ? pr - j : pr, c0 = d === "A" ? pc - j : pc;
              if (ok(w, r0, c0, d)) {
                const nb = bbMed(w, r0, c0, d);
                muligheder.push({ r0, c0, d, areal: (nb[1] - nb[0] + 1) * (nb[3] - nb[2] + 1) });
              }
            }
          }
        }
        if (muligheder.length) {
          muligheder.sort((a, b) => a.areal - b.areal);
          const m = muligheder[Math.floor(r() * Math.min(4, muligheder.length))];
          put(o, m.r0, m.c0, m.d);
        }
      }
      // beskær
      let rmin = N, rmax = -1, cmin = N, cmax = -1;
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (g[i][j]) { rmin = Math.min(rmin, i); rmax = Math.max(rmax, i); cmin = Math.min(cmin, j); cmax = Math.max(cmax, j); }
      const h = rmax - rmin + 1, b = cmax - cmin + 1;
      const score = placeret.length * 1000 - h * b;
      if (!bedst || score > bedst.score) {
        bedst = { score, h, b, ord: placeret.map(p => ({ ...p, r: p.r - rmin, c: p.c - cmin })) };
      }
      if (placeret.length === antal && h * b <= 140) break;
    }
    if (!bedst) return null;
    // nummerering i læseretning
    const starter = {};
    bedst.ord.forEach(o => { const k = o.r + "," + o.c; (starter[k] = starter[k] || []).push(o); });
    let n = 0;
    Object.keys(starter).map(k => k.split(",").map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1])
      .forEach(([r0, c0]) => { n++; starter[r0 + "," + c0].forEach(o => o.num = n); });
    bedst.ord.sort((a, b) => a.num - b.num);
    bedst.ord.forEach(o => { o.loest = false; o.afsloeret = new Set(); });
    return bedst;
  }

  // ---------- Tilstand ----------
  const $ = id => document.getElementById(id);
  let saet = SAET[0], seed = 1, kryds = null, aktiv = null, hints = 0, tidStart = null, tidInterval = null, faerdig = false;

  function nySeed() { return Math.floor(Math.random() * 1e9); }

  function start(saetId, nytSeed) {
    saet = SAET.find(s => s.id === saetId) || SAET[0];
    seed = nytSeed;
    const liste = ordFor(saet);
    kryds = liste.length >= 2 ? byg(liste, seed) : null;
    aktiv = null; hints = 0; faerdig = false;
    clearInterval(tidInterval); tidStart = null; $("timer").textContent = "00:00";
    $("saet").value = saet.id;
    location.hash = `saet=${saet.id}&seed=${seed}`;
    $("printSub").textContent = $("facitSub").textContent = `${saet.navn} · ${kryds ? kryds.ord.length : 0} ord · kryds nr. ${seed}`;
    $("footSeed").textContent = `kryds nr. ${seed} – del linket, så får andre den samme kryds`;
    $("doneOverlay").hidden = true;
    $("feedback").textContent = ""; $("feedback").className = "feedback";
    tegnAlt();
    vaelg(null);
  }

  // ---------- Tegning ----------
  function celleStatus() {
    // returnerer map "r,c" -> {bogstav, vis, loest, ord:[...]}
    const m = {};
    if (!kryds) return m;
    kryds.ord.forEach(o => {
      for (let i = 0; i < o.ord.length; i++) {
        const k = (o.r + (o.dir === "D" ? i : 0)) + "," + (o.c + (o.dir === "A" ? i : 0));
        const c = m[k] = m[k] || { bogstav: o.ord[i], vis: false, loest: false, ord: [], num: 0 };
        c.ord.push(o);
        if (o.loest || o.afsloeret.has(i)) c.vis = true;
        if (o.loest) c.loest = c.loest || c.ord.every(x => x.loest);
        if (i === 0) c.num = o.num;
      }
    });
    Object.values(m).forEach(c => c.loest = c.ord.every(x => x.loest));
    return m;
  }

  function tegnAlt() {
    const grid = $("grid"), facit = $("facitGrid");
    grid.innerHTML = ""; facit.innerHTML = "";
    if (!kryds) { grid.innerHTML = "<p>Der er ikke nok ord i dette sæt til at lave en kryds.</p>"; return; }
    grid.style.gridTemplateColumns = facit.style.gridTemplateColumns = `repeat(${kryds.b}, minmax(0,1fr))`;
    const m = celleStatus();
    for (let r0 = 0; r0 < kryds.h; r0++) for (let c0 = 0; c0 < kryds.b; c0++) {
      const k = r0 + "," + c0, c = m[k];
      const el = document.createElement("div"), fe = document.createElement("div");
      el.className = fe.className = "cell " + (c ? "letter" : "empty");
      if (c) {
        el.dataset.k = k;
        if (c.num) { el.innerHTML = `<span class="num">${c.num}</span>`; fe.innerHTML = `<span class="num">${c.num}</span>`; }
        el.addEventListener("click", () => klikCelle(r0, c0));
        fe.append(c.bogstav);
      }
      grid.appendChild(el); facit.appendChild(fe);
    }
    tegnLister();
    opdater();
  }

  function opdater() {
    if (!kryds) return;
    const m = celleStatus();
    const ak = new Set();
    if (aktiv) for (let i = 0; i < aktiv.ord.length; i++) ak.add((aktiv.r + (aktiv.dir === "D" ? i : 0)) + "," + (aktiv.c + (aktiv.dir === "A" ? i : 0)));
    $("grid").querySelectorAll(".cell.letter").forEach(el => {
      const c = m[el.dataset.k];
      el.classList.toggle("solved", c.loest);
      el.classList.toggle("active", ak.has(el.dataset.k));
      el.classList.toggle("shown", c.vis && !c.loest);
      const num = el.querySelector(".num");
      el.textContent = c.vis ? c.bogstav : "";
      if (num) el.prepend(num);
    });
    const antal = kryds.ord.filter(o => o.loest).length;
    $("progText").textContent = `${antal} af ${kryds.ord.length} ord`;
    $("progBar").style.width = (100 * antal / kryds.ord.length) + "%";
    $("hintCount").textContent = hints;
    document.querySelectorAll(".clueitem").forEach(b => {
      const o = kryds.ord[+b.dataset.i];
      b.classList.toggle("solved", o.loest); b.classList.toggle("active", o === aktiv);
    });
    if (antal === kryds.ord.length && !faerdig) faerdigt();
  }

  function tegnLister() {
    const la = $("listA"), ld = $("listD"); la.innerHTML = ""; ld.innerHTML = "";
    kryds.ord.forEach((o, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "clueitem"; b.dataset.i = i;
      b.innerHTML = `<b>${o.num}</b>${escape(o.ledetraad)} <span class="len">(${o.ord.length})</span>`;
      b.addEventListener("click", () => vaelg(o));
      (o.dir === "A" ? la : ld).appendChild(b);
    });
  }
  const escape = s => s.replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  // ---------- Interaktion ----------
  function klikCelle(r0, c0) {
    const m = celleStatus(), c = m[r0 + "," + c0];
    if (!c) return;
    // klik igen på samme ord → skift retning, hvis muligt
    let o;
    if (aktiv && c.ord.includes(aktiv) && c.ord.length > 1) o = c.ord.find(x => x !== aktiv);
    else o = c.ord.find(x => !x.loest) || c.ord[0];
    vaelg(o);
  }

  function vaelg(o) {
    aktiv = o;
    const input = $("svar");
    $("feedback").textContent = ""; $("feedback").className = "feedback";
    if (!o) {
      $("clueTag").textContent = "Vælg et ord"; $("clueSrc").textContent = "";
      $("clueText").textContent = "Klik på et felt i gitteret, eller vælg en ledetråd i listen nedenfor.";
      $("boxes").innerHTML = ""; input.value = ""; input.disabled = true; $("btnTjek").disabled = true; $("btnHint").disabled = true;
      opdater(); return;
    }
    startTid();
    $("clueTag").textContent = `${o.num} ${o.dir === "A" ? "vandret" : "lodret"} · ${o.ord.length} bogstaver`;
    $("clueSrc").textContent = o.kilde ? "Spm. " + o.kilde : "";
    $("clueText").textContent = o.ledetraad;
    tegnBokse();
    input.value = o.loest ? o.ord : ""; input.disabled = o.loest; $("btnTjek").disabled = o.loest; $("btnHint").disabled = o.loest;
    if (o.loest) { $("feedback").textContent = "Allerede løst"; $("feedback").className = "feedback ok"; }
    else { input.focus({ preventScroll: true }); if (window.innerWidth < 900) $("clueCard").scrollIntoView({ behavior: "smooth", block: "start" }); }
    opdater();
  }

  function kendteBogstaver(o) {
    const m = celleStatus(), res = [];
    for (let i = 0; i < o.ord.length; i++) {
      const c = m[(o.r + (o.dir === "D" ? i : 0)) + "," + (o.c + (o.dir === "A" ? i : 0))];
      res.push(c.vis ? c.bogstav : "");
    }
    return res;
  }
  function tegnBokse() {
    const b = $("boxes"); b.innerHTML = "";
    if (!aktiv) return;
    kendteBogstaver(aktiv).forEach(ch => { const d = document.createElement("span"); d.className = "box" + (ch ? " known" : ""); d.textContent = ch; b.appendChild(d); });
  }

  function tjek() {
    if (!aktiv || aktiv.loest) return;
    const svar = normaliser($("svar").value);
    if (!svar) return;
    if (svar === aktiv.ord) {
      aktiv.loest = true;
      $("feedback").textContent = "Rigtigt!"; $("feedback").className = "feedback ok";
      $("svar").disabled = true; $("btnTjek").disabled = true; $("btnHint").disabled = true;
      tegnBokse(); opdater();
      // hop til næste uløste ord efter et øjeblik
      const naeste = kryds.ord.find(o => !o.loest);
      if (naeste) setTimeout(() => { if (aktiv && aktiv.loest) vaelg(naeste); }, 700);
    } else {
      $("feedback").textContent = svar.length !== aktiv.ord.length ? `Forkert – ordet har ${aktiv.ord.length} bogstaver` : "Forkert – prøv igen";
      $("feedback").className = "feedback bad";
      $("grid").querySelectorAll(".cell.active").forEach(el => { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); });
    }
  }

  function hint() {
    if (!aktiv || aktiv.loest) return;
    const kendt = kendteBogstaver(aktiv);
    const i = kendt.findIndex(ch => !ch);
    if (i < 0) return;
    aktiv.afsloeret.add(i); hints++;
    // alle bogstaver afsløret → tæller som løst
    if (kendteBogstaver(aktiv).every(Boolean)) { aktiv.loest = true; $("feedback").textContent = "Hele ordet er afsløret"; $("feedback").className = "feedback ok"; $("svar").value = aktiv.ord; $("svar").disabled = true; $("btnTjek").disabled = true; $("btnHint").disabled = true; }
    tegnBokse(); opdater();
  }

  function startTid() {
    if (tidStart) return;
    tidStart = Date.now();
    tidInterval = setInterval(() => {
      const s = Math.floor((Date.now() - tidStart) / 1000);
      $("timer").textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
    }, 1000);
  }

  function faerdigt() {
    faerdig = true; clearInterval(tidInterval);
    $("doneText").textContent = `${kryds.ord.length} ord på ${$("timer").textContent} med ${hints} hint${hints === 1 ? "" : "s"}.`;
    $("doneOverlay").hidden = false;
  }

  // ---------- Opsætning ----------
  function init() {
    const sel = $("saet");
    let grp = null, grpNavn = "";
    SAET.forEach(s => {
      if (s.gruppe !== grpNavn) { grp = document.createElement("optgroup"); grp.label = grpNavn = s.gruppe; sel.appendChild(grp); }
      const opt = document.createElement("option"); opt.value = s.id; opt.textContent = `${s.navn} (${ordFor(s).length} ord)`; grp.appendChild(opt);
    });
    sel.addEventListener("change", () => start(sel.value, nySeed()));
    $("btnNy").addEventListener("click", () => start(saet.id, nySeed()));
    $("btnDoneNy").addEventListener("click", () => start(saet.id, nySeed()));
    $("btnDoneLuk").addEventListener("click", () => $("doneOverlay").hidden = true);
    $("btnPrint").addEventListener("click", () => window.print());
    $("svarForm").addEventListener("submit", e => { e.preventDefault(); tjek(); });
    $("btnHint").addEventListener("click", hint);

    const p = new URLSearchParams(location.hash.slice(1));
    const s0 = p.get("saet") && SAET.find(s => s.id === p.get("saet")) ? p.get("saet") : SAET[0].id;
    const seed0 = parseInt(p.get("seed"), 10);
    start(s0, Number.isFinite(seed0) ? seed0 : nySeed());
  }
  document.addEventListener("DOMContentLoaded", init);
})();
