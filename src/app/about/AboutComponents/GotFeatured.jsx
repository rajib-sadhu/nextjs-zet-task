

const GotFeatured = () => {

    const images = [
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=640&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=640&q=75'
    ]

    return (
        <div className="mx-20 mb-20">
            <h1 className="text-4xl font-bold mb-10" >Got Featured</h1>
            <div className="grid grid-cols-5 gap-16 px-20">
                {
                    images.map((item, i) => <img key={i} src={item} alt="" />)
                }
            </div>
        </div>
    );
};

export default GotFeatured;