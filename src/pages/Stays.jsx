import React, { useEffect, useRef, useState } from "react"
import ServiceInput from "../components/ServiceInput"
import Slider from "react-slick";
import propertyType from '../assets/data/propertyType.json'
import stays from '../assets/data/stays.json'
import useMountedRef from '../hooks/useMountedRef'
import Stars from "../components/Stars";

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

function Stays({setId}) {
    const mounted = useMountedRef();
    const slider = useRef(null)
    const [showFilters , setShowFilters] = useState(false)
    const [results, setResults] = useState()
    const [ratings, setRatings] = useState([])

    const filterRating = (array) => {
        if (ratings.length > 0) {
            return array.filter((stay) => ratings.includes(stay.stars));
        }
        return array
    };
    const filterAndShow = () => {
        let result = stays
        result = filterRating(result)
        setResults(result)
    }

    const changeRating = (e) => {
        let number = parseInt(e.target.value)
        if (ratings.includes(number)) {
            setRatings(ratings.filter(rating => rating != number))
        } else {
            setRatings([...ratings, number])
        }
    }

    const renderFilters = () => (
        <>
            <button onClick={() => setShowFilters(false)} className="flex items-center justify-center py-2 w-full text-lg text-white font-medium bg-main rounded-xl mb-5 lg:hidden">
                <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Filters
            </button>


            <span className="text-lg">Filter By:</span>
            <hr className="w-1/3 border-t-2 border-main" />

            <div className="mt-5">
                <span className="text-lg font-medium">Property Type</span>

                <div className="flex flex-col justify-center gap-2 text-lg mt-2 pl-1">
                    <label htmlFor="hotels">
                        <input className="scale-150 mr-2" name="hotels" type="checkbox" />
                        Hotels
                    </label>

                    <label htmlFor="apartment">
                        <input className="scale-150 mr-2" name="apartment" type="checkbox" />
                        Apartment
                    </label>

                    <label htmlFor="villa">
                        <input className="scale-150 mr-2" name="villa" type="checkbox" />
                        Villa
                    </label>

                    <label htmlFor="guest house">
                        <input className="scale-150 mr-2" name="guest house" type="checkbox" />
                        Guest house
                    </label>

                    <label htmlFor="resort">
                        <input className="scale-150 mr-2" name="resort" type="checkbox" />
                        Resort
                    </label>

                </div>
                <span className="text-sm cursor-pointer text-main underline">Show all 15</span>
            </div>

            <div className="mt-5">
                <span className="text-lg font-medium">Property rating</span>

                <div className="flex flex-col justify-center gap-2 text-lg mt-2 pl-1">
                    <label htmlFor="5 stars">
                        <input value={5} className="scale-150 mr-2" name="5 stars" type="checkbox" onChange={(e) => {
                            changeRating(e)
                            filterAndShow()
                        }} />
                        5 Stars
                    </label>

                    <label htmlFor="4 stars">
                        <input value={4} className="scale-150 mr-2" name="4 stars" type="checkbox" onChange={(e) => {
                            changeRating(e)
                            filterAndShow()
                        }} />
                        4 Stars
                    </label>

                    <label htmlFor="3 stars">
                        <input value={3} className="scale-150 mr-2" name="3 stars" type="checkbox" onChange={(e) => {
                            changeRating(e)
                            filterAndShow()
                        }} />
                        3 Stars
                    </label>

                    <label htmlFor="2 stars">
                        <input value={2} className="scale-150 mr-2" name="2 stars" type="checkbox" onChange={(e) => {
                            changeRating(e)
                            filterAndShow()
                        }} />
                        2 Stars
                    </label>

                    <label htmlFor="unrated">
                        <input value={1} className="scale-150 mr-2" name="unrated" type="checkbox" onChange={(e) => {
                            changeRating(e)
                            filterAndShow()
                        }} />
                        Unrated
                    </label>

                </div>
            </div>

            <div className="mt-5">
                <span className="text-lg font-medium">Facilities</span>

                <div className="flex flex-col justify-center gap-2 text-lg mt-2 pl-1">
                    <label htmlFor="wifi">
                        <input className="scale-150 mr-2" name="wifi" type="checkbox" />
                        Wifi
                    </label>

                    <label htmlFor="parking">
                        <input className="scale-150 mr-2" name="parking" type="checkbox" />
                        Parking
                    </label>

                    <label htmlFor="pets allowed">
                        <input className="scale-150 mr-2" name="pets allowed" type="checkbox" />
                        Pets allowed
                    </label>

                    <label htmlFor="fitness center">
                        <input className="scale-150 mr-2" name="fitness center" type="checkbox" />
                        Fitness center
                    </label>

                    <label htmlFor="swimming pool">
                        <input className="scale-150 mr-2" name="swimming pool" type="checkbox" />
                        Swimming pool
                    </label>

                </div>
                <span className="text-sm cursor-pointer text-main underline">Show all 15</span>
            </div>

            <div className="mt-5">
                <span className="text-lg font-medium">Room facilities</span>

                <div className="flex flex-col justify-center gap-2 text-lg mt-2 pl-1">
                    <label htmlFor="balcony">
                        <input className="scale-150 mr-2" name="balcony" type="checkbox" />
                        Balcony
                    </label>

                    <label htmlFor="tv">
                        <input className="scale-150 mr-2" name="tv" type="checkbox" />
                        TV
                    </label>

                    <label htmlFor="kitchen">
                        <input className="scale-150 mr-2" name="kitchen" type="checkbox" />
                        Kitchen
                    </label>

                    <label htmlFor="air conditioning">
                        <input className="scale-150 mr-2" name="air conditioning" type="checkbox" />
                        Air conditioning
                    </label>

                    <label htmlFor="washing machine">
                        <input className="scale-150 mr-2" name="washing machine" type="checkbox" />
                        Washing machine
                    </label>

                </div>
                <span className="text-sm cursor-pointer text-main underline">Show all 15</span>
            </div>
        </>
    )

    useEffect(() => {
        if (mounted.current) {
            filterAndShow()
        }
    }, [ratings])

  return (
    <div>
        {!showFilters ? (
            <>
                <div className={`flex flex-col gap-4 ${results && 'hidden'} lg:!flex lg:flex-row`}>
                    <ServiceInput title="Choose city" icon={<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />} />
                    <ServiceInput title="mm/dd/yyyy" />
                    <ServiceInput title="2 Adults" icon={<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />} />
        
                    <button onClick={filterAndShow} className="px-16 py-3 text-white tracking-wide bg-main rounded-2xl">
                        Search
                    </button>
                </div>
        
                {results ? (
                    <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-8">
                        <div className="hidden col-span-2 h-fit bg-white rounded-xl p-5 lg:block">
                            {renderFilters()}
                        </div>
                        
                        <div className="col-span-1 lg:col-span-6">
                            <h3 className="text-lg font-semibold">Auckland, New Zealand: 2000 properties found</h3>
                            <button className="w-full flex items-center justify-center gap-2 bg-white py-1.5 mt-3 rounded-xl border-2 border-main lg:w-auto lg:px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                                sort by: popular
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
        
                            <button onClick={() => setShowFilters(true)} className={`hidden ${results && '!block'} py-1.5 w-full mt-3 text-white bg-main rounded-xl lg:!hidden`}>
                                Filter
                            </button>
        
                            <div className="mt-5">
                                {results.map((result) => (
                                    <div key={result.title} className="h-80 flex justify-center items-start gap-4 p-4 mb-5 bg-white rounded-2xl md:gap-8 lg:grid grid-cols-8 lg:p-8">
                                        <div className="w-full h-full col-span-3 md:w-fit">
                                            <img className="h-full object-cover rounded-xl" src={require(`../assets/img/${result.img}`)} alt="" />
                                        </div>
                                        
                                        <div className="block col-span-5 h-full flex-col justify-between lg:flex">
                                            <div className="block items-center lg:flex lg:mr-5 lg:items-start">
                                                <div>
                                                    <h3 className="text-xl font-semibold lg:text-2xl">{result.title}</h3>
                                                    <p className="leading-5 text-gray-500 lg:text-lg lg:mt-3">{result.address}</p>
                                                    <p className="text-sm mt-1 text-gray-500 lg:text-base">{result.from_center}</p>
                                                    <p className="mt-1 text-sm tracking-tight text-gray-500 lg:text-base lg:mt-2">{result.description}</p>
                                                </div>
        
                                                <div className="flex flex-col items-start mt-1 lg:items-end">
                                                    <span className="lg:text-lg">Rating:</span>
                                                    <div className="flex">
                                                        <Stars value={result.stars} />
                                                    </div>
        
                                                    <div className="flex items-center mt-1 lg:flex-col">
                                                        <span className="lg:text-lg">Price:</span>
                                                        <span className="font-semibold lg:text-lg">{result.price}$</span>
                                                    </div>
                                                </div>
                                            </div>
        
                                            <button onClick={() => setId(result.id)} className="w-full py-3 text-white bg-main rounded-2xl">Show details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-10">
                        <h1 className="text-2xl font-medium">Browse by property type</h1>
        
                        <div className="hidden md:flex justify-between my-5">
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
        
                        <Slider className="flex items-center gap-5 mt-5" ref={slider} {...settings}>
                            {propertyType.map((property) => (
                                <div key={property.title} className="mr-5">
                                    <img className="z-0" src={require(`../assets/img/propertyImages/${property.img}`)} alt={property.title}/>
                                    <h3 className="text-2xl font-medium my-2.5">{property.title}</h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </>
        ) : renderFilters()}
    </div>
  )
}

export default Stays