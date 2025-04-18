import { Typography, TypographyProps, TypographyVariant } from '@mui/material'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const TypographyLink = ({
    href, variant, children, centered
}: {
    href: string, variant: TypographyVariant, children: ReactNode, centered?: boolean
}) => {
    return (
        <Link href={href}>
            <Typography variant={variant} textAlign={centered ? 'center' : 'left'}>
                {children}
            </Typography>
        </Link >
    )
}

export default TypographyLink