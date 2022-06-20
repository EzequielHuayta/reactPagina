import React from 'react'
import styled from 'styled-components/macro';
import logo from '../assets/logo.png'



// Create a Wrapper component that'll render a <section> tag with some styles
const Header = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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

const Sections = styled.section`
  width: 40%;
  text-align: center;
  color: palevioletred;
  justify-content: center;
 > ul{
    display: flex;
    justify-content: center;
   > li{
      font-size: 1.5rem;
    }
  }
`;

const Menu = styled.li`
  cursor: pointer;
  display: inline;
  /* The resulting background color will be based on the bg props. */
  color: ${props => props.imp === true ? "#55eeff" : "white"};
  margin: 4%;
`;

const Login = styled.section`
  cursor: pointer;
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  cursor: pointer;
  width: 100%;
	padding: 1em;
	background: hsl(233deg 100% 71% / 88%);
	border: none;
	border-radius: 30px;
  font-family: 'Regular';
	font-weight: 600;
  font-size: 1rem;
  color: white;
  height: auto;
`;





function NavBar() {
  return (
    <Header>
      <Logo>
        <img src={logo} alt=''/>
        <h1>Clothes4You</h1>
      </Logo>
        <Sections>
            <ul>
              <Menu imp={true}>Ofertas</Menu>
              <Menu>Sobre nosotros</Menu>
              <Menu>FAQ</Menu>
              <Menu>Partners</Menu>
            </ul>
        </Sections>
      <Login >
      <Button> Login </Button>
      </Login>
    </Header>
  )
}

export default NavBar