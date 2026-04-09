# Portfolio

This project uses React with Vite.

## Development

Run the Vite development server:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, which is usually:

```text
http://localhost:5173/
```

## Important

Do not open `portfolio/index.html` directly with Live Server at a URL such as
`http://127.0.0.1:5500/portfolio/index.html`.

That will not work correctly because Vite must transform the React JSX entry at
`src/main.jsx` before the browser can render the app.

## Production Preview

To test the production build locally:

```bash
npm run build
npm run preview
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
