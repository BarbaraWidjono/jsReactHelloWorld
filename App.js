import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import NameDisplay from './components/NameDisplay';

class App extends Component {
  render() {
    const barb = "Barbara";
    return (
      <div className="App">
        <header className="App-header">
          <NameDisplay testName = "Ada"/>
          <StudentCollection />
        </header>
      </div>
    );
  }
}

export default App;
