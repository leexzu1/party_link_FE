import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/main/start/start-inviter.jsx";
import StartGuest from "./components/main/start/start-guest.jsx";
import StartGuestNext from "./components/main/start/start-guset-loading.jsx";
import GameCategory from "./components/main/start/game-category.jsx";
import GameLoading from "./components/main/start/game-loading.jsx";
import Chatting1 from "./components/chatting/chatting1.jsx";
import Chatting2 from "./components/chatting/chatting2.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/start-guest" element={<StartGuest />}></Route>
        <Route path="/start-guest-loading" element={<StartGuestNext />}></Route>
        <Route path="/game-category" element={<GameCategory />}></Route>
        <Route path="/game-loading" element={<GameLoading />}></Route>
        <Route path="/chatting1" element={<Chatting1 />}></Route>
        <Route path="/chatting2" element={<Chatting2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
