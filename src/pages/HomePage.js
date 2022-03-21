import React from "react";
import MangaCards from "../components/MangaCards";
import LoadingSpinner from "../components/LoadingSpinner";

//if the manga is loading, a spinner will appear on the page until the manga list loads.

const HomePage = (props) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        props.mangas.map((manga, index) => {
          return (
            <MangaCards
              id={!manga.mal_id ? "" : manga.mal_id}
              img={
                !manga.images.jpg.image_url ? "" : manga.images.jpg.image_url
              }
              title={!manga.title ? "" : manga.title}
              rank={!manga.rank ? "" : manga.rank}
              status={!manga.status ? "" : manga.status}
              index={index}
              onClickAddToList={props.onClickAddToList}
            />
          );
        })
      )}
    </div>
  );
};

export default HomePage;
