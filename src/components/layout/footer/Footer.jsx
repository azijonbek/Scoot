import React from "react";
import { FooterTop } from "./footerTop/FooterTop";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import footerIcons from "/mock-images/footer/footerIcons.svg";
import scootIcon from "/mock-images/footer/scootWhite.png";
export const Footer = () => {
  return (
    <div className=' bg-[#333A43] '>
      <FooterTop />
      <nav className='container py-[36px] max-tablet:flex-col max-tablet:text-center max-tablet:mx-auto flex justify-between'>
        <div className=' gap-[32px] flex  max-tablet:flex-col items-center'>
          <img
            className='mr-[26px]'
            src={scootIcon}
            alt={scootIcon}
            loading='lazy'
          />
          <NavLink
            className='text-gray-400 text-[15px] font-bold font-MonoSpace leading-[25px]'
            activeClassName='active'
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className='text-gray-400 text-[15px] font-bold font-MonoSpace leading-[25px]'
            activeClassName='active'
            to='/location'
          >
            Location
          </NavLink>
          <NavLink
            className='text-gray-400 text-[15px] font-bold font-MonoSpace leading-[25px]'
            activeClassName='active'
            to='/careers'
          >
            Careers
          </NavLink>
        </div>
        <div>
          <img
            className='max-xl:mx-auto py-[85px]'
            src={footerIcons}
            alt={footerIcons}
            loading='lazy'
          />
        </div>
      </nav>
    </div>
  );
};
