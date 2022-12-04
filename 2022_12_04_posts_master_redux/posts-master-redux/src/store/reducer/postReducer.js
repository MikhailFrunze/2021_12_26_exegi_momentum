import { posts_data } from '../../data/posts'
import { useState, useEffect } from 'react'
const defaultState = posts_data;
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const CHANGE_LIKE = 'CHANGE_LIKE';


export const addPost = (payload) => ({ type: ADD_POST, payload })
export const deletePost = (payload) => ({ type: DELETE_POST, payload })
export const changeLike = (payload) => ({ type: CHANGE_LIKE, payload })

export const postReducer = (state = defaultState, action) => {
    if (action.type === ADD_POST) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else if (action.type === DELETE_POST) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === CHANGE_LIKE) {
        return state.map(el => {
            if (el.id === action.payload) {
                el.like = !el.like;
            }
            return el
        })
    } else {
        return state
    }
}