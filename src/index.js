import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Intro from './pages/Intro';
import App from './pages/App';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/app" component={App}/>
    <Route path="/" component={Intro}/>
  </Router>,
  document.getElementById('root')
);
