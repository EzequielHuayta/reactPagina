import { Button, Container } from '@mui/material'
import React, { useContext } from 'react'
import { FormUserData } from './FormUserData'
import { context } from '../Context/CartContext'
import {db} from '../firebase/firebase'

import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'

export const Form = () => {

    const { products, total, clear } = useContext(context);

    const endShopping = (dataUser) => {
        
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
        dataUser,
        items: products,
        date: serverTimestamp(),
        total,
        })
        .then( () => {      
              
            products.forEach(product => {
            const updateCollection = doc(db, 'products', product.id)
            updateDoc(updateCollection,{stock: product.stock - product.quantity})
        });
        })
        .finally( () => {
            clear();
        })


    } 

  return (
    <Container sx={{display:'flex', justifyContent:'center'}}>
    <FormUserData endShopping = {endShopping}/>
    </Container>
  )
}
