import React from "react";
import { H2 } from "/src/components/common/headings/h2";
import appStore from "/icons/apple.svg";
import playMarket from "/icons/pllayMarket.svg";
export const FooterTop = () => {
  return (
    <div className='bg-footerTop  flex bg-no-repeat w-[100%] bg-cover'>
      <div className='container flex items-center justify-between h-[300px]'>
        <H2 color={true}>Sign up and Scoot off today</H2>
        <div className='items-center gap-[10px] flex'>
          <img src={appStore} alt={appStore} loading='lazy' />
          <img src={playMarket} alt={playMarket} loading='lazy' />
        </div>
      </div>
    </div>
  );
};
