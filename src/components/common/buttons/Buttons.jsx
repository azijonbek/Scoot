import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className='text-white font-spaceMono bg-bgYellow w-[180px] hover:bg-white hover:border-2 hover:text-bgYellow hover:border-bgYellow transition-[1s]  h-[53px] yellow'>
      {children}
    </button>
  );
};

export default Buttons;
