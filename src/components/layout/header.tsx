'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Switch,
  FormControlLabel,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Search as SearchIcon,
  AccountCircle as AccountIcon
} from '@mui/icons-material';
import { useAppThemeContext } from '@/context/appThemeContext';

const Header = () => {
  const { mode, toggleTheme } = useAppThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Политика', path: '/politics' },
    { name: 'Экономика', path: '/economy' },
    { name: 'Технологии', path: '/tech' },
    { name: 'Спорт', path: '/sport' },
  ];


  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "primary.dark",

      }}
    >
      <Toolbar className="container mx-auto">
        {/* Лого и мобильное меню */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Link href="/" passHref>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': { opacity: 0.8 },
              }}
            >
              NewsHub
            </Typography>
          </Link>
        </Box>

        {/* Навигация для десктопа */}
        {!isMobile && (
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
        )}

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

        {/* Мобильное меню (Drawer) */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              backgroundColor: theme.palette.background.paper,
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;