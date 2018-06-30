import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css'

import App from './App';
<<<<<<< HEAD
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

=======
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page from './components/User'

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Page} />
      </Switch>
    </Router>, document.getElementById('root'));
>>>>>>> d9a52c51a593e956d96bae154049cb6c4989edeb
