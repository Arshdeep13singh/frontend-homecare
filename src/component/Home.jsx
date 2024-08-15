import React from 'react'
import HeroSection from './HeroSection'
import HomePage from './HomePage'
import {  useAuth0} from "@auth0/auth0-react";
import styled from 'styled-components';

const Home = () => {
  const { isAuthenticated } = useAuth0();
 
  return (
    <>
    
    {isAuthenticated?<HomePage/>:(<>
      <LoginMessage>Please log in to search for health providers.</LoginMessage>
      <HeroSection/></>)}
      
    </>
  )
}
const LoginMessage = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1.8rem;
  color: red;

`;

export default Home
