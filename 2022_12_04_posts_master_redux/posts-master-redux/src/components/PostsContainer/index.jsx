import React from 'react';
import { deletePost, changeLike } from '../../store/reducer/postReducer';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post';
import s from './index.module.css'

export default function PostsContainer() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.posts)

    const removePost = id => dispatch(deletePost(id));
    const alterLike = id => dispatch(changeLike(id))

    return (
        <div>
            <div>{state.map(el => <Post key={el.id} {...el} removePost={removePost} alterLike={alterLike} />)}</div>
        </div>
    )
}
