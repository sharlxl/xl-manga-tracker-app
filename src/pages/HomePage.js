import React from "react";
import MangaCards from "../components/MangaCards";
import LoadingSpinner from "../components/LoadingSpinner";

//if the manga is loading, a spinner will appear on the page until the manga list loads.

const HomePage = (props) => {
  return (
    <>
      <h1 className="text-4xl mt-20 text-center">X Manga Tracker </h1>
      <div className="flex flex-wrap justify-evenly">
        {props.isLoading ? (
          <LoadingSpinner />
        ) : (
          props.mangas.map((manga, index) => {
            return (
              <MangaCards
                key={index}
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
                index={index}
                onClickAddToList={props.onClickAddToList}
                changeUtilityBar={manga.changeUtilityBar}
                onClickRemove={props.onClickRemove}
                onClickDetails={props.onClickDetails}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default HomePage;
