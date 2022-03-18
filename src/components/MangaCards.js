import React from "react";
import Buttons from "./Buttons";

const MangaCards = (props) => {
  console.log("MangaCards is rendering");
  return (
    <div
      className=" flex flex-col place-content-center border-2 h-auto w-64 m-2 text-center p-1"
      id={props.id}
    >
      <div className=" flex place-content-center">
        <img className="w-5/6" src={props.img} alt={props.title} />
      </div>
      <div className="flex justify-between text-xs">
        <p>Rank: {props.rank}</p>
        <p>{props.status}</p>
      </div>
      <div className="text-xl">
        <p>{props.title}</p>
      </div>
      <div className="flex flex-row">
        <button className="border-2 basis-1/6">♡</button>
        <button className="border-2 basis-4/6 text-sm">
          Add to Reading List
        </button>
        <button className="border-2 basis-1/6">•••</button>
      </div>
    </div>
  );
};

export default MangaCards;
