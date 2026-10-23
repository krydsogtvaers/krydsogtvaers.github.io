# KFL Kryds og tværs

Interaktiv kryds og tværs med fagbegreber fra KFL, kapitel 1–18. Ren statisk side – ingen server, ingen login.

## Filer
- `index.html` – siden
- `style.css` – udseende (skærm + print)
- `app.js` – generator og spillogik
- `data.js` – **ordbanken**. Det er den eneste fil, du normalt skal røre.

## Sådan lægges den på GitHub Pages
1. Opret et repo med navnet `krydsogtvaers` og læg de fire filer i roden.
2. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. Siden ligger efter et minut på `https://<brugernavn>.github.io/krydsogtvaers/`.

## Ret i ordbanken
Åbn `data.js`. Hver linje er ét ord:

```js
{"kap": 2, "ord": "HÆFTELSE", "ledetraad": "Personlig … betyder, at ejeren kan miste hele sin formue", "kilde": "2.24"},
```

- `ord`: kun A–Å, ingen mellemrum eller bindestreger, max 15 tegn. Sammensatte begreber skrives i ét ord (BUSINESSANGEL).
- `ledetraad`: det, eleven ser. Brug `…` for "indsæt ordet her".
- `kilde`: valgfrit – vises som "Spm. 2.24" under ledetråden.
- Nye kapitler: tilføj navnet i `KAPITELNAVNE` øverst i `app.js`, og læg kapitlet i `ENKELTE` og evt. en samling i `SAMLINGER`.

## Sådan virker det
- Hvert sæt trækker op til 12 tilfældige ord fra banken og bygger en kryds (max 15×15).
- Adressen indeholder sættet og et kryds-nummer, fx `#saet=k2&seed=592`. Del linket, så får alle elever den samme kryds.
- "Print papirudgave" printer krydsen med ledetråde på side 1 og facit på side 2.
