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
3. Siden ligger efter et minut på `https://krydsogtvaers.github.io/` (repoet hedder `krydsogtvaers.github.io`).

## Ordbanken kommer fra quiz_master.xlsx
`data.js` genereres fra master-arket og skal **ikke** rettes i hånden:

```
python3 tools/eksporter.py quiz_master.xlsx --kahoot-skabelon KahootQuizTemplate.xlsx
```

Det skriver `data.js` (begreber til kryds og bingo), `eksport/kahoot_<FAG>_<KAP>.xlsx` (Kahoot-import, et pr. kapitel/blok) og `eksport/quizlet_<FAG>.txt` (Quizlet-import). Scriptet advarer om rækker, der ikke kan bruges (for lange svar, ugyldige begreber, manglende ledetråd), og springer dem over.

Hvert fag får sin egen gruppe i dropdown'en. KFL har faste samlinger (kap. 1–4 osv.); andre fag får ét sæt pr. kapitelblok, som den står i masterens KAPITEL-kolonne (fx "KAP. 1-5"). Bingo bruger indtil videre kun KFL.

Efter en ændring i masteren: kør eksporten, upload `data.js`, og gen-generér printsættene, hvis krydsene eller bingokortene skal passe til siden.

## Sådan virker det
- Hvert sæt trækker op til 12 tilfældige ord fra banken og bygger en kryds (max 15×15).
- Adressen indeholder sættet og et kryds-nummer, fx `#saet=k2&seed=592`. Del linket, så får alle elever den samme kryds.
- "Print papirudgave" printer krydsen med ledetråde på side 1 og facit på side 2.

## Printversioner
- "Print papirudgave" giver tre sider: blank kryds, samme kryds med hjælpebogstaver (ét bogstav pr. ord, aldrig det første – bestemt af kryds-nummeret), og facit.

## Færdige printsæt
`tools/lav_printsaet.js` laver printsæt med krydser fra alle kapitler, og `tools/til_pdf.py` konverterer dem til PDF:

```
node tools/lav_printsaet.js 20 32                     # KFL, alle kapitler: 20 sæt à 32 → print/saet-NN.html
node tools/lav_printsaet.js 5 20 FIN-KAP1-5 fin-saet  # FIN kap. 1-5: 5 sæt à 20 → print/fin-saet-NN.html
python3 tools/til_pdf.py                              # → PDF
```
3. argument er sæt-id'et fra dropdown'en (fx `k2`, `11-15`, `FIN-KAP1-5`), 4. er filnavnets præfiks.

Hver PDF: forside, 32 blanke krydser, de samme 32 med hjælpebogstaver, 32 facitsider. `print/oversigt.csv` viser, hvilke ord der er i hver kryds, og koden til at åbne den samme kryds på hjemmesiden (fx `#saet=alle&seed=103007` = Sæt 03, Kryds 07).

## Bingo
Siden `bingo.html` har to faner:
- **Elev · mit kort:** vælg sæt (1–10) og kortnummer (1–36). Kortet er fast bestemt af sæt + nummer, så printet og telefonen viser det samme. Tryk på felter for at markere. Gemmes i elevens egen browser.
- **Lærer · kald op:** læs ledetråde højt med "Næste ledetråd" (mellemrum). "Tjek bingo" slår et kortnummer op mod de kaldte begreber (runde 1 = linje, runde 2 = fuld plade). "Tiebreaker" giver en ekstra ledetråd ved uafgjort. Listen over kaldte begreber er skjult som standard, så eleverne ikke kan se den på tavlen.

Hvert sæt har 80 begreber fra alle kapitler (småkapitler vægtes, så de ikke drukner i kap. 11) og 36 kort. Samme kapitel-bank (`data.js`) bruges, så rettelser her gælder også bingo – men husk, at ændringer i ordbanken ændrer kortene, så gen-generér printsættene bagefter.

Printsæt: `node tools/lav_bingo.js` og derefter `python3 tools/til_pdf.py` → pr. sæt en PDF med 36 kort (liggende A4, 2 pr. side) og et lærerark med kaldeliste. `print/bingo-kortoversigt.csv` viser alle kortenes indhold.
