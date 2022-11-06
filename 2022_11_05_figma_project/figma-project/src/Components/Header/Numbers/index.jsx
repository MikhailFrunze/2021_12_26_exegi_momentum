import React from 'react'
import s from './index.module.css'


export default function Numbers({ count, years, location }) {
    return (
        <div className={s.numbers}>
            <p className={s.count}>{count}</p>
            <p className={s.years} >{years}</p>
            <p className={s.location} >{location}</p>
        </div>
    )
}
