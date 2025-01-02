import Image from "next/image";
import "./styles.css";

const Hero = () => {
  const stats = [
    { number: "100K+", label: "Products Analyzed" },
    { number: "15K+", label: "Expert Reviews" },
    { number: "98%", label: "Customer Trust" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-circles"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span>🌿 Your Trusted Wellness Guide</span>
            </div>

            <h1>
              Find Your Perfect{" "}
              <span className="gradient-text">Supplements</span> With Expert
              Guidance
            </h1>

            <p className="hero-subtitle">
              Navigate the world of vitamins with confidence. Get personalized
              recommendations backed by scientific research and expert analysis.
            </p>

            <div className="hero-cta">
              <a href="/vitamins" className="primary-button">
                Explore Vitamins
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
              </a>
              <div className="rating-badge">
                <div className="stars">★★★★★</div>
                <span>4.9/5 from 2,000+ verified users</span>
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

          <div className="hero-right">
            <div className="hero-image-grid">
              <div className="product-card featured">
                <Image
                  src="/vitamins/bone_broth.png"
                  alt="Personalized Vitamin Guide"
                  width={200}
                  height={200}
                  className="product-image"
                />
                <div className="product-label">
                  Personalized Recommendations
                </div>
                <div className="product-glow"></div>
              </div>
              <div className="product-card">
                <Image
                  src="/vitamins/ashwaganda.png"
                  alt="Daily Supplements"
                  width={160}
                  height={160}
                  className="product-image"
                />
                <div className="product-label">Daily Essentials</div>
              </div>
              <div className="product-card">
                <Image
                  src="/vitamins/cranberry.png"
                  alt="Specialty Supplements"
                  width={160}
                  height={160}
                  className="product-image"
                />
                <div className="product-label">Specialty Formulas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
