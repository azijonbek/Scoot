import React from "react";
import { TextImgCard } from "../../../common/textImgCard/TextImgCard";
import selfGirl from "/mock-images/home/selfGirl.png";
import cityView from "/mock-images/home/cityView.png";
import wallet from "/mock-images/home/wallet.png";
export const Advice = () => {
  return (
    <div className='container '>
      <TextImgCard
        h2={"Easy to use riding telemetry"}
        img={selfGirl}
        type={true}
      >
        The Scoot app is available with riding telemetry. This means it can show
        you your average speed, how long you've been using the scooter, your
        traveling distance, and many more things all in an easy to use app.
      </TextImgCard>
      <TextImgCard h2={"Coming to a city near you"} img={cityView} type={false}>
        Scoot is available in 4 major cities so far. We’re expanding rapidly, so
        be sure to let us know if you want to see us in your hometown. We’re
        aiming to let our scooters loose on 23 cities over the coming year.
      </TextImgCard>
      <TextImgCard h2={"Zero hassle payments"} img={wallet} type={true}>
        Our payment is as easy as one two three. We accept most credit cards and
        debit cards. You can also link your PayPal account inside the app. Need
        to pay later? No worries! You can defer payment for up to a month.
      </TextImgCard>
    </div>
  );
};
