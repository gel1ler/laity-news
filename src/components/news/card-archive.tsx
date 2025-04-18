'use client'
import { styled } from '@mui/material/styles';
import { 
  Card, 
  CardContent, 
} from '@mui/material';

export const NewsCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'visible',
  maxWidth: 400,
  minHeight: 300,
  margin: 'auto',
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
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export const CornerAccent = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: -8,
  right: -8,
  width: 60,
  height: 60,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #ff5252, #ff8a80)'
    : 'linear-gradient(135deg, #d50000, #ff5252)',
  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
  zIndex: 1,
}));

export const NewsImage = styled('div')({
  height: 180,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  borderRadius: '16px 16px 0 0',
  overflow: 'hidden',
});

export const NewsCardContent = styled(CardContent)({
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'inherit',
});
