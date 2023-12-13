import React from "react";
import mapEarth from "/mock-images/location/map.png";
import { Listed } from "../../components/pages/location-components/listed/Listed";
import { FooterTop } from "../../components/pages/location-components/footerTop/FooterTop";
import mapMob from "/mock-images/location/mapMob.png";
import { H4 } from "../../components/common/headings/h4/H4";

const Location = () => {
  return (
    <>
      <FooterTop />
      <div className='container'>
        <img
          className='max-tablet:hidden py-[50px]'
          src={mapEarth}
          alt={mapEarth}
          loading='lazy'
        />
        <img
          src={mapMob}
          alt={mapMob}
          loading='lazy'
          className='hidden max-tablet:inline object-cover w-full pt-[72px] pb-[40px]'
        />
        <div className='hidden max-tablet:max-auto max-tablet:mx-auto max-w-full max-tablet:inline'>
          <button className='w-[311px] bg-amber-400 bg-opacity-20 max-tablet:text-center py-[22px] cursor-pointer m-[8px]'>
            <H4>New York</H4>
          </button>
          <button className='w-[311px] bg-amber-400 bg-opacity-20 max-tablet:text-center py-[22px] cursor-pointer m-[8px]'>
            <H4>London</H4>
          </button>
          <button className='w-[311px] bg-amber-400 bg-opacity-20 max-tablet:text-center py-[22px] cursor-pointer m-[8px]'>
            <H4>Jakarta</H4>
          </button>
          <button className='w-[311px] bg-amber-400 bg-opacity-20 max-tablet:text-center py-[22px] cursor-pointer m-[8px]'>
            <H4>Yokohama</H4>
          </button>
        </div>
        <Listed />
      </div>
    </>
  );
};

export default Location;
