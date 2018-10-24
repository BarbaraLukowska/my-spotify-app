import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import PlayList from './PlayList';
import { getAlbums } from './actions/index';


class Main extends Component {

  componentDidMount() {
    this.props.getAlbums();
  }
  render() {
    const {albums} = this.props;
    const artist = albums && albums.map( (album) => album.artists)
    const name = artist.map( (art) => art[0].name)

    return (
      <div className="App">
        <button>
          <a href='http://localhost:8888' > Login to Spotify </a>
        </button>
        <h1>{name[0]} albums:</h1>
        <PlayList albums={albums}/>
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