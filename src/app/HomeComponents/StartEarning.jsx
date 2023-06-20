

const StartEarning = () => {
    return (
        <div className="overflow-hidden relative h-[72.4rem] mt-20" >
            <div className="bg-[#0A2540] h-[50rem] -rotate-12 w-[115rem] absolute top-44 -left-28 ">
                <div className="text-white rotate-12 grid place-content-center">
                    <div>
                        <div className="ms-16 mt-20 text-center" >
                            <h1 className="text-xl font-bold" >Start Earning in 3 Easy Steps</h1>
                            <p>We have create the app the make your earning easy</p>
                        </div>
                        <div className="flex justify-between items-center gap-60 mt-16">
                            <div className="space-y-4">
                                <div className="step-badge">Step 3</div>
                                <h1 className="text-3xl text-[#9ecfff]">Download the App and Sign up as a ZET agent</h1>
                                <progress className="progress bg-white w-56 progress-info" value={75} max={100} ></progress>
                                <img className="h-10" src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt="" />
                            </div>
                            <div className="mix-blend-screen"> 
                                {/* <video className="w-52 ms-auto" autoPlay >
                                    <source src="https://zetapp.in/static/images/Step3.mp4" type="video/mp4" />
                                </video> */}
                                <video  autoplay={true} loop={true} src="https://zetapp.in/static/images/Step3.mp4" type="video/mp4" className="w-56 mix-blend-color"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartEarning;