# Web de Tokimichi

La web de [Tokimichi](https://tokimichi.app), la app donde tus experiencias siguen vivas. Astro estático en español e inglés, publicada en GitHub Pages: cada push a `main` la despliega.

```sh
npm install
npm run dev
```

- Los textos de los dos idiomas están en `src/i18n.ts`.
- Los estilos y los temas Mochi y Luna están en `src/styles/global.css`.
- `python scripts/imagenes.py` regenera los iconos y las imágenes para redes.
- `public/capturas` son capturas reales de la app, y sus fotos son CC0.

El formulario de la lista de espera envía a un webhook propio en n8n.
