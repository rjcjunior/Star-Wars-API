import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from './Card';
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">  What is planet?</h1>
        </header>
        {
          <Card/>
        }
      </div>
    );
  }
}

export default App;
