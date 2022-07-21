import React, { useContext, useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { context } from '../Context/CartContext';

export const CartWidget = () => {

  const { products } = useContext(context);
  const [quantity, setQuantity] = useState(0)

  const getQtyProducts = () => {
    let qty = 0;
    products.forEach( e => {
      qty += e.quantity
    });
    setQuantity(qty)
  }
  
  useEffect( () => {
    getQtyProducts();
  }, [products])

  return (
    <>
    <Badge badgeContent={quantity} color="primary">
      <ShoppingCartIcon  sx={{ fontSize: 50, fill:'black' }} />
    </Badge>
    </>
  )
}
