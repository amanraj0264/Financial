import './App.css';
import Blog from './Pages/Blog';
import { Card } from './Pages/Card';
import Header from './Pages/Header';
import Main from './Pages/Main';
// import { Pricing,PricingCard } from './Pages/Pricing';
import { PricingCard } from './Pages/Pricing';
import { Pricing } from './Pages/Pricing';
import { Saving, Workcard } from './Pages/Saving';
import { Testimonials } from './Pages/Testimonials';

import iosimg from './Image/ios-store-dark.png';
import playstoreimg from './Image/g-play-dark.png'
import Form from './Pages/Form';
import Footer from './Pages/Footer';


function App() {
  return (
    <div className=''>

      <Header></Header>
      <Main></Main>


      <Card></Card>



      <Saving></Saving>






      {/* Worksteps */}
      <div className='max-w-[1200px] mx-auto py-12'>

        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 '>

          {/* card 1 */}
          <Workcard stepnumber="1" workcardtital="Install The App" workcardpara="We use an application designed a testing gnose to keep away"></Workcard>

          <Workcard stepnumber="2" workcardtital="Setup Your Profile" workcardpara="We use an application designed a testing gnose to keep away"></Workcard>


          <Workcard stepnumber="3" workcardtital="Enjoy The Features!" workcardpara="We use an application designed a testing gnose to keep away"></Workcard>


        </div>

      </div>

      <Testimonials></Testimonials>



      {/* Pricing Section */}
      <Pricing></Pricing>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 px-6 gap-10 lg:grap-8">
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
      </div>




      {/* blogs section */}
      <div className=' max-w-[1200px] mx-auto py-20' >
        <div className='text-center mb-16 max-w-[400px] mx-auto px-6'
          data-aos-anchor-placement="bottom-bottom">
          <h4 className='text-color-secondary font-bold '>Innovation And Qualtty Improvement </h4>
          <h1 className='tital mt-4'>Latest Updates, Solution And Company News</h1>
        </div>
        <Blog></Blog>
      </div>




      {/* Download App Section */}
      <div className=' max-w-[1200px] mx-auto ' >
        <div className='text-center  max-w-[800px] mx-auto px-6'
          data-aos-anchor-placement="bottom-bottom">

          <h1 className='tital  '>Download App Now And Save Your Money</h1>
          <h4 className=' '>Serving an impressive list of long-term money with experience and expertise in multiple industries</h4>
        </div>
        <div className='flex  gap-5 justify-center mt-6 mx-5'>
          <div>
            <img src={iosimg} className=' bg-white rounded-xl px-6 py-2 '></img>
          </div>
          <div>
            <img src={playstoreimg} className=' bg-white rounded-xl px-4 py-2 '></img>
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
