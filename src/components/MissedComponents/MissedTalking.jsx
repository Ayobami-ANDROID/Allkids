import React from 'react'
import { yellowWaveIcon } from '../../constants/media'

const MissedTalking = () => {
    return (
        <div className=' px-24 py-8 bg-[#fff] w-full'> 
            <div className='flex w-full '>
                <div>
                    <ul className='list-disc mb-4'>
                        <li>Kids learning how to turn their ideas into real businesses</li>
                        <li>Lessons in financial skills and problem-solving for tomorrow’s leaders</li>
                        <li>Confidence that’ll set them apart in every classroom and playground</li>
                    </ul>
                    <span className="w-1 lg:w-full h-20 lg:h-1 bg-black flex relative items-end lg:items-center justify-center before:w-2 before:h-2 before:absolute before:bg-white before:border-4 before:border-black before:p-1 before:lg:p-2 before:rounded-full before:lg:right-0" />

                </div>
                <div className='flex flex-col justify-center items-center w-full relative'>
                    <h2>We'RE Talking</h2>
                    <div>
                        <img src={yellowWaveIcon} className='rotate-90 h-1/2  absolute top-[40%]'></img>
                        <img src={yellowWaveIcon} className='rotate-90 h-1/2  absolute top-[48%]'></img>

                    </div>
                </div>
            </div>
            <div className='my-8'>
                <p>
                Sound like something they shouldn’t miss again? That’s what Aisha’s mom thought too. When Aisha joined the last bootcamp, she was just a kid with a few ideas and a curious mind. Now? She’s running her own homemade snack business and learning to manage her finances before most kids even have an allowance.
                </p>
            </div>
        </div>

    )
}

export default MissedTalking