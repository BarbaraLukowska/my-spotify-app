import React from 'react';
import { render } from 'react-dom'
import './index.sass';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import SpotifyApp from './App';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

const initialState = {
  isFetching: false,
}

const middleware = [
  process.env.NODE_ENV === 'development' && createLogger({collapsed: true}),
  thunkMiddleware
].filter(Boolean);

const configureStore = () => {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {

      store.replaceReducer(rootReducer)
    })
  }
  return store
}

const store = configureStore();

render(
  <Provider store={store}>
    <SpotifyApp />
  </Provider>,
  document.getElementById('root')
);
