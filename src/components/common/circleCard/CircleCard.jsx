import React from "react";
import { H4 } from "/src/components/common/headings/h4/H4";
import { DfP } from "/src/components/common/paragraphs/p/DfP";
export const CircleCard = ({ children, h3, num, img }) => {
  return (
    <div className='w-[350px] text-center mx-auto flexmax-xl:flex-col justify-center'>
      <div className='relative'>
        <img
          className='rounded-[50%] mx-auto '
          src={img}
          alt={img}
          loading='lazy'
        />
        <H4
          style={
            "w-[96px] h-[96px] absolute rounded-[50%] rounded-[50%] max-mobile:bottom-[50%] flex justify-center items-center mx-auto bottom-[35%] bg-bgYellow left-[35%]"
          }
        >
          {num}
        </H4>
        <H4 style={"mt-[87px] mb-[13px]"}>{h3}</H4>
        <DfP style={"my-[13px]"}>{children}</DfP>
      </div>
    </div>
  );
};
