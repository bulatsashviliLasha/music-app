import { useState, useRef } from 'react';

import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

import data from './data/data';

import './styles/app.scss';

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const { currentTime } = e.target;
    const { duration } = e.target;

    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage,
    });
  };

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className={`App ${libraryStatus && 'library-active'}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      />
    </div>
  );
}

export default App;
