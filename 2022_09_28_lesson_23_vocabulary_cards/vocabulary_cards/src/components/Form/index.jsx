import React from 'react'
import s from './index.module.css'

export default function Form({add_card}) {
  const submit = event => {
    event.preventDefault();
    const {rus, eng} = event.target;
    add_card(eng.value, rus.value);
    rus.value = '';
    eng.value = '';
  }
  return (
    <form className={s.form} onSubmit={submit}>
      <input type="text" placeholder='Russian' name='rus' />
      <input type="text" placeholder='English' name='eng' />
      <button>Add</button>
    </form>
  )
}
