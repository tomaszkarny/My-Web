import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark, theme }) =>
    dark ? theme.color.dark : theme.color.light};
  min-height: 700px;
  padding-bottom: 10%;
  @media (max-width: 700px) {
    min-height: 500px;
  }

  flex: 1;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
