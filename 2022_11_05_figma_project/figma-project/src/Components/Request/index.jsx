import React from 'react'
import s from './index.module.css'

export default function Request() {
    return (
        <div className={s.request}>
            <div className={s.request_text}>
                <h2>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
                <p>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p>
            </div>
            <div className={s.request_btn}>
                <button >ВАШ ЗАПРОС</button>
            </div>
        </div>
    )
}
