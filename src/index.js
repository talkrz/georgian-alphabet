import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AlphabetContainer from './components/Alphabet/AlphabetContainer';
import LearnLetters from './components/LearnLetters/LearnLetters';
import Intro from './pages/Intro';
import App from './pages/App';
import reducers from './redux/reducers';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AlphabetContainer}/>
        <Route path="/alphabet" component={AlphabetContainer}/>
        <Route path="/learn-letters" component={LearnLetters}/>
      </Route>
      <Route path="/intro" component={Intro}/>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
