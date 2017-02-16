import React, { Component } from 'react';
import NavigationLink from './../components/NavigationLink/NavigationLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ქართული დამწერლობა</h2>
          <NavigationLink
            to="/alphabet"
            text="Alphabet"
            type="alphabet"/>
          <NavigationLink
            to="/learn-letters"
            text="Test your knowledge"
            type="learn-letters"/>
        </div>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
