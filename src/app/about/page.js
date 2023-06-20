'use client';
import Banner from "./AboutComponents/Banner";
import Founders from "./AboutComponents/Founders";
import GotFeatured from "./AboutComponents/GotFeatured";
import HowWeEvolved from "./AboutComponents/HowWeEvolved";
import Investors from "./AboutComponents/Investors";
import LastImage from "./AboutComponents/LastImage";


const AboutPage = () => {
    return (
        <div>
           <Banner/>
           <HowWeEvolved/>
           <GotFeatured/>
           <Investors/>
           <Founders/>
           <LastImage/>
        </div>
    );
};

export default AboutPage;