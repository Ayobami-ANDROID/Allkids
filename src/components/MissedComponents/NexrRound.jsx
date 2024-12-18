import React from 'react'

const NextRound = () => {
    return (
        <div className='grid grid-cols-3 bg-[#fff]'>
            <div className=" col-span-2   rounded-3xl rounded-bl-none p-14 py-4 lg:px-20 bg-pink-normal capitalize   ">
                <h1 className='text-3xl'>Now, here’s how you can make sure your child’s in on the next round:</h1>
                <ul className='list-disc'>
                    <li>Join the waitlist below for the upcoming Kidpreneur Bootcamp (and get your spot saved early!)</li>
                    <li>We’ll send you exclusive access to our Kidpreneur Prep Kit to get your child inspired and ready</li>
                    <li>
                        Be ready to watch your child learn life-changing skills in money management, business, and leadership
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <button className="px-10 py-1.5 rounded-full bg-yellow-normal self-center text-black text-2xl">Join  Now</button>
            </div>
        </div>
    )
}

export default NextRound