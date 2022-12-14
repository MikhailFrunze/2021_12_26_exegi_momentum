import React from 'react'
import s from './index.module.css'
import { addToCart } from '../../store/reducer/basketReducer';
import { useDispatch } from 'react-redux';

export default function Product({id, title, price}) {

    const dispatch = useDispatch();

    const add_to_basket = () => dispatch(addToCart({id, title, price}));

  return (
    <div className={s.product_item}>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <button onClick={add_to_basket}>Add to basket</button>
    </div>
  )
}
