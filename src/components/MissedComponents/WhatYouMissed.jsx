import React from 'react'
import { triangle,blueWaveTrippleIcon } from '../../constants/media'

const WhatYouMissed = () => {
  return (
    <div className='flex lg:flex-row flex-col  bg-[#fff] justify-between py-8 w-full lg:px-0 px-8'>
        <div className='flex flex-col'>
            <h1 className='lg:text-5xl text-3xl lg:w-[44%] w-full lg:mx-24 mx-0'>Here’s what they missed in Batch One</h1>
            <div className='flex justify-center'>
                <img src={triangle} className='rotate-90'/>
                <img src={triangle} className='rotate-90'/>
                <img src={triangle} className='rotate-90'/>
                <img src={triangle} className='rotate-90'/>
                <img src={triangle} className='rotate-90'/>
                <img src={triangle} className='rotate-90'/>
            </div>
        </div>
        <div className='lg:px-24 px-8'>
            <ul className='list-disc text-2xl'>
                <li>Hands-on learning about real-life business basics—from saving, budgeting, and idea creation to pitching</li>
                <li>The chance to build something of their own: real products, real services, and real confidence</li>
                <li>Friendships with like-minded kids just as curious, driven, and creative as they are</li>
                <img src={blueWaveTrippleIcon} className='absolute right-0 h-8 mt-4'></img>
            </ul>
        </div>
    </div>
  )
}

export default WhatYouMissed