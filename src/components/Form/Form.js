import React from 'react';

import { FormWrapper, ContactForm } from './Form.styles';

const Form = ({ id }) => {
  return (
    <FormWrapper id={id}>
      <ContactForm>
        <h1>Contact Us </h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email </label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" />

        <button type="submit"> Contact Us </button>
      </ContactForm>
    </FormWrapper>
  );
};

export default Form;
