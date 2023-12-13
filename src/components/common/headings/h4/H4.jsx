import React from "react";

export const H4 = ({ children, style }) => {
  return (
    <h4
      className={`text-slate-600
  text-2xl
  font-bold
  font-spaceMono
  leading-7 max-tablet:py-[24px] ${style}`}
    >
      {children}
    </h4>
  );
};
