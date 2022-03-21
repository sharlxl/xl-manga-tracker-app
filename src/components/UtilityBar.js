import React from "react";

//if change utility bar is true, it means that manga has been added to reading list, therefore changing the buttons that is at the utility bar

const UtilityBar = (props) => {
  return (
    <>
      {!props.changeUtilityBar ? (
        <div className="flex flex-row">
          <button className="border border-violet-500 rounded-full basis-1/6 hover:text-violet-500">
            ☆
          </button>
          <button
            id={props.id}
            onClick={props.onClickAddToList}
            className="border-y border-violet-500 basis-5/6 text-sm mx-1 hover:text-violet-500 "
          >
            Add to Reading List
          </button>
          <button
            id={props.id}
            onClick={props.onClickDetails}
            className="border border-violet-500 rounded-full basis-1/6 hover:text-violet-500"
          >
            •••
          </button>
        </div>
      ) : (
        <div className="flex flex-row">
          <button
            id={props.id}
            className="border border-violet-500 rounded-full basis-[25%] hover:text-violet-500"
            onClick={props.onClickRemove}
          >
            ✘
          </button>
          <input
            type="text"
            id={props.id}
            className="bg-slate-900 text-slate-100 text-center basis-[25%] text-sm rounded-lg border border-slate-700 focus:outline-none focus:ring ring-violet-900  mx-1 max-w-[45%]"
            placeholder="Chapter"
          />
          <p className="basis-[30%] mr-1">/ {props.chapters}</p>
          <button
            id={props.id}
            className="border border-violet-500 rounded-full basis-[25%] hover:text-violet-500"
            onClick={props.onClickDetails}
          >
            •••
          </button>
        </div>
      )}
    </>
  );
};

export default UtilityBar;
