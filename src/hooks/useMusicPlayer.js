import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  const togglePlay = () => {
    if (state.currentTrackIndex === 0 ){
        state.audioPlayer.pause();
        state.audioPlayer = new Audio(state.tracks[0].file);
        state.audioPlayer.play();
        //setState({...state, currentTrackIndex:0, isPlaying:false})
    }
    if (state.isPlaying) {
      setState({ ...state, isPlaying: false });
      state.audioPlayer.pause();
    } else {
      setState({ ...state, isPlaying: true });
      state.audioPlayer.play();
    }
  };

  const playTrack = (index) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  };
  const playPrevious = () => {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  };
  const playNext = () => {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  };
  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPrevious,
    playNext,
  };
};

export { useMusicPlayer };
