import React from 'react'
import s from './index.module.css'

export default function Comment({id, text, post_id, removeComment }) {
  return (
    <p className={s.comment_item} onClick={() => removeComment({post_id: post_id, comment_id: id})}>{text}</p>
  )
}
