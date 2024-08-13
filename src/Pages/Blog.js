
function Blog() {
    return (

        
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3">



            {data.map((d) => (
                <div className="">
                <div className="px-6  py-10 md:py-0">
                    <div className="overflow-hidden rounded-xl">
                        <img  className='rounded-xl hover:scale-110 tranisition duration-200 ease-in'src={d.img}/>
                    </div>

                    <div className="flex justify-between pt-3">
                        <span >20 August 2022</span>
                        <span> 1 min read</span>     
                    </div>

                        <p className="font-medium text-xl pt-5 underline pb-3 hover:text-color-secondary">{d.title}</p>
                        <p className="py-4">{d.body}</p>

                        
                            <div className="text-end">
                            <button className=" underline font-semibold pr-2 pt-1 tracking-wider capitalize hover:no-underline hover:text-color-secondary ">Read More</button>
                            </div>
                        
                    
                </div>
                </div>

            ))}


        </div>
    );
}


const data = [
    {
        img: "/image/blog1.jpg",
        id: 1,
        title: "Four ways to cheer yourself up on blue Monday",
        body: "On the second edition of Serious Business, Inc. editor jim Ledbetter and Fusion Senior editor Salmon debte...."
    },
    {
        img: "/image/blog2.jpg",
        id: 2,
        title: "How to Ogranize Your Budget for Maximun Productivity?",
        body: "Global Provider connected products for consummers and enterprises wolrdwide, supply chain control is everything...."
    },
    {
        img: "/image/blog1.jpg",
        id: 3,
        title: "Should Small Businesses be Entiteled to Sysytem?",
        body: "Our team provides skilled and experienced managers who know the intricacies of this vertical and focus..."
    },

]

export default Blog;


