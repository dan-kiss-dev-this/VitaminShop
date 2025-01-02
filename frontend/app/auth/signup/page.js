"use client";
import React, { useState } from "react";
import "./styles.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <a href="/" className="back-link">
        <span className="back-link-arrow">←</span>
        Back to Website
      </a>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content-wrapper">
        <div className="signup-grid">
          {/* Left side - Content */}
          <div className="content-section">
            <div className="brand">
              <div className="logo">
                <span className="logo-text">V</span>
              </div>
              <h3 className="brand-name">Vitamin Shop</h3>
            </div>

            <h1>Start Your Wellness Journey Today</h1>
            <p className="subtitle">
              Join our community of health enthusiasts and discover premium
              supplements tailored to your needs.
            </p>

            <div className="features">
              <div className="feature-item">
                <div className="feature-icon">★</div>
                <div className="feature-content">
                  <h4>Premium Quality</h4>
                  <p>Scientifically backed supplements from trusted sources</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">♦</div>
                <div className="feature-content">
                  <h4>Expert Guidance</h4>
                  <p>Personalized recommendations from health professionals</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">◆</div>
                <div className="feature-content">
                  <h4>Member Benefits</h4>
                  <p>Exclusive discounts and early access to new products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="signup-card">
            <div className="card-header">
              <h2>Create Account</h2>
              <p>Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Choose a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Create Account
              </button>

              <div className="form-footer">
                <p className="login-link">
                  Already have an account? <a href="/login">Sign in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
