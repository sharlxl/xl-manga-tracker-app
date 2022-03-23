import { useState } from "react";

// custom hook
export const useModalManga = ({ mangas }) => {
  const [modalManga, setModalManga] = useState(undefined);

  const onClickModalBackButton = () => {
    setModalManga(undefined);
  };

  const onClickDetails = (e) => {
    const selectedManga = mangas.filter((manga) => manga.mal_id == e.target.id);
    setModalManga(selectedManga[0]);
  };

  return {
    modalManga,
    onClickModalBackButton,
    onClickDetails,
  };
};
