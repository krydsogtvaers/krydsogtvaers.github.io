// Ordbank til KFL Kryds og tværs. Ret, tilføj eller slet linjer her.
// kap = kapitel, ord = svaret (kun A-Å, ingen mellemrum, max 15 tegn), ledetraad = det, eleven ser.
const ORDBANK = [
 {
  "kap": 1,
  "ord": "STARTUP",
  "ledetraad": "Nyt firma, der leverer nye produkter under meget usikre forhold",
  "kilde": "1.11"
 },
 {
  "kap": 1,
  "ord": "VÆRDI",
  "ledetraad": "Det, virksomheden skaber for kunden gennem produkt, pris, oplevelse og service",
  "kilde": "1.12"
 },
 {
  "kap": 1,
  "ord": "SKABERTRANG",
  "ledetraad": "Typisk motiv for at blive iværksætter – lysten til at skabe noget",
  "kilde": "1.13"
 },
 {
  "kap": 1,
  "ord": "RISIKO",
  "ledetraad": "Den økonomiske … er en typisk barriere for at blive iværksætter",
  "kilde": "1.14"
 },
 {
  "kap": 1,
  "ord": "VILJESTYRKE",
  "ledetraad": "Egenskab, en iværksætter har brug for til det lange seje træk",
  "kilde": "1.15"
 },
 {
  "kap": 1,
  "ord": "LIVSSTIL",
  "ledetraad": "Iværksættertype, der starter virksomhed for at leve af sin passion (…-iværksætter)",
  "kilde": "1.16"
 },
 {
  "kap": 1,
  "ord": "INNOVATION",
  "ledetraad": "At forny eller introducere noget nyt – ikke det samme som iværksætteri",
  "kilde": "1.17"
 },
 {
  "kap": 1,
  "ord": "VIRKSOMHED",
  "ledetraad": "Organisation, der producerer og/eller sælger produkter eller ydelser",
  "kilde": "1.18"
 },
 {
  "kap": 1,
  "ord": "IVÆRKSÆTTER",
  "ledetraad": "Person, der starter en ny, typisk mindre virksomhed",
  "kilde": "1.19"
 },
 {
  "kap": 2,
  "ord": "SERVICE",
  "ledetraad": "Virksomhedstype, der fremstiller og sælger ydelser frem for varer",
  "kilde": "2.13"
 },
 {
  "kap": 2,
  "ord": "RÅVARELAGER",
  "ledetraad": "Et af de tre lagre i en produktionsvirksomhed – det første",
  "kilde": "2.14"
 },
 {
  "kap": 2,
  "ord": "GLOBALISERING",
  "ledetraad": "Forhold, der har givet produktionsvirksomheder øget konkurrence fra udlandet",
  "kilde": "2.16"
 },
 {
  "kap": 2,
  "ord": "ENGROS",
  "ledetraad": "Handelsvirksomhed, der sælger videre til detailhandlen",
  "kilde": "2.17"
 },
 {
  "kap": 2,
  "ord": "DETAIL",
  "ledetraad": "Handelsvirksomhed, der sælger til forbrugerne",
  "kilde": "2.17"
 },
 {
  "kap": 2,
  "ord": "NETHANDEL",
  "ledetraad": "Dagligvarehandelen bevæger sig mod større enheder og mere …",
  "kilde": "2.19"
 },
 {
  "kap": 2,
  "ord": "BLANDET",
  "ledetraad": "Virksomhed med aktiviteter inden for flere områder kaldes en … virksomhed",
  "kilde": "2.22"
 },
 {
  "kap": 2,
  "ord": "EJERFORM",
  "ledetraad": "Hvordan virksomheden juridisk er organiseret",
  "kilde": "2.23"
 },
 {
  "kap": 2,
  "ord": "HÆFTELSE",
  "ledetraad": "Personlig … betyder, at ejeren kan miste hele sin formue",
  "kilde": "2.24"
 },
 {
  "kap": 2,
  "ord": "KAPITALSELSKAB",
  "ledetraad": "Selskabsform, hvor ejerne ikke hæfter personligt (ApS og A/S)",
  "kilde": "2.25"
 },
 {
  "kap": 2,
  "ord": "KONKURS",
  "ledetraad": "Når virksomheden ikke kan betale sin gæld",
  "kilde": "2.24"
 },
 {
  "kap": 2,
  "ord": "APS",
  "ledetraad": "Kapitalselskab med 20.000 kr. i indskudskapital (fork.)",
  "kilde": "2.42"
 },
 {
  "kap": 2,
  "ord": "AKTIESELSKAB",
  "ledetraad": "Kapitalselskab med 400.000 kr. i indskudskapital",
  "kilde": "2.36"
 },
 {
  "kap": 2,
  "ord": "ANPARTSSELSKAB",
  "ledetraad": "Kapitalselskab med 20.000 kr. i indskudskapital",
  "kilde": "2.42"
 },
 {
  "kap": 2,
  "ord": "INTERESSENTSKAB",
  "ledetraad": "Personselskab med flere ejere, der hæfter personligt og solidarisk",
  "kilde": "2.30"
 },
 {
  "kap": 2,
  "ord": "SOLIDARISK",
  "ledetraad": "Hæftelse, hvor hver ejer hæfter for hele gælden – også de andres",
  "kilde": "2.34"
 },
 {
  "kap": 2,
  "ord": "INDSKUDSKAPITAL",
  "ledetraad": "Det beløb, ejerne skal skyde ind for at stifte et kapitalselskab",
  "kilde": "2.36"
 },
 {
  "kap": 2,
  "ord": "BEGRÆNSET",
  "ledetraad": "… hæftelse: ejerne kan kun miste deres indskud",
  "kilde": "2.37"
 },
 {
  "kap": 2,
  "ord": "BØRSNOTERET",
  "ledetraad": "Virksomhed, hvis aktier kan handles frit på børsen",
  "kilde": "2.39"
 },
 {
  "kap": 2,
  "ord": "KAPITALFOND",
  "ledetraad": "Opkøber virksomheder, effektiviserer dem og sælger dem efter nogle år",
  "kilde": "2.40"
 },
 {
  "kap": 2,
  "ord": "HOVEDAKTIVITET",
  "ledetraad": "Det, der afgør, hvilken virksomhedstype en virksomhed er",
  "kilde": "2.45"
 },
 {
  "kap": 3,
  "ord": "OMSÆTNING",
  "ledetraad": "Det, virksomheden skaber ved at sælge sine varer eller ydelser",
  "kilde": "3.10"
 },
 {
  "kap": 3,
  "ord": "OMKOSTNINGER",
  "ledetraad": "Forbruget af produktionsmidler opgjort i kroner",
  "kilde": "3.11"
 },
 {
  "kap": 3,
  "ord": "OVERSKUD",
  "ledetraad": "Indtægter minus omkostninger, når resultatet er positivt",
  "kilde": "3.12"
 },
 {
  "kap": 3,
  "ord": "UNDERSKUD",
  "ledetraad": "Negativt resultat – kan fratrækkes i skat",
  "kilde": "3.24"
 },
 {
  "kap": 3,
  "ord": "RESULTAT",
  "ledetraad": "Det, resultatopgørelsen viser nederst: overskud eller underskud",
  "kilde": "3.13"
 },
 {
  "kap": 3,
  "ord": "BALANCE",
  "ledetraad": "Opgørelse over virksomhedens aktiver og passiver",
  "kilde": "3.14"
 },
 {
  "kap": 3,
  "ord": "EGENKAPITAL",
  "ledetraad": "Kapital fra ejerne – står på passivsiden",
  "kilde": "3.15"
 },
 {
  "kap": 3,
  "ord": "GÆLD",
  "ledetraad": "Kapital fra långivere – står på passivsiden",
  "kilde": "3.15"
 },
 {
  "kap": 3,
  "ord": "AKTIVER",
  "ledetraad": "Viser, hvordan kapitalen er anvendt – fx varelager og bygninger",
  "kilde": "3.20"
 },
 {
  "kap": 3,
  "ord": "PASSIVER",
  "ledetraad": "Viser, hvor kapitalen er skaffet – egenkapital og gæld",
  "kilde": "3.21"
 },
 {
  "kap": 3,
  "ord": "VARELAGER",
  "ledetraad": "Aktiv, der findes på balancens venstre side",
  "kilde": "3.16"
 },
 {
  "kap": 3,
  "ord": "OPSPARING",
  "ledetraad": "Overskud, der bliver i virksomheden i stedet for at blive udbetalt",
  "kilde": "3.23"
 },
 {
  "kap": 4,
  "ord": "INDTÆGT",
  "ledetraad": "Opstår ved salget – ikke ved betalingen",
  "kilde": "4.10"
 },
 {
  "kap": 4,
  "ord": "INDBETALING",
  "ledetraad": "Opstår, når kunden betaler",
  "kilde": "4.10"
 },
 {
  "kap": 4,
  "ord": "UDGIFT",
  "ledetraad": "Opstår på aftaletidspunktet",
  "kilde": "4.13"
 },
 {
  "kap": 4,
  "ord": "UDBETALING",
  "ledetraad": "Opstår på betalingstidspunktet",
  "kilde": "4.13"
 },
 {
  "kap": 4,
  "ord": "OMKOSTNING",
  "ledetraad": "Opstår på forbrugstidspunktet",
  "kilde": "4.13"
 },
 {
  "kap": 4,
  "ord": "LIKVIDITET",
  "ledetraad": "Opgøres i pengestrømsopgørelsen – ind- og udbetalinger",
  "kilde": "4.14"
 },
 {
  "kap": 4,
  "ord": "MATERIELLE",
  "ledetraad": "Produktionsmidler som råvarer, bygninger og maskiner er …",
  "kilde": "4.11"
 },
 {
  "kap": 4,
  "ord": "VARIABLE",
  "ledetraad": "Omkostninger, der direkte følger afsætningen, kaldes …",
  "kilde": "4.15"
 },
 {
  "kap": 4,
  "ord": "KO",
  "ledetraad": "Kapacitetsomkostninger (fork.)",
  "kilde": "4.17"
 },
 {
  "kap": 4,
  "ord": "KE",
  "ledetraad": "Kapacitetsenhedsomkostninger – falder, når produktionen stiger (fork.)",
  "kilde": "4.18"
 },
 {
  "kap": 4,
  "ord": "VO",
  "ledetraad": "Variable omkostninger – stiger, når produktionen stiger (fork.)",
  "kilde": "4.36"
 },
 {
  "kap": 4,
  "ord": "VE",
  "ledetraad": "Variable enhedsomkostninger – uændrede, når produktionen stiger (fork.)",
  "kilde": "4.37"
 },
 {
  "kap": 4,
  "ord": "SO",
  "ledetraad": "Samlede omkostninger = VO + KO (fork.)",
  "kilde": "4.16"
 },
 {
  "kap": 4,
  "ord": "SE",
  "ledetraad": "Samlede enhedsomkostninger – falder, når produktionen stiger (fork.)",
  "kilde": "4.40"
 },
 {
  "kap": 4,
  "ord": "REVERSIBLE",
  "ledetraad": "Forøgede KO, virksomheden hurtigt kan slippe af med igen",
  "kilde": "4.20"
 },
 {
  "kap": 4,
  "ord": "IRREVERSIBLE",
  "ledetraad": "Forøgede KO, virksomheden ikke kan slippe af med igen",
  "kilde": "4.21"
 },
 {
  "kap": 4,
  "ord": "AFSKRIVNING",
  "ledetraad": "Den årlige værdiforringelse af et anlægsaktiv",
  "kilde": "4.23"
 },
 {
  "kap": 4,
  "ord": "KOSTPRIS",
  "ledetraad": "Varens indkøbspris plus hjemtagelsesomkostninger",
  "kilde": "4.26"
 },
 {
  "kap": 4,
  "ord": "SCRAPVÆRDI",
  "ledetraad": "Aktivets forventede værdi, når det ikke længere er i brug",
  "kilde": "4.27"
 },
 {
  "kap": 4,
  "ord": "BRUGSTID",
  "ledetraad": "Den tid, et aktiv er i anvendelse i virksomheden",
  "kilde": "4.28"
 },
 {
  "kap": 4,
  "ord": "LINEÆR",
  "ledetraad": "Afskrivningsmetode med lige store årlige afskrivninger",
  "kilde": "4.29"
 },
 {
  "kap": 4,
  "ord": "SALDOMETODEN",
  "ledetraad": "Afskrivningsmetode, hvor afskrivningerne bliver mindre år for år",
  "kilde": "4.30"
 },
 {
  "kap": 4,
  "ord": "VAREFORBRUG",
  "ledetraad": "Variabel omkostning i en handelsvirksomhed – kostpris af solgte varer",
  "kilde": "4.32"
 },
 {
  "kap": 4,
  "ord": "RÅVAREFORBRUG",
  "ledetraad": "Variabel omkostning i en produktionsvirksomhed",
  "kilde": "4.33"
 },
 {
  "kap": 4,
  "ord": "KALKULATION",
  "ledetraad": "Opstilling over omkostningerne ved køb, produktion og salg af en vare",
  "kilde": "4.41"
 },
 {
  "kap": 4,
  "ord": "FORDELING",
  "ledetraad": "…skalkulation: beregner varens samlede omkostninger pr. enhed",
  "kilde": "4.42"
 },
 {
  "kap": 4,
  "ord": "BIDRAG",
  "ledetraad": "…skalkulation: beregner varens variable omkostninger pr. enhed",
  "kilde": "4.43"
 },
 {
  "kap": 4,
  "ord": "FORKALKULATION",
  "ledetraad": "Kalkulation, der udarbejdes før køb/produktion/salg",
  "kilde": "4.44"
 },
 {
  "kap": 4,
  "ord": "RETROGRAD",
  "ledetraad": "Kalkulation, der finder den højeste indkøbs- eller produktionspris",
  "kilde": "4.46"
 },
 {
  "kap": 5,
  "ord": "DÆKNINGSBIDRAG",
  "ledetraad": "Omsætning minus variable omkostninger",
  "kilde": "5.10"
 },
 {
  "kap": 5,
  "ord": "DÆKNINGSGRAD",
  "ledetraad": "DB i procent af omsætningen – påvirkes ikke af afsætningens størrelse",
  "kilde": "5.13"
 },
 {
  "kap": 5,
  "ord": "DB",
  "ledetraad": "Dækningsbidrag (fork.)",
  "kilde": "5.10"
 },
 {
  "kap": 5,
  "ord": "DG",
  "ledetraad": "Dækningsgrad (fork.)",
  "kilde": "5.13"
 },
 {
  "kap": 5,
  "ord": "NULPUNKT",
  "ledetraad": "Den mindste afsætning eller omsætning, der dækker omkostningerne",
  "kilde": "5.17"
 },
 {
  "kap": 5,
  "ord": "REKLAMENULPUNKT",
  "ledetraad": "Den mindste afsætning, der gør en reklamekampagne lønsom",
  "kilde": "5.18"
 },
 {
  "kap": 5,
  "ord": "LØNSOM",
  "ledetraad": "En investering er …, når omsætningen er over nulpunktsomsætningen",
  "kilde": "5.20"
 },
 {
  "kap": 5,
  "ord": "BRUTTOAVANCE",
  "ledetraad": "Omsætning minus vareforbrug",
  "kilde": "5.22"
 },
 {
  "kap": 5,
  "ord": "KONTANTE",
  "ledetraad": "Husleje er en … kapacitetsomkostning",
  "kilde": "5.26"
 },
 {
  "kap": 5,
  "ord": "FINANSIELLE",
  "ledetraad": "Omkostninger ved at finansiere driften, fx renter, kaldes … omkostninger",
  "kilde": "5.28"
 },
 {
  "kap": 5,
  "ord": "HUSLEJE",
  "ledetraad": "Eksempel på en kontant kapacitetsomkostning",
  "kilde": "5.26"
 },
 {
  "kap": 6,
  "ord": "CVR",
  "ledetraad": "Virksomhedens identifikationsnummer (fork.)",
  "kilde": "6.10"
 },
 {
  "kap": 6,
  "ord": "ERHVERVSKONTO",
  "ledetraad": "Bankkonto, man som udgangspunkt ikke kan få uden CVR-nummer",
  "kilde": "6.12"
 },
 {
  "kap": 6,
  "ord": "VIRK",
  "ledetraad": "Her registreres virksomheden: indberet.….dk",
  "kilde": "6.13"
 },
 {
  "kap": 6,
  "ord": "MOMS",
  "ledetraad": "Skal registreres ved årlig omsætning over 50.000 kr.",
  "kilde": "6.15"
 },
 {
  "kap": 6,
  "ord": "SALGSMOMS",
  "ledetraad": "Minus købsmoms = det, virksomheden skal betale til Skat",
  "kilde": "6.16"
 },
 {
  "kap": 6,
  "ord": "KØBSMOMS",
  "ledetraad": "Trækkes fra salgsmomsen, før beløbet afregnes med Skat",
  "kilde": "6.16"
 },
 {
  "kap": 6,
  "ord": "FORRETNINGSPLAN",
  "ledetraad": "Dokument, der samler alle informationer om etableringen",
  "kilde": "6.18"
 },
 {
  "kap": 6,
  "ord": "KAPITALBEHOV",
  "ledetraad": "Samlede investeringer plus opstartsomkostninger",
  "kilde": "6.21"
 },
 {
  "kap": 6,
  "ord": "LÅNEBEHOV",
  "ledetraad": "Kapitalbehov minus egen opsparing",
  "kilde": "6.22"
 },
 {
  "kap": 6,
  "ord": "FINANSIERING",
  "ledetraad": "Fremskaffelse af kapital til dækning af et kapitalbehov",
  "kilde": "6.25"
 },
 {
  "kap": 6,
  "ord": "KASSEKREDIT",
  "ledetraad": "Fleksibelt lån med et maksimum – bruges til omsætningsaktiver",
  "kilde": "6.27"
 },
 {
  "kap": 6,
  "ord": "ANLÆGSLÅN",
  "ledetraad": "Lån til anskaffelse af anlægsaktiver",
  "kilde": "6.29"
 },
 {
  "kap": 6,
  "ord": "BUSINESSANGEL",
  "ledetraad": "Privat investor, der har tjent penge på virksomhedssalg (2 ord, skrives sammen)",
  "kilde": "6.30"
 },
 {
  "kap": 6,
  "ord": "VENTUREKAPITAL",
  "ledetraad": "Kapital fra selskaber, der tager høj risiko mod chance for stor gevinst",
  "kilde": "6.31"
 },
 {
  "kap": 6,
  "ord": "CROWDFUNDING",
  "ledetraad": "Penge indsamles fra mange bidragydere via en internetplatform",
  "kilde": "6.32"
 },
 {
  "kap": 6,
  "ord": "REWARD",
  "ledetraad": "…-baseret crowdfunding fungerer som forsalg af produkter",
  "kilde": "6.33"
 },
 {
  "kap": 6,
  "ord": "AKTIEBASERET",
  "ledetraad": "Crowdfunding, hvor investorerne får en ejerandel",
  "kilde": "6.34"
 },
 {
  "kap": 6,
  "ord": "LÅNEBASERET",
  "ledetraad": "Crowdfunding, hvor beløbet tilbagebetales med renter",
  "kilde": "6.35"
 },
 {
  "kap": 6,
  "ord": "RESULTATBUDGET",
  "ledetraad": "Viser forventede indtægter og omkostninger",
  "kilde": "6.36"
 },
 {
  "kap": 6,
  "ord": "DISRUPTION",
  "ledetraad": "Når nye virksomheder overtager etablerede virksomheders markeder",
  "kilde": "6.38"
 },
 {
  "kap": 6,
  "ord": "LOWEND",
  "ledetraad": "…-disruption: eksisterende produkter udbydes billigere (2 ord)",
  "kilde": "6.39"
 },
 {
  "kap": 6,
  "ord": "NEWMARKET",
  "ledetraad": "…-disruption: ny teknologi skaber et helt nyt marked (2 ord)",
  "kilde": "6.40"
 },
 {
  "kap": 6,
  "ord": "DELEØKONOMI",
  "ledetraad": "Udfordrer eksisterende forretningsmodeller – fx at låne frem for at eje",
  "kilde": "6.41"
 },
 {
  "kap": 7,
  "ord": "INTERESSENT",
  "ledetraad": "Person eller organisation med relation til virksomheden – yder og kræver noget",
  "kilde": "7.10"
 },
 {
  "kap": 7,
  "ord": "MODYDELSE",
  "ledetraad": "Det, interessenten kræver til gengæld for sin ydelse",
  "kilde": "7.11"
 },
 {
  "kap": 7,
  "ord": "EJERE",
  "ledetraad": "Interessent, der stiller kapital til rådighed og ønsker afkast",
  "kilde": "7.14"
 },
 {
  "kap": 7,
  "ord": "AFKAST",
  "ledetraad": "Det, ejerne ønsker for den kapital, de stiller til rådighed",
  "kilde": "7.14"
 },
 {
  "kap": 7,
  "ord": "KONSOLIDERE",
  "ledetraad": "At opspare overskud i virksomheden som grundlag for vækst",
  "kilde": "7.16"
 },
 {
  "kap": 7,
  "ord": "MEDARBEJDERE",
  "ledetraad": "Interessent, der yder arbejdskraft og ønsker løn",
  "kilde": "7.17"
 },
 {
  "kap": 7,
  "ord": "KUNDER",
  "ledetraad": "Interessent, der yder købekraft og ønsker rette varer og god service",
  "kilde": "7.19"
 },
 {
  "kap": 7,
  "ord": "KØBEKRAFT",
  "ledetraad": "Det, kunderne stiller til rådighed",
  "kilde": "7.19"
 },
 {
  "kap": 7,
  "ord": "LEVERANDØRER",
  "ledetraad": "Interessent, der yder varer og forsyningssikkerhed mod betaling til tiden",
  "kilde": "7.20"
 },
 {
  "kap": 7,
  "ord": "LÅNGIVERE",
  "ledetraad": "Interessent, der yder kapital og ønsker sikkerhed og rente",
  "kilde": "7.21"
 },
 {
  "kap": 7,
  "ord": "KOALITION",
  "ledetraad": "Virksomheden set som en … af interessenter, der alle vil have noget ud af den",
  "kilde": "7.24"
 },
 {
  "kap": 7,
  "ord": "SHAREHOLDER",
  "ledetraad": "…-value: virksomheden skal skabe størst mulig værdi for ejerne",
  "kilde": "7.25"
 },
 {
  "kap": 7,
  "ord": "STAKEHOLDER",
  "ledetraad": "…-value: virksomheden skal skabe værdi for alle interessenter",
  "kilde": "7.28"
 },
 {
  "kap": 8,
  "ord": "TOPLINJE",
  "ledetraad": "Omsætningen kaldes også virksomhedens …",
  "kilde": "8.10"
 },
 {
  "kap": 8,
  "ord": "BUNDLINJE",
  "ledetraad": "Resultatet kaldes også virksomhedens …",
  "kilde": "8.10"
 },
 {
  "kap": 8,
  "ord": "VÆKST",
  "ledetraad": "(Værdi år 2 − værdi år 1) × 100 / værdi år 1",
  "kilde": "8.11"
 },
 {
  "kap": 8,
  "ord": "FAMILIEEJET",
  "ledetraad": "Virksomhed ejet af den familie, der oprindeligt etablerede den",
  "kilde": "8.12"
 },
 {
  "kap": 8,
  "ord": "ORGANISK",
  "ledetraad": "Vækst ved egen kraft – øget salg, nye markeder, produktudvikling",
  "kilde": "8.13"
 },
 {
  "kap": 8,
  "ord": "UORGANISK",
  "ledetraad": "Vækst gennem opkøb af andre virksomheder",
  "kilde": "8.14"
 },
 {
  "kap": 8,
  "ord": "OPKØB",
  "ledetraad": "Måde at vokse uorganisk på",
  "kilde": "8.14"
 },
 {
  "kap": 8,
  "ord": "HØJVÆKST",
  "ledetraad": "…virksomhed: op til 5 år, min. 5 ansatte, min. 20 % årlig vækst",
  "kilde": "8.15"
 },
 {
  "kap": 8,
  "ord": "GAZELLE",
  "ledetraad": "Virksomhed, der har fordoblet omsætningen over 4 år med positivt resultat",
  "kilde": "8.16"
 },
 {
  "kap": 8,
  "ord": "SCALEUP",
  "ledetraad": "Virksomhed med min. 10 årsværk, 15 mio. i omsætning og 20 % vækst (2 ord)",
  "kilde": "8.18"
 },
 {
  "kap": 8,
  "ord": "VISION",
  "ledetraad": "Virksomhedens formulering af sine ønsker for fremtiden",
  "kilde": "8.20"
 },
 {
  "kap": 8,
  "ord": "MISSION",
  "ledetraad": "Hvordan virksomheden konkret vil opfylde sin vision",
  "kilde": "8.22"
 },
 {
  "kap": 8,
  "ord": "MÅL",
  "ledetraad": "Præcise pejlemærker for det daglige arbejde mod visionen",
  "kilde": "8.25"
 },
 {
  "kap": 8,
  "ord": "SMART",
  "ledetraad": "Specifikke, Målbare, Ambitiøse, Realistiske, Tidsbestemte (fork.)",
  "kilde": "8.26"
 },
 {
  "kap": 8,
  "ord": "VÆRDIER",
  "ledetraad": "Hvad virksomheden står for, og hvad der skal styre dens aktiviteter",
  "kilde": "8.27"
 },
 {
  "kap": 11,
  "ord": "ÅRSRAPPORT",
  "ledetraad": "Udarbejdes til ekstern rapportering og intern økonomistyring",
  "kilde": "11.10"
 },
 {
  "kap": 11,
  "ord": "REGNSKABSKLASSE",
  "ledetraad": "A, B, C eller D – afgøres af balancesum, omsætning og ansatte",
  "kilde": "11.11"
 },
 {
  "kap": 11,
  "ord": "BALANCESUM",
  "ledetraad": "En af de tre grænser, der afgør regnskabsklassen",
  "kilde": "11.12"
 },
 {
  "kap": 11,
  "ord": "REGNSKABSÅR",
  "ledetraad": "Varer 12 måneder",
  "kilde": "11.14"
 },
 {
  "kap": 11,
  "ord": "GENERALKLAUSUL",
  "ledetraad": "Kravet om retvisende billede og relevante, pålidelige oplysninger",
  "kilde": "11.16"
 },
 {
  "kap": 11,
  "ord": "RETVISENDE",
  "ledetraad": "Årsrapporten skal vise et … billede",
  "kilde": "11.17"
 },
 {
  "kap": 11,
  "ord": "PÅTEGNING",
  "ledetraad": "Ledelsens erklæring om, at årsrapporten opfylder loven (ledelses…)",
  "kilde": "11.20"
 },
 {
  "kap": 11,
  "ord": "REVISION",
  "ledetraad": "Klasse C og D skal have årsregnskabet underkastet dette",
  "kilde": "11.22"
 },
 {
  "kap": 11,
  "ord": "REVISOR",
  "ledetraad": "Kontrollerer, om oplysningerne i årsrapporten er korrekte",
  "kilde": "11.25"
 },
 {
  "kap": 11,
  "ord": "BLANK",
  "ledetraad": "En … revisionspåtegning betyder, at regnskabet er retvisende",
  "kilde": "11.24"
 },
 {
  "kap": 11,
  "ord": "BERETNING",
  "ledetraad": "Ledelses… – beskriver hovedaktiviteter, risici og forventet udvikling",
  "kilde": "11.26"
 },
 {
  "kap": 11,
  "ord": "PERIODISERING",
  "ledetraad": "Princip: indtægter og omkostninger medtages i det år, de vedrører",
  "kilde": "11.30"
 },
 {
  "kap": 11,
  "ord": "BERETNINGSFORM",
  "ledetraad": "Opstilling med nettoomsætning øverst og mellemresultater",
  "kilde": "11.31"
 },
 {
  "kap": 11,
  "ord": "ARTSOPDELT",
  "ledetraad": "Resultatopgørelse, hvor omkostninger opdeles efter art",
  "kilde": "11.32"
 },
 {
  "kap": 11,
  "ord": "NETTOOMSÆTNING",
  "ledetraad": "Salgsindtægter uden prisnedslag, moms og salgsskatter",
  "kilde": "11.34"
 },
 {
  "kap": 11,
  "ord": "PERSONALE",
  "ledetraad": "…omkostninger: løn og personalegoder",
  "kilde": "11.38"
 },
 {
  "kap": 11,
  "ord": "NEDSKRIVNING",
  "ledetraad": "Af- og … viser forbruget af anlægsaktiver i perioden",
  "kilde": "11.40"
 },
 {
  "kap": 11,
  "ord": "DATTERSELSKAB",
  "ledetraad": "Virksomhed, hvor ejerandelen er over 50 %",
  "kilde": "11.42"
 },
 {
  "kap": 11,
  "ord": "ASSOCIERET",
  "ledetraad": "Virksomhed, hvor ejerandelen er mellem 20 og 50 %",
  "kilde": "11.43"
 },
 {
  "kap": 11,
  "ord": "SELSKABSSKAT",
  "ledetraad": "22 % af det skattepligtige overskud i A/S og ApS",
  "kilde": "11.46"
 },
 {
  "kap": 11,
  "ord": "FUNKTIONSOPDELT",
  "ledetraad": "Resultatopgørelse, hvor omkostninger opdeles efter afdeling",
  "kilde": "11.47"
 },
 {
  "kap": 11,
  "ord": "KONTOFORM",
  "ledetraad": "Balance med aktiver til venstre og passiver til højre",
  "kilde": "11.48"
 },
 {
  "kap": 11,
  "ord": "ANLÆGSAKTIVER",
  "ledetraad": "Aktiver bestemt til længere tids eje og brug",
  "kilde": "11.49"
 },
 {
  "kap": 11,
  "ord": "IMMATERIELLE",
  "ledetraad": "Anlægsaktiver uden fysisk substans – fx goodwill og patenter",
  "kilde": "11.50"
 },
 {
  "kap": 11,
  "ord": "GOODWILL",
  "ledetraad": "Eksempel på et immaterielt anlægsaktiv",
  "kilde": "11.50"
 },
 {
  "kap": 11,
  "ord": "PATENT",
  "ledetraad": "Immaterielt anlægsaktiv, der beskytter en opfindelse",
  "kilde": "11.50"
 },
 {
  "kap": 11,
  "ord": "ANLÆGSNOTE",
  "ledetraad": "Viser ændringer i anlægsaktivernes kostpris og afskrivninger",
  "kilde": "11.53"
 },
 {
  "kap": 11,
  "ord": "TILGODEHAVENDER",
  "ledetraad": "Omsætningsaktiv: det, kunderne skylder virksomheden",
  "kilde": "11.56"
 },
 {
  "kap": 11,
  "ord": "LIKVIDE",
  "ledetraad": "… beholdninger: kontanter og bankindestående",
  "kilde": "11.57"
 },
 {
  "kap": 11,
  "ord": "PENGESTRØM",
  "ledetraad": "…sopgørelsen viser årets ind- og udbetalinger",
  "kilde": "11.62"
 },
 {
  "kap": 11,
  "ord": "DRIFTSAKTIVITET",
  "ledetraad": "Pengestrømme fra driften, inkl. ændringer i varelager og tilgodehavender",
  "kilde": "11.64"
 },
 {
  "kap": 11,
  "ord": "INVESTERING",
  "ledetraad": "Pengestrømme fra …saktivitet: køb og salg af anlægsaktiver",
  "kilde": "11.65"
 },
 {
  "kap": 11,
  "ord": "PRIMO",
  "ledetraad": "Likvide midler ved periodens begyndelse",
  "kilde": "11.68"
 },
 {
  "kap": 11,
  "ord": "ULTIMO",
  "ledetraad": "Likvide midler ved periodens afslutning",
  "kilde": "11.69"
 },
 {
  "kap": 11,
  "ord": "NOTER",
  "ledetraad": "Specifikationer og supplerende oplysninger til årsregnskabet",
  "kilde": "11.70"
 },
 {
  "kap": 11,
  "ord": "KONCERN",
  "ledetraad": "Et moderselskab og et eller flere datterselskaber",
  "kilde": "11.72"
 },
 {
  "kap": 11,
  "ord": "MODERSELSKAB",
  "ledetraad": "Det selskab, der ejer datterselskaberne",
  "kilde": "11.72"
 },
 {
  "kap": 11,
  "ord": "KONCERNREGNSKAB",
  "ledetraad": "Viser resultat og balance, som om al aktivitet var samlet i ét selskab",
  "kilde": "11.74"
 },
 {
  "kap": 13,
  "ord": "INDTJENINGSEVNE",
  "ledetraad": "Evnen til at skabe overskud på grundlag af omsætningen",
  "kilde": "13.10"
 },
 {
  "kap": 13,
  "ord": "OVERSKUDSGRAD",
  "ledetraad": "Resultat før finansielle omk. × 100 / Nettoomsætning",
  "kilde": "13.13"
 },
 {
  "kap": 13,
  "ord": "OG",
  "ledetraad": "Overskudsgrad (fork.)",
  "kilde": "13.12"
 },
 {
  "kap": 14,
  "ord": "AOH",
  "ledetraad": "Aktivernes omsætningshastighed = Nettoomsætning / Aktiver (fork.)",
  "kilde": "14.13"
 },
 {
  "kap": 15,
  "ord": "RENTABILITET",
  "ledetraad": "Evnen til at forrente den investerede kapital",
  "kilde": "15.10"
 },
 {
  "kap": 15,
  "ord": "AFKASTNINGSGRAD",
  "ledetraad": "Resultat før finansielle omk. × 100 / Aktiver",
  "kilde": "15.11"
 },
 {
  "kap": 15,
  "ord": "AG",
  "ledetraad": "Afkastningsgrad (fork.)",
  "kilde": "15.11"
 },
 {
  "kap": 15,
  "ord": "EKF",
  "ledetraad": "Egenkapitalens forrentning = Resultat før skat × 100 / Egenkapital (fork.)",
  "kilde": "15.12"
 },
 {
  "kap": 15,
  "ord": "GÆLDSRENTE",
  "ledetraad": "Finansielle omkostninger × 100 / Gældsforpligtelser",
  "kilde": "15.14"
 },
 {
  "kap": 15,
  "ord": "GEARING",
  "ledetraad": "Gældsforpligtelser / Egenkapital",
  "kilde": "15.15"
 },
 {
  "kap": 15,
  "ord": "RENTEMARGINAL",
  "ledetraad": "Afkastningsgrad minus gældsrente",
  "kilde": "15.16"
 },
 {
  "kap": 15,
  "ord": "MARKEDSRENTE",
  "ledetraad": "Renten på en 10-årig statsobligation",
  "kilde": "15.18"
 },
 {
  "kap": 15,
  "ord": "RISIKOTILLÆG",
  "ledetraad": "Afkastningsgraden bør overstige markedsrenten med et …",
  "kilde": "15.19"
 },
 {
  "kap": 16,
  "ord": "SOLIDITETSGRAD",
  "ledetraad": "Egenkapital × 100 / Aktiver – tommelfingerregel 30-40 %",
  "kilde": "16.11"
 },
 {
  "kap": 16,
  "ord": "SOLIDITET",
  "ledetraad": "Hvor modstandsdygtig virksomheden er over for tab",
  "kilde": "16.12"
 },
 {
  "kap": 16,
  "ord": "GÆLDSANDEL",
  "ledetraad": "Gældsforpligtelser × 100 / Aktiver – giver 100 % sammen med soliditetsgraden",
  "kilde": "16.18"
 },
 {
  "kap": 16,
  "ord": "LIKVIDITETSGRAD",
  "ledetraad": "Omsætningsaktiver × 100 / Kortfristet gæld – tommelfingerregel 100-150 %",
  "kilde": "16.24"
 },
 {
  "kap": 17,
  "ord": "CSR",
  "ledetraad": "Corporate Social Responsibility (fork.)",
  "kilde": "17.12"
 },
 {
  "kap": 17,
  "ord": "BÆREDYGTIG",
  "ledetraad": "Udvikling, der opfylder nutidens behov uden at skade fremtidige generationers",
  "kilde": "17.15"
 },
 {
  "kap": 17,
  "ord": "TREDOBBELT",
  "ledetraad": "Den … bundlinje: økonomi, miljø og mennesker",
  "kilde": "17.16"
 },
 {
  "kap": 17,
  "ord": "ASHRIDGE",
  "ledetraad": "Model, der inddeler CSR-arbejdet i 7 hovedgrupper (…s model)",
  "kilde": "17.18"
 },
 {
  "kap": 17,
  "ord": "PYRAMIDE",
  "ledetraad": "CSR-… læses fra bunden: økonomisk, juridisk, etisk, filantropisk",
  "kilde": "17.19"
 },
 {
  "kap": 17,
  "ord": "ØKONOMISK",
  "ledetraad": "Det ansvar, der er fundamentet i CSR-pyramiden",
  "kilde": "17.22"
 },
 {
  "kap": 17,
  "ord": "JURIDISK",
  "ledetraad": "Ansvar for at overholde gældende lovgivning",
  "kilde": "17.23"
 },
 {
  "kap": 17,
  "ord": "ETISK",
  "ledetraad": "Ansvar for at leve op til samfundets normer – ikke styret af loven",
  "kilde": "17.24"
 },
 {
  "kap": 17,
  "ord": "FILANTROPISK",
  "ledetraad": "Ansvar, virksomheden KAN vælge: donationer og velgørenhed",
  "kilde": "17.25"
 },
 {
  "kap": 17,
  "ord": "SHITSTORM",
  "ledetraad": "Stor mængde ukontrollerbar negativ omtale på sociale medier",
  "kilde": "17.26"
 },
 {
  "kap": 17,
  "ord": "GREENWASHING",
  "ledetraad": "At brande sig grønt uden dækning i produkter eller CSR-arbejde",
  "kilde": "17.27"
 },
 {
  "kap": 17,
  "ord": "REDWASHING",
  "ledetraad": "At fremstå progressiv inden for social lighed for egen vinding",
  "kilde": "17.28"
 },
 {
  "kap": 17,
  "ord": "PINKWASHING",
  "ledetraad": "At bruge pride/LGBT+ til branding uden reel støtte",
  "kilde": "17.29"
 },
 {
  "kap": 17,
  "ord": "BLUEWASHING",
  "ledetraad": "Tilsluttet FN's Global Compact uden at overholde COP-kravene",
  "kilde": "17.30"
 },
 {
  "kap": 17,
  "ord": "GLOBALCOMPACT",
  "ledetraad": "FN's 10 principper om menneskeret, arbejdstagerret, miljø og antikorruption (2 ord)",
  "kilde": "17.31"
 },
 {
  "kap": 17,
  "ord": "CODEOFCONDUCT",
  "ledetraad": "Krav til leverandører om sociale, etiske og miljømæssige forhold (3 ord)",
  "kilde": "17.33"
 },
 {
  "kap": 17,
  "ord": "VERDENSMÅL",
  "ledetraad": "FN's 17 … med i alt 169 delmål",
  "kilde": "17.34"
 },
 {
  "kap": 18,
  "ord": "ESG",
  "ledetraad": "Environment, Social, Governance (fork.)",
  "kilde": "18.27"
 },
 {
  "kap": 18,
  "ord": "COP",
  "ledetraad": "Virksomhedens rapport til FN's Global Compact (fork.)",
  "kilde": "18.17"
 },
 {
  "kap": 18,
  "ord": "CSRD",
  "ledetraad": "EU-direktiv om bæredygtighedsrapportering (fork.)",
  "kilde": "18.12"
 },
 {
  "kap": 18,
  "ord": "GHG",
  "ledetraad": "International standard for opgørelse af drivhusgasser (…-protokollen)",
  "kilde": "18.20"
 },
 {
  "kap": 18,
  "ord": "SCOPE",
  "ledetraad": "Miljødata angives som … 1, 2 og 3",
  "kilde": "18.19"
 },
 {
  "kap": 18,
  "ord": "KVANTITATIV",
  "ledetraad": "Analysemetode baseret på tal, fx sygefravær og arbejdsulykker",
  "kilde": "18.24"
 },
 {
  "kap": 18,
  "ord": "KVALITATIV",
  "ledetraad": "Analysemetode baseret på beskrivelser, fx af medarbejdergoder",
  "kilde": "18.24"
 },
 {
  "kap": 18,
  "ord": "KPI",
  "ledetraad": "Key Performance Indicator (fork.)",
  "kilde": "18.25"
 },
 {
  "kap": 18,
  "ord": "MILJØINDEKS",
  "ledetraad": "Årets udledning × 100 / basisårets udledning",
  "kilde": "18.28"
 },
 {
  "kap": 18,
  "ord": "INDIKATOR",
  "ledetraad": "Miljø…: udledning divideret med produktion",
  "kilde": "18.28"
 },
 {
  "kap": 18,
  "ord": "SYGEFRAVÆR",
  "ledetraad": "Typisk kvantitativt socialt nøgletal i en CSR-rapport",
  "kilde": "18.29"
 },
 {
  "kap": 18,
  "ord": "KORRUPTION",
  "ledetraad": "Misbrug af betroet magt for egen vindings skyld",
  "kilde": "18.31"
 },
 {
  "kap": 18,
  "ord": "BESTIKKELSE",
  "ledetraad": "Betaling for at få nogen til at gøre eller undlade noget ulovligt",
  "kilde": "18.32"
 },
 {
  "kap": 18,
  "ord": "WHISTLEBLOWER",
  "ledetraad": "…ordning: kvalitativt nøgletal vedr. korruption og bestikkelse",
  "kilde": "18.34"
 },
 {
  "kap": 18,
  "ord": "GOVERNANCE",
  "ledetraad": "G'et i ESG – selskabsledelse og antikorruption",
  "kilde": "18.26"
 },
 {
  "kap": 18,
  "ord": "ENVIRONMENT",
  "ledetraad": "E'et i ESG – miljø og klima",
  "kilde": "18.26"
 }
];
