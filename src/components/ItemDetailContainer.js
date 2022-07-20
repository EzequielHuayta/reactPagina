import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import {data} from '../data/products'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

export const ItemDetailContainer = () => {

      
   let { productId } = useParams();
      
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(false);
  useEffect(() => {
      if (productId !== undefined){
      setProduct(data.find( element => element.id == productId))
      setSelected(true);
      }
  }, [productId])

  return (
        <ItemDetail productList = {product} /> 
  )
}
