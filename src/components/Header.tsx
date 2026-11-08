import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/assets/images/logo.png" alt="Jumble Batch Cookies" className="logo-img" />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main Navigation">
          <Link
            to="/#bakery"
            className={`nav-link ${location.pathname === '/' && location.hash === '#bakery' ? 'active' : ''}`}
          >
            Bakery
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <div className="header-right">
          <Link to="/#order" className="cart-container" aria-label="Cookie Basket">
            <img
              src="/assets/images/basket.png"
              alt="basket"
              className="cart-icon-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (next) next.style.display = 'inline';
              }}
            />
            <span className="cart-icon-emoji" style={{ display: 'none', fontSize: '2.2rem' }}>
              🧺
            </span>
            <span className="cart-label-text">Basket</span>
            <span className="cart-badge">{cartCount}</span>
          </Link>

          <button
            type="button"
            className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
