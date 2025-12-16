import { createAuthClient } from '@neondatabase/neon-js/auth';

const neonAuthUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL;

if (!neonAuthUrl) {
  throw new Error('Missing env var: NEXT_PUBLIC_NEON_AUTH_URL');
}

export const authClient = createAuthClient(neonAuthUrl);