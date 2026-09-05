# ItsKosi.com

The official website for Kosi: DJ mixes and edits, social video, residencies, background, and booking inquiries.

## Local development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Production build

```sh
npm run build
```

The production-ready site is generated in `dist/`.

## Site structure

- `index.html` contains the page structure, styles, content, and interactive sections.
- `music/index.html` is Kosi’s Record Shop.
- `shows/index.html`, `about/index.html`, and `booking/index.html` are standalone pages. Navigation uses normal links for full document loads; the homepage retains its sections and preview links.
- All five HTML pages are build entries in `vite.config.ts`.
- `public/support.js` contains the shared menu, modal, navigation, and accessibility behavior.
- `public/assets/` contains the site photography and artwork.

The booking form uses the activated FormSubmit endpoint and sends inquiries to the site's configured contact inbox. The public contact email is also available in the footer.
