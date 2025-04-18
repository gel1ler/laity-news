'use client'
import { createTheme, CssBaseline, GlobalStyles, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { } from '@mui/material/themeCssVarsAugmentation';

type ThemeContextType = {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
};

const AppThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const AppThemeProvider = (props: any) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
        setMode(savedMode || 'dark');
    }, []);

    useEffect(() => {
        if (mode) {
            localStorage.setItem('themeMode', mode);
        }
    }, [mode]);

    const theme = useMemo(() => {
        return responsiveFontSizes(createTheme({
            palette: {
                mode,
                ...(mode === 'light'
                    ? {
                        primary: {
                            dark: "#faedcd",
                            main: "#fefae0",
                            light: "#e9edc9"
                        },
                        text: {
                            primary: "#303030",
                        },
                        background:{
                            default: "#fafafa"
                        }
                    }
                    : {
                        primary: {
                            dark: "#000814",
                            main: "#001d3d",
                            light: "#003566"
                        },
                        text: {
                            primary: '#fefae0',
                            secondary: '#FFC300'
                        },
                        background:{
                            default: "#202020"
                        }
                    }),
            },

        }))
    }, [mode])

    const contextValue = useMemo(() => ({
        toggleTheme: () => setMode(prev => prev === 'light' ? 'dark' : 'light'),
        mode
    }), [mode]);

    return <AppThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme} disableTransitionOnChange>
            <GlobalStyles styles={{
                body: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                },
            }} />
            <CssBaseline enableColorScheme />
            {props.children}
        </ThemeProvider>
    </AppThemeContext.Provider>
}

export const useAppThemeContext = () => useContext(AppThemeContext)

export default AppThemeProvider