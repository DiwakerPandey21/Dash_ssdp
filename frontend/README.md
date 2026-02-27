# Frontend Setup (Vercel & Power BI)

Built using React + Tailwind CSS v4.

This Next.js/Vite frontend serves two primary purposes in our Duo-Team architecture:

1. **Contributor Mode (Web Dev Role)**: A highly interactive, premium UI built with Glassmorphism where data can be ingested directly into the PostgreSQL Database via Vercel Serverless Functions.
2. **Analytics Viewer (Data Science Role)**: A dedicated embedded `<iframe>` / `powerbi-client-react` view that seamlessly surfaces the stunning Power BI Dashboards authored by the Data Scientist partner.

### Deployments
- `npm run build`
- Linked directly to Vercel GitHub integration.
