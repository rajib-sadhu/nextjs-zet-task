import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
// import './TiltScale.demozap.scss';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Products = () => {

    const [scale, setScale] = useState(1.05);

    const products = [
        {
            id: 1,
            title: 'CREDIT CARDS',
            desc: '100% Contactless Application Process with Instant Approval From Top Banks.',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75',
            bg: '#edffec'
        },
        {
            id: 2,
            title: 'LOANS',
            desc: '100% online process. Instant offers. Affordable Rate of Interest on loans.',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75',
            bg: '#fff1ca'
        },
        {
            id: 3,
            title: 'BUY NOW PAY LATER',
            desc: 'Short-term financing that allows consumers to make purchases and pay for them over time.',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75',
            bg: '#ffe6e6'
        },
        {
            id: 4,
            title: 'SAVING ACCOUNTS',
            desc: 'ZET offers range of savings account that suits your personal needs for the banking.',
            image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75',
            bg: '#ccffe6'
        },
    ]

    return (
        <div className=' bg-no-repeat' style={{ backgroundImage: `url('https://zetapp.in/_next/static/media/decImg.ead9275f.svg')` }} >
            <div className="text-center mb-10" >
                <h1 className="text-2xl font-semibold" >Products on ZET</h1>
                <p className="text-lg" >We are trusted by best brand in the country</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" >
                <div className="grid grid-cols-2 px-40 gap-10 mb-10">
                    {
                        products.map(item => {
                            return (
                                <Tilt key={item.id} scale={scale} transitionSpeed={3000}
                                    tiltAngleXInitial={2}
                                    tiltAngleYInitial={2}
                                >
                                    <div className={`mx-auto flex items-center p-10 border-2 rounded-l product-div`} style={{ backgroundColor: item.bg }} >
                                        <div>
                                            <img className="w-40" src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-semibold">{item.title}</h1>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </Tilt>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;