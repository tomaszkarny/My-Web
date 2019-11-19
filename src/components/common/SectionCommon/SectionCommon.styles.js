import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark, theme }) =>
    dark ? theme.color.dark : theme.color.light};
  min-height: 750px;

  flex: 1;
`;
