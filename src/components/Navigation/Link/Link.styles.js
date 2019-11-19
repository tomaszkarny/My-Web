import styled from '@emotion/styled';

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.color.light};
  text-decoration: none;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-family: OpenSans;
  font-size: 16px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.midGray};
  transition: opacity 0.2s linear;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.primary};
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
