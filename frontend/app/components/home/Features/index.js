import "./styles.css";

const Features = () => {
  const supplements = [
    {
      name: "Omega-3 DHA/EPA",
      description:
        "Essential fatty acids that support brain health, cognitive function, and reduce inflammation while promoting cardiovascular wellness.",
      citations: "[1] [2]",
      image: "/logos/logo.png",
    },
    {
      name: "Organic Lion's Mane Mushrooms",
      description:
        "Supports cognitive health, memory enhancement and neural growth factor production for improved mental clarity.",
      citations: "[3] [4]",
      image: "/logos/logo.png",
    },
    {
      name: "Vitamin D3 + K2",
      description:
        "Crucial for immune function, mood regulation, and calcium absorption. K2 ensures optimal D3 utilization and bone health.",
      citations: "[5] [6]",
      image: "/logos/logo.png",
    },
    {
      name: "Magnesium L-Threonate",
      description:
        "Superior form of magnesium that crosses the blood-brain barrier, supporting cognitive function, sleep quality, and stress reduction.",
      citations: "[7] [8]",
      image: "/logos/logo.png",
    },
  ];

  return (
    <div className="features-container">
      <h1 className="features-title">A Limitless Mind in 60 Seconds</h1>
      <p className="features-subtitle">
        Okay, maybe not 60 seconds. But as soon as your body digests the
        powerful ingredients in our formula, you can expect to feel a sharper
        focus, more mental clarity and motivation, less stress, and calm energy
        that lasts all day.*
      </p>

      <div className="features-grid">
        {supplements.map((supplement, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content">
              <h3 className="feature-name">{supplement.name}</h3>
              <p className="feature-description">{supplement.description}</p>
              <p className="feature-citations">{supplement.citations}</p>
            </div>
            <div className="feature-image">
              <img src={supplement.image} alt={supplement.name} />
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <span className="scroll-arrow left">←</span>
        <span className="scroll-text">scroll</span>
        <span className="scroll-arrow right">→</span>
      </div>

      <button className="cta-button">Reclaim Your Brain</button>
    </div>
  );
};

export default Features;
