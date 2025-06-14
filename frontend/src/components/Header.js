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
    // Close dropdown when opening mobile menu
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
        </Link>        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className="desktop-only"><Link to="/list-practice">List your practice</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="desktop-only"><Link to="/employers">For Employers</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="desktop-only"><Link to="/courses">Courses</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="desktop-only"><Link to="/books">Books</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="desktop-only"><Link to="/speakers">Speakers</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="desktop-only"><Link to="/doctors">Doctors</Link></li>
            <li className="separator desktop-only">|</li>
            <li className="login-dropdown desktop-only">
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
            
            {/* Mobile Menu Items */}
            <div className="mobile-auth-sections">
              <li className="mobile-only mobile-auth-section">
                <div className="mobile-auth-group">
                  <span className="auth-label">Doctor</span>
                  <div className="auth-links">
                    <Link to="/doctor/login">Login</Link>
                    <Link to="/doctor/signup">Sign up</Link>
                  </div>
                </div>
              </li>
              <li className="mobile-only mobile-auth-section">
                <div className="mobile-auth-group">
                  <span className="auth-label">Patients</span>
                  <div className="auth-links">
                    <Link to="/patient/login">Login</Link>
                    <Link to="/patient/signup">Sign up</Link>
                  </div>
                </div>
              </li>
            </div>

            <li className="mobile-only mobile-nav-item">
              <Link to="/doctors" onClick={closeMenu}>Doctors</Link>
              <span className="arrow">→</span>
            </li>
            <li className="mobile-only mobile-nav-item">
              <Link to="/list-practice" onClick={closeMenu}>List your practice</Link>
              <span className="arrow">→</span>
            </li>
            <li className="mobile-only mobile-nav-item">
              <Link to="/employers" onClick={closeMenu}>For Employers</Link>
              <span className="arrow">→</span>
            </li>
            <li className="mobile-only mobile-nav-item">
              <Link to="/courses" onClick={closeMenu}>Courses</Link>
              <span className="arrow">→</span>
            </li>
            <li className="mobile-only mobile-nav-item">
              <Link to="/books" onClick={closeMenu}>Books</Link>
              <span className="arrow">→</span>
            </li>
            <li className="mobile-only mobile-nav-item">
              <Link to="/speakers" onClick={closeMenu}>Speakers</Link>
              <span className="arrow">→</span>
            </li>
          </ul>
        </nav>        <div className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;