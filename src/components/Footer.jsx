import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="bg-[#EAE9E9]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 pt-10 px-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className='font-kalnia font-medium text-3xl'>ExploreEra</h3>
                    <p className="leading-6">Travel agency which helps<br/> you to plan your perfect<br/> holidays</p>

                    <h4 className="text-xl my-2">Follow Us</h4>
                    <div className="flex items-start gap-3">
                        <a href="https://www.linkedin.com/in/andrey-simonyan-2b2b8918a/">
                            <img className='w-8 h-8' src={require('../assets/img/instagram.png')} alt="Instagram Logo" />
                        </a>
                        <img className='w-8 h-8' src={require('../assets/img/facebook.png')} alt="Facebook Logo" />
                        <img className="w-8 h-8" src={require('../assets/img/linkedIn.png')} alt="LinkedIn Logo" />
                    </div>
                </div>

                <div className='flex flex-col items-start !mt-4 sm:!mt-0'>
                    <ul className='grid grid-flow-row gap-y-3 p-0'>
                        <li className='text-xl'>Links</li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Services
                            </Link>
                        </li>
                        <li>Blogs</li>
                        <li>Our services</li>
                        <li>Our offers</li>
                    </ul>
                </div>

                <div className='flex flex-col items-start !mt-4 sm:!mt-0'>
                    <ul className='grid grid-flow-row gap-y-3 p-0'>
                        <li className='text-xl'>Contact Us</li>
                        <li>exploreera@gmail.com</li>
                        <li>555111222</li>
                        
                        <li className='sm:hidden lg:block'>
                            <span className='text-lg'>Subscribe News</span>
                            <div className='relative flex items-center p-2 border border-black rounded-xl mt-3'>
                                <input className='bg-transparent outline-none' placeholder="Email" type="text" />
                                <svg className="absolute right-3 w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='hidden flex-col justify-center sm:flex lg:hidden'>
                    <span className='text-lg'>Subscribe News</span>
                    <div className='relative flex items-center p-2 border border-black rounded-xl mt-3'>
                        <input className='bg-transparent outline-none' placeholder="Email" type="text" />
                        <svg className="absolute right-3 w-6 h-6 text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='flex justify-center py-5'>Copyright 2024</div>
        </div>
    </footer>
  )
}

export default Footer