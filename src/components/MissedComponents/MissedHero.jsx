import React from 'react'
import { backg,TabKid } from '../../constants/media'

const MissedHero = () => {
  return (
    <div className='flex  px-24  py-10'>
          <div className="w-3/5 aspect-[1/1.5] relative flex   ">
            <div className='relative'></div>
             <img src={backg} className='absolute  '></img>
             <img src={TabKid} className='absolute  top-[15%] scale-y-[1.8]'></img>
        </div>
        <div className='flex flex-col relative w-full gap-6'>
            <div className='bg-blue-500 text-[#fff] rounded-3xl rounded-bl-none py-3 px-2 absolute -left-[10%]'>
                <h2>Oops you missed</h2>
                <p> the Kidpreneur Bootcamp Webinar</p>
            </div>
            <div className='mt-24 w-[35%] ml-8 '>
                <p>Don't panic we have got your back join the waitlist for the next "Kidpreneur Bootcamp" and start</p>
                
            </div>
            <div className='bg-[#fff] w-[45%] rounded-[20px] px-8 py-2'>
                <p> Alright Parents of future CEOs and changemaker's- let's talk. </p>
            </div>
        </div>
    </div>
    
  )
}

export default MissedHero