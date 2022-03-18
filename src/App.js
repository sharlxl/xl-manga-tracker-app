import axios from "axios";
import MainFixedBar from "./components/MainFixedBar";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

// curl 'https://api.myanimelist.net/v2/anime?q=one&limit=4' \
// -H 'Authorization: Bearer YOUR_TOKEN'

//https://docs.api.jikan.moe/#operation/getTopManga

// const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

function App() {
  //   const topMangaList = () => {
  //     axios.get("https://api.jikan.moe/v4/top/manga").then((res) => {
  //       const topMangas = res.data;
  //       console.log(topMangas);
  //     });
  //   };
  //   topMangaList();
  return (
    <div>
      <p>App is rendering</p>
      <MainFixedBar />
      <ContentBody />
      <Footer />
    </div>
  );
}

export default App;
