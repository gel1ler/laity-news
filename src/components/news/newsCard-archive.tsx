'use client'
import React from 'react';
import { 
  Typography, 
  Box, 
  Chip,
  useTheme
} from '@mui/material';
import { CornerAccent, NewsCard, NewsCardContent, NewsImage } from './card-archive';

const New = () => {
    const theme = useTheme();
    
    // Пример данных новости
    const newsItem = {
      title: "Новые технологии в веб-разработке 2024",
      excerpt: "Открытие революционного подхода к созданию пользовательских интерфейсов...",
      date: "15 мая 2024",
      category: "Технологии",
      readTime: "4 мин",
      imageUrl: "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds",
    };
  
    return (
      <div>
        <NewsCard>
          <CornerAccent />
          
          <NewsImage
            style={{ 
              backgroundImage: `url(${newsItem.imageUrl})`,
              filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none'
            }}
          />
          
          <NewsCardContent>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Chip 
                label={newsItem.category} 
                size="small"
                sx={{ 
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 82, 82, 0.2)' : 'rgba(213, 0, 0, 0.1)',
                  color: theme.palette.mode === 'dark' ? '#ff5252' : '#d50000',
                  fontWeight: 'bold'
                }}
              />
              <Typography variant="caption">
                {newsItem.readTime}
              </Typography>
            </Box>
            
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
              {newsItem.title}
            </Typography>
            
            <Typography variant="body2">
              {newsItem.excerpt}
            </Typography>
            
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center"
              sx={{ 
                borderTop: `1px solid ${theme.palette.divider}`,
                pt: 1,
                mt: 1
              }}
            >
              <Typography variant="caption">
                {newsItem.date}
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
          </NewsCardContent>
        </NewsCard>
      </div>
    );
  };
  
  export default New;