import React from 'react'
import s from './index.module.css'

export default function ProductCard({ id, title, image, price }) {
    return (
        <div className={s.product_item}>
            <p>Title: {title}</p>
            <img src={image} alt="product" />
            <p>Price: {price}</p>
        </div>
    )
}
