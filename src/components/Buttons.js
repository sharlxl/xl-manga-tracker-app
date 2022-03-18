import React from "react";

const Buttons = (props) => {
  return (
    <button className=" w-full sm:w-auto px-4 py-2 m-2 text-sm     font-medium  focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-md block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-900">
      {props.children}
    </button>
  );
};

export default Buttons;
