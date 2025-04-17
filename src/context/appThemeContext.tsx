'use client'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { } from '@mui/material/themeCssVarsAugmentation';

type ThemeContextType = {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
};

const AppThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const AppThemeProvider = (props: any) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(() => {
        return responsiveFontSizes(createTheme({
            cssVariables: {
                colorSchemeSelector: "class",
                disableCssColorScheme: true
            },
            palette: {
                primary: {
                    main: `rgb(10, 18, 42)`,
                    contrastText: 'rgb(255, 255, 255)',
                },
                secondary: {
                    main: `rgb(27, 59, 111)`,
                    contrastText: 'rgb(255, 255, 255)',
                }
            },
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: `rgb(10, 18, 42)`,
                        },
                        secondary: {
                            main: `rgb(27, 59, 111)`,
                        }
                    }
                },
                dark: {
                    palette: {
                        primary: {
                            main: `rgb(10, 18, 42)`,
                        },
                        secondary: {
                            main: `rgb(27, 59, 111)`,
                        }
                    }
                }
            }
        }))
    }, [mode])

    useEffect(() => {
        document.documentElement.classList.toggle('dark-theme', mode === 'dark');
    }, [mode]);

    const contextValue = useMemo(() => ({
        toggleTheme: () => setMode(prev => prev === 'light' ? 'dark' : 'light'),
        mode
    }), [mode]);

    return <AppThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme} disableTransitionOnChange>
            <CssBaseline enableColorScheme />
            {props.children}
        </ThemeProvider>
    </AppThemeContext.Provider>
}

export const useAppThemeContext = () => useContext(AppThemeContext)

export default AppThemeProvider