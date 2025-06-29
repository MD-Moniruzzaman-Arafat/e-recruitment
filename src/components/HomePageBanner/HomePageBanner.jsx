import React from 'react'
import bannerBg from '../../assets/banner_bg.png'
import bannerImage from '../../assets/banner_image.png'

export default function HomePageBanner() {
    return (
        <>
            <div className='max-w-[1728px] h-[712px] mx-auto px-20 flex flex-col md:flex-row justify-between items-center' style={{ backgroundImage: ` url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className=' text-white max-w-[750px]'>
                    <h1 className='text-[40px] font-bold'>Welcome To</h1>
                    <h1 className='text-[40px] font-bold'>Ha-meem Group</h1>
                    <p className='text-[16px] font-normal max-w-[580px] my-4'>Designed to streamline our hiring process, this platform enables you to explore job openings, submit applications effortlessly, and track your progress—all in one place. Join us in shaping the future with innovation, passion, and excellence.</p>
                    <input type="text" name="search" id="Search" placeholder='Job Search ...' className='bg-white text-[14px] p-2 w-[300px] text-gray-700 mb-4' />
                    <p>Jobs Category : <span className='border-2 px-4 py-1 rounded-4xl'>IT</span> <span className='border-2 px-4 py-1 rounded-4xl'>HR</span> <span className='border-2 px-4 py-1 rounded-4xl'>...</span></p>
                </div>
                <div className='max-w-[750px]'>
                    <img src={bannerImage} alt="w-full" />
                </div>
            </div >
        </>
    )
}
