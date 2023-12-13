import React from "react";

export const H2 = ({ children, color = false, style }) => {
  return (
    <h2
      className={`${
        !color ? "text-slate-600" : "text-white"
      } text-5xl font-bold font-spaceMono leading-[48px] my-[12px] ${style}`}
    >
      {children}
    </h2>
  );
};
