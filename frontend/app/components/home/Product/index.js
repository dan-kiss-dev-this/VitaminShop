"use client";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

const Product = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Enhanced Brain Function",
      description:
        "Experience improved cognitive performance, sharper memory, and better mental clarity throughout your day.",
    },
    {
      icon: "⚡",
      title: "Sustained Energy",
      description:
        "Natural, long-lasting energy without the crashes associated with caffeine or sugar.",
    },
    {
      icon: "😌",
      title: "Stress Reduction",
      description:
        "Adaptogenic ingredients help your body manage stress and maintain emotional balance.",
    },
    {
      icon: "💪",
      title: "Immune Support",
      description:
        "Strengthened immune system with our perfectly balanced blend of essential vitamins and minerals.",
    },
    {
      icon: "🎯",
      title: "Improved Focus",
      description:
        "Stay concentrated on tasks longer with enhanced mental stamina and reduced brain fog.",
    },
    {
      icon: "🌟",
      title: "Better Mood",
      description:
        "Experience elevated mood and motivation through optimized brain chemistry support.",
    },
  ];

  return (
    <div className="product-container">
      <h1 className="product-title">Nano-encapsulation Technology</h1>
      <p className="product-subtitle">
        A nutrient is only as useful as it is bioavailable. That's why most
        supplements aren't effective — and it's why we spent 10 years + 100s of
        iterations ensuring that our formula is. We've created the most powerful
        mental performance enhancer on the market, packed with vital ingredients
        that actually work.*
      </p>

      <div className="product-showcase">
        <div className="benefits-left">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{benefit.icon}</span>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="product-image-container">
          <Image
            src="/vitamins/beta_carotene.png"
            alt="Product Bottle"
            width={400}
            height={600}
            priority
            className="product-image"
          />
        </div>

        <div className="benefits-right">
          {benefits.slice(3, 6).map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{benefit.icon}</span>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/vitamins">
        <button className="enhance-button">Enhance Your Mind</button>
      </Link>
    </div>
  );
};

export default Product;
