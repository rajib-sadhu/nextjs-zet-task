

import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();

const WhyChooseUs = () => {
    return (
        <div className="grid grid-cols-3 my-20 px-40" >
            <div className="row-span-3 py-20 bg-no-repeat" style={{ backgroundImage: "url('https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbgImg.0b567eb7.png&w=256&q=75')" }} >
                <div className="text-center">
                    <div>
                        <h1>Why Choose Us</h1>
                        <p>Why we are loved by our customers</p>
                    </div>
                    <img className="mx-auto" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=384&q=75" alt="" />
                </div>
            </div>
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg" alt="" />
                    <h1 className="text-lg font-semibold">Zero Investment</h1>
                    <p>Build your business without any investment</p>
                </div>
            </div>
            
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg" alt="" />
                    <h1 className="text-lg font-semibold">Quick Payout</h1>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
            </div>
            
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg" alt="" />
                    <h1 className="text-lg font-semibold">Limitless Earnings</h1>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
            </div>
            
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg" alt="" />
                    <h1 className="text-lg font-semibold">Training & Upskilling</h1>
                    <p>Get trained by finance and sales experts</p>
                </div>
            </div>
            
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg" alt="" />
                    <h1 className="text-lg font-semibold">Customer Support</h1>
                    <p>Access tools and content to build relationship</p>
                </div>
            </div>
            
            <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img className="w-20 mb-5" src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg" alt="" />
                    <h1 className="text-lg font-semibold">Financial Products</h1>
                    <p>Trustworthy & high-rated products & categories</p>
                </div>
            </div>
            
        </div>
    );
};

export default WhyChooseUs;