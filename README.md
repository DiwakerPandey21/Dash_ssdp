# Live Data Dashboard Platform

A production‑grade real‑time data collection and analytics platform.

## Architecture Principles
1. **Backend is the single source of truth**: Manages logic, authorization, and data ingestion.
2. **Frontend never talks directly to Power BI**: The frontend speaks to the backend exclusively.
3. **Real‑time is additive**: WebSockets provide immediate updates, but REST APIs ensure reliability.
4. **Power BI is for analytics, not storage**: The database is the primary store; Power BI visualizes datasets pushed from the backend.
5. **Design for failure, scalability, and security**: Modular architecture prepares for easy horizontal scaling and security layers.

## Modules
- [**Frontend**](./frontend): React + Tailwind UI representing the dual-mode platform.
- [**Backend**](./backend): Node.js + Express API providing data routing, Socket.IO, and Power BI pushing.
- [**Analytics**](./analytics): Data Science assets, Jupyter Notebooks, and Power BI definitions.
- [**Docs**](./docs): Foundational design references and system documentation.
