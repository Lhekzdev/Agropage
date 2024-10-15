import React from 'react'
import logo from '../../assets/logo.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import twitterIcon from '../../assets/twitterIcon.svg'
import world from '../../assets/world.svg'
import tele from '../../assets/tele.svg'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'

const Footer = () => {
  return (
    <div className='footer  text-left flex flex-wrap w-full lg:px-[50px] min-h-[380px] px-[26px]   pt-[50px] lg:pb-[108px] bg-[#163518] gap-[20px] lg:flex-wrap md:overflow-hidden lg:gap-[45.67px] lg:overflow-hidden'>



      {/* Logo and About Section */}
      <div className='flex flex-col w-full lg:w-auto'>
        <div className='logoContainer flex items-center gap-[12px]'>
          <img className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' src={logo} alt="LOGO" />
          <p className='text-[20px] lg:text-[22px] text-[#FEFEFE] font-bold font-georgia'>FarmSol</p>
        </div>
        <div className='textAndIcon w-[326px]'>
          <p className='text-[16px] lg:text-[18px] font-normal text-[#FEFEFE] max-w-[326px] mt-[15px] font-georgia'>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada.
          </p>
          <div className='flex gap-[15px] lg:gap-[25px] mt-[25px]'>
            <img className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' src={facebookIcon} alt="facebookIcon" />
            <img className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' src={twitterIcon} alt="twitterIcon" />
            <img className='w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]' src={world} alt="world" />
          </div>
        </div>
      </div>
      
      {/* Navigation Links Section */}
      <div className='navigations flex flex-row   w-full lg:w-auto lg:gap-[50px]'>
        {/* Explore Links */}
        <div className='w-full lg:w-auto'>
          <h4 className='text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia'>Explore</h4>
          <ul className=' text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal'>
            <li className='mt-[15px] font-georgia'>Home</li>
            <li className='mt-[15px] font-georgia'>About Us</li>
            <li className='mt-[15px] font-georgia'>Services</li>
            <li className='mt-[15px] w-[120px] font-georgia'>Our Projects</li>
            <li className='mt-[15px] font-georgia'>Latest News</li>
          </ul>
        </div>
        
        {/* Other Links */}
        <div className='w-full lg:w-auto'>
          <h4 className='text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia'>Others</h4>
          <ul className='pl-[5px] text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal'>
            <li className='mt-[15px] font-georgia'>Testimonial</li>
            <li className='mt-[15px] font-georgia'>Benefit</li>
            <li className='mt-[15px] w-[157px] font-georgia'>Meet the farmers</li>
          </ul>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className='contact w-full md:mt-10 lg:w-auto lg:mt-0 '>
        <h4 className='text-[20px] lg:text-[22px] font-bold text-[#FEFEFE] font-georgia'>Contact</h4>
        <div className='mt-[15px] flex gap-[10px] lg:gap-[15px] items-center text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal'>
          <img src={tele} alt="telephone" />
          <p className= "font-georgia">08053789452</p>
        </div>
        <div className='mt-[15px] flex gap-[10px] lg:gap-[15px] items-center text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal'>
          <img src={mail} alt="mail" />
          <p className= "font-georgia">Farmsol@servicemail.com</p>
        </div>
        <div className='w-[336px] mt-[15px] flex gap-[10px] lg:gap-[15px] items-center text-[#FEFEFE] text-[16px] lg:text-[18px] font-normal'>
          <img src={location} alt="location" />
          <p className='max-w-[312px] lg:max-w-none font-georgia'>Plot345 Trans Amadi industrial layout, Port Harcourt Rivers State</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
