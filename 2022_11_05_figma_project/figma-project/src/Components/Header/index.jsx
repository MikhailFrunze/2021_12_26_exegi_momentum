import React from 'react'
import s from './index.module.css'
import { number } from '../../Data/numbers'
import Numbers from './Numbers'

export default function Header() {
    return (
        <div className={s.header}>
            <p className={s.text_main}>РЕАЛИЗУЕМ КРУПНЕЙШИЕ
                ПРОЕКТЫ В РОССИИ</p>
            <p className={s.text_secondary}>стадионы, газопроводы, мосты, дамбы</p>
            <div className={s.numbers}>
            {
                number.map(el => <Numbers key={el.id} {...el} />)
            }
            </div>
        </div>
    )
}
