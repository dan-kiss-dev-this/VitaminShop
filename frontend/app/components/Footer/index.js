import "./styles.css";

const Footer = () => {
  const footerLinks = {
    shop: {
      title: "Shop",
      links: [
        { label: "All Products", url: "/vitamins" },
        { label: "Best Sellers", url: "/shop/best-sellers" },
        { label: "New Arrivals", url: "/shop/new-arrivals" },
        { label: "Bundles & Kits", url: "/shop/bundles" },
        { label: "Subscribe & Save", url: "/shop/subscribe" },
      ],
    },
    categories: {
      title: "Categories",
      links: [
        { label: "Vitamins & Minerals", url: "/category/vitamins-minerals" },
        { label: "Nootropics", url: "/category/nootropics" },
        { label: "Immune Support", url: "/category/immune-support" },
        { label: "Energy & Performance", url: "/category/energy-performance" },
        { label: "Sleep & Recovery", url: "/category/sleep-recovery" },
      ],
    },
    learn: {
      title: "Learn",
      links: [
        { label: "Blog", url: "/blog" },
        { label: "Research", url: "/research" },
        { label: "Supplement Guide", url: "/supplement-guide" },
        { label: "Ingredient Library", url: "/ingredients" },
        { label: "Health Quiz", url: "/health-quiz" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", url: "/about" },
        { label: "Our Story", url: "/our-story" },
        { label: "Sustainability", url: "/sustainability" },
        { label: "Quality Testing", url: "/quality" },
        { label: "Careers", url: "/careers" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Contact Us", url: "/contact" },
        { label: "FAQ", url: "/faq" },
        { label: "Shipping Info", url: "/shipping" },
        { label: "Return Policy", url: "/returns" },
        { label: "Privacy Policy", url: "/privacy" },
      ],
    },
  };

  const socialLinks = [
    { label: "Facebook", url: "https://facebook.com/vitaminshop", icon: "FB" },
    {
      label: "Instagram",
      url: "https://instagram.com/vitaminshop",
      icon: "IG",
    },
    { label: "Twitter", url: "https://twitter.com/vitaminshop", icon: "TW" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/company/vitaminshop",
      icon: "LI",
    },
  ];

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
            {socialLinks.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <span>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="footer-section">
              <h4 className="section-title">{section.title}</h4>
              <ul>
                {section.links.map(({ label, url }) => (
                  <li key={label}>
                    <a href={url}>{label}</a>
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
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookies">Cookie Policy</a>
          <a href="/accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
