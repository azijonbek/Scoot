import React from "react";
import advTel from "/public/icons/advTel.svg";
import advScoot from "/public/icons/advScoot.svg";
import advScootByMan from "/public/icons/advScootByMan.svg";
import { H4 } from "/src/components/common/headings/h4/H4";
import { DfP } from "../../../../common/paragraphs/p";

export const AdvCard = ({ img, h3, p }) => {
  return (
    <div className='w-[350px]'>
      <img
        src={
          img === "advTell"
            ? advTel
            : img === "advScoot"
            ? advScoot
            : advScootByMan
        }
        alt={img}
        loading='lazy'
      />
      <H4>{h3}</H4>
      <DfP>{p}</DfP>
    </div>
  );
};
