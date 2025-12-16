'use client';

import type { ReactNode } from 'react';
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { authClient } from '@/lib/auth';

type Props = {
  children: ReactNode;
};

export  function AuthProvider({ children }: Props) {
  return (
    <NeonAuthUIProvider emailOTP authClient={authClient}>
      {children}
    </NeonAuthUIProvider>
  );
}