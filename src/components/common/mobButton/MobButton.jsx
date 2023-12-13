import React from "react";
import { DfP } from "../paragraphs/p/DfP";
import { H4 } from "../headings/h4/H4";

export const MobButton = ({ children }) => {
  return (
    <button className='w-[311px] bg-amber-400 bg-opacity-20 max-tablet:text-center py-[22px] cursor-pointer m-[8px]'>
      <H4>{children}</H4>
    </button>
  );
};
