import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem;
  background-color: ${({ theme }) => theme.colors.background};

  .about-text {
    flex: 1;
    margin-right: 2rem;

    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-size: 1.6rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .about-image {
    flex: 1;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At HealthKlinic, we are committed to making healthcare accessible and
          convenient for everyone. Our network of clinics is strategically
          located to ensure that you can find a HealthKlinic center close to
          your home or workplace. Whether you're in need of a routine check-up,
          specialized treatment, or urgent care, our state-of-the-art facilities
          are just around the corner. Simply use our online locator to find the
          nearest HealthKlinic center, and get directions right to our doorstep.
          Your health is our priority, and we're here to provide the care you
          need, right when you need it. We are a dedicated team of professionals
          committed to providing the best services and solutions to our
          customers. Our mission is to deliver high-quality products that exceed
          expectations and foster lasting relationships.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/background.webp" alt="About Us" />
      </div>
    </AboutSection>
  );
};

export default About;
