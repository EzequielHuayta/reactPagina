import { AccountCircle  } from '@mui/icons-material'
import { Button, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const FormUserData = ( {endShopping} ) => {

  const currenciesMonth = [{value: '1',},{value: '2',},{value: '3',},{value: '4',},{value: '5',},{value: '6',},{value: '7',},{value: '8',},{value: '9',},{value: '10',},{value: '11',},{value: '12',},];
  const currenciesYear = [{value: '2022',},{value: '2023',},{value: '2024',},{value: '2025',},{value: '2026',},{value: '2027',},{value: '2028',},];

    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('2022');
  
    const handleChange = (event) => {
      setMonth(event.target.value);
    };
    const handleChangeYear = (event) => {
      setYear(event.target.value);
    };

    const pay = () => {

        endShopping({
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        mail: document.getElementById('email').value,
        direccion: document.getElementById('direccion').value,
        localidad: document.getElementById('localidad').value,
        codigoPostal: document.getElementById('codigoPostal').value,
        cardNumber: document.getElementById('cardNumber').value,
        cardMonthExpiration: document.getElementById('cardMonthExpiration').innerHTML,
        cardYearExpiration: document.getElementById('cardYearExpiration').innerHTML,
        cardNameHolder: document.getElementById('cardNameHolder').value,
        cardDirection: document.getElementById('cardDirection').value,
        cardPhone: document.getElementById('cardPhone').value
        });
    }
  return (
    <>
    <Typography m={2} variant="h2" sx={{justifyContent:'center', display:'flex', width:'100% !important'}} >Ya casi tenes tu producto!</Typography>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch', justifyContent:'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" sx={{textAlign:'center', display:'flex', width:'100% !important'}} >Informacion personal</Typography>
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
            }} 
            id="name" label="Nombre" variant="standard" />
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
            }} 
            id="surname" label="Apellido" variant="standard" />
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
            }} 
            id="email" label="email" variant="standard" />
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
            }} 
            id="direccion" label="Direccion" variant="standard" />
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
            }} 
            id="localidad" label="Localidad" variant="standard" />
      <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
            }} 
            id="codigoPostal" label="Codigo Postal" variant="standard" />


      <Typography variant="h5" sx={{textAlign:'center', display:'flex', width:'100% !important'}} >Informacion de la tarjeta</Typography>


      <Stack
          sx={{display:'flex', width:'100% !important'}}
          direction="row"
          justifyContent='flex-center !important'
          alignItems="center"
          spacing={1}
        >
      <TextField sx={{width:'35%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><CreditCardIcon /></InputAdornment>,
            }} 
            id="cardNumber" label="Numero tarjeta" variant="standard" />
      <TextField sx={{width:'35%'}} 
            id="cvv" label="CVV" variant="standard" />
       <TextField sx={{width:'10%'}}
          id="cardMonthExpiration"
          select
          label="Vencimiento mes"
          value={month}
          onChange={handleChange}
        >
          {currenciesMonth.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField sx={{width:'10%'}}
          id="cardYearExpiration"
          select
          label="Vencimiento año"
          value={year}
          onChange={handleChangeYear}
        >
          {currenciesYear.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Stack>
        <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
            }} 
            id="cardNameHolder" label="Nombre en la tarjeta" variant="standard" />
        <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
            }} 
            id="cardDirection" label="Direccion" variant="standard" />
        <TextField sx={{width:'49%'}} InputProps={{
            startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
            }} 
            id="cardPhone" label="Telefono contacto" variant="standard" />
    </Box>
    <Button onClick={pay} variant="contained">PAGAR</Button>


    </>
  )
}
