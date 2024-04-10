import { useState } from 'react'
import Stars from '../components/Stars'

function Stay({data}) {
    const [showDetails, setShowDetails] = useState(false)

    const renderDetails = () => (
        <>
            <div className="p-5 mt-10 bg-white rounded-xl lg:mt-0">
                <h3 className="text-xl mb-5">Searched by:</h3>

                <p className="text-sm">Destination</p>
                <div className="p-2 mt-2 border border-main rounded-lg">Auckland, New Zealand</div>

                <p className="text-sm mt-2">Check-in date</p>
                <div className="p-2 mt-2 border border-main rounded-lg">Thursday, February 1, 2024</div>

                <p className="text-sm mt-2">Check-out date</p>
                <div className="p-2 mt-2 border border-main rounded-lg">Friday, February 9, 2024</div>

                <p className="text-sm mt-2">Persons</p>
                <div className="p-2 mt-2 border border-main rounded-lg">2 Adults, 0 children, 1 room</div>

                <span className="text-sm text-gray-500">Total 8 days</span>
            </div>

            <img className='mt-5 w-full max-h-64 object-cover rounded-xl' src={require('../assets/img/map.png')} alt="" />

            <div className='mt-5 p-5 bg-white rounded-xl'>
                <h5 className='text-lg'>All the facilities:</h5>
                
                <ul className='list-disc px-7 mt-3'>
                    <li>Private pool</li>
                    <li>Terrace</li>
                    <li>Kitchen</li>
                    <li>1 Bedroom</li>
                    <li>2 Bathrooms</li>
                    <li>kids play space</li>
                    <li>Billiard room</li>
                    <li>Private gym</li>
                </ul>
            </div>
        </>
    )

  return (
    // grid grid-cols-12 gap-5
    <div className="max-w-7xl mx-auto px-5 lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="hidden col-span-3 lg:block">
            {renderDetails()}
        </div>

        <div className="col-span-9">
            <div className='block items-center justify-between lg:flex'>
                <div>
                    <h1 className='text-xl font-semibold lg:text-2xl'>{data.title}</h1>
                    <p className='flex items-center text-gray-500 mt-3 lg:mt-2'>
                        <svg className="w-5 h-5 mr-1.5 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        {data.address}
                    </p>
                </div>

                <div className='flex flex-col items-start mt-4 lg:items-end'>
                    <p>Rating:</p>
                    <div className='flex flex-row-reverse justify-end gap-3 lg:flex-row'>
                        <svg className="w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <svg className="w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>

                        <Stars value={data.stars} />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <img className='w-full' src={require(`../assets/img/${data.img}`)} alt="" />
            </div>

            <div className='grid grid-cols-2 gap-4 mt-5 lg:grid-cols-8'>
                <div className='text-center py-2 border-2 border-main bg-white rounded-xl lg:col-span-2'>
                    Price {data.price}$
                </div>

                <div className='flex-1 text-center py-2 border-2 border-main bg-white rounded-xl lg:col-span-2'>
                    Total Price {data.price*8}$
                </div>

                <div className='col-start-1 col-span-2 text-center py-2 text-white bg-main rounded-xl lg:col-span-4'>
                    Book Now
                </div>
            </div>

            <p className='mt-10'>{data.description}</p>
            
            <div className='lg:hidden'>
                {!showDetails ? (
                    <button onClick={() => setShowDetails(true)} className='mt-10 text-lg text-main underline'>Show more</button>
                ) : (
                    <>
                        {renderDetails()}
                        <button onClick={() => setShowDetails(false)} className='mt-10 text-lg text-main underline'>Show less</button>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Stay