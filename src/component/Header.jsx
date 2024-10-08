import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <span>
          <img src=" images\healthkliniclogo.png" alt="logo" className="logo" />
          
        </span>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
 background-color:${({ theme }) => theme.colors.bg};
    padding:0 4.6rem;
    height:10rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    .logo{
    height:auto;
    max-width:50%;

    
    }
    
    
    }
    
`;
export default Header;
