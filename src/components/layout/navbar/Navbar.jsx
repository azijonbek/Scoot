import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Buttons from "../../common/buttons/Buttons";
import scootIcon from "/public/icons/scootIcon.svg";
export const Navbar = () => {
  return (
    <nav className='container py-[36px]   flex justify-between'>
      <div className=' gap-[32px] flex items-center'>
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
        <Buttons>Get Scootin</Buttons>
      </div>
    </nav>
  );
};
