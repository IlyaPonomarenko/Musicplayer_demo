import { PlayerControlls } from "./component/PlayerControlls";
import { TrackList } from "./component/TrackList";
import ambient from "./assets/ambient.mp3";
import lofi from "./assets/lofi.mp3";
import waterfall from "./assets/waterfall.mp3";
import "./App.css";
import { useState } from "react";
import { MusicContext } from "./context/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "ambient",
        file: ambient,
      },
      {
        name: "lofi",
        file: lofi,
      },
      {
        name: "waterfall",
        file: waterfall,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <>
      <MusicContext.Provider value={[state, setState]}>
        <div>
          <TrackList />
          <PlayerControlls />
        </div>
      </MusicContext.Provider>
    </>
  );
}

export default App;
