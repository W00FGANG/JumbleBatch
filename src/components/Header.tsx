import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Jumble Batch Cookies" className="logo-img" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/#bakery" className="nav-link">Bakery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="cart-container">
        <img src="/assets/images/basket.png" alt="basket" className="cart-icon-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'inline'; }} />
        <span className="cart-icon-emoji" style={{display: 'none', fontSize: '3rem'}}>🧺</span>
        {cartCount > 0 && (
          <span className="cart-badge">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
}
