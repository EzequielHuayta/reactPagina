import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { context } from '../Context/CartContext';

export const CartWidget = () => {

  const { products } = useContext(context);

  return (
    <>
    <Badge badgeContent={products.length} color="primary">
      <ShoppingCartIcon  sx={{ fontSize: 50, fill:'black' }} />
    </Badge>
    </>
  )
}
