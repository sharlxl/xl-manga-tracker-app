import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// curl 'https://api.myanimelist.net/v2/anime?q=one&limit=4' \
// -H 'Authorization: Bearer YOUR_TOKEN'

//https://docs.api.jikan.moe/#operation/getTopManga

const TOP_MANGA = "https://api.jikan.moe/v4/top/manga";

function App() {
  const topMangaList = () => {
    axios.get("https://api.jikan.moe/v4/top/manga").then((res) => {
      const topMangas = res.data;
      console.log(topMangas);
    });
  };
  topMangaList();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>this is working</p>
      </header>
    </div>
  );
}

export default App;
