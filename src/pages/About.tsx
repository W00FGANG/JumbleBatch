import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About Jumble<br />Batch</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <h2 className="section-title story-title">About Our Story</h2>
        
        <div className="story-container">
          {/* Main Story Card */}
          <div className="story-card main-story-card">
            <div className="story-img-wrapper">
              <img src="/assets/images/hero.png" alt="Mom and Son at Jumble Batch Booth" />
            </div>
            <div className="story-text">
              <p>Our story started when a mom and son decided to make a venture on selling quality, homemade, delicious cookies to our lovely community. My mother has always loved making cookies for events, especially for the love of her kids. Everyone says how amazing the cookies are, and we decided we wanted to take the next step and share that with everyone.</p>
            </div>
          </div>

          {/* Zig Zag Layout 1 (Image Left, Text Right) */}
          <div className="zig-zag-row">
            <div className="zig-zag-img-wrapper">
              <img src="/assets/images/product_1.png" alt="Cookies Display" />
            </div>
            <div className="zig-zag-text story-card">
              <p>Our story started when a mom and son decided to make a venture on selling quality, homemade, delicious cookies to our lovely community. My mother has always loved making cookies for events, especially for the love of her kids. Everyone says how amazing the cookies are, and we decided we wanted to take the next step and share that with everyone.</p>
            </div>
          </div>

          {/* Zig Zag Layout 2 (Text Left, Image Right) */}
          <div className="zig-zag-row reverse">
            <div className="zig-zag-text story-card">
              <p>Our story started when a mom and son decided to make a venture on selling quality, homemade, delicious cookies to our lovely community. My mother has always loved making cookies for events, especially for the love of her kids. Everyone says how amazing the cookies are, and we decided we wanted to take the next step and share that with everyone.</p>
            </div>
            <div className="zig-zag-img-wrapper">
              <img src="/assets/images/product_2.png" alt="Cookies Display" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Order and Try our Cookies Now!</h2>
        <Link to="/#order" className="btn btn-primary btn-large">Order Now!</Link>
      </section>

      {/* Shared Bottom Mascots */}
      <section className="bottom-mascot-row cta-bottom-mascots">
        <img src="/assets/images/mascot_seal.png" alt="Seal Mascot" className="footer-mascot" />
        <div className="logo-footer">
          <span className="logo-text">Jumble Batch</span>
          <span className="logo-sub">COOKIES</span>
        </div>
        <img src="/assets/images/mascot_boar.png" alt="Boar Mascot" className="footer-mascot" />
      </section>
    </>
  );
}
