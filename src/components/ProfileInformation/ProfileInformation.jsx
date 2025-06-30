import React from 'react'

export default function ProfileInformation() {
    return (
        <>
            <div className="max-w-[1720px] mx-auto md:px-20 card card-dash bg-base-100 my-5">
                <div className='card-body  bg-[#F8F9FC] m-2 md:p-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <h1 className='text-[32px] text-[#0984E3]'>Profile Information</h1>
                        <div className="card-actions flex items-center">
                            <button className="outline-[#0984E3] border rounded-4xl px-5 py-0.5 text-[12px] text-[#0984E3]">Print</button>
                            <button className="bg-[#0984E3] rounded-4xl px-8 py-1 text-[12px] text-white">Download</button>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-5 justify-between'>
                        <div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Name:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Md Rakibul Alam</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Date Of Birth:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Father Name:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Mother Name:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Phone:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Email:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Present Address:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Permanent Address:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Marital Status:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Blood Group:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Nationality:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Religion:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">LinkedIn:</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                                <div className='md:w-[500px]'>
                                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3]">Github</h2>
                                    <p className='text-[#636E72] text-[16px] font-normal'>Ha-Meem Group -  Head Office</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className=" rounded">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className='w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3] mt-10">Job Experience:</h2>
                    <div className="overflow-x-auto  border border-base-content/5 bg-base-100">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#0984E3] text-white'>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Department Name</th>
                                    <th>Designation</th>
                                    <th>Joining Date</th>
                                    <th>Release Date</th>
                                    <th>Total Duration</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody className='text-[#636E72]'>
                                {/* row 1 */}
                                <tr>
                                    <td>Company Name</td>
                                    <td>Department Name</td>
                                    <td>Designation</td>
                                    <td>Joining Date</td>
                                    <td>Release Date</td>
                                    <td>Total Duration</td>
                                    <td>Address</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Company Name</td>
                                    <td>Department Name</td>
                                    <td>Designation</td>
                                    <td>Joining Date</td>
                                    <td>Release Date</td>
                                    <td>Total Duration</td>
                                    <td>Address</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="card-title text-[20px] font-[600] text-[#0984E3] mt-10">Academic Qualification:</h2>
                    <div className="overflow-x-auto border border-base-content/5 bg-base-100">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#0984E3] text-white'>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Department Name</th>
                                    <th>Designation</th>
                                    <th>Joining Date</th>
                                    <th>Release Date</th>
                                    <th>Total Duration</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody className='text-[#636E72]'>
                                {/* row 1 */}
                                <tr>
                                    <td>Company Name</td>
                                    <td>Department Name</td>
                                    <td>Designation</td>
                                    <td>Joining Date</td>
                                    <td>Release Date</td>
                                    <td>Total Duration</td>
                                    <td>Address</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Company Name</td>
                                    <td>Department Name</td>
                                    <td>Designation</td>
                                    <td>Joining Date</td>
                                    <td>Release Date</td>
                                    <td>Total Duration</td>
                                    <td>Address</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
