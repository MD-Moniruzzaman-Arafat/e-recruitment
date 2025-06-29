import React from 'react'
import Card from '../Card/Card'

export default function BrowseLatestJobs() {
    return (
        <>
            <div className='max-w-[1728px] mx-auto px-2 md:px-20 my-15'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[15px] md:text-[32px] font-bold text-[#636E72]'>Browse Latest <span className='text-[#0984E3]'>Jobs</span></h1>
                    <p className='text-[#636E72] text-[10px] md:text-[20px] font-[400] '>View More</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                    {
                        Array.from({ length: 6 }).map(() => (
                            <Card />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
