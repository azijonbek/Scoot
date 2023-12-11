import React from "react";

export const DfP = ({ children, color = false, style }) => {
  return (
    <p
      className={`${
        !color ? "text-slate-600" : "text-white"
      } text-[15px] font-normal font-lexendDeca leading-[25px] ${style}`}
    >
      {children}
    </p>
  );
};
