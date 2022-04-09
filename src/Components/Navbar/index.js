import React from 'react'; 
import {Nav,NavLink, NavIcon, Bars} from './NavbarElements';
const Navbar = ({toggle}) => {
  return (
      <>
        <Nav> 
        <NavLink to="/">9 April</NavLink> 
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        </Nav>
      </>
    )
}

export default Navbar;