import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export default function Login() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <LoginWrapper>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
          Sign Up
        </Button>
      )}
      <WelcomeMessage>
        Welcome to {isAuthenticated && <UserName>{user.name}</UserName>} Home Page
      </WelcomeMessage>
      {isAuthenticated ? (
        <Button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #4A3C31;  // Darker Medium Brown
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WelcomeMessage = styled.h2`
  margin: 1.5rem 0;
  font-size: 2rem;
  color: #D9B7A1;  // Light Beige Brown
  text-align: center;
`;

const UserName = styled.p`
  font-weight: bold;
  color: #A67B5B;  // Warm Caramel
  display: inline;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #FFFFFF;  // Pure White
  background-color: #A67B5B;  // Warm Caramel
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8C5E3C;  // Slightly Darker Warm Caramel
  }
`;
