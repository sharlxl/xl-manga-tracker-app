import axios from "axios";
import MainFixedBar from "./components/MainFixedBar";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

// curl 'https://api.myanimelist.net/v2/anime?q=one&limit=4' \
// -H 'Authorization: Bearer YOUR_TOKEN'

//https://docs.api.jikan.moe/#operation/getTopManga

// const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

function App() {
  return (
    <div>
      <MainFixedBar />
      <ContentBody />
      <Footer />
    </div>
  );
}

export default App;
