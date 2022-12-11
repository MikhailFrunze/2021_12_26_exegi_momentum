import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'
import { deleteFromCart, incrementCount } from '../../store/reducer/basketReducer';

export default function BasketCard({ id, title, price, count }) {

    const dispatch = useDispatch();
   

    return (
        <div className={s.basket_card}>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Number of items: {count}</p>
            <div>
                <button onClick={() => dispatch(deleteFromCart(count))}>-</button>
                <button onClick={() => dispatch(incrementCount(count))}>+</button>
            </div>
        </div>
    )
}
