import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Aside } from "./components/Aside";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Playlists } from "./pages/Playlists/Playlists";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { CategoryVideos } from "./pages/CategoryPage/CategoryVideos";
import { SingleVideoPage } from "./pages/SingleVideo/SingleVideoPage";
import { SinglePlaylist } from "./pages/Playlists/SinglePlaylist";

function App() {
  return (
    <div className="App">
      <Aside />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/category/:category" element={<CategoryVideos />} />
          <Route path="/video/:videoId" element={<SingleVideoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
