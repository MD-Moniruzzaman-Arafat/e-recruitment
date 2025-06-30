import React from 'react'

export default function Summary() {
    return (
        <>
            <div className="card card-dash bg-base-100 my-5">
                <div className='card-body  bg-[#F8F9FC] m-2 md:p-8'>
                    <h1 className='text-[32px] text-[#636E72]'>Summary</h1>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Title:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Jr. Software Engineer For Frontend</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Description:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>As a Jr. Software Engineer at Ha-Meem Group, you will contribute to the development, maintenance, and optimization of software applications that drive operational efficiency. This role is ideal for fresh graduates or early-career professionals eager to grow in a dynamic environment.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Unit Name:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Corporate Office</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Company Name:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Department Name:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Information technology</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Designation Name:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>Junior Software Engineer </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Location:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>387 (South), Tejgaon Industrial Area, Dhaka-1208, Bangladesh</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Salary Range:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>25000 - 30000 Taka</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Flexible Hour:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>8</p>
                        </div>
                        <div className='md:w-[663px]'>
                            <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Post Date:</h2>
                            <p className='text-[#636E72] text-[16px] font-normal'>28 December, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
