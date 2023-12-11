import React from "react";

export const H1 = ({ children, color = false, style }) => {
  return (
    <h1
      className={`${!color ? "text-slate-600" : "text-white"}
text-[56px]
font-bold
font-spaceMono
leading-[56px] ${style}`}
    >
      {children}
    </h1>
  );
};
