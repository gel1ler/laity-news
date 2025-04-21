'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Typography,
    Box,
    Switch,
    FormControlLabel,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    IconButton
} from '@mui/material';
import {
    Menu as MenuIcon,
} from '@mui/icons-material';
import { navItems } from '@/db/dummyData';
import { useAppThemeContext } from '@/context/appThemeContext';

const MyDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { mode, toggleTheme } = useAppThemeContext();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 1 }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        backgroundColor: 'background.paper',
                    },
                }}
            >
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6" component="div">
                            NewsHub
                        </Typography>
                    </Box>
                    <Divider />
                    <List>
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path} passHref>
                                <ListItem>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={!!mode}
                                    onChange={toggleTheme}
                                    color="primary"
                                />
                            }
                            label={mode === 'light' ? 'Светлая тема' : 'Тёмная тема'}
                        />
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default MyDrawer