import { Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Item } from './Item';

export const ItemList = ({productList}) => {


    
  return (
    <>
    <Stack sx={{justifyContent:'center', display:'flex', marginTop: 2, flexWrap: 'wrap'}} direction="row" spacing={2}>
      {productList.map ( product => <Link key={product.id} to={`/product/${product.id}`}><Item key={product.id} product={product}> </Item></Link>)}
    </Stack>
    </>
  )
}
