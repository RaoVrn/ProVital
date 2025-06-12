import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="ProVital" />
          
        </Link>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/list-practice">List your practice</Link></li>
            <li><Link to="/employers">For Employers</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li className="login-dropdown">
              <button onClick={toggleDropdown}>
                Login / Signup
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h4>Doctor</h4>
                    <Link to="/doctor/login">Login</Link>
                    <Link to="/doctor/signup">Sign up</Link>
                  </div>
                  <div className="dropdown-section">
                    <h4>Patients</h4>
                    <Link to="/patient/login">Login</Link>
                    <Link to="/patient/signup">Sign up</Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;