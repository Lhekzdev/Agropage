import React from 'react'
import Header from '../header/Header'
import farm from '../../assets/farm.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Nav = () => {
    let [isMenuOpen,setIsMenuOpen] = useState(false);
    return (
      <>
       <div className='bg-white py-2 px-3'> 
       <ol className='flex flex-wrap items-center justify-around'>
          <li className='flex'>
             <img  src={farm}  alt="logo" />
             <p className='font-Georgia text-[#163518] font-bold text-2xl pt-3'>FarmSol</p>
          </li>
          <li className='hidden lg:flex flex-wrap items-center justify-between gap-10  m-4'>
             <Link className='text-[#163518] text-[22px] font-bold font-georgia hover:bg-secondary' to="/">Home</Link>
             <Link className='text-[#163518] text-[22px] font-normal font-georgia' to="/about">About Us</Link>
             <Link className='text-[#163518] text-[22px] font-normal font-georgia' to="/services">Services</Link>
             <Link className='text-[#163518] text-[22px] font-normal font-georgia' to="/contact">Contact Us</Link>
          </li>
          <li className=' hidden lg:flex text-center justify-between gap-10'>
          <button className='h-12 w-40 border rounded-[18px] px-2 py-2 text-white bg-[#163518] hover:bg-customGreen text-lg font-normal font-Georgia' to="/getStarted">Get started</button>
          </li>
          <i className='relative bx bx-menu lg:hidden block text-5xl cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)}></i>
          <div className={`absolute lg:hidden z-[100000000] top-24 left-0 w-full bg-white flex flex-col items-center justify-center gap-6 text-base font-medium font-poppines transform transition-transform ${isMenuOpen ? 'opacity-100' :'opacity-0'}`}>
          <Link className='w-full text-[22px] font-normal font-georgia text-center p-3 hover:bg-[#163518] hover:text-white transition-all cursor-pointer' to="/">Home</Link> 
          <Link className='w-full text-[22px] font-normal font-georgia text-center p-3 hover:bg-[#163518] hover:text-white transition-all cursor-pointer' to="/about">About Us</Link>
          <Link className='w-full text-[22px] font-normal font-georgia text-center p-3 hover:bg-[#163518] hover:text-white transition-all cursor-pointer' to="/services">Services</Link>
          <Link className='w-full text-[22px] font-normal font-georgia text-center p-3 hover:bg-[#163518] hover:text-white transition-all cursor-pointer' to="/contact">Contact Us</Link>
          <button className='w-full text-[22px] font-normal font-georgia text-center p-3  bg-[#163518] hover:text-white hover:bg-customGreen transition-all cursor-pointer' to="/getStarted">Get Started</button>
          </div>
        </ol>
      </div>
      <Header/>
      </>
    )
}

export default Nav