import { Stack } from '@mui/material';
import React from 'react'
import { Item } from './Item';

export const ItemList = ({productList}) => {


    
  return (
    <>
    <Stack sx={{justifyContent:'center', display:'flex', marginTop: 2}} direction="row" spacing={2}>
      {productList.map ( product => <Item key={product.id} product={product}> </Item>)}
    </Stack>
    </>
  )
}
