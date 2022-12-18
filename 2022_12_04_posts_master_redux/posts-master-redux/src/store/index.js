import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducer/postReducer';
import {commentReducer} from './reducer/commentReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
});

export const store = createStore(rootReducer);