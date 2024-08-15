import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">Healthklinic</h1>
          <p className="hero-para">
          "Discover the nearest clinics with Healthklinic—your trusted guide to accessible healthcare. We're here to help you find the care you need, wherever you are."
          </p>
          <Button className="btn signup">
          
          <NavLink to="/login">sign up</NavLink>
        </Button>
        </div>
       
        <div className="section-hero-image">
          <picture>
          <img src="images\Find-Clinic-Eng-Mob.jpg" alt="location " className="hero-img"/>
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section` padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
  justify-content: center;
  
  }
    

  .btn {
    max-width: 16rem;
  }

  

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }
    

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
export default HeroSection;
