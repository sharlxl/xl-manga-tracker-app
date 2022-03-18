import React from "react";

const Input = (props) => {
  return (
    <input
      className=" w-full sm:w-auto px-4 py-2 m-2 text-sm     font-medium"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
