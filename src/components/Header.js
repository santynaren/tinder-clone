import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
const Header = ({ children }) => {
  const data = useSelector((state) => state.posts);
  return (
    <div>
      {data.map((Val, idx) => {
        return <h1>{Val}</h1>;
      })}
    </div>
  );
};

export default Header;
