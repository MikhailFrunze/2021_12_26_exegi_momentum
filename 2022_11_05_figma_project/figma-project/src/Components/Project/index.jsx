import React from 'react'
import { project } from '../../Data/projects'
import ProjectArena from './ProjectArena'
import s from './index.module.css'

export default function Project() {
    return (
        <div className={s.project}>
            <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
            {
                project.map(el => <ProjectArena key={el.id} {...el} />)
            }
        </div>
    )
}
