import React, { useEffect, useRef, useState } from "react";
import ServiceInput from "../components/ServiceInput"
import DatePicker from "react-datepicker";
import flights from '../assets/data/flights.json'
import RangeSlider from 'react-range-slider-input';
import useMountedRef from '../hooks/useMountedRef'

function Flights() {
    const mounted = useMountedRef();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showFilters , setShowFilters] = useState(false)
    const [results , setResults] = useState()
    const [duration, setDuration] = useState([7, 30])
    const [price, setPrice] = useState([700, 3000])
    const [stops, setStops] = useState([])
    console.log(duration)

    const filterStops = (array) => {
        if (stops.length > 0) {
            return array.filter((flight) => stops.includes(flight.stops));
        }
        return array
    };
    const filterDuration = (array) => {
        return array.filter((flight) => flight.duration >= duration[0] && flight.duration <= duration[1]);
    };
    const filterPrice = (array) => {
        return array.filter((flight) => flight.price >= price[0] && flight.price <= price[1]);
    };
    
    // --------------------------
    // This function will render only those flights that are before the selected date 
    // --------------------------
    const filterAndShow = () => {
        let result = flights.filter((flight) => new Date(flight.date) <= selectedDate)
        result = filterStops(result);
        result = filterDuration(result);
        result = filterPrice(result);
        setResults(result)
    }

    const changeStop = (e) => {
        if (stops.includes(e.target.value)) {
            setStops(stops.filter(stop => stop != e.target.value))
        } else {
            setStops([...stops, e.target.value])
        }
    }
    const renderStops = (stops) => {
        const intStops = parseInt(stops)
        let squares = [];
        let leftPosition = 100/(intStops+1)
        for (let i = 1; i <= intStops; i++) {
            squares.push(<div style={{left: `${leftPosition}%`}} className={`absolute -top-1 w-3 h-3 bg-gray-300 border border-black`} />);
            leftPosition += leftPosition
        }
        return squares;
    }

    const renderFilters = () => (
        <>
            <button onClick={() => setShowFilters(false)} className="flex items-center justify-center py-2 w-full text-lg text-white font-medium bg-main rounded-xl mb-5 lg:hidden">
                <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Filters
            </button>
            
            <div className="flex flex-col gap-3 p-6 text-lg bg-white rounded-2xl">
                <h3>Cheapest</h3>
                <hr className="w-1/2 border-t-2 border-main"/>
                <h3>Quickest</h3>
                <hr className="w-1/2 border-t-2 border-main"/>
                <h3>Best</h3>
            </div>

            <div className="flex flex-col gap-8 p-6 mt-10 text-lg bg-white rounded-2xl">
                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Stops</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label for="direct">
                            <input value={0} className="scale-150 mr-3" type="checkbox" id="direct" name="direct" onChange={(e) => {
                                changeStop(e)
                                filterAndShow()
                            }} />
                            Direct
                        </label>

                        <label for="one">
                            <input value={1} className="mr-3 scale-150" type="checkbox" id="one" name="one" onChange={changeStop}  />
                            One Stop
                        </label>

                        <label for="two">
                            <input value={2} className="mr-3 scale-150" type="checkbox" id="two" name="two" onChange={changeStop}  />
                            Two Stop
                        </label>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Times</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>

                    <div>
                        <div>
                            <div>
                                <span className="text-base">Take Off - Tbilisi</span>
                                <div className="flex justify-between text-sm text-gray-500 mb-3">
                                    <span>12:00</span>
                                    <span>24:00</span>
                                </div>

                                <RangeSlider defaultValue={[0, 12]} id="slider" className="!h-0.5 !bg-[#C85100]" min={0} max={12} step={1} />
                            </div>

                            <div className="mt-5">
                                <span className="text-base">Take Off - Paris</span>
                                <div className="flex justify-between text-sm text-gray-500 mb-3">
                                    <span>12:00</span>
                                    <span>24:00</span>
                                </div>

                                <RangeSlider defaultValue={[0, 12]} id="slider" className="!h-0.5 !bg-[#C85100]" min={0} max={12} step={1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Airlines</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Airlines</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Airports</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Duration</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>

                    <div className="mt-3">
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span>7 Hours</span>
                            <span>30 Hours</span>
                        </div>

                        <RangeSlider defaultValue={[7, 30]} value={duration} onInput={setDuration} id="slider" className="!h-0.5 !bg-[#C85100]" min={7} max={30} step={1} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Price</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>

                    <div className="mt-3">
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span>700$</span>
                            <span>3000$</span>
                        </div>

                        <RangeSlider defaultValue={[700, 3000]} value={price} onInput={setPrice} id="slider" className="!h-0.5 !bg-[#C85100]" min={700} max={3000} step={100} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl">Price Calculator</h3>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>

                    <div className="mt-3">
                        <div>
                            <span className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                Payment Method
                            </span>

                            <input className="px-3 py-2 mt-3 text-base border-2 border-gray-400 outline-none" placeholder="Choose payment method" type="text" />
                        </div>
                        
                        <div className="mt-5">
                            <span className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                Carry-on bag
                            </span>
                            
                            <input className="px-3 py-2 mt-3 text-base border-2 border-gray-400 outline-none" placeholder="Select bags (0)" type="text" />
                        </div>

                        <div className="mt-5">
                            <span className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                Checked bag
                            </span>
                            
                            <input className="px-3 py-2 mt-3 text-base border-2 border-gray-400 outline-none" placeholder="Select bags (0)" type="text" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

    useEffect(() => {
        if (mounted.current) {
            filterAndShow()
        }
    }, [stops, duration, price])


  return (
    <div>
        {!showFilters ? (
            <>
                <div className={`${results && "hidden"} lg:!block`}>
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <span className="font-medium">One-Way</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <span className="font-medium">1 Adult</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <span className="font-medium">Economy</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
        
                    <div className={`flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-2 lg:!flex lg:flex-row`}>
                        <ServiceInput text="From" title="Tbilisi" icon={<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />} />
                        <ServiceInput text="To" title="Paris" icon={<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />} />
                        <DatePicker
                            selected={selectedDate}
                            className="flex-1"
                            title="Calendar"
                            customInput={
                                <ServiceInput 
                                    text={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /> 
                                        </svg>
                                    } 
                                    icon={<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />} 
                                />
                            }
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="yyyy mm dd"
                        />
        
                        <button onClick={filterAndShow} className="px-16 py-3 text-white tracking-wide bg-main rounded-2xl">
                            Search
                        </button>
                    </div>
                </div>
        
                <div className={`${results && "!block"} hidden lg:!hidden`}>
                    <div onClick={() => setResults()} className="flex items-center justify-between px-5 py-2 bg-main/10 rounded-xl">
                        <div>
                            <p className="text-lg">Tbilisi-Paris</p>
                            <p>{new Date(selectedDate).toLocaleDateString()}  2 Adults</p>
                        </div>
                        
                        <svg className="w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </div>
        
                    <button onClick={() => setShowFilters(true)} className="py-2 mt-5 w-full text-white bg-main rounded-xl">
                        Filters
                    </button>
                </div>
                
                {results && (
                    <div className="grid grid-cols-1 mt-14 gap-5 lg:grid-cols-12">
                        <div className="hidden col-span-3 lg:block">
                            {renderFilters()}
                        </div>
                        
                        <div className="w-full rounded-2xl lg:col-span-9">
                            {results.length > 0 ? (results.map((result) => (
                                <div className="p-3 mb-5 w-full bg-white rounded-2xl sm:p-5">
                                    <div className="grid grid-cols-5 text-xs sm:text-sm lg:grid-cols-12 lg:gap-4">
                                        <div className="hidden col-span-1 items-center lg:flex">
                                            <span>{new Date(result.date).toDateString()}</span>
                                        </div>
        
                                        <div className="col-span-1 flex flex-col justify-center items-center text-center lg:col-span-3">
                                            <img className="w-8 h-8" src={require(`../assets/img/airline_img.jpg`)} alt="" />
                                            <p>{result.airline}</p>
                                        </div>
        
                                        <div className="col-span-3 lg:col-span-5">
                                            <div className="flex justify-between">
                                                <p>Take Off</p>
                                                <p>Landing</p>
                                            </div>
        
                                            <div className="flex items-center justify-between gap-2 mt-6">
                                                <span>{result.take_off}</span>
                                                <div className="relative flex-1 h-0.5 w-full bg-main">
                                                    {result.stops > 0 && renderStops(result.stops)}
                                                </div>
                                                <span>{result.landing}</span>
                                            </div>
                                        </div>
        
                                        <div className="flex justify-end col-span-1 text-gray-500 lg:items-center">
                                            {result.duration} Hours
                                        </div>
        
                                        <div className="hidden col-start-11 col-span-2 lg:block">
                                            <div className="flex justify-between text-lg">
                                                <span>Price</span>
                                                <span>${result.price}</span>
                                            </div>
        
                                            <hr className="border-t-2 my-3 border-gray-600"/>
        
                                            <button className="w-full px-5 py-2 text-white bg-main rounded-xl">View Deal</button>
                                        </div>
                                    </div>
        
                                    <div className="mt-4 lg:hidden">
                                        <div className="flex justify-center text-base mb-2">
                                            <p className="mr-2">Price:</p>
                                            <p>${result.price}</p>
                                        </div>
                                        <button className="w-full px-5 py-2 text-white bg-main rounded-xl">View Deal</button>
                                    </div>
                                </div>
                            ))) : (
                                <div className="flex flex-col justify-center items-center">
                                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
        
                                    <p className="text-lg font-medium">No Tickets were found</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </>
        ) : renderFilters()}
    </div>
  )
}

export default Flights