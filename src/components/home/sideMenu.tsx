'use client'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Политика', path: '/politics' },
    { name: 'Экономика', path: '/economy' },
    { name: 'Технологии', path: '/tech' },
    { name: 'Спорт', path: '/sport' },
];

const SideMenu = () => {
    const [y, setY] = useState(0)
    let height

    const f = (y: number, index: number): number => {
        const pos = (Math.abs(y - (index)))
        const k = 2
        const min = Math.min(navItems.length / pos / k, 1.2)
        return Math.max(1, min)
    }

    return (
        <div
            className="flex flex-col gap-6 items-center fixed right-10 top-1/2 -translate-1/2"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                height = rect.height
                let step = height / navItems.length
                if (Math.abs(e.clientY - rect.top - y) > 10)
                    setY((e.clientY - rect.top) / step)
            }}
        >
            {navItems.map((item, index) => (
                <Link key={item.path} href={item.path} passHref>
                    <Typography
                        letterSpacing={2}
                        fontSize={12}
                        textTransform='uppercase'
                        fontWeight='light'
                        textAlign='center'
                        sx={{
                            transform: `scale(${f(y, index)})`,
                            transition: 'transform .2s ease-out'
                        }}
                    >
                        {item.name}
                    </Typography>
                </Link>
            ))}
        </div>
    )
}

export default SideMenu