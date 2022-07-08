import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react'
import { ItemCount } from './ItemCount';


export const ItemDetail = ({productList}) => {

    const {picture, price, name, stock, description} = productList
  return (
    <>
    { picture !== undefined ? 
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Grid sx={{margin: 5}}container spacing={2}>
            <Grid item xs={8} sx={{justifyContent: 'center', display:'flex'}}>
                <img alt="product" heigth="400px" width = "400px" src={picture}/> 
            </Grid>
            <Grid item xs={4}>
            <Typography sx= {{}} gutterBottom variant="h3" component="div"> {name} </Typography> 
            <Typography sx= {{textAlign: 'center', display: 'flex'}}gutterBottom variant="h4" component="div">
            <AttachMoneyIcon fontSize='large'></AttachMoneyIcon>{price}
            </Typography>
            <ItemCount  stock = {stock} initial = {1}/> 
            <Typography sx= {{marginTop: 5}}  variant="h6" component="div"> {description} </Typography>
            </Grid>

        </Grid>
    </Box>
    : <h1>Loading...</h1>}
    </>
  )
}
