const USEFUL_LINKS = ["About Us", "Our Impact", "Our People", "Financials", "DIGIT Sandbox", "Contact Us"];
const RESOURCE_LINKS = ["Case Studies", "Whitepapers", "Strategy Papers", "Videos", "Newsletter", "Blog"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand col */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 0 }}>
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="footer-logo-text">eGOV</span>
          </div>
          <p className="footer-desc">
            Catalyzing digital transformation in public service delivery at
            speed &amp; scale.
          </p>
          <div className="social-links">
            {["f", "𝕏", "in", "▶"].map((icon) => (
              <a key={icon} href="#" className="social-btn">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Useful links */}
        <div>
          <h4 className="footer-col-title">Useful Links</h4>
          <ul className="footer-links">
            {USEFUL_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="footer-col-title">Resources</h4>
          <ul className="footer-links">
            {RESOURCE_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-col-title">Subscribe Now</h4>
          <p className="newsletter-desc">
            Receive regular updates of our monthly newsletter DOT – in your
            inbox.
          </p>
          <div className="newsletter-input-wrap">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Your email address"
            />
            <button className="btn-newsletter">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom">
          <p className="footer-bottom-text">© 2026, eGov. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
