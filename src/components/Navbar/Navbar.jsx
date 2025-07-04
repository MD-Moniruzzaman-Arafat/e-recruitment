import { Link, useMatch } from 'react-router';
import logo from '../../assets/logo.jpg';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
    const jobCircular = useMatch('/job-circular')
    const appliedJobs = useMatch('/applied-jobs')
    const jobDetailsOne = useMatch('/job-circular/job-details')
    const jobDetailsTwo = useMatch('/applied-jobs/job-details')
    const profile = useMatch('/profile')




    return (
        <>
            <div className='md:fixed top-0 left-0 right-0 z-50 bg-transparent '>
                <div className='max-w-[1728px] mx-auto flex flex-col md:flex-row justify-between items-center p-4 hover:bg-[#8DA0EF]'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="Logo" className='w-[60px] h-[43px]' />
                        <div className='md:text-white'>
                            <h1 className='text-[20px] md:text-[24px] font-bold'>E-Recruitment</h1>
                            <p className='text-[10px] md:text-[12px] font-medium'>Streamlining Talent Acquisition with Technology</p>
                        </div>
                    </div>
                    <div>
                        <nav className='md:p-4 mt-2 md:mt-0'>
                            <ul className='flex flex-wrap md:flex-nowrap md:text-white'>
                                <li className='text-[10px] md:text-[16px] font-medium  cursor-pointer px-3'><Link to={'job-circular'}>Job Circular</Link></li>
                                {
                                    jobCircular || appliedJobs || jobDetailsOne || jobDetailsTwo || profile ? (
                                        <>
                                            <li className='text-[10px] md:text-[16px] font-medium border-r-2 cursor-pointer px-3'><Link to={'applied-jobs'}>Applied Jobs</Link></li>
                                            <li className='text-[16px] md:text-[26px] font-medium cursor-pointer px-3'><Link to={'profile'}><CgProfile /></Link></li>
                                        </>
                                    ) : (<>
                                        <li className='text-[10px] md:text-[16px] font-medium border-r-2 cursor-pointer px-3'>Start up</li>
                                        <li className='text-[10px] md:text-[16px] font-medium  cursor-pointer px-3'>Sign In</li>
                                    </>
                                    )
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
