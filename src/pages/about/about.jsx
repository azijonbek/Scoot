import React from "react";
import { HeroTop } from "/src/components/pages/about-components/heroTop/index";
import { Advantages } from "/src/components/pages/about-components/advanteges/advantages";
import { OurValues } from "/src/components/pages/about-components/ourValues/OurValues";
import FAQs from "/src/components/pages/about-components/faq's/FAQs";
const About = () => {
  return (
    <>
      <HeroTop />
      <Advantages />
      <OurValues />
      <FAQs />
    </>
  );
};

export default About;
