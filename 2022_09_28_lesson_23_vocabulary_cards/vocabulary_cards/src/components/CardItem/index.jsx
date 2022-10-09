import React from 'react'
import s from './index.module.css'

export default function CardItem({ eng, rus, lang, change_to_eng, change_to_rus }) {
  const text = lang === 'rus' ? rus : eng;
  const card_style = {
    color: lang === 'eng' ? 'white' : '#2980b9',
    backgroundColor: lang === 'eng' ? '#2980b9' : 'white'
  }

  const change = lang === 'eng' ? change_to_rus : change_to_eng;

  return (
    <div /*onClick={() => {change_to_rus(); change_to_eng()}} как принять две функции или две константы в один onClick?*/
      onClick={change} className={s.card} style={card_style}>
      {text}
    </div>
  )
}
