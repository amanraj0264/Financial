import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header() {


    const [isOpen, setIsOpen] = useState(false);


    return (


        useEffect(() => {
            AOS.init({
                duration: 1000, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
            });
        }, []),


        <header>
            <nav class=" mx-auto max-w-[1200px] flex justify-between items-center px-6" data-aos="fade-down">
                <div class="py-5 text-2xl font-bold">
                    <span>Light</span><span className="text-color-secondary font-bold">Code.</span>
                </div>

                <div className={isOpen ? "ShowNav" :"HideNav" }>
                    <ul class="hidden lg:flex items-center space-x-6">
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Home</a></li>
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Feature</a></li>
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Testiomonials</a></li>
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Pricing</a></li>
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Blog</a></li>
                        <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Contact</a></li>
                        <li><button class="btn">Free trail</button></li>

                    </ul>
                    
                    {/* mobile responsive */}

                    {
                        (isOpen)
                            ?
                            <div className='bg-color-primary-dark  h-[100vh] absolute inset-0 z-40 pt-6 pr-6' >
                                
                                <div className='lg:hidden  flex justify-end'>
                                    <button onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? <CloseIcon /> : < MenuIcon /> }

                                    </button>

                                </div>

                                <ul class=" h-full grid place-items-center py-20 ">
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Home</a></li>
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Feature</a></li>
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Testiomonials</a></li>
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Pricing</a></li>
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Blog</a></li>
                                    <li><a href="#home" className="hover:text-color-secondary  ease-in duration-200">Contact</a></li>
                                    <li><button class="btn">Free trail</button></li>

                                </ul>
                            </div>
                            :
                            ""
                    }

                    <div className='lg:hidden '>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <CloseIcon /> : < MenuIcon /> }

                        </button>

                    </div>
                </div>

            </nav>





        </header>
    )
}

export { Header };
