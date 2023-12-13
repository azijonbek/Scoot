import React from "react";

const Buttons = ({ children, style }) => {
  return (
    <button
      className={`max-tablet:mx-auto text-white font-spaceMono bg-bgYellow w-[180px] hover:bg-white hover:border-2 hover:text-bgYellow hover:border-bgYellow transition-[1s]  h-[53px] yellow ${style}`}
    >
      {children}
    </button>
  );
};

export default Buttons;
