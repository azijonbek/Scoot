import React from "react";
import { H1 } from "/src/components/common/headings/h1";
import { DfP } from "/src/components/common/paragraphs/p";
import Buttons from "/src/components/common/buttons/Buttons";
export const Hero = () => {
  return (
    <div className='bg-hero   bg-no-repeat bg-cover'>
      <div className='bg-black bg-opacity-40'>
        <div className='container  py-[153px]'>
          <H1 color={true} style=' w-[550px] my-[20px]'>
            Scooter sharing made simple
          </H1>
          <DfP style='w-[405px] my-[20px]' color={true}>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </DfP>
          <Buttons>Get Scootin</Buttons>
        </div>
      </div>
    </div>
  );
};
