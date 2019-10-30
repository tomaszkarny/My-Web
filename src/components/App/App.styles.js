import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: grid;

  grid-template-columns: 50% 50%;
  grid-template-rows: 60px 700px 700px;
  grid-auto-rows: 1fr;

  grid-template-areas:
    'Navigation Navigation'
    'header header'
    'DescriptionFirst ImageFirst'
    'TimeLine DescriptionSecond'
    'List List'
    'ImageSecond DescriptionThird'
    'Form Map';

  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-auto-rows: minmax(400px, auto);
    grid-template-areas:
      'Navigation'
      'header'
      'DescriptionFirst'
      'ImageFirst'
      'TimeLine'
      'DescriptionSecond'
      'List'
      'ImageSecond'
      'DescriptionThird'
      'Form'
      'Map';
  }
`;

export const NavWrapper = styled.div`
  grid-area: Navigation;
`;
