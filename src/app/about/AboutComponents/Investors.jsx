import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Investors = () => {

    const [scale, setScale] = useState(1.05);

    const images = [
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=640&q=75'
    ]

    const invest = [
        {
            id: 1,
            name: 'Kunal Shah',
            company: 'Founder, CRED',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv1.1c87bc0c.png&w=640&q=75'
        },
        {
            id: 2,
            name: 'Gaurav Munjal',
            company: 'Founder, UNACADEMY',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=640&q=75'
        },
        {
            id: 3,
            name: 'Aakrit Vaish',
            company: 'Co-Founder, HAPTIK',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv3.1779e0d4.png&w=640&q=75'
        },
        {
            id: 4,
            name: 'Harshil Mathur',
            company: 'Founder, RAZORPAY',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv4.b9325fa0.png&w=640&q=75'
        },
        {
            id: 5,
            name: 'Vidit Aatrey',
            company: 'Founder & CEO, MEESHO',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv5.2e962217.png&w=640&q=75'
        },
        {
            id: 6,
            name: 'Amrish Rau',
            company: 'CEO, PINELABS',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv6.7a958b9d.png&w=640&q=75'
        },
        {
            id: 7,
            name: 'Lalit Keshre',
            company: 'CEO, GROWW',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=640&q=75'
        },
        {
            id: 8,
            name: 'Gokul Rajaram',
            company: 'Product, DOORDASH',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=640&q=75'
        },
    ]

    return (
        <div className="mx-20 py-20">
            <h1 className="text-4xl font-bold mb-10" >Meet the Investors</h1>
            <div data-aos="fade-up"  data-aos-duration="1500" >
                <div className="grid grid-cols-4 px-20 mb-16 gap-10">
                    {
                        images.map((item, i) => <img key={i} src={item} className='hover:scale-105 duration-200' />)

                    }
                </div>
            </div>
            <div className="grid grid-cols-4 gap-20 px-40 pt-10">
                {
                    invest.map(item => <div key={item.id} >
                        <Tilt scale={scale} transitionSpeed={2500} >
                            <img src={item.image} alt="" />
                            <div className="px-3 pt-2">
                                <h4>{item.name}</h4>
                                <p className="text-slate-500" >{item.company}</p>
                            </div>
                        </Tilt>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Investors;