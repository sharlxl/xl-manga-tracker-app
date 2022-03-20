import React from "react";

const Input = (props) => {
  return (
    <input
      className="text-center rounded-md w-full sm:w-auto px-4 py-2 m-2 text-sm text-black focus:outline-violet-300"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
