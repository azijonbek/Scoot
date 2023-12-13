import React from "react";
import mapEarth from "/mock-images/location/map.png";
import { Listed } from "../../components/pages/location-components/listed/Listed";
import { FooterTop } from "../../components/pages/location-components/footerTop/FooterTop";
import mapMob from "/mock-images/location/mapMob.png";
import MobButton from "../../components/common/mobButton/mobButton";
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
          <MobButton>New York</MobButton>
          <MobButton>London</MobButton>
          <MobButton>Jakarta</MobButton>
          <MobButton>Yokohama</MobButton>
        </div>
        <Listed />
      </div>
    </>
  );
};

export default Location;
