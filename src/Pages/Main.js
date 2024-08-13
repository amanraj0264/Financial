import React, { useEffect } from 'react'
import img from '../Image/hero4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, [])

  return (
    <div className='relative'>

      <div className='blobs1'></div>

      <div className='blobs2'></div>

      <div className='max-w-[1200px]  md:py-5 py-10 px-6   text-center md:text-start mx-auto flex flex-col md:flex-row   items-center justify-between ' >

        <div className='basis-[40%] tracking-wider' data-aos="fade-right">
          <h1 className='tital'>Awesome App for Your Financial.</h1>
          <p className='text-[17px] mb-6'> This should be used to tell a story and let yours users know a tittle more about app and it's use, How can benefit them.</p>
          <button class="btn">Download App</button>
        </div>


        <div className='basis-[40%]  lg:py-0 py-4 'data-aos="fade-left">
          <img src={img} className=' py-10'></img>
        </div>

      </div>
    </div>

  )
}

