import React from 'react'
import { shortImg } from '../../constants/media'

const NextRound = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse items-center w-full bg-[#fff] relative lg:gap-0 gap-6 lg:px-0 px-8'>
            {/* <div className='absolute bg-green-normal h-60 w-60 flex items-center justify-center left-[45%] top-[20%] rounded-3xl p-0'>
                <img src={kid2Img} alt="" className='h-[10rem] scale-y-[1.85] ' />
            </div> */}
            <div className='flex flex-col  justify-end  items-start pb-4 w-full lg:absolute top-[70%] left-[6.5%]  mxl:top-[85%]'>
                <button className="px-10 py-1.5 rounded-full bg-yellow-normal self-center text-black text-2xl">Join  Now</button>
            </div>

            <div className='bg-green-normal h-60 w-60 flex lg:hidden items-end justify-center left-[45%] top-[20%] rounded-3xl p-0'>
                <img  src={shortImg}
                    alt=""
                    className='h-[15rem]   left-[48%] top-[14.5%]  '></img>
            </div>
           
            <div className='absolute  hidden bg-green-normal h-60 w-60 lg:flex items-end justify-center left-[45%] top-[20%] rounded-3xl p-0'>
               
            </div>
            <img
                    src={shortImg}
                    alt=""
                    className='h-[15rem] absolute lg:block hidden  left-[48%] top-[14.5%] scale-y-[1.25] '
                />
            <div className=" col-span-2 flex flex-col gap-12  lg:w-[50%] w-full   rounded-3xl rounded-bl-none p-14  lg:px-20 bg-pink-normal capitalize   ">
                <h1 className='text-3xl '>Now, here’s how you can make sure your child’s in on the next round:</h1>
                <ul className='list-disc text-2xl flex flex-col gap-4 '>
                    <li>Join the waitlist below for the upcoming Kidpreneur Bootcamp (and get your spot saved early!)</li>
                    <li>We’ll send you exclusive access to our Kidpreneur Prep Kit to get your child inspired and ready</li>
                    <li>
                        Be ready to watch your child learn life-changing skills in money management, business, and leadership
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NextRound