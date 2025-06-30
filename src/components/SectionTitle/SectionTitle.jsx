import React from 'react'

export default function SectionTitle({ title1, title2, description }) {
    return (
        <>
            <div className='max-w-[1226px] mx-auto text-center mb-10'>
                <h1 className='text-[32px] font-bold text-[#636E72]'><span className='text-[#0984E3]'>{title1}</span> {title2}</h1>
                <p className='text-[#636E72] text-[20px] font-normal'>{description} </p>
            </div>
        </>
    )
}
