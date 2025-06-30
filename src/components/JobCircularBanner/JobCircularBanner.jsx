import React from 'react'
import bannerBg from '../../assets/JobCircular_bannerBg.png'

export default function JobCircularBanner() {
    return (
        <>
            <div className='max-w-[1728px] h-[449px] mx-auto px-20 flex flex-col md:flex-row justify-between items-center' style={{ backgroundImage: ` url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className=' text-white text-center max-w-[887px] mx-auto'>
                    <h1 className='text-[40px] font-bold'>Job Circular</h1>
                    <p className='text-[20px] font-normal my-4'>Explore Exciting Career Opportunities with Us – Join a Team That Values Innovation, Growth, and Excellence, and Take the Next Step in Shaping a Brighter Future Together!</p>
                </div>
            </div >
        </>
    )
}
