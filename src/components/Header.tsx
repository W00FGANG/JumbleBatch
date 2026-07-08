import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Jumble Batch</span>
        <span className="logo-sub">COOKIES</span>
      </div>
      <nav className="nav">
        <Link to="/#bakery" className="nav-link">Bakery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <div className="cart-icon">
        🛒
        {cartCount > 0 && (
          <span style={{
            fontSize: '0.8rem',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            position: 'absolute',
            top: '15px'
          }}>
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
}
