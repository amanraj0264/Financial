import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero3 from '../Image/hero3.png';


function Saving() {
    return (

        useEffect(() => {
            AOS.init({
                duration: 1000, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
            });
        }, []),

        <div className='relative'>

            <div className='blobs1'data-aos="fade-down"></div>

            <div className='blobs2' data-aos="fade-down"></div>
            <div className=' max-w-[1200px] mx-auto md:mt-10 flex flex-col md:flex-row justify-between items-center'>

                <div className='basis-[40%]' data-aos="fade-right">
                    <img src={hero3} alt=''></img>
                </div>


                <div className='basis-[50%] md:text-start text-center  py-10 z-50 px-3'data-aos="fade-left" >
                   
                    <h4 className='font-bold text-color-secondary mb-4'>Saving Money</h4>
                    <h1 className='tital'>Best Financing App To Save Your Money</h1>
                    <p className='text-lg mb-6 md:px-0 px-4'> Best financing app ever in the world .Easy to use and very user friendly fro mobile banking . You can control your card easily and send money some one just one click.</p>
                    <button class="btn">Read More</button>
                </div>

            </div>
        </div>
    )
}

export { Saving };





function Workstep() {
    return (
        <div className='bg-color-primary-light py-10'data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='max-w-[1200px] mx-auto text-center md:w-1/2 '>
                <h4 className='text-color-secondary font-bold'>How Its Works</h4>
                <h1 className='tital mt-4'>Grow Up Your Saving </h1>
            </div>
        </div>

    )
}

export { Workstep };





function Workcard(props) {
    return (
        <div>
            <div className='text-center cursor-pointer md:py-0 py-5 px-3'>
                <div className='relative  bg-color-primary-dark inline-block py-6 px-6 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200 '>
                    <p className='text-5xl '>{props.stepnumber}</p>
                </div>

                <h1 className='text-xl font-bold  py-3'>{props.workcardtital}</h1>
                <p className='leading-relaxed py-1 md:px-0 px-6'>{props.workcardpara}</p>

            </div>
        </div>
    )



}

export {Workcard};


