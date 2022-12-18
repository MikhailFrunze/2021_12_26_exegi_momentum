import React from 'react'
import s from './index.module.css'
import { addComment } from '../../store/reducer/postReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function AddCommentForm({post_id}) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.posts)

    const add_Comment = ids => dispatch(addComment(ids));

    const submit = event => {
        event.preventDefault();
        const { text } = event.target;
        dispatch(addComment({
            comment: {text: text.value},
            post_id
        }));
        text.value = '';
    }

    return (
        <form className={s.comment_form} onSubmit={submit}>
            <input type='text' name='text' placeholder='Your comment' />
            <button>Add</button>
        </form>
    )
}
