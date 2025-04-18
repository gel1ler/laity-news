'use client'
import { Box, Card, Chip, Typography, useTheme } from '@mui/material';
import React from 'react'
import { TNewsArticle, TSize } from '@/types/newsTypes';
import Image from 'next/image';
import Link from 'next/link';

const getWidth = (size: TSize): number | '100%' => {
    switch (size) {
        case 'small':
            return 300
        case 'medium':
            return 450
        case 'big':
            return 600
        case 'wide':
            return '100%'
    }
}

export const NewsCard = ({ data, size }: { data: TNewsArticle, size: TSize }) => {
    const { id, title, excerpt, date, category, readTime, imageUrl } = data
    const width = getWidth(size)
    const theme = useTheme()

    return (
        <Card
            sx={{
                width,
                aspectRatio: size == 'wide' ? '21/9' : 'auto',
                minHeight: '300px',
                borderRadius: 2,
                overflow: 'visible',
                display: 'flex',
                gap: 2,
                boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(255, 82, 82, 0.2)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(255, 82, 82, 0.3)'
                        : '0 12px 40px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <div className="w-1/2 relative">
                <Image
                    src={imageUrl}
                    alt='card image'
                    fill
                    className='object-cover h-full rounded-l-lg'
                />
            </div>
            <div className="w-1/2 pr-5 pl-3 py-6 flex flex-col">
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Chip
                        label={category}
                        size="small"
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 82, 82, 0.2)' : 'rgba(213, 0, 0, 0.1)',
                            color: theme.palette.mode === 'dark' ? '#ff5252' : '#d50000',
                            fontWeight: 'bold'
                        }}
                    />
                    <Typography variant="caption">
                        {readTime}
                    </Typography>
                </Box>

                {/* Title */}
                <Link href={`/news/${id}`}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(90deg, #ff5252, #ff8a80)'
                                : 'linear-gradient(90deg, #d50000, #ff5252)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}
                    >
                        {title}
                    </Typography>
                </Link>

                {/* excerpt */}
                <Typography variant="body2">
                    {excerpt}
                </Typography>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className='pt-2 mt-auto'
                    sx={{
                        borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <Typography variant="caption">
                        {date}
                    </Typography>
                    <Box
                        component="span"
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #ff5252, #ff8a80)'
                                : 'linear-gradient(135deg, #d50000, #ff5252)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.7rem',
                            fontWeight: 'bold'
                        }}
                    >
                        →
                    </Box>
                </Box>
            </div>
        </Card>
    )
}