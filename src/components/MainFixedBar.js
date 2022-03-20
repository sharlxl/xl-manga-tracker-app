import React, { useState } from "react";
import Input from "./Input";
import { NavLink } from "react-router-dom";

const MainFixedBar = () => {
  console.log("MainFixedBar is rendering");
  const [dropdown, setDropdown] = useState(false);

  const onClickDropDown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else if (dropdown) {
      setDropdown(false);
    }
  };

  return (
    <div className=" bg-tolopea-600 border y-4 border-tolopea-500 bore h-12 flex justify-between">
      <div className="flex">
        <button
          className="h-10 w-10 p-1 hover:text-violet-600"
          onClick={onClickDropDown}
        >
          ☰
        </button>
        {dropdown ? (
          <div className="h-10 flex text-center items-center justify-evenly">
            <NavLink
              className="p-1 hover:text-violet-600 active:text-violet-700"
              to="/top-mangas"
            >
              Home
            </NavLink>
            <NavLink
              className="p-1 hover:text-violet-600 active:text-violet-700"
              to="/reading-list"
            >
              Reading List
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex">
        <Input type="text" placeholder="search" />
        <button className="text-center items-center w-10 sm:w-auto m-2 text-sm     font-medium  focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-300 focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-md block  border-b bg-black hover:text-violet-500 border-violet-300 active:text-violet-700">
          Go!
        </button>
      </div>
    </div>
  );
};

export default MainFixedBar;
