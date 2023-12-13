import React from "react";
import { CircleCard } from "../../../common/circleCard/CircleCard";
import holdingOnPhone from "/mock-images/about/holdingOnPhone.png";
import scooterWithMan from "/mock-images/about/skuterWithMan.png";
import peoplesInPassageWay from "/mock-images/about/peoplesInPassageWay.png";

export const JoinUs = () => {
  return (
    <div className='flex gap-[30px] max-xl:inline pt-[90px] pb-[60px] text-center'>
      <CircleCard h3={"Our tech"} img={holdingOnPhone} num={"01"}>
        We’re using cutting edge technology to drive accessible urban
        transportation forward. Our fully electric scooters are a joy to ride!
      </CircleCard>
      <CircleCard h3={"Our integrity"} img={scooterWithMan} num={"02"}>
        We are fully committed to deliver a great yet safe, sustainable
        micro-mobility experience in every city we serve.
      </CircleCard>
      <CircleCard h3={"Our community"} img={peoplesInPassageWay} num={"03"}>
        We support every community we serve. All workers are paid a living wage
        based on their location and are Scoot employees.
      </CircleCard>
    </div>
  );
};
