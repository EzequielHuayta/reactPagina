import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react'

export const Item = ( {product}) => {
  const {picture, name, price, description , stock} = product

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
          component="img"
          height="140"
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx= {{textAlign: 'center'}}gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography sx= {{textAlign: 'center', justifyContent: 'center', display: 'flex'}}gutterBottom variant="h5" component="div">
            <AttachMoneyIcon fontSize='large'></AttachMoneyIcon>{price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

          <CardActions sx={{left: 0, bottom: 0}}>
            <Typography variant="body2" color="text.secondary">
              Stock: {stock}
            </Typography>
            <Button size="small">Details</Button>
          </CardActions>

      </Card>
      </div>
  )
}
