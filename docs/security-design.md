# Security Design

- **API Security**: CORS enabled strictly for the frontend domain.
- **Authentication**: JWT token-based. Contributors require valid tokens `(Role: Contributor)`.
- **Database**: Parameterized queries/ORMs strictly used to prevent SQL/NoSQL injection.
- **Sockets**: Secure WSS protocols implemented. Namespace authentication to be adopted for scaled deployments.
