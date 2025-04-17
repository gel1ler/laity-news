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

const Header = ({ darkMode }: { darkMode: boolean}) => {
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
      className="shadow-sm"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'background.paper' : 'primary.main',
        color: 'text.primary',
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
          
          <Link href="/" passHref legacyBehavior>
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { opacity: 0.8 },
              }}
            >
              NewsHub
            </Typography>
          </Link>
        </Box>

        {/* Навигация для десктопа */}
        {!isMobile && (
          <Box sx={{ display: 'flex', mx: 2 }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref legacyBehavior>
                <Button
                  color="inherit"
                  sx={{
                    mx: 1,
                    fontWeight: 'medium',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark' ? 'action.hover' : 'primary.dark',
                    },
                  }}
                >
                  {item.name}
                </Button>
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
          
          <IconButton color="inherit" onClick={()=>{}} aria-label="toggle theme">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
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
                <Link key={item.path} href={item.path} passHref legacyBehavior>
                  <ListItem component="a">
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
                    checked={darkMode}
                    onChange={()=>{}}
                    color="primary"
                  />
                }
                label={darkMode ? 'Светлая тема' : 'Тёмная тема'}
              />
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;