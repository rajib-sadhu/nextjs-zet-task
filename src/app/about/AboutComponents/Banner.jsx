

const Banner = () => {
    return (
        <div className="h-screen bg-cover grid place-content-center" style={{ backgroundImage: "url('https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100')" }} >
            <div className="text-white text-center w-[35rem] space-y-3">
                <h2 className="text-4xl font-semibold ">OUR MISSION</h2>
                <p>
                    Enabling financial inclusion for the next billion Indians
                    & making their Zindagi Set. Building a platform that enables you to sell
                    financial products & earn up to Rs. 1 lakh every month.
                </p>
                <h4 className="font-semibold" >EARN BETTER. LIVE BETTER.</h4>
            </div>
        </div>
    );
};

export default Banner;