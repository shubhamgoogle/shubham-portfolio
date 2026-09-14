# Shubham Chawla — Portfolio Website

A developer-first, high-performance personal portfolio built for **Data Engineering & Agentic AI** roles. Inspired by the dark, minimalist, terminal aesthetic of `satnaing.dev`.

---

## ⚡ Quick Start

### 1. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ How to Update Your Portfolio (Zero-Fuss Updates)

All portfolio data (personal bio, contact info, metrics, featured systems, skills, and terminal commands) is decoupled from the UI and centralized in a single typed file:

📁 **[`src/data/portfolio.ts`](./src/data/portfolio.ts)**

### Adding a New System or Project:
Open `src/data/portfolio.ts` and add an entry under `featuredSystems`:

```typescript
{
  id: "your-new-pipeline",
  title: "Real-Time Fraud Detection with PySpark & Kafka",
  category: "data-engineering", // "agentic-ai" | "data-engineering" | "mcp-tooling"
  status: "Production",
  summary: "Sub-50ms streaming inference using Spark Structured Streaming and Vertex AI.",
  description: "Detailed architecture rationale...",
  architectureFlow: [
    "Kafka Ingestion",
    "Spark Streaming Aggregations",
    "Model Scoring & Output Sink"
  ],
  metrics: [
    { label: "Throughput", value: "20k eps" },
    { label: "P99 Latency", value: "< 45ms" }
  ],
  stack: ["Kafka", "PySpark", "BigQuery", "Cloud Run"],
  highlights: ["Automated scaling", "Unit tested with pytest"],
  github: "https://github.com/shubhamdal"
}
```

The UI, category filters, and architecture modals will update automatically with full type safety!

---

## 🏗️ Architecture & Stack

- **Framework**: [Next.js 16 (Turbopack, App Router)](https://nextjs.org) + TypeScript + React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Slate/Navy dark palette, terminal emerald & cyan accents)
- **Icons**: [Lucide Icons](https://lucide.dev) & Custom SVG Icons
- **Interactive CLI**: In-browser terminal widget supporting commands (`whoami`, `systems`, `skills`, `metrics`, `contact`, `clear`)
- **Blueprints Modal**: Interactive architecture flow visualizer for deep technical breakdowns

---

## 🚀 Free 1-Click Deployment (Vercel or Cloud Run)

### Deploy to Vercel:
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your `shubham-portfolio` repository and click **Deploy**.
4. Any future `git push` to `main` automatically updates your live site!
