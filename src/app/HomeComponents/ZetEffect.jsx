
const ZetEffect = () => {
    return (
        <div className="overflow-hidden relative h-[47rem] my-20" >
            <div className="bg-[#145CC5] h-[34rem] -rotate-6 w-[110rem] absolute top-24 -left-10 ">
                <div className="ps-[15vw] pe-[22vw] py-[12vh] h-full">
                    <div className="h-full bg-contain bg-no-repeat bg-[#417FDA]" >
                        <img className="h-full mix-blend-overlay" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75)" alt="" />
                        <div className="relative" >
                            <div className="text-white absolute -top-56 right-10 rotate-6 space-y-6" >
                                <h1 className="text-2xl font-semibold">THE ZET EFFECT</h1>
                                <p className="text-3xl font-medium w-[38rem]" >More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
                                <progress className="progress w-56 progress-info" value={75} max={100} ></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZetEffect;