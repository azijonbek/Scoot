import React from "react";
import advTel from "/icons/advTel.svg";
import advScoot from "/icons/advScoot.svg";
import advScootByMan from "/icons/advScootByMan.svg";
import { H4 } from "/src/components/common/headings/h4/H4";
import { DfP } from "../../../../common/paragraphs/p";

export const AdvCard = ({ img, h3, p, style }) => {
  return (
    <div
      className={` mix-xl:w-[503px] smPadding  max-tablet:block max-xl:flex  max-xl:mx-auto max-xl:gap-[79px ] max-xl:items-start${style}`}
    >
      <img
        className=' max-tablet:mx-auto'
        src={
          img === "advTell"
            ? advTel
            : img === "advScoot"
            ? advScoot
            : advScootByMan
        }
        alt={img}
        loading='lazy'
      />{" "}
      <div className='min-xl:pl-[79px] max-tablet:p-0 max-xl:pl-[79px]'>
        <H4 style='py-[24px]'>{h3}</H4>
        <DfP>{p}</DfP>
      </div>
    </div>
  );
};
