import React from 'react';
import '../App.sass';

const Component = ({albums}) => {

  return (
    <div>
      {albums && albums.map( (album) => (
        <div className="SpotifyApp__albumCard" key={album.id}>
          <img className="SpotifyApp__albumImage" src={album.images[0].url} alt={album.name} />
          <div className="SpotifyApp__albumDescription">
            <p className="SpotifyApp__albumDescriptionName">{album.name}</p>
            <p>Release date: {album.release_date}</p>
            <p>Total tracks: {album.total_tracks}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Component;
