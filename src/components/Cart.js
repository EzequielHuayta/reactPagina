import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react'
import { context } from '../Context/CartContext'


export const Cart = () => {

const { products, removeProduct, clear } = useContext(context);

const clickDelete = () => {

}
console.log(products);
  return (
    <>
    {products.length !== 0 
    ? 
    <>
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Precio</TableCell>
            <TableCell align="left">Cantidad</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              <img alt="product" heigth="300px" width = "300px" src={row.picture}/> 
              </TableCell>
              <TableCell sx={{}}align="left">{row.name}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left"><Button onClick ={ () => removeProduct(row.id)} variant="outlined" color="error">Borrar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Container>
      <Button sx={{ align: "left"}} onClick ={clear} variant="outlined" color="error">Vaciar carrito</Button>
    </Container>
    </>
    :
    <h1>Su carrito esta vacio</h1>}
    </>
  )

}