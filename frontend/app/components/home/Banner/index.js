import "./styles.css";

const Banner = ({ type = "top" }) => {
  // Content for each banner type
  const bannerContent = {
    top: (
      <p className="banner-text">
        New Year, New Brain Sale: Subscribe & Save 50%
      </p>
    ),
    small: (
      <p className="banner-text">
        <strong>Get Expert Vitamin Insights</strong> delivered to your inbox.
        Join our community and discover personalized supplement recommendations.{" "}
        <a href=".cta-container" className="smooth-scroll">
          <strong>Sign up now for free guidance →</strong>
        </a>
      </p>
    ),
    large: (
      <div className="banner-quote">
        <p className="quote-text">
          "Vitamin Shop is motivation in a website for me. It's vitamins are
          hands down the best tool for helping me get into a deep creative
          flow-state."
        </p>
        <div className="author-container">
          <div className="author-avatar">
            <img src="/avatar.jpeg" alt="Avatar" />
          </div>
          <span className="author-name">Dan Kiss, Software Engineer</span>
        </div>
        <div className="wave wave-left"></div>
        <div className="wave wave-right"></div>
      </div>
    ),
  };

  return (
    <div className={`banner-container ${type}-banner`}>
      {bannerContent[type]}
    </div>
  );
};

export default Banner;
