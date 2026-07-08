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
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Jumble Batch<br />Cookies</h1>
          <p className="hero-subtitle">Homemade happiness<br />All from the Heart</p>
          <div className="hero-mascots">
            <img src="/assets/images/mascot_seal.png" alt="Seal Mascot" className="mascot seal" />
            <img src="/assets/images/mascot_boar.png" alt="Boar Mascot" className="mascot boar" />
          </div>
        </div>
      </section>

      {/* Highlighted Cookie */}
      <section className="highlighted-cookie" id="bakery">
        <h2 className="section-title">Highlighted Cookie of the Week</h2>
        <div className="highlight-card">
          <div className="highlight-img-container">
            <img src="/assets/images/mascot_seal.png" alt="Seal" className="floating-mascot" />
            <img src="/assets/images/highlight.png" alt="Caramelized Toffee & Dark Chocolate Cookies" className="highlight-img" />
          </div>
          <div className="highlight-info">
            <h3>Caramelized Toffee<br />& Dark Chocolate<br />Cookies</h3>
            <Link to="/#order" className="btn btn-primary">Get a Taste!</Link>
          </div>
        </div>
      </section>

      {/* Made to Order Section */}
      <section className="made-to-order">
        <h2 className="section-title">Made to Order</h2>
        <p className="disclaimer">*This food product is home-produced and processed. It was not produced in a commercial kitchen.*</p>
        
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">💻</div>
            <h4>Step 1: Order Online</h4>
            <p>Order and Pay Online. Schedule a date to pick up your cookie order</p>
          </div>
          <div className="step-card">
            <div className="step-icon">📍</div>
            <h4>Step 2: Pick Up Order</h4>
            <p>Drive out to the pick up spot. Show confirmation. Pick up your order</p>
          </div>
          <div className="step-card">
            <div className="step-icon">❤️</div>
            <h4>Step 3: Enjoy & Leave Us a Review</h4>
            <p>Enjoy your sweet treat of the day. You deserve it! Leave us a review!</p>
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

      <section className="bottom-mascot-row">
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
