import type { Metadata } from "next";
import {AuthProvider} from '@/componets/providers/authProvider'
import {ThemeProviderWrapper} from '@/componets/providers/themeProvider'
import {AppToolBar} from '@/componets/appToolBar'
import {LoginContextProvider} from '@/componets/providers/loginContextProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body >

        <ThemeProviderWrapper>
        <AuthProvider>
        <LoginContextProvider>
        <AppToolBar/>
        {children}
        </LoginContextProvider>
        </AuthProvider>

        </ThemeProviderWrapper>

      </body>
    </html>
  );
}
