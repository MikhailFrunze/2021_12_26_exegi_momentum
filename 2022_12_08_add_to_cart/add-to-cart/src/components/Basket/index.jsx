import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import { addToCart, clearBasket } from '../../store/reducer/basketReducer';
import s from './index.module.css';


export default function Basket({id, title, price, count}) {
  const state = useSelector(state => state.basket);
  const dispatch = useDispatch();
  
  let getTotalQuantity = () => {
    let total = 0
    state.forEach(el => {
      total += el.count
    })
    return total
  }

 const classes = state.length === 0 ? s.clear_basket : '';

  return (
    <div>
      {
        state.map(el => <BasketCard key={el.id} {...el} />)
      }

      <button className={classes} onClick={() => dispatch(clearBasket())}>Clear basket</button>
      <p>Sum: {getTotalQuantity()}</p>
    </div>
  )
}
