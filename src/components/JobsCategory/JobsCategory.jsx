import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import image1 from '../../assets/Vector.svg'
import image2 from '../../assets/Vector (3).svg'
import image3 from '../../assets/Vector (9).svg'
import image4 from '../../assets/Vector (1).svg'
import image5 from '../../assets/Vector (4).svg'
import image6 from '../../assets/Vector (8).svg'
import image7 from '../../assets/Vector (2).svg'
import image8 from '../../assets/Vector (5).svg'
import image9 from '../../assets/Vector (7).svg'




export default function JobsCategory() {
    return (
        <>
            <div className='max-w-[1728px] mx-auto px-2 md:px-20 my-15'>
                <div className='max-w-[1226px] mx-auto text-center mb-10'>
                    <h1 className='text-[32px] font-bold text-[#636E72]'><span className='text-[#0984E3]'>Jobs</span> Category</h1>
                    <p className='text-[#636E72] text-[20px] font-normal'>Discover diverse career opportunities across departments like IT, Engineering, Marketing, HR, and more at Ha-Meem Group. Find the perfect fit for your skills and ambitions! </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <CategoryCard image={image1} title={'Human Resources (HR)'} description={'Managing Employee'} />
                    <CategoryCard image={image2} title={'Finance & Accounting'} description={'Managing and Planning Finance'} />
                    <CategoryCard image={image3} title={'Information Technology (IT)'} description={'Managing Information and Tech Support'} />
                    <CategoryCard image={image4} title={'Sales & Marketing'} description={'Managing Sales and Growth'} />
                    <CategoryCard image={image5} title={'Operations'} description={'Optimizing Efficiency'} />
                    <CategoryCard image={image6} title={'Product Management'} description={'Developing Products and Management '} />
                    <CategoryCard image={image7} title={'Research & Development (R&D)'} description={'Innovating and Development'} />
                    <CategoryCard image={image8} title={'Administration'} description={'Supporting Operations'} />
                    <CategoryCard image={image9} title={'Business Development'} description={'Building Partnerships'} />
                </div>
            </div>
        </>
    )
}
