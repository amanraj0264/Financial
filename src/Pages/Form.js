import React from 'react'

export default function Form() {
  return (
    <div>
      <div className='max-w-[1200px] mx-auto pt-20' >
        <div className='text-center mb-16' data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          <h4 className='text-color-secondary font-bold'>Have A Questation </h4>
          <h1 className='tital mt-4'>Get In Touch </h1>
        </div>



        {/* Form */}

        <form>
          <div className='w-full mx-auto text-center md:w-2/3'>
            <div className='text-color-primary-dark grid gap-6 md:grid-cols-2 px-6 md:px-0'>
              <input type='text' placeholder='Name' className='bg-gray-50 border border-gray-300 text-sm rounded-lg  w-full p-3 focus:outline-none focus:border-color-secondary '></input>
              <input type='text' placeholder='Phone' className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>
              <input type='text' placeholder='Address' className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>
              <input type='text' placeholder='Email' className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>

            </div>
            <div className='text-color-primary-dark py-6 md:px-0 px-6'>
              <textarea placeholder='Message' className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full h-40 p-3 focus:outline-none focus:border-color-secondary'></textarea>

            </div>

            <button className='btn'>Send Message</button>

          </div>
        </form>


      </div>







    </div>
  )
}
