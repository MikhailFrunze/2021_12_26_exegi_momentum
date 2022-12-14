import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'
import { decrementCount, incrementCount, deleteProduct } from '../../store/reducer/basketReducer';
import { CloseOutlined } from '@ant-design/icons';

export default function BasketCard({ id, title, price, count }) {

    const dispatch = useDispatch();


    return (
        <div className={s.basket_card}>
            <p>Title: {title}</p>
            <p>Price: {price * count}</p>
            <p>Number of items: {count}</p>
            <div>
                <button onClick={() => dispatch(decrementCount(id))}>-</button>
                <button onClick={() => dispatch(incrementCount(id))}>+</button>
            </div>
            <CloseOutlined className={s.cross} onClick={() => dispatch(deleteProduct(id))}/>
        </div>
    )
}
