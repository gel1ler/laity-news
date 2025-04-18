'use client'
import { useTheme } from '@mui/material'
import React from 'react'

const Line = ({ opacity }: { opacity?: number }) => {
    const theme = useTheme()

    return (
        <div className="w-screen overflow-hidden -z-10 absolute top-0 left-0 " style={{ opacity: opacity }}>
            <svg width="1920" height="1080" viewBox="0 0 1884 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1883 0.999878C1883 0.999878 1118 392.5 1294 668.5C1470 944.5 1501.5 338 1399 184C1296.5 29.9999 565.5 492.5 448 668.5C330.5 844.5 548 1145 773 908C998 671 579.458 310.013 0.5 881"
                    stroke={theme.palette.text.primary}
                    className="animate-draw"
                />
            </svg>
        </div>
    )
}

export default Line