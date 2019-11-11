import styled from '@emotion/styled';

export const TimeLineWrapper = styled.div`
  grid-area: TimeLine;
  align-content: center;

  margin: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: stretch;

  @media (max-width: 900px) {
    margin-top: 10%;
    justify-content: flex-start;
  }
`;

export const ItemWrapper = styled.div`
  border-left: 3px solid #d4d4d4;
  padding: 0 30px;
  margin-left: 50%;
  @media (max-width: 900px) {
    display: flex;
    flex: 1;
  }
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 40px;

  :first-child:before {
    content: '';
    position: absolute;
    left: -42px;
    top: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #d4d4d4;
  }
  :after {
    border: 3px solid #c71222;
  }

  h5 {
    width: 146px;
    height: 26px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: normal;
    color: #141720;
  }
`;

export const Info = styled.div`
  position: absolute;
  right: 0;
  left: -100px;
  top: 1px;
  @media (max-width: 900px) {
    /* position: static; */
    margin-bottom: 1rem;
  }
`;

export const Date = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #c71222;

  @media (max-width: 900px) {
    position: static;
    margin-bottom: 1rem;
  }
`;

export const List = styled.div`
  ul {
    margin-top: 0;
    margin-bottom: 1rem;

    li {
      list-style-type: none;
    }
  }
`;
