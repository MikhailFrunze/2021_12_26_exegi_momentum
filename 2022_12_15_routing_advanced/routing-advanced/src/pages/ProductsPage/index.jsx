import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import  {getProductsByCategory} from '../../requests/products'
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  
  const {category} = useParams();

 useEffect(() => {
  getProductsByCategory(category, setProducts);
 }, [])

 console.log(products);
  return (
    <div>
      {products.map(el => <ProductCard key={el.id} {...el}/>)}
    </div>
  )
}
