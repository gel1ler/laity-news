import { Typography } from '@mui/material'
import React from 'react'
import Line from '../ui/line';

const Start = () => {
    return (
        <div className="h-[80vh] flex items-center justify-between px-10">
            <Line />
            <div>
                <Typography variant="h1">
                    Новостной портал
                </Typography>
                <Typography variant="h4">
                    Обо всем
                </Typography>
            </div>
        </div>
    )
}

export default Start