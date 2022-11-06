import React from 'react'
import s from './index.module.css'

export default function ProjectArena({ img, title, description }) {

    return (
        <div className>
            <img src={img} alt="Gazprom Arena" className={s.img} />
            <hr className={s.hr} />
            <p className={s.title}>{title}</p>
            <p className={s.description} >{description}</p>
        </div>
    )
}
