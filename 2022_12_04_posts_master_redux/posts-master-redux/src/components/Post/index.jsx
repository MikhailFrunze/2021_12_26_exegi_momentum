import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import s from './index.module.css';

export default function Post({id, title, text, like, removePost, alterLike}) {

    const like_classes = [s.like_btn, like ? s.like_btn_active : ''].join(' ');

  return (
    <div className={s.post_item}>
        <CloseOutlined className={s.cross} onClick={() => removePost(id)}/>
        <p>Title: {title}</p>
        <p>Text: {text}</p>
        <p className={like_classes} onClick={() => alterLike(id)}>
            {like ? 'Liked' : 'Like?'}
        </p>
    </div>
  )
}
