import { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Furniture', hasDropdown: true },
  { label: 'Interior', hasDropdown: true },
  { label: 'Materials', hasDropdown: true },
  { label: 'Experience', hasDropdown: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <span>Free shipping worldwide from $500</span>
          <span>Contact us: +1 (800) 555-0192</span>
        </div>
      </div>

      <div className="header__main">
        <div className="container header__main-inner">
          <a href="#" className="header__logo">
            Bloome
          </a>

          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href="#">
                    {link.label}
                    {link.hasDropdown && <span className="header__caret">▾</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button className="header__icon-btn" aria-label="Search">
              🔍
            </button>
            <button className="header__icon-btn" aria-label="Account">
              👤
            </button>
            <a href="#" className="header__cta">
              Get In Touch
            </a>
            <button
              className="header__menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;