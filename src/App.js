import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import Info from './components/info';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Page from './components/User'

class App extends Component {
  render() {
    const Home = () => (
      <div className="App">
        <Header /> <br />
        <Search /> <br />
        <Info />
      </div>
    );
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Page} />
      </Switch>
    );
  }
}

export default App;
