import styled from '@emotion/styled';

export const SectionDescription = styled.p`
  justify-content: center;
  align-items: center;
  word-break: break-word;
  font-family: OpenSans;
  font-size: 16px;
  width: 100%;

  line-height: 1.73;
  letter-spacing: 0.5px;
  color: ${({ dark, theme }) =>
    dark ? theme.color.light : theme.color.midGray};
`;
