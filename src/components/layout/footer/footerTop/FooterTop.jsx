import React from "react";
import { H2 } from "/src/components/common/headings/h2";
import appStore from "/icons/apple.svg";
import playMarket from "/icons/pllayMarket.svg";
export const FooterTop = () => {
  return (
    <div className='bg-footerTop  flex bg-no-repeat bg-cover'>
      <div className='container max-xl:block max-xl:mx-auto max-xl:text-center max-tablet:flex-col max-tablet:py-[88px] py-[88px] flex items-center justify-between'>
        <H2 color={true} style={"mb-[40px]"}>
          Sign up and Scoot off today
        </H2>
        <div className='items-center gap-[10px] justify-center flex'>
          <img src={appStore} alt={appStore} loading='lazy' />
          <img src={playMarket} alt={playMarket} loading='lazy' />
        </div>
      </div>
    </div>
  );
};
