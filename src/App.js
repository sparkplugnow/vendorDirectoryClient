import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import Info from './components/info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> <br />
        <Search /> <br />
        <Info />
      </div>
    );
  }
}

export default App;
