import styled from '@emotion/styled';

export const SectionDescription = styled.p`
  font-family: OpenSans;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: ${({ dark, theme }) =>
    dark ? theme.color.light : theme.color.midGray};
`;
