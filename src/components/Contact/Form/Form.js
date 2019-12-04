import React from 'react';

import {
  FormWrapper,
  ContactForm,
  FormHeader,
  FormLabel,
  FormInput,
  FormText,
  FormButton,
} from './Form.styles';

export const Form = ({ id }) => (
  <FormWrapper id={id}>
    <ContactForm name="contact" method="POST">
      <FormHeader>Contact Me </FormHeader>
      <FormInput type="hidden" name="form-name" value="contact" />
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput type="text" name="name" />

      <FormLabel htmlFor="email">Email </FormLabel>
      <FormInput type="email" name="email" required />

      <FormLabel htmlFor="message">Message</FormLabel>
      <FormText name="message" />

      <FormButton type="submit"> Send </FormButton>
    </ContactForm>
  </FormWrapper>
);
