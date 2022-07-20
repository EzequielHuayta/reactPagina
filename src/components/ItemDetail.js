import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { context } from '../Context/CartContext';

export const ItemDetail = ({productList}) => {
  const [added, setAdded] = useState(false)
  const { addProduct } = useContext(context)
    const onAdd = (contProduct) => {
      setAdded(true);
      addProduct(productList, contProduct);
    }

    const {picture, price, name, stock, description} = productList


  return (
    <>
    { picture !== undefined ? 
      <Box sx={{ flexGrow: 1, display: 'flex', maxHeight: '500px' }}>
        <Grid sx={{margin: 5}}container spacing={2}>
            <Grid item xs={8} sx={{justifyContent: 'center', display:'flex'}}>
                <img alt="product" heigth="400px" width = "400px" src={picture}/> 
            </Grid>
            <Grid item xs={4}>
            <Typography sx= {{}} gutterBottom variant="h3" component="div"> {name} </Typography> 
            <Typography sx= {{textAlign: 'center', display: 'flex'}}gutterBottom variant="h4" component="div">
            <AttachMoneyIcon fontSize='large'></AttachMoneyIcon>{price}
            </Typography>
           { !added 
           ? 
           <ItemCount  onAdd = {onAdd} stock = {stock} initial = {1}/> 
           :         
           <Link  to="/cart">
          <Button sx ={{marginTop: 4}}variant="contained" color="info">
              Ir a pagar
          </Button>
        </Link> }
            <Typography sx= {{marginTop: 5}}  variant="h6" component="div"> {description} </Typography>
            </Grid>

        </Grid>
    </Box>
    : <h1>Loading...</h1>}
    </>
  )
}
