import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import MangaCards from "../components/MangaCards";

const TopMangas = (props) => {
  return (
    <>
      <h1 className="text-2xl mt-20 text-center">Top Mangas </h1>
      <div className="flex flex-wrap justify-evenly">
        {props.isLoading ? (
          <LoadingSpinner />
        ) : (
          props.topMangas.map((manga, index) => {
            return (
              <MangaCards
                key={index}
                index={index}
                id={!manga.mal_id ? "NA" : manga.mal_id}
                img={
                  !manga.images.jpg.image_url
                    ? "NA"
                    : manga.images.jpg.image_url
                }
                title={!manga.title ? "NA" : manga.title}
                rank={!manga.rank ? "NA" : manga.rank}
                chapters={!manga.chapters ? "NA" : manga.chapters}
                status={!manga.status ? "NA" : manga.status}
                changeUtilityBar={manga.changeUtilityBar}
                onClickAddToList={props.onClickAddToList}
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

export default TopMangas;
