# Duo-SaaS Dashboard Architecture (Vercel & Power BI)

Our platform has been redesigned from a basic Node/Socket scaffold into a highly scalable, premium **SaaS product** tailored perfectly for a two-person team.

## Architecture Paradigm

### 1. Web Developer (Frontend & API)
- **Frontend**: React, Tailwind CSS v4, Zustand, and Recharts. Deployed to Vercel. Features a premium glassmorphic UI, Light/Dark Modes, and responsive sidebars.
- **Backend API**: Converted to Vercel Serverless Functions using standard Express abstractions (`vercel.json`).
- **Database**: PostgreSQL paired with **Prisma ORM**.
- **Real-time Engine**: **Pusher Channels**. The Vercel function triggers Pusher on data ingestion, which updates the React UI instantly.
- **Security**: JWT Authentication, bcrypt password hashing, Express Rate Limiter, Helmet headers, and strictly enforced Role-Based Access Control (RBAC) ensuring only `CONTRIBUTORS` can POST data while `VIEWERS` can only see it.

### 2. Data Science Engineer (Analytics & Power BI)
- **Power BI as the Core**: Since Vercel is handling the API, the Data Science branch completely owns the Analytics pipeline using Power BI.
- **Data Ingestion Flow**:
  1. The Web Developer's application drops validated data into the cloud PostgreSQL Database (Neon/Supabase).
  2. The Data Science Engineer connects Power BI directly to the cloud PostgreSQL instance to build complex DAX dashboards, predictive models, and beautiful reports.
  3. The final Power BI reports are embedded securely into the React platform within the `/analytics` route.

## Setup Instructions

1. **Database & API Setup**:
   - Create a PostgreSQL database (e.g., Supabase or Neon).
   - Get API keys for **Pusher** (Channels).
   - Set `.env` variables in `/backend` (`DATABASE_URL`, `JWT_SECRET`, `PUSHER_APP_ID`, etc.).
   - Run `npx prisma db push` to generate the Postgres tables.
   - Run the API with `node server.js` or deploy directly to Vercel without changing any code.

2. **Frontend Setup**:
   - `cd frontend && npm install`
   - Set `.env` variables (`VITE_PUSHER_KEY`, `VITE_PUSHER_CLUSTER`).
   - `npm run dev` to see the incredible premium UI in action.

## Licensing
Proprietary / Commercial Use
