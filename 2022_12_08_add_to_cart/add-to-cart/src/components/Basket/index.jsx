import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import { addToCart } from '../../store/reducer/basketReducer';


export default function Basket() {
    const state = useSelector(state => state.basket);

  return (
    <div>
        {
            state.map(el => <BasketCard key={el.id} {...el}/>)
        }
    </div>
  )
}
