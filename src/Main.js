import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import PlayList from './PlayList';
import { getAlbums } from './actions/index';
import queryString from 'query-string';


class Main extends Component {

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
      <div className="App">
        { !accessToken
        ? <button>
            <a href='http://localhost:8888' > Login to Spotify </a>
          </button>
        : <div className="App__playlist">
            <h1>{name[0]} albums:</h1>
            <PlayList albums={albums}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({isFetching, data: {albums}}) => {
  return {
    albums: albums || [],
    isFetching: isFetching
  }
}

const SpotifyApp = connect(
  mapStateToProps,
  {getAlbums}
)(Main);

export default SpotifyApp;