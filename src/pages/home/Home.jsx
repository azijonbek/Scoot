import React from "react";
import { Hero } from "../../components/pages/home-components";
import { Advantages } from "../../components/pages/home-components/advantages/Advantages";
import { Advice } from "/src/components/pages/home-components/advice/Advice";
const Home = () => {
  return (
    <>
      <div className=''>
        <Hero />
        <Advantages />
        <Advice />
      </div>
    </>
  );
};

export default Home;
