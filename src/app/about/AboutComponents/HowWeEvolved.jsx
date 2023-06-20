import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

const HowWeEvolved = () => {



    return (
        <div className="my-20 px-40">
            <h3 className="text-4xl font-bold text-center mb-10" >How we evolved over the years</h3>
            <div>
                <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=1920&q=100" alt="" />
            </div>
        </div>
    );
};

export default HowWeEvolved;