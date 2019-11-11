import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  grid-area: ${({ gridArea }) => gridArea || ''};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark, theme }) =>
    dark ? theme.color.dark : theme.color.light};
  min-height: 600px;
  padding: 0 20%;
  align-items: baseline;
  padding: 0 10%;
`;
