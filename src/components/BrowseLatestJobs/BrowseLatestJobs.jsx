import React from 'react'
import Card from '../Card/Card'
import { useMatch } from 'react-router'

export default function BrowseLatestJobs({ length }) {
    const pathName = useMatch('/job-circular')
    return (
        <>
            <div className='max-w-[1728px] mx-auto px-2 md:px-20 my-15'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[15px] md:text-[32px] font-bold text-[#636E72]'>Browse Latest <span className='text-[#0984E3]'>Jobs</span></h1>
                    {
                        pathName ? (<label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="grow" placeholder="Job Search ..." />
                        </label>) : <p className='text-[#636E72] text-[10px] md:text-[20px] font-[400] '>View More</p>
                    }

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>

                    {
                        length.map(() => (
                            <Card />
                        ))
                    }
                </div>
                <div>
                    {pathName && <div className="card-actions flex items-center justify-center md:justify-end">
                        <button className="outline-[#636E72] border rounded-4xl px-5 py-0.5 text-[12px] text-[#636E72]">Previous</button>
                        <button className="outline-[#636E72] border rounded-4xl px-5 py-0.5 text-[12px] text-[#636E72]">1</button>
                        <button className="bg-[#0984E3] rounded-4xl px-8 py-1 text-[12px] text-white">Next</button>
                    </div>}
                </div>
            </div>
        </>
    )
}
