import React, { useState, useEffect } from "react";
import axios from "axios";
import MangaCards from "./MangaCards";
import LoadingSpinner from "./LoadingSpinner";

//

const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

const ContentBody = () => {
  console.log("ContentBody is rendering");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topMangas, setTopMangas] = useState({});

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios(url, { signal });
      if (res.status !== 200) {
        throw new Error("Something Went Wrong :(");
      }
      const data = await res.data.data;
      setTopMangas(data);

      //   console.log("api top manga", data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchPost(TOP_MANGA, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  console.log(topMangas);
  //   console.log("topmanga title", topMangas[0].title);
  //   console.log("topmanga img", topMangas[10].images.jpg.image_url);
  //   console.log("topmanga img", topMangas[10].rank);
  //   console.log("topmanga img", topMangas[10].status);
  return (
    <div className="flex flex-wrap justify-evenly">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        topMangas.map((manga, index) => {
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
            />
          );
        })
      )}
    </div>
  );
};

export default ContentBody;
