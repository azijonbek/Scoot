import React from "react";
import { H1 } from "/src/components/common/headings/h1";
import { DfP } from "/src/components/common/paragraphs/p";
import Buttons from "/src/components/common/buttons/Buttons";
export const Hero = () => {
  return (
    <div className='bg-hero max-mobile:w-[375px]  bg-no-repeat bg-cover'>
      <div className='bg-[#2F3B59] c bg-opacity-80'>
        <div className='  container max-tablet:container-mobile max-xl:text-center  max-tablet:text-center  py-[153px] max-tablet:w-[375px] max-tablet:mx-auto'>
          <H1
            color={true}
            style=' w-[550px] max-ml:w-auto max-tablet:w-[305px] max-tablet:text-center max-xl:mx-auto my-[20px]'
          >
            Scooter sharing made simple
          </H1>
          <DfP
            style='w-[350px] my-[20px] max-tablet:text-center max-xl:mx-auto'
            color={true}
          >
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </DfP>
          <div className='max-tablet:text-center'>
            <Buttons style={"mx-auto text-center"}>Get Scootin</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};
