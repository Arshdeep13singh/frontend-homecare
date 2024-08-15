import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";
import styled from "styled-components";

const BASE_URL = 'http://localhost:5000'

const HomePage = () => {
  const [name, setName] = useState('');
  const [showNone, setShowNone] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [results, setResults] = useState([]);
  const {  logout } = useAuth0();

  const searchProviders = async () => {
    try {
      if (name == '' || zipcode == '') return 0
      console.log(name,zipcode)
      const response = await axios.get(BASE_URL + '/api/providers/search', {
        params: { name, zip_code: zipcode },
      });
      setResults(response.data.providers);
      if (response.data.providers.length === 0) {
        setShowNone(true); // Show "No providers found"
      } else {
        setShowNone(false); // Providers found, hide the message
      }
    
    } catch (error) {
      console.error("Error searching providers", error);
    }

    setZipcode("");
    setName("");
  };

 

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="search-section">
          <h1 className="hero-heading">Search for Health Providers</h1>
          <input
          className="search-input"
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className="search-input"
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          required
          onChange={(e) => setZipcode(e.target.value)}
        />
          <div className="button-group">
            <Button type="submit" onClick={searchProviders}>Search</Button>
            <Button onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </Button>
          </div>
          <ul className="results-list">
          {results.length > 0 ? (
    results.map((provider, index) => {
      return (<div key={index}>
        <h3>{provider.name}</h3>
        <p>{provider.address_line1}</p>
        <p>{provider.city}, {provider.state} {provider.zip_code}</p>
      </div>)
}
  )) : (
    showNone && <p>No providers found.</p>
  )}
          </ul>
        </div>
        <div className="image-section">
          <img src="/images/homepage.webp" alt="homepage" className="homepage-img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .search-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 3.4rem;
    margin-bottom: 2rem;
  }

  .search-input {
    padding: 1rem;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .results-list {
    list-style: none;
    padding: 0;
  }

  .results-list li {
    padding: 0.5rem 0;
    font-size: 1.4rem;
  }

  .image-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .homepage-img {
    max-width: 100%;
    border-radius: 8px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr;
      gap: 4rem;
    }

    .button-group {
      flex-direction: column;
    }
  }
`;



export default HomePage;
