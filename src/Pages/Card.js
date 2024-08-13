
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Card() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, [])

    return (
        <div className='bg-color-primary-light max-w-[1200px] mx-auto py-10' >
            <div className='text-center mb-16' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <h4 className='text-color-secondary font-bold '>Our Feature </h4>
                <h1 className='tital mt-4'>Easy To Manage Your All <br></br> Payements By Our Apps</h1>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 text-center gap-12 lg:grap-8 px-6'>

                {/* card 1 */}
                <div className=''data-aos="fade-right">
                <Items cardtitle="Our Feature" cardpara="We use an application designed a testing gnose to keep away."></Items >
                </div>
                

                {/* card 2 */}
                <div className='' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <Items cardtitle="Finance Snapshot" cardpara="We use an application designed a testing gnose to keep away."></Items>
                </div>


                {/* card 3 */}
                <div className='' data-aos="fade-left">
                <Items cardtitle="Support 24/24" cardpara="We use an application designed a testing gnose to keep away."></Items>
                </div>
                

            </div>

        </div>
    )
}

export { Card };




function Items(props) {


    return (
        <div>
            <div className='border-2 border-solid border-color-gray py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>
                <div>
                    <div className='bg-color-secondary rounded-2xl inline-block p-5 px-6'>
                        <CalendarMonthIcon></CalendarMonthIcon>
                    </div>
                    <h4 className='text-xl font-bold py-4'>{props.cardtitle}</h4>
                    <p className=''>{props.cardpara}</p>
                </div>
            </div>
        </div>
    )
}







