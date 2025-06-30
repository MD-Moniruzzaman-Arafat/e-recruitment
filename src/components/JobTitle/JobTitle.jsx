import React from 'react'
import { ImShare } from 'react-icons/im'

export default function JobTitle() {
    return (
        <>
            <div className="card card-dash bg-base-100 my-5">
                <div className="card-body bg-[#F8F9FC] md:p-8 m-2 rounded-lg md:flex-row items-start justify-between">
                    <div>
                        <h2 className="card-title text-[32px] font-[600] text-[#0984E3]">Jr. Software Engineer</h2>
                        <p className='text-[#636E72] text-[12px] font-normal'>At Ha-meem Group - Head Office</p>
                        <p className='text-[#636E72] text-[16px] font-normal'>Application Deadline: <span className='text-[#FF3B30]'>20 January, 2025</span> </p>
                    </div>
                    <div className='flex items-center gap-3'>

                        <button className="bg-[#636E72] rounded-4xl px-5 py-1 text-[12px] text-white"><ImShare /></button>
                        <button className="bg-[#0984E3] rounded-4xl px-8 py-1 text-[12px] text-white">Apply</button>

                    </div>
                </div>
            </div>
        </>
    )
}
