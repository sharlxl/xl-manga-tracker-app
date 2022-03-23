import React from "react";
import ReactDOM from "react-dom";

function massageMangaModel(manga) {
  return {
    title: manga.title,
    status: manga.status,
    chapters: manga.chapters,
    synopsis: manga.synopsis,

    genres: manga.genres.map((genre) => genre.name),
    demographics: manga.demographics.map((demo) => demo.name),
    authors: manga.authors.map((author) => author.name),
    img: manga.images.jpg.image_url,

    vol: manga.volumes,
    moreBackground: manga.background,
  };
}

const OverLay = ({ manga, onClickModalBackButton }) => {
  // external data source -> application -> massage/parse/santise to your native models -> use it internally
  const xlManga = massageMangaModel(manga);

  return (
    <div
      className="fixed z-10 top-0 left-0 h-screen w-full backdrop-blur-sm"
      onClick={onClickModalBackButton}
    >
      <div className="relative top-20 mx-auto z-50 bg-black rounded-md shadow-xl shadow-indigo-500/40 overflow-auto max-w-md max-h-[80%] p-2">
        <header className="flex flex-row justify-evenly w-11/12 h-auto">
          <h1 className="text-2xl text-center">
            {xlManga.title ? xlManga.title : "『Not available』"}
          </h1>
          <button
            className=" rounded-md absolute top-0 right-0 w-8 h-8"
            onClick={
              onClickModalBackButton
                ? onClickModalBackButton
                : "『Not available』"
            }
          >
            ✕
          </button>
        </header>
        <div className="flex flex-row text-slate-600 ">
          <div className="flex flex-col w-1/4 p-1">
            <img
              className="w-full"
              src={
                xlManga.img
                  ? xlManga.img
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
              alt={xlManga.title}
            />
            <p className="flex flex-col text-xs">
              <span className="border-b border-slate-700">Status:</span>
              <span className="text-sm text-slate-300">
                {xlManga.status ? xlManga.status : "『Not available』"}
              </span>
            </p>
            <p className="flex flex-col text-xs ">
              <span className="border-b border-slate-700">Volumes:</span>
              <span className="text-sm text-slate-300">
                {xlManga.vol ? xlManga.vol : "『Not available』"}
              </span>
            </p>
            <p className="flex flex-col text-xs">
              <span className="border-b border-slate-700">Chapters:</span>
              <span className="text-sm text-slate-300">
                {xlManga.chapters ? xlManga.chapters : "『Not available』"}
              </span>
            </p>
            <p className="flex flex-col text-xs">
              <span className="border-b border-slate-700">Genre:</span>
              {xlManga.genres
                ? xlManga.genres.map((genre) => (
                    <span className="text-sm text-slate-300">{genre}</span>
                  ))
                : "『Not available』"}
            </p>
            <p className="flex flex-col text-xs">
              <span className="border-b border-slate-700">Demographic:</span>
              {xlManga.demographics
                ? xlManga.demographics.map((demo) => (
                    <span className="text-sm text-slate-300">{demo}</span>
                  ))
                : "『Not available』"}
            </p>
            <p className="flex flex-col text-xs">
              <span className="border-b border-slate-700">Author:</span>
              {xlManga.authors
                ? xlManga.authors.map((author) => (
                    <span className="text-sm text-slate-300">{author}</span>
                  ))
                : "『Not available』"}
            </p>
          </div>
          <div className="flex flex-col w-4/5">
            <p className="text-base flex flex-col p-1 border-slate-700 border-double border-t-4">
              Synopsis:
              <span className="text-sm border-t border-slate-700 text-slate-300">
                {xlManga.synopsis ? xlManga.synopsis : "『Not available』"}
              </span>
            </p>
            <p className="text-base flex flex-col p-1 border-slate-700 border-double border-y-4">
              Background:
              <span className="text-sm border-t border-slate-700 text-slate-300">
                {xlManga.moreBackground
                  ? xlManga.moreBackground
                  : "『Not available』"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailsModal = ({ manga, onClickModalBackButton }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          manga={manga}
          onClickModalBackButton={onClickModalBackButton}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default DetailsModal;
