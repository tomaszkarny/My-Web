import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: List;
  background-color: #efefef;
  text-align: center;

  h1 {
    padding: 30px 0;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 200px;

  @media (max-width: 900px) {
    grid-auto-rows: 200px;
  }

  /* grid-column-gap: 40px;
  grid-row-gap: 40px; */
  padding: 40px;
  background-color: #efefef;
  align-items: center;
  justify-items: center;
`;

export const Item = styled.div`
  background: tomato;
  width: 300px;

  background: transparent;
  text-align: left;

  h3 {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: #141720;
    text-align: left;
    padding: 10px 0;
  }

  p {
    font-family: OpenSans;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.5px;
    color: #5d5f65;
    text-align: left;
  }
`;
