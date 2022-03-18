import React from "react";
import Buttons from "./Buttons";
import Input from "./Input";

const MainFixedBar = () => {
  console.log("MainFixedBar is rendering");
  return (
    <div className=" bg-tolopea-600 border y-4 border-tolopea-500 bore h-12 flex justify-between">
      <div className="flex">
        <Buttons children="Home" />
        <Buttons children="Reading list" />
      </div>
      <div className="flex">
        <Input type="text" placeholder="search" />
        <Buttons children="Go" />
      </div>
    </div>
  );
};

export default MainFixedBar;
