import React from 'react'
import { blueZigzagIcon } from '../../constants/media'
import { Kid4Img4 } from '../../constants/media'

const SuccessHero = () => {
  return (
    <div className='flex lg:flex-row w-full  flex-col-reverse  lg:px-0 px-8 lg:mt-0 mt-4'>

        <div className='flex w-full relative'>
           <div className='flex items-end'>
       
            <img src={blueZigzagIcon} className=" sm:static absolute bottom-10 -left-[40%] top-[80%] lg:left-0 h-16 lg:h-28"></img>
           </div>
            <div>
                <img src={Kid4Img4} className=' lg:scale-y-[1.1] lg:scale-x-[1.85] h-[95%] w-full '></img>
            </div>
        </div>
        <div className='flex flex-col lg:pr-32 lg:p-8 gap-6 w-full'>
        <p className=" bg-[#fff] rounded-3xl p-6 w-full top-[70%] left-[50%] text-2xl">
            You've just taken the first step in giving your child a head start on their enterpreniual journey, and we couldn't be
            more exicted to welcome you to the kidpreneur Bootcamp Family!
          </p>
          <div className='flex flex-col gap-4 text-2xl'>
            <h2 className='text-4xl'>What Happen Next?</h2>
            <p>We'll be sending a confirmation email shortly with all the important details you need to get started.
               Be sure to check your inbox (and don't forget the spam folder, just inm case!).
             </p>
          </div>
          <div className='flex flex-col gap-4 text-2xl'>
            <h2 className='text-4xl'>Get Your Child Ready For Success</h2> 
            <p>While you wait for the bootcamp to begin, here's how you can prepare;</p>
            <ul>
                <li>Look out for our exclusive Kidpreneur Prep Kit in your email! It's packed with fun activities and resources to get your child inspired and exicted</li>
                <li>Connect with us on social media to follow along with updates, tips, and stories from other Kidpreneurs.</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SuccessHero