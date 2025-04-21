import React from 'react'
import FullscreenCard from '../posts/fullscreenCard'
import StartHeader from '../layout/header/startHeader'

const Start = () => {
    return (
        <div className="h-[66vh]">
            <div className="relative px-10 h-[150%] mx-auto">
                <StartHeader />
                <FullscreenCard />
            </div>
        </div>
    )
}

export default Start