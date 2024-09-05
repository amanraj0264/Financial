import user1 from '../Image/user1.jpg';
import user2 from '../Image/user2.jpg';
import user3 from '../Image/user3.jpg';
import user4 from '../Image/user4.jpg';
import user5 from '../Image/user5.jpg';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonials() {
  return (

    useEffect(() => {
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, []),
    
    <div data-aos="zoom-in">
        <div className='max-w-[1200px] mx-auto text-center  md:w-1/2 py-10'>
                <h4 className='text-color-secondary font-bold'>User Review</h4>
                <h1 className='tital mt-4 px-6'>What Clients Say About Our App After Use It</h1>
            </div>


            {/* Review  */}

            <div className='mt-1'> 
                <div className='flex items-center justify-center flex-wrap '>
                    <img className='h-20 w-20 rounded-full p-1 m-8 cursor-pointer md:border-color-secondary md:border-sold md:border-2' src={user1}></img>
                    <img className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer' src={user2}></img>
                    <img className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer' src={user3}></img>
                    <img className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer' src={user4}></img>
                    <img className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer' src={user5}></img>
                </div>

                <div className='flex justify-center py-5'>
                    <div className='text-center md:w-1/2'>
                        <p className='text-xl mb-3 px-6'>"This Shoild be used to tell a story and include any testimonials you might have about yours product or service for your clients"!</p>
                        <h4 className='text-color-secondary py-1'>Marking nesus</h4>
                        <p className='font-bold'>IOS Developer</p>
                    </div>
                </div>
            </div>
    </div>  
  )
}

export {Testimonials};
