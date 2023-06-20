'use client';
import Image from 'next/image'
import Banner from './HomeComponents/Banner';
import TopBrands from './HomeComponents/TopBrands';
import Products from './HomeComponents/Products';
import ZetEffect from './HomeComponents/ZetEffect';
import WhyChooseUs from './HomeComponents/WhyChooseUs';
import StartEarning from './HomeComponents/StartEarning';

const Home = () => {
  return (
    <main className="">
      <Banner/>
      <TopBrands/>
      <Products/>
      <ZetEffect/>
      <WhyChooseUs/>
      <StartEarning/>
    </main>
  )
}

export default Home;