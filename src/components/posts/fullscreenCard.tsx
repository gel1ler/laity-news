import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image';
import Fill from '../ui/fill';
import StartHeader from '../layout/header/startHeader';
import { MoreBtn } from '../ui/btn';

const FullscreenCard = () => {
    return (
        <>
            <Image
                src='https://womanadvice.ru/sites/default/files/22/2015-12-22_0032/nochnaya_zhizn.jpg'
                alt='image'
                fill
                className='object-cover -z-50 opacity-60'
            />
            <Fill anchor='to top' type='to anchor' />
            <Fill anchor='to right' type='to anchor' />

            <div className="max-w-7xl mx-auto">
                <div className="w-[600px] pt-40">
                    <Typography variant='h4' color='secondary.main' fontStyle='italic'>
                        Lawity News
                    </Typography>
                    <Typography variant='h2' mt={1}>
                        Knowing the importance of imagery
                    </Typography>
                    <Typography variant='h6'>
                        Furthermore, videos tend to be more engaging and interesting than mere texts, this website welcomes every visitor with ample list of video contents
                    </Typography>
                    <MoreBtn />
                </div>
            </div>
        </>
    )
}

export default FullscreenCard