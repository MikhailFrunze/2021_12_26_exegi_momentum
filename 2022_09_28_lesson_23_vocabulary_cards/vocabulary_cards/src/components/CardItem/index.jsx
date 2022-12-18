import React from 'react'
import s from './index.module.css'

export default function CardItem({ id, eng, rus, lang, change_lang }) {

  const text = lang === 'rus' ? rus : eng;
  const card_style = {
    color: lang === 'eng' ? 'white' : '#2980b9',
    backgroundColor: lang === 'eng' ? '#2980b9' : 'white'
  }

  

  return (
    <div /*onClick={() => {change_to_rus(); change_to_eng()}} как принять две функции или две константы в один onClick?*/
      onClick={() => change_lang(id)} className={s.card} style={card_style}>
      {text}
    </div>
  )
}
