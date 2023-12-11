import React from "react";
import { H2 } from "/src/components/common/headings/h2/H2";
import { DfP } from "../paragraphs/p";
import Buttons from "/src/components/common/buttons/Buttons";
import selfGirl from "/public/mock-images/home/selfGirl.png";
export const TextImgCard = ({ h2, img, children, type = true }) => {
  return type ? (
    <div className='flex mx-auto gap-[185px] items-center py-[160px]'>
      <div className='w-[705px]'>
        <H2 className=''>{h2}</H2>
        <DfP>{children}</DfP>
        <Buttons>Learn More</Buttons>
      </div>
      <div className='items-center flex rounded-[50%] w-[600px] '>
        <img src={img} alt={img} className=' rounded-[50%]' loading='lazy' />
      </div>
    </div>
  ) : (
    <div className='flex mx-auto gap-[185px] items-center py-[80px]'>
      <div className='items-center flex rounded-[50%] w-[400px]'>
        <img src={img} alt={img} className=' rounded-[50%]' loading='lazy' />
      </div>
      <div className='w-[445px]'>
        <H2 styles='my-[12px]'>{h2}</H2>
        <DfP>{children}</DfP>
        <Buttons>Learn More</Buttons>
      </div>
    </div>
  );
};
