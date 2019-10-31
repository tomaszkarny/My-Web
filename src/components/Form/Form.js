import React from 'react';

import { FormWrapper, ContactForm } from './Form.styles';

const Form = ({ id }) => {
  return (
    <FormWrapper id={id}>
      <ContactForm name="contact" method="POST" data-netlify="true">
        <h1>Contact Us </h1>
        <input type="hidden" name="contact" value="contact" />
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
