import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainFixedBar from "./components/MainFixedBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage";
import ReadingList from "./pages/ReadingList";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mangas, setMangas] = useState({});
  const [readingList, setReadingList] = useState([]);

  const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

  //state for input on search bar
  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  //search on submit
  const onSubmitSearch = (e) => {
    e.preventDefault();
    let searchUrl = `https://api.jikan.moe/v4/manga?q=${searchInput}&limit=25`;
    fetchPost(searchUrl);

    setSearchInput("");
  };

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
      setMangas(data);
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

  //add to reading list
  const onClickAddToList = (e) => {
    const selectedManga = mangas.find(({ mal_id }) => mal_id == e.target.id);
    setReadingList([selectedManga, ...readingList]);
  };

  return (
    <div>
      <MainFixedBar
        searchInput={searchInput}
        onChangeSearchInput={onChangeSearchInput}
        onSubmitSearch={onSubmitSearch}
      />
      <main>
        <Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home-page" />} />
          <Route
            path="/home-page"
            element={
              <HomePage
                mangas={mangas}
                isLoading={isLoading}
                onClickAddToList={onClickAddToList}
              />
            }
          />
          <Route
            path="/reading-list"
            element={<ReadingList readingList={readingList} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
