function LibrarySong({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((currentSong) => {
      if (currentSong.id === song.id) {
        return {
          ...currentSong,
          active: true,
        };
      }
      return {
        ...currentSong,
        active: false,
      };
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
