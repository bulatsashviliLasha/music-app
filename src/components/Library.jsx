import LibrarySong from './LibrarySong';

function Library({
  songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus && 'active-library'}`}>
      <h2>Library</h2>
      <div className="library--songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
