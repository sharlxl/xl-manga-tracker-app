import { useState, useEffect } from "react";
import axios from "axios";

const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

export const useMangas = () => {
  const [mangas, setMangas] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch data function
  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios(url, { signal });
      if (res.status !== 200) {
        throw new Error("Something Went Wrong :(");
      }
      const data = await res.data.data;
      setMangas(data.map((manga) => ({ ...manga, changeUtilityBar: false })));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  //fetch top mangas data for main page
  useEffect(() => {
    const controller = new AbortController();

    fetchPost(TOP_MANGA, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return {
    mangas,
    setMangas,
    isLoading,
    fetchPost,
  };
};
