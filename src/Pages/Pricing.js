import BookmarkIcon from '@mui/icons-material/Bookmark';
function Pricing() {
    return (
        <div>
            {/* Pricing titils*/}
            <section>

                <div className='max-w-[1200px] mx-auto pt-20' >
                    <div className='text-center mb-16' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <h4 className='text-color-secondary font-bold '>Pricing </h4>
                        <h1 className='tital mt-4'>Get In Resasonable Price </h1>
                    </div>
                </div>

                



            </section>
        </div>
    )
}

export { Pricing };


function PricingCard() {
    return (
        <div className=" border-solid border-2 border-color-white px-5 py-5 rounded-3xl  md:text-start text-center  leading-6  hover:bg-black">
            <div className="md:text-start ">
            <span className="text-4xl font-bold">2000Rs</span> <span className="text-sm">/per months</span>
            </div>

            <div className="">
                <h5 className="font-bold mt-6 mb-2 ">Basis</h5>
                <p className='mb-10'>
                    For Beginner who want to scale Business Globaly
                </p>

                <div className='mt-4  md:text-start'>
                    <div className='pb-3'>
                    <BookmarkIcon className='text-color-secondary mr-4'></BookmarkIcon>Expense Management
                    </div>
                    <div className='pb-3'>
                    <BookmarkIcon className='text-color-secondary mr-4'></BookmarkIcon>Card Management
                    </div>
                    <div className='pb-3'>
                    <BookmarkIcon className='text-color-secondary mr-4'></BookmarkIcon>Instant Statistics
                    </div>
                    <div className='pb-3'>
                    <BookmarkIcon className='text-color-secondary mr-4'></BookmarkIcon>Bookmark Function
                    </div>
                    <div className='pb-3'>
                    <BookmarkIcon className='text-color-secondary mr-4'></BookmarkIcon>Accounting System
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export {PricingCard};