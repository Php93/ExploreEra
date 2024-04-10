import { useRef, useState } from "react"
import Header from "../components/Header"
import hero from '../assets/img/hero.jpg'
import Modal from "../components/Modal"
import Slider from "react-slick";

import services from '../assets/data/services.json'
import offers from '../assets/data/offers.json'
import blogs from '../assets/data/blogs.json'
import Select from "../components/Select";
import Footer from "../components/Footer";

const options = [
    { value: 0, label: 'Rome, Italy' },
    { value: 1, label: 'Luxor City, Egypt' },
    { value: 2, label: 'Paris, France' },
    { value: 3, label: 'Barcelona, Spain' },
    { value: 4, label: 'Tsavo, Kenya' },
    { value: 5, label: 'Prague, Chequia' },
    { value: 6, label: 'Shanghai, China' },
    { value: 7, label: 'Hanauma, Hawaii' },
]
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            centerMode: true,
          }
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              infinite: false,
              centerMode: false,
            }
          }
    ]
};

function Home() {
    const slider = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selected, setSelected] = useState("");

  return (
    <div className="min-w-[500px]">
        {isModalOpen && (
            <Modal title={"Discover Our Services"} setIsOpen={setIsModalOpen}>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {services.map((service) => (
                        <div key={service.title}>
                            <img src={require(`../assets/img/serviceImages/${service.img}`)} alt={service.img}/>
                            <h3 className="text-2xl font-medium my-2.5">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </Modal>
        )}

        <Header showLinks={true}/>

        <main className="mb-20">
            <div className="flex justify-center items-center bg-cover bg-center h-screen max-w-full" style={{backgroundImage: `url(${hero})`}}>
                <div className="flex-col text-center text-white">
                    <h3 className="text-3xl font-medium">Visit Mountains In</h3>
                    <h1 className="text-4xl font-semibold tracking-widest uppercase mb-4">Italy</h1>
                    <button className="bg-main text-2xl font-medium px-8 py-2.5 rounded-[20px] md:py-3">
                        See Offer
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 px-5">
                <div>
                    <div>
                        <h2 className="text-3xl font-medium">Discover Our Services</h2>
                        <p className="text-[#252525] leading-5">ExploreEra provides a one-stop solution for individuals seeking well-planned journeys. These services include expert advice on destination selection, flight and accommodation bookings, and customized itineraries to individual preferences.</p>
                    </div>

                    <div className="hidden lg:flex justify-end my-2.5">
                        <button onClick={() => setIsModalOpen(true)} className="float-right text-main underline">See All</button>
                    </div>

                    <div className="grid grid-cols-1 justify-center items-center !gap-2 sm:grid-cols-2 sm:!gap-4 lg:grid-cols-4">
                        {services.slice(0,4).map((service) => (
                            <div key={service.title} className="mt-5 lg:mt-0">
                                <img className="w-full" src={require(`../assets/img/serviceImages/${service.img}`)} alt={service.img}/>
                                <h3 className="text-2xl font-medium my-1 lg:my-2.5">{service.title}</h3>
                                <p className="leading-5">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex lg:hidden justify-start my-2 font-medium">
                        <button onClick={() => setIsModalOpen(true)} className="float-right text-main underline">See All</button>
                    </div>
                </div>

                <div className="mt-12 lg:mt-24">
                    <h2 className="text-3xl font-medium">Watch Our Memorable Trips</h2>

                    <div className="mt-3 lg:mt-10">
                        <iframe className="w-full h-screen" src="https://www.youtube.com/embed/7ubqmp65kE4?si=AoZa829GE6VWlFSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="mt-8 lg:mt-16">
                    <h2 className="text-2xl font-medium mb-4 lg:mb-8 lg:text-3xl">Popular Tour Offers</h2>

                    <div className="hidden lg:flex justify-between mb-2.5">
                        <button onClick={() => slider?.current?.slickPrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button onClick={() => slider?.current?.slickNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <Slider className="flex items-center gap-5" ref={slider} {...settings}>
                            {offers.map((offer) => (
                                <div key={offer.title} className="mr-5">
                                    <img className="z-0" src={require(`../assets/img/offerImages/${offer.img}`)} alt={offer.title}/>
                                    <h3 className="text-2xl font-medium my-2.5">{offer.title}</h3>
                                    <p className="">{offer.info}</p>
                                    <p className="">${offer.price}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="mt-8 lg:mt-16">
                    <h2 className="text-3xl font-medium mb-8">Blogs</h2>
                    
                    <div className="grid grid-cols-1 !gap-1 sm:grid-cols-2 sm:!gap-4 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <div key={blog.id}>
                                <img src={require(`../assets/img/blogImages/${blog.img}`)} alt={blog.title} />
                                <h3 className="text-2xl font-medium my-2.5">{blog.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#E0E0E0] mt-16">
                <div className="max-w-7xl mx-auto py-6 px-5">
                    <h2 className="text-3xl font-medium mb-8">Ready To Book A Trip?</h2>
                    
                    <div className="grid grid-cols-1 !gap-2 md:grid-cols-2 md:!gap-4">
                        <Select placeHolder="Your starting location" isOpen={isSelectOpen} setIsOpen={setIsSelectOpen} selected={selected} setSelected={setSelected}>
                            {options.map((option) => (
                                <span key={option.label} className="cursor-pointer" onClick={(e) => {
                                    setSelected(option.label);
                                    setIsSelectOpen(!isSelectOpen);
                                }}>
                                    <p className="text-lg py-1 mb-2">{option.label}</p>
                                    <hr className="my-1"/>
                                </span>
                            ))}
                        </Select>
                        <Select placeHolder="Your starting location"/>
                        <Select placeHolder="Choose date"/>
                        <Select placeHolder="Persons"/>
                    </div>

                    <button className="w-full bg-main text-xl text-white font-medium mt-6 py-3 rounded-2xl">Book Now</button>
                </div>
            </div>
        </main>

        <Footer/>
    </div>
  )
}

export default Home