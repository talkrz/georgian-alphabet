import React, { Component } from 'react';
import Button from './../Button/Button';
import './Alphabet.css';

class Alphabet extends Component {

  render() {
    return (
      <div className="Alphabet">
        <div className="Alphabet-table">
        {this.props.alphabet.map(letter => (
          <div key={letter.key} className="Alphabet-letter-container">
            <div className="Alphabet-letter-unicode">{letter.unicode}</div>
            <div className="Alphabet-letter-longname">{letter.longName}</div>
            <div className="Alphabet-letter-forms">
              <div className="Alphabet-letter-alternative-forms">
                <img alt={letter.key} src={process.env.PUBLIC_URL + `/letters_svg/${letter.key}.svg`}/>
              </div>
              <div className="Alphabet-letter-handwriting">
                <img alt={letter.key} src={process.env.PUBLIC_URL + `/letters_handwriting/${letter.key}.png`}/>
              </div>
            </div>
            <div className="Alphabet-letter-pronunciation">
              <a target="_blank" href={letter.pronunciation}>
                Pron. <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        ))}
        </div>
        <Button text="Test your knowledge" onClick={() => {}}/>
      </div>
    );
  }
}

export default Alphabet;
