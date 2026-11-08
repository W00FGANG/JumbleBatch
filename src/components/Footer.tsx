import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top-row">
          <img src="/assets/images/mascot_seal.png" alt="Seal Mascot" className="footer-mascot" />
          <div className="footer-logo-wrap">
            <img src="/assets/images/FooterLogo.jpg" alt="Jumble Batch Logo" className="logo-footer-img" />
            <span className="footer-sub-badge">🌺 Baked Fresh with Aloha in Hawaiʻi</span>
          </div>
          <img src="/assets/images/mascot_boar.png" alt="Boar Mascot" className="footer-mascot" />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-content">
          <div className="footer-column nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/#bakery">🍪 Bakery</Link></li>
              <li><Link to="/about">🌺 About</Link></li>
              <li><Link to="/contact">✉️ Contact Us</Link></li>
              <li><Link to="/#order">🧺 Cookie Cart</Link></li>
            </ul>
          </div>

          <div className="footer-column contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-links footer-contact-items">
              <a href="tel:8083414194" className="footer-contact-pill">
                <span className="footer-icon">📞</span>
                <span>(808) 341-4194</span>
              </a>
              <a href="mailto:jumblebatch@gmail.com" className="footer-contact-pill">
                <span className="footer-icon">✉️</span>
                <span>jumblebatch@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="footer-column pickup-col">
            <h4 className="footer-heading">Come to Our Pick Up Zone!</h4>
            <div className="pickup-map">
              <div className="map-placeholder-img"></div>
              <div className="pickup-info">
                <span className="pickup-tag">📍 Oʻahu Pick-Up Spot</span>
                <p className="pickup-title">ʻĀina Haina Parking Lot</p>
                <p className="pickup-address">820 W Hind Dr, Honolulu, HI 96821</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jumble Batch Cookies</p>
          <p className="footer-powered">Powered by Zumify LLC</p>
        </div>
      </div>
    </footer>
  );
}
