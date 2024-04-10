import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Header({showLinks}) {
  let user = JSON.parse(localStorage.getItem("user"))
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const logout = () => {
    localStorage.removeItem("user")
    window.location.reload()
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${showLinks == false ? '!bg-[#EAE9E9] !text-black' : isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'} fixed top-0 left-0 right-0 z-30 h-[64px] transition-all duration-300 ease-in-out`}>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-3 px-10'>
        <Link className='text-inherit no-underline' to='/'>
          <h1 className='font-kalnia font-medium text-2xl md:text-3xl'>ExploreEra</h1>
        </Link>

        <nav className='flex items-center'>
          <ul className='flex m-0'>
            {showLinks && (
              <div className='hidden lg:flex gap-10'>
                <li>Home</li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>Blogs</li>
                <li>About Us</li>
                <li>Our Offers</li>
              </div>
            )}
            <li>
              <button className='relative ml-10' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <svg className="w-6 h-6 hidden lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <svg className="w-8 h-8 md:w-10 md:h-10 lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {isDropdownOpen && (
                  <Dropdown>
                    <ul className='flex flex-col p-3'>
                      {user ? (
                        <>
                          <li className='dropdown_item'>{user.email}</li>
                          <hr className='text-main m-0 hidden lg:block'/>
                          <li className='dropdown_item'><button onClick={logout}>Logout</button></li>
                        </>
                      ) : (
                        <>
                          <li className='dropdown_item'><Link to='/signin'>Sign In</Link></li>
                          <hr className='text-main m-0 hidden lg:block'/>
                          <li className='dropdown_item'><Link to='/signup'>Sign Up</Link></li>
                        </>
                      )}
                      <hr className='text-main m-0 lg:hidden'/>
                      
                      <div className='lg:hidden'>
                        <li className='dropdown_item'>
                          <Link to="/">
                            Home
                          </Link>
                        </li>
                        <li className='dropdown_item'>
                          <Link to="/services">
                            Services
                          </Link>
                        </li>
                        <li className='dropdown_item'>Blogs</li>
                        <li className='dropdown_item'>Our Services</li>
                        <li className='dropdown_item'>Our Offers</li>
                      </div>
                    </ul>
                  </Dropdown>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header