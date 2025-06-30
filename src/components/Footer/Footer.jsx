import React from 'react'
import footerBg from '../../assets/footer_bg.png'
import footerLogo from '../../assets/footerLogo.png'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsFillThreadsFill } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <footer className="max-w-[1720px] mx-auto" style={{ backgroundImage: `url(${footerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <div className='flex flex-col md:flex-row justify-between items-center p-10 gap-5'>
                    <div className='flex flex-col md:flex-row gap-5 items-center text-white'>
                        <img src={footerLogo} alt="" className='w-[59px] h-[60px] border-4 rounded-full' />
                        <div>
                            <h1 className='text-[32px] font-bold'>E-Recruitment</h1>
                            <p className='text-[16px] font-medium'>Streamlining Talent Acquisition with Technology</p>
                        </div>
                    </div>
                    <div className='text-white flex items-center gap-5 text-[35px]'>
                        <FaSquareXTwitter />
                        <BsFillThreadsFill />
                        <AiFillInstagram />
                        <FaFacebookSquare />
                    </div>
                </div>

                <div className='footer grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-20 sm:footer-horizontal text-neutral-content p-10'>
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <a className="link link-hover">Ha-Meem Group is a leading textile and garment manufacturer in Bangladesh, supplying high-quality apparel to renowned global brands. With a fully integrated supply chain and cutting-edge facilities, we ensure excellence at every stage of production. Beyond textiles, we are actively involved in media, real estate, and tea plantations. Committed to innovation, sustainability, and community development, Ha-Meem Group is shaping the future of Bangladesh's industrial growth.</a>

                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <div className='flex flex-col md:flex-row gap-20'>
                            <div>
                                <h3 className='text-[20px] font-bold mb-2'>Ha-Meem Group - Head Office</h3>
                                <p className="link link-hover ">387 (South), Tejgaon Industrial Area, Dhaka-1208, Bangladesh</p>
                                <p className="link link-hover ">Phone: +880-2-8170592, +880-2-8170592</p>
                                <p className="link link-hover ">Fax: +880-2-8170592</p>
                                <h3 className='text-[20px] font-extrabold mt-3 mb-2'>Ha-Meem Group - Tongi Zone</h3>
                                <p className="link link-hover ">70 Nishat Nagar, Tongi</p>
                                <p className="link link-hover ">Phone: +088-09666-319764</p>
                                <p className="link link-hover ">Fax: +880-09666-319764</p>
                            </div>
                            <div>
                                <h3 className='text-[20px] font-bold mb-2'>Artistic Design Ltd (HA-MEEM Group)</h3>
                                <p className="link link-hover ">Bangla Bazar, Narsinghapur Kashimpur Road, Dhaka 1341</p>
                                <p className="link link-hover ">Phone: +880-2-8170592, +880-2-8170592</p>
                                <p className="link link-hover ">Fax: +880-2-8170592</p>
                                <h3 className='text-[20px] font-extrabold mt-3 mb-2'>That's It Knit Ltd. (Ha- Meem Group)</h3>
                                <p className="link link-hover ">Zirani Bazar, Ashulia, Savar, Dhaka</p>
                                <p className="link link-hover ">Phone: +088-09666-319764</p>
                                <p className="link link-hover ">Fax: +880-09666-319764</p>
                            </div>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Useful Links</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">FAQS</a>
                        <a className="link link-hover">Term & Conditions</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Help Center</a>
                    </nav>
                </div>
            </footer>
            <footer className="footer max-w-[1720px] mx-auto grid-cols-1 md:grid-cols-3 sm:footer-horizontal footer-center bg-[#0984E3] py-2 text-white">
                <p >Design and Develop By,Ha-Meem Group IT Department</p>
                <p>© 2024 Ha-Meem Group. All rights reserved</p>
                <p>version 1.0.0</p>
            </footer>
        </>
    )
}
