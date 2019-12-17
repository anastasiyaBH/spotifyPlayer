import React from 'react';

import './style.css';

const Header = ({ text }) => (
  <header className="header">
    <h1 className="header__title">{ text }</h1>
  </header>
);

export default Header;