import React from "react";
import UtilityBar from "./UtilityBar";

const MangaCards = (props) => {
  // console.log("MangaCards is rendering");

  return (
    <div className=" flex flex-col place-content-end border-2 h-auto w-64 m-2 text-center p-1">
      <div className="text-xl">
        <p>{props.title}</p>
      </div>
      <div className=" flex place-content-center">
        <img className="w-5/6" src={props.img} alt={props.title} />
      </div>
      <div className="flex justify-between text-xs p-1">
        <p>Rank: {props.rank}</p>
        <p>{props.status}</p>
      </div>
      <UtilityBar
        id={props.id}
        chapters={props.chapters}
        onClickAddToList={props.onClickAddToList}
        changeUtilityBar={props.changeUtilityBar}
      />
    </div>
  );
};

export default MangaCards;
