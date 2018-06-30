import React, {Component} from 'react';
import Header from './components/header';
import Search from './components/search';
import Info from './components/info';
<<<<<<< HEAD

=======
import './App.css';
import AuthService from './components/helper/auth';
import withAuth from './components/config/constants';
const Auth = new AuthService();
>>>>>>> d9a52c51a593e956d96bae154049cb6c4989edeb

class App extends Component {
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
