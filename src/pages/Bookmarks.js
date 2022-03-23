import React from "react";
import image from "../xHappy.png";

const Bookmarks = () => {
  return (
    <div className="flex flex-col text-center mt-20">
      <h1 className="text-3xl">Work in Progress</h1>
      <img className="h-64 w-64 mx-auto" src={image} alt="WIP" />
      <p>We are still working on this!</p>
    </div>
  );
};

export default Bookmarks;
