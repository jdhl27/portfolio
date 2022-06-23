import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191d23;
  padding: 1%;
  .container-logo{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 71.5%;
  }
  .logo {
    font-weight: 700;
    font-size: 21px;
  }
  span{
    margin-left: 10px
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="container-logo">
        <h2 className="logo">Ferney Hernández</h2>
        {/* <span>Creador de contenido</span> */}
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar