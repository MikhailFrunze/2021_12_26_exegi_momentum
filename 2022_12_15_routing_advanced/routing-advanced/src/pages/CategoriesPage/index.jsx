import React from 'react'
import { getCategories } from '../../requests/categories';
import { useState, useEffect } from 'react'
import CategoryCard from '../../components/CategoryCard';

export default function CategoriesPage() {

  // const getCategories = () => {
  //   fetch('https://fakestoreapi.com/products/categories')
  //     .then(resp => resp.json())
  //     .then(json => setCategories(json))
  // }


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, [])



  return (
    <div>
      {
        categories.length === 0
          ? <p>'Categories are loading...'</p>
          : <div>
            {
              categories.map(el => <CategoryCard key={el} category={el} />)
            }
          </div>
      }
    </div>



  )
}
