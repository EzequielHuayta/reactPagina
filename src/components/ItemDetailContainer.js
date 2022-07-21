import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import {data} from '../data/products'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const ItemDetailContainer = () => {

      
   let { productId } = useParams();
      
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(false);
  useEffect(() => {
      if (productId !== undefined){
        const productsCollection = collection(db,'products');
        const refDoc = doc(productsCollection,productId);
        getDoc(refDoc)
        .then(result => setProduct( {...result.data(), id: result.id}) )
        .finally( () => setSelected(true))
      }
  }, [productId])

  return (
        <ItemDetail productList = {product} /> 
  )
}
