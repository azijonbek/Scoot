import React from "react";
import { WCards } from "../wCard";

export const Location = () => {
  return (
    <div className='container py-[145px]'>
      <WCards h3={"General Manager"} p={"Jakarta, Indonesia"} />
      <WCards h3={"UI/UX Designer"} p={"Yokohama, Japan"} />
      <WCards h3={"Blog Content Copywriter"} p={"New York, United States"} />
      <WCards h3={"Graphic Designer"} p={"New York, United States"} />
      <WCards h3={"Fleet Supervisor"} p={"Jakarta, Indonesia"} />
      <WCards h3={"UX Analyst"} p={"London, United Kingdom"} />
    </div>
  );
};
