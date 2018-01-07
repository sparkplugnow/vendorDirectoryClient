import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/index';

export default function vendorReducer(state = initialState.vendors, action) {
	  let newState;
	    switch (action.type) {
		        case FETCH_STUFF:
				console.log('FETCH_STUFF Action')
								return action;
						case RECEIVE_STUFF:
							newState = action.stuff;
							console.log('RECEIVE_STUFF Action')
								return newState;
					  default:
    return state;
  }
}	
