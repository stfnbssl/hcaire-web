# Vite + React Router v7 + TypeScript su Cloudflare Workers

Progetto React con TypeScript, React Router v7 e Vite deployato su Cloudflare Workers.

## 🚀 Setup

```bash
# Installa le dipendenze
npm install

# Sviluppo locale
npm run dev

# Type checking
npm run type-check

# Build per produzione
npm run build

# Deploy su Cloudflare
npm run deploy
```

## 📁 Struttura

```
├── src/
│   ├── App.tsx          # Componente principale con routing
│   ├── main.tsx         # Entry point React
│   ├── index.css        # Stili globali
│   └── vite-env.d.ts    # Definizioni tipo Vite
├── worker/
│   └── index.ts         # Cloudflare Worker (TypeScript)
├── index.html           # Template HTML
├── vite.config.js       # Configurazione Vite
├── tsconfig.json        # Configurazione TypeScript (React)
├── tsconfig.worker.json # Configurazione TypeScript (Worker)
└── wrangler.toml        # Configurazione Cloudflare
```

## 🔧 TypeScript

- **src/**: TypeScript con JSX (React components)
- **worker/**: TypeScript con tipi Cloudflare Workers
- Strict mode abilitato
- Type checking completo

## 🌐 Features

- ⚡️ Vite per build veloce
- ⚛️ React 18
- 🛣️ React Router v7
- 📘 TypeScript
- ☁️ Cloudflare Workers con Assets binding
- 🎨 CSS-in-JS con typed styles
