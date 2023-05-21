import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'

const logger = createLogger()
const rootStore = combineReducers({ searchRobots, requestRobots })
// const store = createStore(rootStore, applyMiddleware(ThunkMiddleware, logger))
const store = createStore(rootStore, applyMiddleware(ThunkMiddleware))

const RootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = createRoot(document.getElementById('root'));
root.render(RootComponent);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
