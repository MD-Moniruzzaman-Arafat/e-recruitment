import React from 'react'
import AskQuestionImage from '../../assets/question.png'

export default function AskQuestions() {
    return (
        <>
            <div className='max-w-[1720px] mx-auto px-2 md:px-20 my-15'>
                <div className="card card-dash bg-base-100">
                    <div className="card-body bg-[#F8F9FC] p-8 m-2 rounded-lg md:flex-row justify-between items-center">
                        <div className='max-w-[750px]'>
                            <img src={AskQuestionImage} alt="" />
                        </div>
                        <div className='max-w-[450px]'>
                            <h1 className='text-[40px] text-[#636E72] font-bold'>Get In Touch with Us with any <span className='text-[#0984E3]'>Questions</span></h1>
                            <p className='text-[20px] font-normal text-[#636E72]'>Reach Out with Any Questions or Concerns</p>

                            <form action="" className='flex flex-col gap-5'>
                                <input type="text" placeholder="Your Name" className="input input-sm" />
                                <input type="email" placeholder="Your Email" className="input input-sm" />
                                <textarea className="textarea" placeholder="Message"></textarea>
                                <button className="bg-[#0984E3] rounded-4xl px-8 py-1 w-30 text-[12px] text-white">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
