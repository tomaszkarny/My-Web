import styled from '@emotion/styled';

export const StyledBurger = styled.button`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 15px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background-color: ${({ theme }) => theme.color.primary};
    margin-right: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    z-index: 99;

    &:focus {
      outline: none;
    }

    div {
      width: 30px;
      height: 2px;
      background: ${({ theme }) => theme.color.primary};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
          open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
