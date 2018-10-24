import React from 'react';
import './App.sass';

const Component = ({albums}) => {

  return (
    <div>
      {albums && albums.map( (album) => (
        <div className="App__albumCard" key={album.id}>
          <img className="App__albumImage" src={album.images[0].url} alt={album.name} />
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