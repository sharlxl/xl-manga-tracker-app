import React from "react";
import MangaCards from "../components/MangaCards";

//if the reading list array is 0, it will display "Your list is empty!"
//otherwise it will generate the selected managas

const ReadingList = (props) => {
  return (
    <>
      <h1 className="text-2xl mt-20 text-center">Reading List </h1>
      <div className="flex flex-wrap justify-evenly mt-20">
        {props.readingList.length == 0 ? (
          <div>
            <h2>Your list is empty!</h2>
          </div>
        ) : (
          props.readingList.map((manga, index) => {
            return (
              <MangaCards
                key={index}
                index={index}
                id={!manga.mal_id ? "" : manga.mal_id}
                img={
                  !manga.images.jpg.image_url ? "" : manga.images.jpg.image_url
                }
                title={!manga.title ? "" : manga.title}
                rank={!manga.rank ? "" : manga.rank}
                status={!manga.status ? "" : manga.status}
                chapters={!manga.chapters ? "???" : manga.chapters}
                onClickAddToList={props.onClickAddToList}
                changeUtilityBar={manga.changeUtilityBar}
                onClickRemove={props.onClickRemove}
                onClickDetails={props.onClickDetails}
                chapterInput={props.chapterInput}
                onChangeChapter={props.onChangeChapter}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default ReadingList;
