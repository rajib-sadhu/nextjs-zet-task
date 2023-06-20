import Tilt from 'react-parallax-tilt';
import { AiFillLinkedin } from 'react-icons/ai'
import React, { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Founders = () => {

    const [scale, setScale] = useState(1.05);

    return (
        <div className="my-20 px-40">
            <div className="text-center">
                <h3 className="text-4xl font-bold" >Meet our Founders</h3>
                <p className="text-2xl font-light mt-3" >Few words from founders desk</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" >
                <div className='py-16 flex justify-around'>
                    <Tilt scale={scale} transitionSpeed={2500} >
                        <div className="w-[20rem]">
                            <img className="" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75" alt="" />
                            <div className="flex justify-between p-4" >
                                <div className='text-xl'>
                                    <h2>Manish Shara</h2>
                                    <h2>Co- Founder & CEO</h2>
                                </div>
                                <div className='grid place-content-center' >
                                    <AiFillLinkedin className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt scale={scale} transitionSpeed={2500} >
                        <div className="w-[20rem]">
                            <img className="" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=640&q=75" alt="" />
                            <div className="flex justify-between p-4" >
                                <div className='text-xl'>
                                    <h2>Yash Desai</h2>
                                    <h2>Co- Founder</h2>
                                </div>
                                <div className='grid place-content-center' >
                                    <AiFillLinkedin className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt scale={scale} transitionSpeed={2500} >
                        <div className="w-[20rem]">
                            <img className="" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=640&q=75" alt="" />
                            <div className="flex justify-between p-4" >
                                <div className='text-xl'>
                                    <h2>Lokesh Agarwal</h2>
                                    <h2>CTO</h2>
                                </div>
                                <div className='grid place-content-center' >
                                    <AiFillLinkedin className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Founders;