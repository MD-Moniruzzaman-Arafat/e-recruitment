import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { GoStopwatch } from 'react-icons/go'
import { IoIosPeople } from 'react-icons/io'
import { IoBag } from 'react-icons/io5'
import { Link } from 'react-router'

export default function Card() {
    return (
        <>
            <div className="card card-dash bg-base-100">
                <div className="card-body bg-[#F8F9FC] p-8 m-2 rounded-lg">
                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Jr. Software Engineer</h2>
                    <p className='text-[12px] text-[#636E72]'>Ha-Meem Group is looking for a Junior Software Engineer to develop, test, and maintain software applications.</p>
                    <p className='text-[12px] text-[#636E72] flex gap-1 items-center'><IoBag /> IT / Software Department</p>
                    <p className='text-[12px] text-[#636E72] flex gap-1 items-center'><FaMapLocationDot />387 (South), Tejgaon Industrial Area Dhaka - 1208, Bangladesh</p>
                    <p className='text-[12px] text-[#636E72] flex gap-1 items-center'><IoIosPeople /> Vacancy 10</p>
                    <p className='text-[12px] text-[#636E72] flex gap-1 items-center'><GoStopwatch /> Deadline 20 January, 2025</p>
                    <div className="card-actions flex items-center">
                        <button className="bg-[#0984E3] rounded-4xl px-8 py-1 text-[12px] text-white">Apply</button>
                        <button className="outline-[#636E72] border rounded-4xl px-5 py-0.5 text-[12px] text-[#636E72]"><Link to={'/job-circular/job-details'}>View More</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
