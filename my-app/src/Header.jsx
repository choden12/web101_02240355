import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>User Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#setting">Setting</a></li>
          <li><a href="#message">Message</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;