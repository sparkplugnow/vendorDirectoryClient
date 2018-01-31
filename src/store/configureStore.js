import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from 'redux-saga';
import createHistory from "history/createBrowserHistory";


export const history = createHistory()

const middleware = [
  routerMiddleware(history)
]

export default function configureStore() {
	return createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(createSagaMiddleware)
	  );
}		
