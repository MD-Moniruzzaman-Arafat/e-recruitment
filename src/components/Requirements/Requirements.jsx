import React from 'react'

export default function Requirements() {
    return (
        <>
            <div className="card card-dash bg-base-100 my-5">
                <div className='card-body  bg-[#F8F9FC] m-2 md:p-8'>
                    <h1 className='text-[32px] text-[#636E72]'>Requirements</h1>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Education Level:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Bachelor Of Science (BSc) in Computer Science & Engineering, Bachelor of Science (BSC In Computer)</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Experience Required:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>2 to 3 years</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Skills Required:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Web Development - Js, NodeJs, Talwind CSS, HTML, CSS, ReactJs Expertise</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Additional Requirements:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Age 20-28</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
