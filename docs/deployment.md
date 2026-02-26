# Deployment Strategy

- **Frontend**: Hosted on Vercel / Netlify for Edge CDN delivery.
- **Backend**: Hosted on Render / AWS EC2 ensuring WebSocket long-polling configurations are enabled.
- **Database**: Managed PostgreSQL / MongoDB Atlas.
- **CI/CD**: GitHub Actions workflow running tests on main branch push before triggering redeployment.
