import React from 'react'
import s from './index.module.css'

export default function ProductCard({title, image}) {
  return (
    <div className={s.product_card}>
      <h2>Title: {title}</h2>
      <img src={image} alt="product" /> 
    </div>
  )
}
