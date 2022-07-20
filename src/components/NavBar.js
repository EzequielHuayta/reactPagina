import React, { useContext } from 'react'
import styled from 'styled-components/macro';
import logo from '../assets/logo.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import { context } from '../Context/CartContext';
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


const categories = [
  {name: "Pantalones", id:0, route:"/category/Pantalones"},
  {name: "Zapatillas", id:1, route:"/category/Zapatillas"},
  {name: "Remeras", id:2, route:"/category/Remeras"},
  {name: "Buzos", id:3, route:"/category/Buzos"},

]




function NavBar() {
  const { getTotal } = useContext(context);

  return (
    <Grid container>
      <Header>
        <Link to="/">
          <Logo>
            <img src={logo} alt=''/>
            <h1>Clothes4You</h1>
          </Logo>
        </Link>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={8}
        >
        {categories.map((category => <Link key={category.id} to={category.route}><Menu>{category.name}</Menu></Link>))}
        </Stack>
        <Login >
        <Button variant="contained">Login</Button>
        </Login>
        <Link to="/cart">
          <Button onClick ={getTotal}> <CartWidget/> </Button>
        </Link>
      </Header>
    </Grid>
  )
}


export default NavBar