'use client'
import React from 'react';
import Link from 'next/link';
import {
    Typography,
    IconButton,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Brightness4 as DarkModeIcon,
    Brightness7 as LightModeIcon,
    Search as SearchIcon,
    AccountCircle as AccountIcon
} from '@mui/icons-material';
import MyDrawer from './drawer';
import { useAppThemeContext } from '@/context/appThemeContext';
import { navItems } from '@/db/dummyData';


const MyToolbar = () => {
    const { mode, toggleTheme } = useAppThemeContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box display="flex" alignItems="center" flexGrow={1}>
                {isMobile && (
                    <MyDrawer />
                )}

                <Link href="/" passHref>
                    <Typography
                        variant="h4"
                        fontWeight='bold'
                        fontStyle='italic'
                        sx={{
                            textDecoration: 'none',
                            transition: 'opacity .2s ease-out',
                            '&:hover': { opacity: 0.8 },
                        }}
                    >
                        Lawity News
                    </Typography>
                </Link>
            </Box>

            {
                !isMobile && (
                    <Box className='mx-8 flex gap-4'>
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path} passHref>
                                <Typography
                                    sx={{
                                        mx: 1,
                                        fontWeight: 'medium',
                                        color: 'text.primary',
                                        transition: 'color .2s ease-out',
                                        '&:hover': {
                                            color: 'text.secondary'
                                        },
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                )
            }

            {/* Элементы управления */}
            <Box display="flex" alignItems="center">
                <IconButton color="inherit" aria-label="search">
                    <SearchIcon />
                </IconButton>

                <IconButton color="inherit" aria-label="account">
                    <AccountIcon />
                </IconButton>

                <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
                    {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </Box>
        </>
    )
}

export default MyToolbar