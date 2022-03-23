import React from "react";
import UtilityBar from "./UtilityBar";

const MangaCards = (props) => {
  return (
    <div className="flex flex-col mt-10 justify-between bg-violet-100/[.06] h-auto w-64 m-2 text-center p-1 shadow-md shadow-indigo-500/40">
      <div className="text-xl place-content-start">
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
        onClickRemove={props.onClickRemove}
        onClickDetails={props.onClickDetails}
      />
    </div>
  );
};

export default MangaCards;
