import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.sass';
import PlayList from './PlayList';
import { getAlbums } from './actions/index';


class App extends Component {

  componentDidMount() {
    this.props.getAlbums("5yjbUO1Jocui7RKE30zfLT");
  }

  render() {
    return (
      <div className="App">
        <button>
          <a href='http://localhost:8888' > Login to Spotify </a>
        </button>
        <PlayList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.data.albums || []
  }
}

const SpotifyApp = connect(
  mapStateToProps,
  {getAlbums}
)(App);

export default SpotifyApp;