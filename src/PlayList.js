import React from 'react';
import './App.sass';

const Component = ({albums}) => {
  return (
    <div className="App__playlist">
      {albums.map( (album) => (
        <div className="App__albumCard" key={album.id}>
          <div className="App__albumImage" style={{backgroundImage: `url(${album.images[1].url})`}} />
          <div className="App__albumDescription">
            <p className="App__albumDescriptionName">{album.name}</p>
            <p>Release date: {album.release_date}</p>
            <p>Total tracks: {album.total_tracks}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Component;