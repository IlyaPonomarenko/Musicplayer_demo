import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControlls = () => {
  const music = useMusicPlayer();
  return (
    <>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <button>
        <FontAwesomeIcon icon={faStepBackward} onClick={music.playPrevious} />
      </button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button>
        <FontAwesomeIcon icon={faStepForward} 
        onClick={music.playNext}
        />
      </button>
    </>
  );
};

export { PlayerControlls };
