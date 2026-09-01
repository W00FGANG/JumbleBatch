import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact-page-container">
      <section className="contact-form-section">
        <div className="contact-form-card">
          <div className="contact-info-col">
            <h1 className="contact-title font-heading">Contact Us</h1>
            <p className="contact-subtitle font-heading">We do catering and events!</p>
            
            <div className="contact-details">
              <div className="contact-detail-row">
                <span className="contact-icon">✉️</span>
                <p>jumblebatch@gmail.com</p>
              </div>
              <div className="contact-detail-row">
                <span className="contact-icon">📞</span>
                <p>+1 808 341 4194</p>
              </div>
            </div>

            <div className="social-media-section">
              <p className="social-title font-heading">Follow Us On Social Media!</p>
              <div className="social-icons">
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🎵</a>
              </div>
            </div>
          </div>

          <div className="contact-input-col">
            <p className="input-col-title">I'm interested in:</p>
            <div className="interest-tags">
              <button className="tag-btn active">Catering</button>
              <button className="tag-btn">Online Order</button>
              <button className="tag-btn">Customer Service</button>
              <button className="tag-btn">Custom Request</button>
              <button className="tag-btn">Other</button>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="Jhon Smith" />
              </div>
              <div className="form-group">
                <label>Your email</label>
                <input type="email" placeholder="email@gmail.com" />
              </div>
              <div className="form-group">
                <label>Your message</label>
                <textarea placeholder="Your message here..." rows={4}></textarea>
              </div>
              <button type="submit" className="btn-send">Send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Mascots at bottom */}
      <section className="contact-bottom-mascots">
        <img src="/assets/images/mascot_seal.png" alt="Seal Mascot" className="contact-mascot seal" />
        <img src="/assets/images/mascot_boar.png" alt="Boar Mascot" className="contact-mascot boar" />
      </section>
    </div>
  );
}
