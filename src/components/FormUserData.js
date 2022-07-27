import { Button, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'

export const FormUserData = ( {endShopping} ) => {

    const [open, setOpen] = React.useState(false);

    const pay = () => {

        endShopping({
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        mail: document.getElementById('email').value
        });
    }
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch', justifyContent:'center' },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField sx={{width:'49%'}} id="name" label="Nombre" variant="standard" />
            <TextField sx={{width:'49%'}} id="surname" label="Apellido" variant="standard" />
            <TextField sx={{width:'49%'}} id="email" label="email" variant="standard" />
    </Box>

    <Button onClick={pay} variant="contained">Pay</Button>

    </>
  )
}
