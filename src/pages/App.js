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
            text="View alphabet"
            type="alphabet"/>
          <NavigationLink
            to="/learn-letters"
            text="Learn letters"
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
