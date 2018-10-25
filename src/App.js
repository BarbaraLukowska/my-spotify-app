import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import PlayList from './components/PlayList';
import { getAlbums } from './actions/index';
import queryString from 'query-string';


class App extends Component {

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    const {albums} = this.props;
    const artist = albums && albums.map( (album) => album.artists)
    const name = artist.map( (art) => art[0].name)

    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;

    return (
      <div className="SpotifyApp">
        { !accessToken
        ? <button>
            <a href='http://localhost:8888' > Login to Spotify </a>
          </button>
        : <div className="SpotifyApp__playlist">
            <h1>{name[0]} albums:</h1>
            <PlayList albums={albums}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({data: {albums}}) => {
  return {
    albums: albums || [],
  }
}

const SpotifyApp = connect(
  mapStateToProps,
  {getAlbums}
)(App);

export default SpotifyApp;
