import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Alphabet from './components/Alphabet/Alphabet';
import LearnLetters from './components/LearnLetters/LearnLetters';
import Intro from './pages/Intro';
import App from './pages/App';
import reducers from './redux/reducers';
import './index.css';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Alphabet}/>
        <Route path="/alphabet" component={Alphabet}/>
        <Route path="/learn-letters" component={LearnLetters}/>
      </Route>
      <Route path="/intro" component={Intro}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
