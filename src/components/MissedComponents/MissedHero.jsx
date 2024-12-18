import React from 'react'
import { backg, TabKid } from '../../constants/media'

const MissedHero = () => {
    return (
        <div className='flex justify-center  px-40  '>
            <div className="w-3/5 aspect-[1/1.5] relative flex   ">
                <div className='relative w-full'></div>
                <img src={backg} className='absolute object-contain w-full h-full'></img>
                <img src={TabKid} className='absolute    w-full h-full'></img>
            </div>
            <div className='flex flex-col relative w-full gap-6'>
                <div className='bg-blue-500 text-[#fff] rounded-3xl rounded-bl-none py-3 px-2 absolute -left-[10%]'>
                    <h2 className='text-5xl'>Oops you missed</h2>
                    <p className='text-2xl'> the Kidpreneur Bootcamp Webinar</p>
                </div>
                <div className='mt-28 w-[38%] ml-8 leading-[2] '>
                    <p>Don't panic we have got your back join the waitlist for the next "Kidpreneur Bootcamp" and start</p>

                </div>
                <div className='bg-[#fff] rounded-[20px] px-8 py-2 text-4xl'>
                    <p> Alright Parents of future CEOs and changemaker's- let's talk. </p>
                </div>
                <div className='ml-8'>
                    <p>
                        You missed out. The first Kidpreneur Bootcamp was a blast, filled with eager young minds ready to launch their first business ideas. And if your child wasn’t there? Yeah, they missed a big one.
                    </p>
                    <p>
                        But hold up, don’t hit the “panic” button yet. We’re giving you another shot to get your kid in on the action with our
                        next Kidpreneur Bootcamp.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MissedHero