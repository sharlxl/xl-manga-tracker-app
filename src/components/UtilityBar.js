import React from "react";

//if change utility bar is true, it means that manga has been added to reading list, therefore changing the buttons that is at the utility bar

const UtilityBar = (props) => {
  return (
    <>
      {!props.changeUtilityBar ? (
        <div className="flex flex-row">
          <button className="border-2 basis-1/6">♡</button>
          <button
            id={props.id}
            onClick={props.onClickAddToList}
            className="border-2 basis-4/6 text-sm"
          >
            Add to Reading List
          </button>
          <button className="border-2 basis-1/6">•••</button>
        </div>
      ) : (
        <div className="flex flex-row">
          <button index={props.index} className="border-2 basis-1/6">
            ✘
          </button>
          <input
            type="text"
            id={props.id}
            className="border-2 text-black text-center basis-2/6 text-sm"
            placeholder="Chapter"
          />
          <p className="basis-2/6">/ {props.chapters}</p>
          <button className="border-2 basis-1/6">•••</button>
        </div>
      )}
    </>
  );
};

export default UtilityBar;
