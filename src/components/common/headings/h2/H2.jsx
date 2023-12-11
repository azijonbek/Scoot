import React from "react";

export const H2 = ({ children, color = false }) => {
  return (
    <h2
      className={`${!color ? "text-slate-600" : "text-white"}
 text-5xl
 font-bold
 font-spaceMono
 leading-[48px] my-[12px]`}
    >
      {children}
    </h2>
  );
};
