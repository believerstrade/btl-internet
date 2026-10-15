# BTL Internet - Vercel deployment

This package is configured for TanStack Start on Vercel with Nitro.

## Deploy
1. Create a PostgreSQL database (Neon, Supabase Postgres, or another compatible provider).
2. Run `migrations/0001_btl_postgres.sql` once.
3. Push this folder to GitHub.
4. Import the GitHub repository into Vercel.
5. Add `DATABASE_URL` in Vercel Project Settings > Environment Variables.
6. Deploy.

## Local verification
```bash
bun install
bun run typecheck
bun run build
```

The marketing pages, responsive layout, brand assets, scroll-driven hero, connection form, support form and dashboard UI are included. Production authentication, payment gateways, MikroTik/RADIUS automation and strict role authorization should be integrated before using the dashboards for real customer operations.
