import { Box, CssBaseline, Toolbar, useTheme } from '@mui/material'
import Head from 'next/head'
import React, { ReactNode } from 'react'

interface AdminLayoutProps {
    children: ReactNode
    title?: string
}

const AdminLayout = ({ children, title = 'Админ панель' }: AdminLayoutProps) => {
    return (
        <>
            <Head>
                <title>{title} | Новостной портал</title>
            </Head>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                {/* <AdminAppBar />
                <AdminDrawer /> */}
                
                <Box 
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        p: 3,
                        minHeight: '100vh'
                    }}
                >
                    <Toolbar /> {/* Для отступа под AppBar */}
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default AdminLayout