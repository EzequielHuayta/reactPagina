import React from 'react'
import styled from 'styled-components/macro';
import logo from '../assets/logo.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CartWidget } from './CartWidget';

// Create a Wrapper component that'll render a <section> tag with some styles
const Header = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(45, 115, 227,0.5);
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

const Logo = styled.section`
  display: flex;
  width: 40%;
  justify-content: center;
  height: 120px;
  cursor: pointer;

  h1{
    display: flex;
    font-size: 2rem;
    align-items: center;
    color: white;
  }

`;



const Menu = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border-width: 0;
  background-color: transparent;
 // The resulting background color will be based on the bg props. 
  color: ${props => props.imp === true ? "#55eeff" : "white"};
`;

const Login = styled.section`
  cursor: pointer;
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
`;







function NavBar() {
  return (
    <Grid container>
      <Header>
        <Logo>
          <img src={logo} alt=''/>
          <h1>Clothes4You</h1>
        </Logo>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={8}
        >
          <Menu> Ofertas</Menu> 
          <Menu>Sobre nosotros</Menu> 
          <Menu>FAQ</Menu> 
          <Menu>Partners</Menu> 
        </Stack>
        <Login >
        <Button variant="contained">Login</Button>
        </Login>
        <CartWidget/>
      </Header>
    </Grid>
  )
}


export default NavBar