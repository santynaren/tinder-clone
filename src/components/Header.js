import React from 'react';
import './Header.css';
const Header = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
