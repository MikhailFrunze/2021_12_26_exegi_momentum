import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducer/postReducer';

const rootReducer = combineReducers({
    posts: postReducer
});

export const store = createStore(rootReducer);