import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page from './components/User'

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Page} />
      </Switch>
    </Router>, document.getElementById('root'));
