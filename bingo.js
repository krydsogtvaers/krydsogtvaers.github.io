/* KFL Bingo – elevkort og lærerside. Logik og kortgenerering ligger i bingo-core.js. */
(function () {
  "use strict";
  const B = window.BINGO, $ = id => document.getElementById(id);
  let saet = 1, pool = [], vaert = null, tie = null;

  // ---------- lokal lagring (må godt fejle) ----------
  const lag = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  };

  // ---------- fælles ----------
  function laesHash() { return new URLSearchParams(location.hash.slice(1)); }
  function skrivHash(v, extra) {
    const p = new URLSearchParams({ v, saet, ...(extra || {}) });
    history.replaceState(null, "", "#" + p.toString());
  }
  function visFane(v) {
    const elev = v !== "vaert";
    $("elevView").hidden = !elev; $("vaertView").hidden = elev;
    $("tabElev").setAttribute("aria-selected", elev); $("tabVaert").setAttribute("aria-selected", !elev);
    if (elev) { skrivHash("elev", { kort: kortNr() }); } else { skrivHash("vaert"); }
  }
  function velkommen(i) { const o = ORDBANK[i]; return B.visning(o); }
  function celleKlasse(tekst) { return tekst.length > 13 ? "bcell s3" : tekst.length > 10 ? "bcell s2" : "bcell"; }

  function skiftSaet(n) {
    saet = n; pool = B.pool(ORDBANK, saet);
    $("saet").value = saet;
    initVaert(); tegnElev();
  }

  // ---------- ELEV ----------
  const kortNr = () => Math.min(B.KORT_PR_SAET, Math.max(1, parseInt($("kortNr").value, 10) || 1));
  const elevKey = () => `kflbingo-e-${saet}-${kortNr()}`;

  function tegnElev() {
    const nr = kortNr(); $("kortNr").value = nr;
    const idx = B.kort(pool, saet, nr), marks = new Set(lag.get(elevKey()) || []);
    $("kortInfo").textContent = `Sæt ${saet} · Kort ${nr}`;
    const g = $("elevGrid"); g.innerHTML = "";
    idx.forEach((i, p) => {
      const t = velkommen(i), b = document.createElement("button");
      b.type = "button"; b.className = celleKlasse(t) + (marks.has(p) ? " marked" : "");
      b.textContent = t; b.setAttribute("aria-pressed", marks.has(p));
      b.addEventListener("click", () => {
        if (marks.has(p)) marks.delete(p); else marks.add(p);
        lag.set(elevKey(), [...marks]); tegnElev();
      });
      g.appendChild(b);
    });
    const kaldt = new Set(idx.filter((_, p) => marks.has(p)));
    const st = B.status(idx, kaldt);
    [...g.children].forEach((c, p) => c.classList.toggle("win", st.linjer.some(l => l.includes(p))));
    $("elevBanner").textContent = st.fuld ? "FULD PLADE – råb BINGO!" : st.linjer.length ? "Du har en hel linje – råb BINGO!" : "";
    skrivHash("elev", { kort: nr });
  }

  // ---------- LÆRER ----------
  function vaertKey() { return `kflbingo-v-${saet}`; }
  function initVaert() {
    const gemt = lag.get(vaertKey());
    const gyldig = gemt && Array.isArray(gemt.order) && gemt.order.length === pool.length && gemt.order.every(i => pool.includes(i));
    vaert = gyldig ? gemt : { order: B.shuffle(pool, Math.random), pos: 0, mode: "linje" };
    tie = null; tegnVaert();
  }
  const gem = () => lag.set(vaertKey(), vaert);
  const kaldte = () => new Set(vaert.order.slice(0, vaert.pos));
  let visSvar = false;

  function tegnVaert() {
    const n = vaert.order.length, p = vaert.pos;
    $("count").textContent = `Kald ${p} af ${n}`;
    document.querySelectorAll("input[name=mode]").forEach(r => r.checked = r.value === vaert.mode);
    const cur = p > 0 ? ORDBANK[vaert.order[p - 1]] : null;
    $("bigLabel").textContent = cur ? `Ledetråd ${p}` : (p === 0 ? "Klar" : "");
    $("bigClue").textContent = cur ? B.ledetraad(cur) : "Tryk Næste ledetråd for at starte. Læs ledetråden højt – eleverne finder begrebet på deres kort.";
    const a = $("answer"); a.hidden = !(cur && visSvar); if (cur) a.textContent = B.visning(cur);
    $("btnNext").disabled = p >= n; $("btnUndo").disabled = p === 0; $("btnReveal").disabled = !cur;
    $("btnReveal").firstChild.textContent = visSvar ? "Skjul svar " : "Vis svar ";
    const list = $("calledList"); list.innerHTML = "";
    vaert.order.slice(0, p).forEach((i, k) => {
      const c = document.createElement("span"); c.className = "chip" + (k === p - 1 ? " now" : ""); c.textContent = B.visning(ORDBANK[i]); list.appendChild(c);
    });
    gem();
  }
  function naeste() { if (vaert.pos < vaert.order.length) { vaert.pos++; visSvar = false; tegnVaert(); } }
  function fortryd() { if (vaert.pos > 0) { vaert.pos--; visSvar = false; tegnVaert(); } }
  function nytSpil() {
    if (vaert.pos > 0 && !confirm("Starte et nyt spil? De kaldte begreber nulstilles.")) return;
    vaert = { order: B.shuffle(pool, Math.random), pos: 0, mode: vaert.mode }; visSvar = false; tie = null;
    $("checkResult").innerHTML = ""; $("tieBox").hidden = true; tegnVaert();
  }

  function tjek(e) {
    e.preventDefault();
    const nr = parseInt($("checkNr").value, 10), out = $("checkResult");
    if (!(nr >= 1 && nr <= B.KORT_PR_SAET)) { out.innerHTML = `<div class="verdict no">Kortnummer 1–${B.KORT_PR_SAET}</div>`; return; }
    const idx = B.kort(pool, saet, nr), k = kaldte(), st = B.status(idx, k), fuld = vaert.mode === "fuld";
    const ok = fuld ? st.fuld : st.linjer.length > 0;
    const win = new Set(fuld ? idx.map((_, p) => p) : st.linjer.flat());
    let tekst = ok ? (fuld ? "BINGO – fuld plade ✓" : "BINGO – hel linje ✓") : "Ikke bingo endnu";
    let sub = ok ? "" : (fuld ? `${st.antal} af 16 kaldt – mangler ${16 - st.antal}.` : `Nærmeste linje mangler ${st.manglerLinje} begreb${st.manglerLinje === 1 ? "" : "er"}. ${st.antal} af 16 er kaldt.`);
    const mini = idx.map((i, p) => `<div class="${k.has(i) ? "k" : ""}${ok && win.has(p) ? " w" : ""}">${esc(B.visning(ORDBANK[i]))}</div>`).join("");
    out.innerHTML = `<div class="verdict ${ok ? "yes" : "no"}">Kort ${nr}: ${tekst}</div><div>${sub}</div><div class="mini">${mini}</div>`;
  }
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function tiebreak() {
    const k = kaldte(), rest = pool.filter(i => !k.has(i) && (!tie || i !== tie.i));
    if (!rest.length) return;
    tie = { i: rest[Math.floor(Math.random() * rest.length)], vist: false };
    const o = ORDBANK[tie.i], box = $("tieBox"); box.hidden = false;
    box.innerHTML = `<div>${esc(B.ledetraad(o))}</div><button type="button" class="btn btn-outline" id="btnTieSvar">Vis svar</button> <span id="tieSvar"></span>`;
    $("btnTieSvar").addEventListener("click", () => { $("tieSvar").innerHTML = `<b>${esc(B.visning(o))}</b>`; });
  }

  // ---------- opsætning ----------
  function init() {
    const sel = $("saet");
    for (let s = 1; s <= B.ANTAL_SAET; s++) { const o = document.createElement("option"); o.value = s; o.textContent = `Sæt ${s}`; sel.appendChild(o); }
    sel.addEventListener("change", () => skiftSaet(+sel.value));
    $("tabElev").addEventListener("click", () => visFane("elev"));
    $("tabVaert").addEventListener("click", () => visFane("vaert"));
    $("kortNr").addEventListener("change", tegnElev);
    $("btnRandom").addEventListener("click", () => { $("kortNr").value = 1 + Math.floor(Math.random() * B.KORT_PR_SAET); tegnElev(); });
    $("btnReset").addEventListener("click", () => { lag.set(elevKey(), []); tegnElev(); });
    $("btnNext").addEventListener("click", naeste);
    $("btnUndo").addEventListener("click", fortryd);
    $("btnNew").addEventListener("click", nytSpil);
    $("btnReveal").addEventListener("click", () => { visSvar = !visSvar; tegnVaert(); });
    $("checkForm").addEventListener("submit", tjek);
    $("btnTie").addEventListener("click", tiebreak);
    document.querySelectorAll("input[name=mode]").forEach(r => r.addEventListener("change", () => { vaert.mode = r.value; gem(); }));
    document.addEventListener("keydown", e => {
      if ($("vaertView").hidden || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.tagName === "BUTTON" && e.key === " ") return;
      if (e.key === " " || e.key === "ArrowRight") { e.preventDefault(); naeste(); }
      else if (e.key === "ArrowLeft" || e.key === "Backspace") { e.preventDefault(); fortryd(); }
      else if (e.key === "v" || e.key === "V") { if (!$("btnReveal").disabled) { visSvar = !visSvar; tegnVaert(); } }
    });
    const p = laesHash(), s = parseInt(p.get("saet"), 10), kn = parseInt(p.get("kort"), 10);
    if (kn >= 1 && kn <= B.KORT_PR_SAET) $("kortNr").value = kn;
    skiftSaet(s >= 1 && s <= B.ANTAL_SAET ? s : 1);
    visFane(p.get("v") === "vaert" ? "vaert" : "elev");
  }
  document.addEventListener("DOMContentLoaded", init);
})();
