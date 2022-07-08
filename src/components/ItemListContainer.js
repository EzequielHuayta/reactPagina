import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { data } from '../data/products'
export const ItemListContainer = ({saludo}) => {



  const promesa = new Promise ( (res, rej)  => {
      setTimeout(() => {
          res(data);
      }, 2000);
  });

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const {categoryId} = useParams();
  useEffect(() => {
    if (categoryId){
      setProduct(data.filter((element) => element.category === categoryId))
    }
    else {
      promesa.then((data) => {
        setProduct(data);
        setLoaded(false);
      })
    }
  }, [categoryId])

  return (
    <>
    <h1>{saludo}</h1>
    {/*<ItemCount stock = {5} initial = {1}  /> */}
    <div>
    { loaded ? <h1>Loading...</h1> : <ItemList productList = {product}/>}
    </div>
    </>
  )
}
