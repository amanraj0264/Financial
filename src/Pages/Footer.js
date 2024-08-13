
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Footer() {
  return (
    <div className='max-w-[1200px] mx-auto bg-color-primary-dark  pt-20 pb-10 px-6'>
      <div className='grid gap-10 md:grid-cols-3 pb-10'>
        <div className='space-y-6'>
          <h4 className='font-bold text-lg'>About App</h4>
          <p>This should Be Used To Tell A Story And Include Any Testimonials You Might Have About Yours Product Or Service For Your Clients</p>

          <div className='flex gap-3 items-center'>
            <p>Follow Me</p>

            <InstagramIcon className='hover:text-color-secondary cursor-pointer'></InstagramIcon>
            <YouTubeIcon className='hover:text-color-secondary cursor-pointer'></YouTubeIcon>
            <FacebookIcon className='hover:text-color-secondary cursor-pointer'></FacebookIcon>

            <TwitterIcon className='hover:text-color-secondary cursor-pointer'></TwitterIcon>

          </div>
        </div>



        <div className='flex justify-between md:justify-around'>
          <div className='space-y-6'>
            <h4 className='font-bold text-lg'>Quick Links</h4>
            <ul className='space-y-3'>
              <li className='underline hover:no-underline hover:text-color-secondary'> Home
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Features
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Testimonials
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'>Pricing
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Blogs
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Contact
              </li>
            </ul>



          </div>
          <div className='space-y-6'>
            <h4 className='font-bold text-lg'>Help</h4>
            <ul className='space-y-3'>
              <li className='underline hover:no-underline hover:text-color-secondary'> About Us
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Patners
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Carrers
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Review
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'>Terms & Condition
              </li>
              <li className='underline hover:no-underline hover:text-color-secondary'> Help
              </li>

            </ul>



          </div>

        </div>


        <div className='flex justify-between md:justify-around'>


          <div className='space-y-6'>
            <h4 className='font-bold text-lg'>Newsletter</h4>
            <p className='leading-relaxed'>Subscribe With Email And Loads of News will Be Start To You</p>
            <div className='flex items-center'>
              <input type='text' className='w-3/4 text-color-gray bg-color-white p-2  rounded-l-md focus:outline-none' placeholder='Enter Tour Name' />
              <button type='submit' className='bg-color-secondary px-4 py-2 lg:px-5  rounded-r-md hover: opacity-90'>
                < KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              </button>

            </div>

          </div>

        </div>


      </div>
      <div className='border border-solid border-t-2'></div>
      <p className='text-center mt-6'>2024 @ LightCode. All Right Reserved</p>


    </div>
  )
}

