import React from 'react';
let {Component} = React;
import PersonTable from "./PersonTable";
import './App.css';

class App extends Component {

  render() {

    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <PersonTable/>
        </div>
      </div>
    );
  }
}

export default App;
