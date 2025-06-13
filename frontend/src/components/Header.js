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
      <div className="header-container">        <Link to="/" className="logo">
          <div className="logo-container">
            <img src="/images/logo.png" alt="ProVital" className="logo-img" />
          </div>
          <span className="logo-text">ProVital</span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/list-practice">List your practice</Link></li>
            <li className="separator">|</li>
            <li><Link to="/employers">For Employers</Link></li>
            <li className="separator">|</li>
            <li><Link to="/courses">Courses</Link></li>
            <li className="separator">|</li>
            <li><Link to="/books">Books</Link></li>
            <li className="separator">|</li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li className="separator">|</li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li className="separator">|</li>
            <li className="login-dropdown">
              <button onClick={toggleDropdown}>
                Login / Signup
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="auth-links">
                      <div className="auth-section">
                        <span>Doctor</span>
                        <Link to="/doctor/login">Login</Link>
                        <Link to="/doctor/signup">Sign up</Link>
                      </div>
                      <div className="auth-section">
                        <span>Patients</span>
                        <Link to="/patient/login">Login</Link>
                        <Link to="/patient/signup">Sign up</Link>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;