import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    
    input, textarea {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.5rem;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      font-size: 1.6rem;
    }


     

  .confirmation {
    margin-top: 2rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.success};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server
    setIsSubmitted(true);
    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          rows="5"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit Feedback</Button>
      </form>
      {isSubmitted && (
        <div className="confirmation">
          Thank you! Your feedback has been submitted.
        </div>
      )}
    </ContactSection>
  );
};

export default Contact;
