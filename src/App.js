import React, { Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainFixedBar from "./components/MainFixedBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage";
import ReadingList from "./pages/ReadingList";
import DetailsModal from "./components/DetailsModal";
import Bookmarks from "./pages/Bookmarks";
import { useModalManga } from "./hooks/useModalManga";
import { useMangas } from "./hooks/useMangas";
import TopMangas from "./pages/TopMangas";

function App() {
  // imports from hooks
  const { topMangas, setTopMangas, mangas, setMangas, isLoading, fetchPost } =
    useMangas();
  const { onClickDetails, modalManga, onClickModalBackButton } = useModalManga({
    mangas,
  });

  const [readingList, setReadingList] = useState([]);

  //adds object to reading list
  const onClickAddToList = (e) => {
    const selectedManga = mangas.find(({ mal_id }) => mal_id == e.target.id);
    setReadingList([
      { ...selectedManga, changeUtilityBar: true },
      ...readingList,
    ]);

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

    setTopMangas(
      topMangas.map((manga) => {
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

  // remove from readinglist
  const onClickRemove = (e) => {
    const removeSelected = readingList.filter(
      (manga) => manga.mal_id != e.target.id
    );

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
    setTopMangas(
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

  const [chapterInput, setChapterInput] = useState("");

  const onChangeChapter = (e) => {
    setChapterInput(e.target.value);
  };

  return (
    <div>
      {modalManga && (
        <DetailsModal
          manga={modalManga}
          onClickModalBackButton={onClickModalBackButton}
        />
      )}

      <MainFixedBar fetchPost={fetchPost} />
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
                chapterInput={chapterInput}
                onChangeChapter={onChangeChapter}
              />
            }
          />
          <Route
            path="/top-mangas"
            element={
              <TopMangas
                topMangas={topMangas}
                isLoading={isLoading}
                onClickAddToList={onClickAddToList}
                onClickRemove={onClickRemove}
                onClickDetails={onClickDetails}
                chapterInput={chapterInput}
                onChangeChapter={onChangeChapter}
              />
            }
          />
          <Route
            path="/reading-list"
            element={
              <ReadingList
                readingList={readingList}
                onClickRemove={onClickRemove}
                onClickDetails={onClickDetails}
                chapterInput={chapterInput}
                onChangeChapter={onChangeChapter}
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
