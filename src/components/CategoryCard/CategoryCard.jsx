import { Card } from 'antd'
import React from 'react'

export default function CategoryCard({ image, title, description }) {
    return (
        <>
            <div className="card card-dash bg-[#FFF] shadow-2xs">
                <div className="card-body flex-row gap-5 items-center p-5 m-2 rounded-lg">
                    <div>
                        <img src={image} alt="" className='bg-[#F8F9FC] p-3  rounded-full' />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#636E72] font-[500]'>{title}</h1>
                        <p className='text-[14px] font-normal'>{description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
