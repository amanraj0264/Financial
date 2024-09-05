import './App.css';
import Blog from './Pages/Blog';
import { Card } from './Pages/Card';
import Header from './Pages/Header';
import Main from './Pages/Main';
// import { Pricing,PricingCard } from './Pages/Pricing';
import { PricingCard } from './Pages/Pricing';
import { Pricing } from './Pages/Pricing';
import { Saving, Workcard, Workstep } from './Pages/Saving';
import { Testimonials } from './Pages/Testimonials';

import iosimg from './Image/ios-store-dark.png';
import playstoreimg from './Image/g-play-dark.png'
import Form from './Pages/Form';
import Footer from './Pages/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {


  return (
    useEffect(() => {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
      });
    }, []),

    <div className='' >

      <Header></Header>
      <Main></Main>


      <Card></Card>



      <Saving></Saving>






      {/* Worksteps */}
      <div className='max-w-[1200px] mx-auto py-12 bg-color-primary-light'>
        <div data-aos="">
        <Workstep></Workstep>
        </div>
       
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 '>

          {/* card 1 */}
          <div data-aos="fade-right">
          <Workcard  stepnumber="1" workcardtital="Install The App" workcardpara="We use an application designed a testing gnose to keep away" ></Workcard >
          </div>
          

          {/* card 2 */}
          <div data-aos="fade-up">
          <Workcard stepnumber="2" workcardtital="Setup Your Profile" workcardpara="We use an application designed a testing gnose to keep away"></Workcard>
          </div>

          {/* card 3 */}
          <div data-aos="fade-left">
          <Workcard stepnumber="3" workcardtital="Enjoy The Features!" workcardpara="We use an application designed a testing gnose to keep away"></Workcard>
          </div>


        </div>

      </div>

      <Testimonials ></Testimonials>



      {/* Pricing Section */}
      <Pricing></Pricing>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 px-6 gap-10 lg:grap-8">
        <div data-aos="fade-right">
        <PricingCard></PricingCard>
        </div>
        <div data-aos="fade-up">
        <PricingCard></PricingCard>
        </div>
        <div data-aos="fade-left">
        <PricingCard></PricingCard>
        </div>
        
        
      </div>




      {/* blogs section */}
      <div className=' max-w-[1200px] mx-auto py-20 'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className='text-center mb-16 max-w-[400px] mx-auto px-6'
          data-aos-anchor-placement="bottom-bottom">
          <h4 className='text-color-secondary font-bold '>Innovation And Qualtty Improvement </h4>
          <h1 className='tital mt-4'>Latest Updates, Solution And Company News</h1>
        </div>
        <div data-aos="zoom-in"><Blog></Blog></div>
      </div>




      {/* Download App Section */}
      <div className=' max-w-[1200px] mx-auto 'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <div className='text-center  max-w-[800px] mx-auto px-6'
          data-aos-anchor-placement="bottom-bottom">

          <h1 className='tital  '>Download App Now And Save Your Money</h1>
          <h4 className=' '>Serving an impressive list of long-term money with experience and expertise in multiple industries</h4>
        </div>
        <div className='flex  gap-5 justify-center mt-6 mx-5'>
          <div>
            <img src={iosimg} alt='ios-icon' className=' bg-white rounded-xl px-6 py-2 '></img>
          </div>
          <div>
            <img src={playstoreimg} alt='play-store' className=' bg-white rounded-xl px-4 py-2 '></img>
          </div>

        </div>

      </div>


      {/* Form */}

      <Form></Form>


      {/* Footer */}

      <Footer></Footer>




    </div>
  );
}

export default App;
