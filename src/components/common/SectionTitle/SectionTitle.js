import styled from '@emotion/styled';

export const SectionTitle = styled.h1`
  font-family: Montserrat;
  font-size: 28px;
  padding: 15% 0;
  line-height: 0.93;
  letter-spacing: 1px;
  color: ${({ dark, theme }) =>
    dark ? theme.color.light : theme.color.mineShaft};
`;
