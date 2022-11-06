import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
        <p id={s.p1}>© 2019 Строительная компания</p>
        <p id={s.p2}>Разработано лучшей студей</p>
    </footer>
  )
}
