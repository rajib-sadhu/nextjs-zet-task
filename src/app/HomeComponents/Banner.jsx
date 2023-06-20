
const Banner = () => {
    return (
        <div className="min-h-[32rem] grid place-content-center" >
            <div className="flex items-center gap-10 bg-sky-100 px-20 h-[22rem]">
                <div className="flex flex-col gap-3 justify-center">
                    <h1 className="text-4xl font-semibold" >Become a Financial Advisor and <br /> <span className="text-blue-700" >Earn Rs.1 Lakh/Month</span></h1>
                    <p className="text-xl">No investment required</p>
                    <button>
                        <img src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt="" />
                    </button>
                </div>
                <div className="relative w-[25rem]">

                    <img className="w-[26rem] absolute -top-52 right-0" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;