import React from 'react'
import applicationProcessImage from '../../assets/application_process.png'

export default function ApplicationProcess() {
    return (
        <>
            <div className='max-w-[1728px] mx-auto flex flex-col md:flex-row justify-between px-2 md:px-20 items-center my-15'>
                <div className='max-w-[750px]'>
                    <img src={applicationProcessImage} alt="" />
                </div>
                <div className='max-w-[750px] text-gray-700 p-4'>
                    <h1 className='text-[40px] font-bold text-[#0984E3]'>Application Process</h1>
                    <p className='text-[#636E72] text-[20px] font-[400]'>Join Ha-Meem Group with ease through our simple, step-by-step application process designed to guide you toward a rewarding career.</p>
                    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical mt-5">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-7 text-[#0984E3]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-5">
                                <div className="text-[24px] font-bold text-[#0984E3] pl-5">Create an Account</div>
                                <p className='text-[20px] font-normal text-[#636E72] pl-5'>Register on the eRecruitment portal to create your profile and access job listings.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-7 text-[#0984E3]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-5">
                                <div className="text-[24px] font-bold text-[#0984E3] pl-5">Explore Openings</div>
                                <p className='text-[20px] font-normal text-[#636E72] pl-5'>Browse available job positions and select the one that matches your skills and interests.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-7 text-[#0984E3]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-5">
                                <div className="text-[24px] font-bold text-[#0984E3] pl-5">Submit Application</div>
                                <p className='text-[20px] font-normal text-[#636E72] pl-5'>Complete the application form and upload your resume/CV along with any necessary documents.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-7 text-[#0984E3]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-5">
                                <div className="text-[24px] font-bold text-[#0984E3] pl-5">Application Review & Interview</div>
                                <p className='text-[20px] font-normal text-[#636E72] pl-5'>Your application will be reviewed, and if shortlisted, you'll be invited for an interview. Successful candidates will receive an offer.</p>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
