import Image from "next/image";
import "./styles.css";

const Hero = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "12", label: "Premium Formulas" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-circles"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Enhanced Left Side */}
          <div className="hero-left">
            <div className="hero-badge">
              <span>⭐️ Trusted by 50,000+ customers worldwide</span>
            </div>

            <h1>
              <span className="gradient-text">Transform</span> Your Health
              Journey
            </h1>

            <p className="hero-subtitle">
              Experience our premium collection of science-backed supplements,
              designed to elevate your mind, body, and spirit.
            </p>

            <div className="hero-features">
              {[
                "100% Natural Ingredients",
                "Third-Party Tested",
                "Expert Formulated",
              ].map((feature, index) => (
                <div key={index} className="feature-item">
                  <svg
                    className="checkmark"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <button className="primary-button">
                Discover Our Products
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <div className="rating-badge">
                <div className="stars">★★★★★</div>
                <span>4.9/5 from 1,500+ reviews</span>
              </div>
            </div>

            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Original Right Side with Product Grid */}
          <div className="hero-right">
            <div className="hero-image-grid">
              <div className="product-card featured">
                <Image
                  src="/logos/logo.png"
                  alt="Mental Performance Supplement"
                  width={240}
                  height={240}
                  className="product-image"
                />
                <div className="product-label">Mental Focus</div>
                <div className="product-glow"></div>
              </div>
              <div className="product-card">
                <Image
                  src="/logos/logo.png"
                  alt="Energy Supplement"
                  width={200}
                  height={200}
                  className="product-image"
                />
                <div className="product-label">Daily Energy</div>
              </div>
              <div className="product-card">
                <Image
                  src="/logos/logo.png"
                  alt="Wellness Supplement"
                  width={200}
                  height={200}
                  className="product-image"
                />
                <div className="product-label">Complete Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
