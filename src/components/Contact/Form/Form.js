import React from 'react';

import { FormWrapper, ContactForm } from './Form.styles';

export const Form = ({ id }) => (
  <FormWrapper id={id}>
    <ContactForm name="contact" method="POST">
      <h1>Contact Me </h1>
      <input type="hidden" name="form-name" value="contact" />
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
