import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft, faAngleRight, faPause, faPlay,
} from '@fortawesome/free-solid-svg-icons';

function Player({
  audioRef,
  setSongInfo,
  setCurrentSong,
  songInfo,
  currentSong,
  isPlaying,
  songs,
  setSongs,
  setIsPlaying,
}) {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (nextPrev.id === song.id) {
        return {
          ...song,
          active: true,
        };
      }
      return {
        ...song,
        active: false,
      };
    });

    setSongs(newSongs);
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const getTime = (time) => (
    `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`
  );

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };



  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnimation} className="animate-track" />
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={skipTrackHandler.bind(this, 'skip-back')}
          icon={faAngleLeft}
          size="2x"
          className="skip-back"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="play"
        />
        <FontAwesomeIcon
          onClick={skipTrackHandler.bind(this, 'skip-forward')}
          icon={faAngleRight}
          size="2x"
          className="skip-forward"
        />
      </div>
    </div>
  );
}

export default Player;
