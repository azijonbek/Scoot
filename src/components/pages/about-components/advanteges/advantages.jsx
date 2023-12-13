import React from "react";
import { TextImgCard } from "/src/components/common/textImgCard/index.js";
import holdingPhone from "/mock-images/about/HoldingPhone.png";
import street from "/mock-images/about/street.png";
export const Advantages = () => {
  return (
    <div className='container pt-[70px] pb-[78px]'>
      <TextImgCard h2={"Mobility for the digital era"} img={holdingPhone}>
        Getting around should be simple (and even fun!) for everyone. We embrace
        technology to provide low cost, smart access to scooters at your
        fingertips.
      </TextImgCard>
      <TextImgCard h2={"Better urban living"} img={street} type={false}>
        We’re helping connect cities and bring people closer together. Our
        scooters are also fully-electric and we offset the minimal carbon
        footprint for each ride.
      </TextImgCard>
    </div>
  );
};
