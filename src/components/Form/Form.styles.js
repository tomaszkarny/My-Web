import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  background-color: #141720;
  grid-area: Form;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;

  h1 {
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 1px;
    color: #ffffff;
    padding: 40px 0;
  }
  label {
    font-family: OpenSans-Regular;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.5px;
    color: #ffffff;
    text-align: left;
    padding: 20px 0;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid red;
    height: 50px;
    color: #ffffff;
  }

  button {
    color: white;
    align-self: flex-end;
    width: 120px;
    height: 35px;
    border-radius: 100px;
    background-color: #c71222;
    margin: 20px 0;
  }
`;
