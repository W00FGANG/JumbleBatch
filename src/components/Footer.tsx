import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/#bakery">Bakery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><Link to="/">Cookie Care</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>3020 Jumble Dr</p>
          <p>hello@jumblebatch.com</p>
        </div>
        <div className="footer-column">
          <h4>Come to Our Pick Up Zone!</h4>
          <div className="pickup-map">
            <div className="map-placeholder">Map Area</div>
            <p className="map-caption">See footer for map ref<br />Add on map pin</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by Zamily LLC</p>
      </div>
    </footer>
  );
}
