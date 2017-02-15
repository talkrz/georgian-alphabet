import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Alphabet from './components/Alphabet/Alphabet';
import LearnLetters from './components/LearnLetters/LearnLetters';
import Intro from './pages/Intro';
import App from './pages/App';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Alphabet}/>
      <Route path="/alphabet" component={Alphabet}/>
      <Route path="/learn-letters" component={LearnLetters}/>
    </Route>
    <Route path="/intro" component={Intro}/>
  </Router>,
  document.getElementById('root')
);
