import React from "react";
import { H2 } from "../../../common/headings/h2/H2";
import { DfP } from "../../../common/paragraphs/p/DfP";
import Buttons from "../../../common/buttons/Buttons";

export const Listed = () => {
  return (
    <div className='flex max-xl:flex-col max-xl:gap-[30px] max-xl:text-center items-center gap-[105px] justify-between py-[70px]'>
      <H2>Your city not listed?</H2>
      <DfP style={"max-xl:w-full w-[600px]"}>
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </DfP>
      <Buttons>Message Us</Buttons>
    </div>
  );
};
