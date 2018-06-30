import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css'

import App from './App';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page from './components/User'
import Addvendor from './components/vendor/AddVendor'

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Page} />
        <Route exact path="/addvendor" component={Addvendor} />
      </Switch>
    </Router>, document.getElementById('root'));
