'use client'
import { Box, useTheme } from '@mui/material'
import React from 'react'

const Fill = ({
    anchor, type, prc, color, over
}: {
    anchor: 'to bottom' | 'to top' | 'to left' | 'to right',
    type: 'centered' | 'to anchor',
    prc?: number,
    color?: string,
    over?: boolean
}) => {
    const theme = useTheme()
    let bg = ''
    switch (type) {
        case 'centered':
            bg = `linear-gradient(${anchor}, white, transparent 25% 75%, white)`
            break
        case 'to anchor':
            bg = `linear-gradient(${anchor}, ${color ? color : theme.palette.background.default} ${prc ? prc + '%' : ''}, transparent)`
    }

    return (
        <Box
            className='w-full h-full absolute left-0 top-0'
            sx={{
                background: bg,
                zIndex: over ? 40 : -40
            }}
        />
    )
}

export default Fill