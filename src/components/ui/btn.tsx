import { Button } from '@mui/material'
import React from 'react'

export const MoreBtn = () => {
    return (
        <Button
            variant='contained'
            sx={{
                borderRadius: '10px',
                bgcolor: 'secondary.main',
                color: 'text.secondary',
                mt: 2,
                fontWeight: 'bold',
                transition: 'all .2s ease-out',
                ':hover':{
                    bgcolor: 'secondary.dark',
                }
            }}
        >
            Подробнее
        </Button>
    )
}
