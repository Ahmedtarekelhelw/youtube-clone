import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import Navbar from "./components/Navbar";
import SearchFeed from "./pages/SearchFeed";
import { useEffect } from "react";
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </>
  );
};

export default App;
