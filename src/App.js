import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainFixedBar from "./components/MainFixedBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage";
import ReadingList from "./pages/ReadingList";
import axios from "axios";
import DetailsModal from "./components/DetailsModal";
import Bookmarks from "./pages/Bookmarks";

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
    let searchUrl = `https://api.jikan.moe/v4/manga?q=${searchInput}&limit=25&sfw`;
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
    setMangas(
      mangas.map((manga) => {
        if (manga.mal_id == e.target.id) {
          return {
            ...manga,
            changeUtilityBar: true,
          };
        }
        return manga;
      })
    );
  };

  const onClickRemove = (e) => {
    // console.log(typeof e.target.id);
    // console.log(typeof readingList[0].mal_id);
    const removeSelected = readingList.filter(
      (manga) => manga.mal_id != e.target.id
    );
    // console.log(removeSelected);
    setReadingList(removeSelected);
    setMangas(
      mangas.map((manga) => {
        if (manga.mal_id == e.target.id) {
          return {
            ...manga,
            changeUtilityBar: false,
          };
        }
        return manga;
      })
    );
  };

  const [showdetailsModal, setShowDetailsModal] = useState(false);
  const [modalManga, setModalManga] = useState({});

  const onClickDetails = (e) => {
    // console.log("details button id",e.target.id);
    const selectedManga = mangas.filter((manga) => manga.mal_id == e.target.id);
    // console.log("selected manga", selectedManga[0]);
    // console.log("selected genres", selectedManga[0].genres);
    // console.log("demographics", selectedManga[0].demographics);
    setModalManga({
      title: selectedManga[0].title,
      img: selectedManga[0].images.jpg.image_url,
      status: selectedManga[0].status,
      vol: selectedManga[0].volumes,
      chapters: selectedManga[0].chapters,
      genres: selectedManga[0].genres.map((genre) => genre.name),
      demographics: selectedManga[0].demographics.map((demo) => demo.name),
      authors: selectedManga[0].authors.map((author) => author.name),
      synopsis: selectedManga[0].synopsis,
      moreBackground: selectedManga[0].background,
    });
    console.log(modalManga);
    setShowDetailsModal(true);
  };

  // console.log(selectedManga);

  const onClickModalBackButton = () => {
    setShowDetailsModal(false);
    setModalManga({});
  };

  return (
    <div>
      {showdetailsModal && (
        <DetailsModal
          modalManga={modalManga}
          onClickModalBackButton={onClickModalBackButton}
        ></DetailsModal>
      )}
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
                onClickRemove={onClickRemove}
                onClickDetails={onClickDetails}
              />
            }
          />
          <Route
            path="/reading-list"
            element={
              <ReadingList
                readingList={readingList}
                onClickRemove={onClickRemove}
              />
            }
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
