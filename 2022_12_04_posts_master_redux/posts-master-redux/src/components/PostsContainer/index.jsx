import React from 'react';
import { addPost, deletePost, changeLike } from '../../store/reducer/postReducer';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post';
import s from './index.module.css'

export default function PostsContainer() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.posts)

    const submit = event => {
        event.preventDefault();
        const { title, text } = event.target;
        dispatch(addPost({
            title: title.value,
            text: text.value
        }));
        title.value = '';
        text.value = '';
    }

    const removePost = id => dispatch(deletePost(id));
    const alterLike = id => dispatch(changeLike(id))

    return (
        <div>
            <form className={s.post_form} onSubmit={submit}>
                <input type="text" name='title' placeholder='Title' />
                <input type="text" name='text' placeholder='Your text' />
                <button>Add post</button>
            </form>
            <div>{state.map(el => <Post key={el.id} {...el} removePost={removePost} alterLike={alterLike} />)}</div>
        </div>
    )
}
