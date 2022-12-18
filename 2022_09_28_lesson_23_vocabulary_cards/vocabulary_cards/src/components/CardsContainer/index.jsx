import React from 'react'
import CardItem from '../CardItem'
import s from './index.module.css'


export default function CardsContainer({ cards, change_to_eng, change_to_rus, change_lang }) {

  return (
    <div className={s.cards_container}>
      {
        cards.map(card => <CardItem change_to_eng={change_to_eng} change_to_rus={change_to_rus} change_lang={change_lang} key={card.id} {...card} />)
      }
    </div>
  )
}
