import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
      {/* t placeholder để hiển thị các phần tử con được truyền vào giữa cặp thẻ mở và đóng của component */}
    </button>
  );
};

export default Button;