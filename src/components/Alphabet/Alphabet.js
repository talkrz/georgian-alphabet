import React, { Component } from 'react';
import Button from './../Button/Button';
import './Alphabet.css';

class Alphabet extends Component {

  render() {
    return (
      <div className="Alphabet">
        <p>Alphabet</p>
        <Button text="Test your knowledge" onClick={() => {}}/>
      </div>
    );
  }
}

export default Alphabet;
