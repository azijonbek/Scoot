import React from "react";
import { TextImgCard } from "../../../common/textImgCard/TextImgCard";
import meeting from "/mock-images/careers/meeting.png";
export const Hero = () => {
  return (
    <>
      <div className='container'>
        <TextImgCard
          h2={"Care to join our mission?"}
          img={meeting}
          btnText={"Say Hello"}
        >
          We’re always looking for ambitious individuals to help us on our
          journey. If you’re passionate about our mission to provide clean,
          accessible transport to improve urban living we want to hear from you!
        </TextImgCard>
      </div>
    </>
  );
};
