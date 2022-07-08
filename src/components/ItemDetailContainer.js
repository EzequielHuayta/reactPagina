import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import {data} from '../data/products'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

  let {productId} = useParams();

  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    
      if (productId !== undefined){
      setProduct(data.find( element => element.id == productId))
      }

  }, [])

  return (
    <>
        { selected ? <ItemDetail productList = {product} /> : null}
    </>
  )
}
