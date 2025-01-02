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
        <strong>Subscribe & save</strong> up to 45%. Choose subscription instead
        of one time payment and <strong>save up to $51.</strong>
      </p>
    ),
    large: (
      <div className="banner-quote">
        <p className="quote-text">
          "Vitamin Shop is motivation in a bottle for me. It's hands down the
          best tool for helping me get into a deep creative flow-state."
        </p>
        <div className="author-container">
          <div className="author-avatar">
            <img src="/api/placeholder/40/40" alt="Avatar" />
          </div>
          <span className="author-name">John Smith, Product Designer</span>
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
