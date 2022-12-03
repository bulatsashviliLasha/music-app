function Song({ currentSong, isPlaying }) {
  const animationStatus = isPlaying ? { animationPlayState: 'running' } : { animationPlayState: 'paused' };

  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} style={animationStatus} className="rotating" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
