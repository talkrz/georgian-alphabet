import React, { Component } from 'react';
import Button from './../Button/Button';
import './Alphabet.css';

class Alphabet extends Component {

  render() {
    return (
      <div className="Alphabet">
        <div className="Alphabet-table">
        {this.props.alphabet.map(letter => (
          <div className="Alphabet-letter-container">
            <div className="Alphabet-letter-unicode">{letter.unicode}</div>
            <div className="Alphabet-letter-longname">{letter.longName}</div>
          </div>
        ))}
        </div>
        <Button text="Test your knowledge" onClick={() => {}}/>
      </div>
    );
  }
}

export default Alphabet;
