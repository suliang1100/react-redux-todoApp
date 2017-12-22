import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {reducer as toDoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const middleware = [thunk];

const reducer = combineReducers({
    todos:toDoReducer,
    filter:filterReducer
});

export default createStore(reducer, applyMiddleware(...middleware, logger));