import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';




export const ItemCount = ({stock, initial, onAdd}) => {

    const [contProduct, setContProduct] = useState(initial)
  

    const removeProduct = () =>{
      if(contProduct > 1){
      setContProduct( contProduct - 1)
      }
  }

    const addProduct = () =>{
        if(stock > contProduct){
        setContProduct( contProduct + 1)
        }
    }

    const addCart = () =>{
      onAdd();
    }
  return (
    <>

    <Card sx={{ maxWidth: 275}}>
      <CardHeader
        title="Contador"
      />
    <CardContent sx = {{textAlign: 'center'}}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={removeProduct}> <RemoveIcon /> </Button>
            <Typography m={2} variant="h5" >
                {contProduct}
            </Typography>
            <Button onClick={addProduct}> <AddIcon /> </Button>
        </ButtonGroup>

            <Button onClick={addCart}sx ={{marginTop: 2}}variant="contained" color="success">
              Añadir al carrito
            </Button>

      </CardContent>

    </Card>
    </>
  )
}
