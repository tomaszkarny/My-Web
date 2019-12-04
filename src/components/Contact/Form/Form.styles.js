import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 700px;
  @media (max-width: 700px) {
    min-height: 500px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  padding: 0 10%;
`;

export const FormHeader = styled.h1`
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.light};
  padding: 40px 0;
`;

export const FormLabel = styled.label`
  font-family: OpenSans-Regular;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.color.light};
  text-align: left;
  padding: 20px 0;
`;

export const FormInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid red;
  height: 50px;
  color: ${({ theme }) => theme.color.light};
`;

export const FormText = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 2px solid red;
  height: 50px;
  color: ${({ theme }) => theme.color.light};
`;

export const FormButton = styled.button`
  color: white;
  align-self: flex-end;
  width: 120px;
  height: 35px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.thunderbird};
  margin: 20px 0;
`;
