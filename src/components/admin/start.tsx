import { Box, Typography, Paper, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const navItems = [
    {
        name: 'Пользователи',
        path: '/admin/users',
        description: 'Управление пользователями, ролями и правами доступа'
    },
    {
        name: 'Разделы',
        path: '/admin/sections',
        description: 'Управление категориями и разделами новостей'
    },
    {
        name: 'Блоги',
        path: '/admin/blogs',
        description: 'Создание и редактирование новостей и статей'
    },
    {
        name: 'Общие настройки',
        path: '/admin/settings',
        description: 'Настройки сайта, SEO и основные параметры'
    },
    {
        name: 'Размещение рекламы',
        path: '/admin/advertising',
        description: 'Управление рекламными баннерами и кампаниями'
    },
];

const Start = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 4,
            gap: 4
        }}>
            <Box sx={{ maxWidth: 600 }}>
                <Typography variant="h3" gutterBottom sx={{
                    fontWeight: 700,
                    mb: 2
                }}>
                    Административная панель
                </Typography>
                <Typography variant="body1">
                    Добро пожаловать в систему управления контентом новостного портала.
                    Здесь вы можете управлять всеми аспектами вашего сайта.
                </Typography>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: 3,
                width: '100%',
                maxWidth: 900
            }}>
                {navItems.map((item) => (
                    <Link key={item.path} href={item.path} passHref>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                height: '100%',
                                minHeight: 140,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 6,
                                }
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>
                            <Box sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: 500
                                    }}
                                >
                                    Перейти →
                                </Typography>
                            </Box>
                        </Paper>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Start