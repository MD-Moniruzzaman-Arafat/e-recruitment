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
import SectionTitle from '../SectionTitle/SectionTitle'




export default function JobsCategory() {
    return (
        <>
            <div className='max-w-[1728px] mx-auto px-2 md:px-20 my-15'>
                <SectionTitle title1={'Jobs'} title2={'Category'} description={'Discover diverse career opportunities across departments like IT, Engineering, Marketing, HR, and more at Ha-Meem Group. Find the perfect fit for your skills and ambitions!'} />
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
