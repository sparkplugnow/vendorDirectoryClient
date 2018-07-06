import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Info from './components/info';
import './App.css';
import AuthService from './components/helper/auth';
import withAuth from './components/config/constants';
const Auth = new AuthService();

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  
  handleLogout() {
    Auth.logout()
    this
      .props
      .history
      .replace('/login');
  }

  render() {
    return (
      <div className="App">
        <button type="button" className="form-submit" onClick={this.handleLogout}>Logout</button>
        <Header/>
        <br/>
        <Search/>
        <br/>
        <Info/>
      </div>
    );
  }
}

export default withAuth(App);
