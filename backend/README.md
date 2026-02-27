# Vercel Serverless API Setup

This architecture replaces the older Express instance. Because Vercel kills Serverless Functions after they respond, we use Pusher for WebSockets and Power BI for the heavy analytical lifting.

### The Stack
- **Database**: PostgreSQL (Neon.tech or Supabase).
- **ORM**: Prisma.
- **Real-time**: Pusher Channels.
- **Data Science**: Power BI (Embedded into the Frontend).
