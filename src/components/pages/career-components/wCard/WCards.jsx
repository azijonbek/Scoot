import React from "react";
import { DfP } from "/src/components/common/paragraphs/p/DfP";
import { H4 } from "../../../common/headings/h4/H4";
import Buttons from "../../../common/buttons/Buttons";
export const WCards = ({ h3, p }) => {
  return (
    <div className='flex max-tablet:flex-col max-xl:w-full  max-tablet:text-center max-xl:mx-auto w-[1110px] bg-[#F2F5F9] py-[32px] px-[40px] justify-between my-[12px]'>
      <div>
        <H4>{h3}</H4>
        <DfP>{p}</DfP>
      </div>
      <Buttons>Apply</Buttons>
    </div>
  );
};
