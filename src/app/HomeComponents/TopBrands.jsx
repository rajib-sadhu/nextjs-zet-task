import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopBrands = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mb-20'>
            <div className="text-center mb-10" >
                <h1 className="text-2xl font-semibold" >Top Brands on ZET</h1>
                <p className="text-lg" >We are trusted by best brand in the country</p>
            </div>
            <div className='px-40 mx-auto' >
                <Carousel responsive={responsive}
                autoPlay
                arrows={false}
                autoPlaySpeed={2000}
                rewindWithAnimation
                rewind
                className=''
                >
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img className='' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75" alt="" />
                    </div>
                    <div className='mx-5 p-1 border'>
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default TopBrands;