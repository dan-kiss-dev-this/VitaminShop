import "./styles.css";

const Footer = () => {
  const footerLinks = {
    shop: {
      title: "Shop",
      links: [
        "All Products",
        "Best Sellers",
        "New Arrivals",
        "Bundles & Kits",
        "Subscribe & Save",
      ],
    },
    categories: {
      title: "Categories",
      links: [
        "Vitamins & Minerals",
        "Nootropics",
        "Immune Support",
        "Energy & Performance",
        "Sleep & Recovery",
      ],
    },
    learn: {
      title: "Learn",
      links: [
        "Blog",
        "Research",
        "Supplement Guide",
        "Ingredient Library",
        "Health Quiz",
      ],
    },
    company: {
      title: "Company",
      links: [
        "About Us",
        "Our Story",
        "Sustainability",
        "Quality Testing",
        "Careers",
      ],
    },
    support: {
      title: "Support",
      links: [
        "Contact Us",
        "FAQ",
        "Shipping Info",
        "Return Policy",
        "Privacy Policy",
      ],
    },
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logos/logo.png" alt="Logo" className="footer-logo" />
          <h3 className="brand-name">Vitamin Shop</h3>
          <p className="brand-description">
            Empowering your wellness journey with premium, science-backed
            supplements.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <span>FB</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span>IG</span>
            </a>
            <a href="#" aria-label="Twitter">
              <span>TW</span>
            </a>
            <a href="#" aria-label="LinkedIn">
              <span>LI</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="footer-section">
              <h4 className="section-title">{section.title}</h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 Vitamin Shop. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
