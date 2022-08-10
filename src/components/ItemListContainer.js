import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { db } from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'

export const ItemListContainer = ({saludo}) => {


  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const {categoryId} = useParams();

  
  useEffect(() => {

    const productsCollection = collection(db,'products');

    if (categoryId){
      const q = query(productsCollection, where('category', '==', categoryId))
      getDocs(q)
      .then(result => {
        const list = result.docs.map( product => {
          return {
            id: product.id, 
            ...product.data(),
          }
        })
        setProduct(list)
      })
      setLoaded(false);
    }
    else {
      getDocs(productsCollection)
      .then(result => {
        
        const list = result.docs.map( product => {
          return {
            id: product.id, 
            ...product.data(),
          }
        })
        setProduct(list)
        setLoaded(false);
      })
    }
  }, [categoryId])

  return (
    <>
    <h1>{saludo}</h1>

    <div>
    { loaded ? <h1>Loading...</h1> : <Container><ItemList productList = {product} /> </Container>}
    </div>
    </>
  )
}
