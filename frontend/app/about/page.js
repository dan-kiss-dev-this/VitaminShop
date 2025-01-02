import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";
import "./styles.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="about-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="content-container">
            <span className="badge">About Us</span>
            <h1>Empowering Your Wellness Journey</h1>
            <p className="hero-subtitle">
              Helping you make informed decisions about supplements through
              science-backed research and expert guidance.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="content-container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Products Analyzed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Expert Reviews</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Customer Trust</span>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section">
            <div className="mission-content">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  At Vitamin Shop, we're dedicated to demystifying the world of
                  supplements. Our platform combines rigorous scientific
                  research with expert analysis to help you make confident,
                  informed decisions about your health.
                </p>
              </div>
              <div className="mission-image">
                <img src="/logos/logo.png" alt="Our Mission" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h2>What Sets Us Apart</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔬</div>
                <h3>Research-Based</h3>
                <p>
                  Every recommendation is backed by peer-reviewed scientific
                  studies and clinical research.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Expert Team</h3>
                <p>
                  Our in-house team of healthcare professionals and researchers
                  verify all content.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Personalized Approach</h3>
                <p>
                  Get tailored supplement recommendations based on your unique
                  health profile.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Quality Assured</h3>
                <p>
                  Rigorous testing and verification of all recommended
                  supplements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h2>Start Your Wellness Journey Today</h2>
              <p>
                Join our community of health enthusiasts and discover premium
                supplements tailored to your needs.
              </p>
              <Link href="/vitamins">
                <button className="cta-button">Explore Vitamins</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
