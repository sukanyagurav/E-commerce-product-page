import React from 'react'
import logo from '/images/logo.svg';
import cart from '/images/icon-cart.svg';
import profile from '/images/image-avatar.png';
const Header = () => {
  return (
    <header className='flex max-w-[1200px] border-b-2 border-gray-100 py-6 pt-8 px-4 items-center mx-auto'>
      <img src={logo} alt="sneakers logo" className='mr-8'/>
      {/* <nav>
        <ul className='flex gap-10'>
            <li><a href="#none">Collections</a></li>
            <li><a href="#none">Men</a></li>
            <li><a href="#none">Women</a></li>
            <li><a href="#none">About</a></li>
            <li><a href="#none">Contact</a></li>
        </ul>
      </nav> */}
        <div className='flex items-center ml-auto gap-8'>
            <a href="#none">
                <img src={cart} alt="cart icon" />
            </a>
            <button>
                <img className='w-[50px] h-[50px]' src={profile} alt="user profile icon" />
            </button>
        </div>
    </header>
  )
}

export default Header
