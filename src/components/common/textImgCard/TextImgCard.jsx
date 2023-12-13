import React from "react";
import { H2 } from "/src/components/common/headings/h2/H2";
import { DfP } from "../paragraphs/p";
import Buttons from "/src/components/common/buttons/Buttons";
export const TextImgCard = ({
  h2,
  img,
  children,
  type = true,
  btnText = "Learn More",
}) => {
  return type ? (
    <div className='max-xl:flex-col max-xl:text-center max-tablet:py-[120px] max-tablet:items-center max-tablet:text-center max-tablet:gap-0 max-tablet:mx-auto flex mx-auto gap-[56px] items-center py-[70px]'>
      <div className='w-[705px] max-xl:w-[375px] max-xl:order-1 max-tablet:pt-[56px]'>
        <H2>{h2}</H2>
        <DfP style={"mb-[20px] max-tablet:mt-[12px]"}>{children}</DfP>
        <Buttons style={"mt-[20px]"}>{btnText}</Buttons>
      </div>
      <div className='items-center max-xl:order-0 flex rounded-[50%] max-tablet:w-[375px] '>
        <img src={img} alt={img} className=' rounded-[50%]' loading='lazy' />
      </div>
    </div>
  ) : (
    <div className='max-xl:flex-col max-xl:text-center max-tablet:py-[120px] max-tablet:items-center max-tablet:text-center max-tablet:gap-0 max-tablet:mx-auto flex mx-auto gap-[56px] items-center py-[70px]'>
      <div className='items-center max-xl:order-0 flex rounded-[50%] max-tablet:w-[375px] '>
        <img src={img} alt={img} className=' rounded-[50%]' loading='lazy' />
      </div>
      <div className='w-[705px] max-xl:w-[375px] max-xl:order-1 max-tablet:pt-[56px]'>
        <H2>{h2}</H2>
        <DfP style={"mb-[20px] max-tablet:mt-[12px]"}>{children}</DfP>
        <Buttons style={"mt-[20px]"}>{btnText}</Buttons>
      </div>
    </div>
  );
};
