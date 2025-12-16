'use client'
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {getDesignTokens} from '@/lib/theme';
import {createTheme} from '@mui/material/styles';


export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    const tokens = getDesignTokens('light');
    const theme = createTheme(tokens);
  return (
   <ThemeProvider theme={theme}>
        <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
