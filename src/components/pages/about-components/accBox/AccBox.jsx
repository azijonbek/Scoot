import React, { useState } from "react";
import { H4 } from "../../../common/headings/h4/H4";
import { DfP } from "/src/components/common/paragraphs/p/DfP";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
export const AccBox = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [arrow, setArrow] = useState(false);

  const handleClick = (index) => {
    setArrow(!arrow);
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className='flex max-xl:flex-col max-xl:text-center pt-[64px] container gap-[30px] max-tablet:text-center'>
      <div className=' max-mobile:w-[320px] min-tablet:w-[700px] max-tablet:inline'>
        <H4>How it works</H4>
      </div>
      <div className='container tablet:w-[700px] max-tablet:inline max-tablet:mx-auto'>
        {items.map((item, index) => (
          <div
            key={index}
            className='my-[8px] max-tablet:mx-auto cursor-pointer w-[730px] max-mobile:w-[360px] max-tablet:w-full bg-slate-100 py-[35px] px-[40px] items-center'
            onClick={() => handleClick(index)}
          >
            <div
              className={`text-slate-600 text-2xl font-bold font-spaceMono flex${
                index === activeIndex ? "active" : ""
              } flex justify-between`}
            >
              {item.title}
              <div className={`${arrow ? "rotate-180" : ""} duration-300`}>
                {" "}
                <IoIosArrowUp />
              </div>
            </div>
            {index === activeIndex && (
              <DfP className='font-spaceMono  py-[24px] '>{item.content}</DfP>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
