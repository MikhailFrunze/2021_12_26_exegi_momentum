import { posts_data } from '../../data/posts'
const defaultState = posts_data;
const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload })

export const commentReducer = (state = defaultState, action) => {

    if (action.type === DELETE_COMMENT) {
        const target_post = state.find(el => el.id === action.payload.post_id);
        target_post.comments = target_post.comments.filter(el => el.id !== action.payload.comment_id)
        return [...state]
    } else {
        return state
    }
}