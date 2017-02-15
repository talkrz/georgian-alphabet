import React, { Component } from 'react';
import './Intro.css';
import Button from './../components/Button/Button';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Intro-header">
          <h2>ქართული დამწერლობა</h2>
        </div>
        <p className="Intro-intro">
          <Button text="Start learning" onClick={() => {alert('foo')}} />
        </p>
      </div>
    );
  }
}

export default Intro;
