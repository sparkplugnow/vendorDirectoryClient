import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "./index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import configureStore, { history } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
const target = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
