import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Buttons from "../../common/buttons/Buttons";
import scootIcon from "/icons/scootIcon.svg";
import menu from "/icons/navbarIcon.svg";
import { H4 } from "../../common/headings/h4/H4";
export const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const openBurger = () => {
    setBurger(!burger);
  };
  return (
    <>
      <nav className='container max-mobile:w-full'>
        <div className='max-tablet:hidden  py-[36px]   flex justify-between'>
          <div className=' gap-[32px] flex items-center'>
            <NavLink to='/'>
              <img
                className='mr-[26px]'
                src={scootIcon}
                alt={scootIcon}
                loading='lazy'
              />
            </NavLink>
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
        </div>
        <div className='max-tablet:block  hidden'>
          <div className=' py-[24px] flex gap-[98px]'>
            <img
              className='cursor-pointer'
              onClick={() => openBurger()}
              src={menu}
              alt={menu}
            />
            <img src={scootIcon} alt='img' loading='lazy' />
          </div>
        </div>
      </nav>
      {burger ? (
        <div className='gap-[32px] fixed   bg-[#333A44]  w-[303px]  text-start pl-[32px] h-[603px]'>
          <div className='pt-[40px]'>
            <NavLink to='/about'>
              <H4 style='text-white'>About</H4>
            </NavLink>
            <NavLink to='/location'>
              <H4 style='text-white'>Location</H4>
            </NavLink>
            <NavLink to='/careers'>
              <H4 style='text-white'>Careers</H4>
            </NavLink>
            <Buttons style={"mt-[20vh]"}>Get Scotion</Buttons>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
