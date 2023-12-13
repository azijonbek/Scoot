import React from "react";
import { Hero } from "../../components/pages/career-components/hero/Hero";
import { HeroTop } from "../../components/pages/career-components/heroTop/HeroTop";
import { JoinUs } from "../../components/pages/career-components/joinUs/JoinUs";
import { Location } from "../../components/pages/career-components/location/Location";

const careers = () => {
  return (
    <>
      <HeroTop />
      <Hero />
      <JoinUs />
      <Location />
    </>
  );
};

export default careers;
