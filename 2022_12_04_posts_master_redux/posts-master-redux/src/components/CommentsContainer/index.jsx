import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../Comment';
import { deleteComment, addComment } from '../../store/reducer/postReducer';
import AddCommentForm from '../AddCommentForm';


export default function CommentsContainer({ comments, post_id }) {
    const dispatch = useDispatch();
    const removeComment = ids => dispatch(deleteComment(ids));
    


    return (
        <div>
            <div>{comments.map(el => <Comment key={el.id} {...el} removeComment={removeComment} post_id={post_id}/>)}</div>
            <AddCommentForm post_id={post_id}/>
        </div>
    )
}
