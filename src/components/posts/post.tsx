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
                boxShadow: `0 0 30px 5px  ${theme.palette.secondary.main}3B`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 0 30px 5px  ${theme.palette.secondary.main}63`
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
                            bgcolor: 'secondary.main',
                            color: 'text.secondary',
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
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
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
                            background:`linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'text.secondary',
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