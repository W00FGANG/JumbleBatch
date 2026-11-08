import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setCartCount }: HomeProps) {
  const handleAdd = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-cookie-col hero-cookie-left-col">
            <img
              src="/assets/images/CookieImageLeft.png"
              alt="Assorted Jumble Batch Cookies"
              className="hero-cookie-side hero-cookie-left"
            />
          </div>

          <div className="hero-text-container">
            <div className="hero-title-group">
              <h1 className="hero-title">
                <span className="hero-title-line">Jumble Batch</span>
                <span className="hero-title-line">Cookies</span>
              </h1>
              <div className="hero-subtitle-wrap">
                <p className="hero-subtitle">
                  Homemade happiness
                  <br />
                  All from the Heart
                </p>
              </div>
            </div>

            <Link to="#order" className="order-cookie-link">
              <img
                src="/assets/images/OrderCookieButton.png"
                alt="Order Cookie"
                className="order-cookie-btn"
              />
            </Link>
          </div>

          <div className="hero-cookie-col hero-cookie-right-col">
            <img
              src="/assets/images/CookieImageRight.png"
              alt="Assorted Jumble Batch Cookies"
              className="hero-cookie-side hero-cookie-right"
            />
          </div>
        </div>
      </section>

      {/* Highlighted Cookie */}
      <section className="highlighted-cookie" id="bakery">
        <h2 className="section-title">Highlighted Cookie of the Week</h2>
        <div className="highlight-section-container">
          <div className="highlight-bg"></div>
          <img src="/assets/images/highlight.png" alt="Caramelized Toffee & Dark Chocolate Cookies" className="highlight-img" />
          <img src="/assets/images/mascot_turtle.png" alt="Turtle Mascot" className="floating-mascot" />
          <div className="highlight-info">
            <h3>Caramelized Toffee & Dark Chocolate Cookies</h3>
            <Link to="#order" className="btn-taste">Get a Taste!</Link>
          </div>
        </div>
      </section>

      {/* Made to Order Section */}
      <section className="made-to-order">
        <h2 className="section-title">Made to Order</h2>
        <p className="disclaimer">"This food product is home-produced and processed. It was not produced in a commercial kitchen."</p>
        
        <div className="steps-container">
          <div className="step-card">
            <img src="/assets/images/Step1.png" alt="Step 1" className="step-img" />
            <h4>Step 1: Order Online</h4>
            <p>Order and Pay Online.<br/><br/>Schedule a date to pick up your cookie order</p>
          </div>
          <div className="step-card">
            <img src="/assets/images/Step2.png" alt="Step 2" className="step-img" />
            <h4>Step 2: Pick Up Order</h4>
            <p>Drive out to the pick up spot,<br/><br/>Show confirmation<br/>Pick up your order</p>
          </div>
          <div className="step-card">
            <img src="/assets/images/Step3.png" alt="Step 3" className="step-img" />
            <h4>Step 3: Enjoy & Leave Us a Review</h4>
            <p>Enjoy your sweet treat of the day. You deserve it! <br/><br/>Leave us a review!</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="product-menu" id="order">
        <div className="product-grid">
          <ProductCard 
            title="Chocolate Cookie" 
            imgSrc="/assets/images/product_1.png" 
            badgeSrc="/assets/images/mascot_boar.png" 
            onAdd={handleAdd} 
          />
          <ProductCard 
            title="SnickerDoodle" 
            imgSrc="/assets/images/product_2.png" 
            badgeSrc="/assets/images/mascot_seal.png" 
            onAdd={handleAdd} 
          />
          <ProductCard 
            title="Chocolate Toffee" 
            imgSrc="/assets/images/product_1.png" 
            badgeSrc="/assets/images/mascot_seal.png" 
            onAdd={handleAdd} 
          />
          <ProductCard 
            title="Cranberry White Chocolate" 
            imgSrc="/assets/images/product_2.png" 
            badgeSrc="/assets/images/mascot_boar.png" 
            onAdd={handleAdd} 
          />
        </div>
      </section>
    </>
  );
}
