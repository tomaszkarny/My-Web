import React from 'react';

// const scrollTo = ele => {
//   ele.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });
// };

const Button = ({ type, onClick, text }, ref) => {
  return (
    <button type={type} ref={ref} onClick={onClick}>
      {text}
    </button>
  );
};

const forwaredButton = React.forwardRef(Button);

export default forwaredButton;
