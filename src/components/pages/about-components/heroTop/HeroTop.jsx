import React from "react";
import { H1 } from "/src/components/common/headings/h1";
export const HeroTop = () => {
  return (
    <div className='bg-aboutBg bg-no-repeat bg-cover '>
      <div className=' bg-[#2F3B59] bg-opacity-80'>
        <div className='container py-[62px]'>
          <H1 color={true}>About</H1>
        </div>
      </div>
    </div>
  );
};
