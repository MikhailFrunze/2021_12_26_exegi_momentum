import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import s from './index.module.css'

export default function Layout() {
    return (
        <div>
            <Nav></Nav>
            <main className={s.main_content}>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    )
}
