import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top-row">
        <img src="/assets/images/mascot_seal.png" alt="Seal Mascot" className="footer-mascot" />
        <img src="/assets/images/FooterLogo.jpg" alt="Jumble Batch Logo" className="logo-footer-img" />
        <img src="/assets/images/mascot_boar.png" alt="Boar Mascot" className="footer-mascot" />
      </div>

      <div className="footer-divider"></div>

      <div className="footer-content">
        <div className="footer-column nav-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/#bakery">Bakery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Cookie Cart</Link></li>
          </ul>
        </div>
        <div className="footer-column contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-links">
            <p>(808)341-4194</p>
            <p>jumblebatch@gmail.com</p>
          </div>
        </div>
        <div className="footer-column pickup-col">
          <h4 className="footer-heading">Come to Our Pick Up Zone!</h4>
          <div className="pickup-map">
            <div className="map-placeholder-img"></div>
            <div className="pickup-info">
              <p>Aina Haina Parking Lot</p>
              <p>Address Example</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>Powered by Zumify LLC</p>
      </div>
    </footer>
  );
}
