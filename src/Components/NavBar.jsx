import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdCreate } from 'react-icons/md';
import { RiSettingsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar-custom">
        <div className="nav-links">
          <Link to="/home" className="nav-link" data-title="Home"><FaHome /></Link>
          <Link to="/profile" className="nav-link" data-title="Profile"><ImProfile /></Link>
          <Link to="/setting" className="nav-link" data-title="Settings"><RiSettingsFill /></Link>
          <Link to="/create" className="nav-link" data-title="Create"><MdCreate/></Link>
        </div>
      </nav>
    </div>
  );
}