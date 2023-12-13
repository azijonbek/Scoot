import React from "react";
import { AdvCard } from "./advCard/AdvCard";

export const Advantages = () => {
  return (
    <>
      <div className='max-xl:w-[574px] max-xl:block max-tablet:block max-tablet:text-center max-tablet:mx-auto max-[2400px]:flex  container gap-[30px] py-[80px] '>
        <AdvCard
          img={"advTell"}
          h3={"Locate with app"}
          p={
            "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
          }
        />
        <AdvCard
          img={"advScoot"}
          h3={"Pick your scooter"}
          p={
            "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
          }
        />
        <AdvCard
          img={"advScootByMan"}
          h3={"Enjoy the ride"}
          p={
            "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
          }
        />
      </div>
    </>
  );
};
