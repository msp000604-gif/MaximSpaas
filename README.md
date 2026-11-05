# Maxim Spaas — Portfolio (Apple-inspired concept)

Een werkend, responsive portfolio dat volledig draait op **HTML + CSS + JavaScript**. Geen frameworks, geen databank en geen betalende hosting nodig. Je kunt deze bestanden rechtstreeks op GitHub Pages zetten.

## Website bekijken op je eigen computer

1. Download en pak de ZIP uit.
2. Open de map `maxim-apple-portfolio`.
3. Dubbelklik op `index.html`. Je website opent in je browser.
4. Optioneel: open de map in Visual Studio Code om te bewerken.

## Online plaatsen met GitHub Pages

1. Maak een gratis GitHub account als je er nog geen hebt.
2. Ga naar <https://github.com/new>.
3. Maak een **Public** repository aan, bijvoorbeeld `portfolio`.
4. Kies **Add file → Upload files** en upload **de inhoud van deze map** (`index.html`, `styles.css`, `script.js`, `assets/`), niet de ZIP als één bestand.
5. Klik op **Commit changes**.
6. Ga naar **Settings → Pages → Build and deployment**.
7. Kies **Deploy from a branch**, selecteer `main` en `/(root)` en klik op **Save**.
8. Na publicatie staat je website op `https://GEBRUIKERSNAAM.github.io/portfolio/`.

## Belangrijk: afbeeldingen en projecten vervangen

De vier vectorafbeeldingen in `assets/` zijn **illustratieve plaatsvervangers**, geen kopieën van je Adobe Portfolio. De teksten en projecttitels zijn eveneens **voorbeelden**.

- `assets/bike.svg` → vervang door een eigen wielren- of mobiliteitsrender
- `assets/glider.svg` → vervang door een eigen vliegtuig- of luchtvaartproject
- `assets/vespa.svg` → vervang door je echte productrender
- `assets/knitting.svg` → vervang door eigen foto's van je machine

Als je foto's zoals `.jpg`, `.png` of `.webp` toevoegt, wijzig dan in `index.html` de relevante `<img src="assets/....">`. Voor de afbeeldingen die in het projectvenster verschijnen moet je in `script.js` het overeenkomstige `image: 'assets/...'` aanpassen. De aanbevolen afbeeldingsverhouding is ongeveer 1600 × 900 px voor brede kaarten, en 1200 × 900 px voor gewone kaarten. WebP is ideaal om je site snel te houden.

Projectnamen en zichtbare teksten pas je aan in `index.html`; de beschrijvingen die je ziet na het openen van een project pas je aan in `script.js` in `const projects = { ... }`.

**Vergeet niet:** vervang de demo-disclaimer in de pagina voordat je de site officieel online zet.

## Contactlink aanpassen

De knoppen naar je huidige site gebruiken:

`https://maximspaas.myportfolio.com/welcome`

Wil je rechtstreeks een e-mail openen? Vervang hun `href` in `index.html` door bijvoorbeeld `mailto:jouw-adres@domein.be` met je echte e-mailadres.

## Eigen domein koppelen

- Koop je domein bij een registrar.
- Bij **Settings → Pages → Custom domain** vul je bijvoorbeeld `www.jouwdomein.be` in.
- Maak bij de registrar een CNAME record: `www` → `GEBRUIKERSNAAM.github.io`.
- Configureer indien nodig ook het hoofddomein zonder `www` volgens de GitHub Pages-handleiding.
- Schakel daarna **Enforce HTTPS** in als de optie beschikbaar is.

Documentatie: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>

## Bestandsstructuur

```
maxim-apple-portfolio/
├── index.html      ← inhoud en structuur van website
├── styles.css      ← kleuren, layout, animaties, mobiel
├── script.js       ← menu, filters, projectvensters
├── assets/
│   ├── bike.svg
│   ├── glider.svg
│   ├── vespa.svg
│   ├── knitting.svg
│   └── favicon.svg
└── README.md
```

De site maakt gebruik van Google Fonts (`DM Sans`). Zonder internetverbinding wordt automatisch een systeemlettertype gebruikt.
