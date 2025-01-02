import "./styles.css";
import Link from "next/link";

const Features = () => {
  const supplements = [
    {
      name: "Omega-3 DHA/EPA",
      description:
        "Essential fatty acids that support brain health and cardiovascular wellness while reducing inflammation.",
      image: "/vitamins/fish_oil.png",
      slug: "omega-3-dha-epa",
    },
    {
      name: "Bone Broth",
      description:
        "Rich in collagen and minerals that support joint health, gut healing, and healthy skin.",
      image: "/vitamins/bone_broth.png",
      slug: "bone-broth",
    },
    {
      name: "Vitamin K",
      description:
        "Essential fat-soluble vitamin crucial for blood clotting, bone health, and calcium regulation.",
      image: "/vitamins/vitamin_k.png",
      slug: "vitamin-k",
    },
    {
      name: "Elderberry",
      description:
        "Immune-supporting berry rich in antioxidants that may help reduce cold and flu symptoms.",
      image: "/vitamins/elderberry.png",
      slug: "elderberry",
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
          <Link
            key={index}
            href={`/vitamins/${supplement.slug}`}
            className="feature-card"
          >
            <div className="feature-content">
              <h3 className="feature-name">{supplement.name}</h3>
              <p className="feature-description">{supplement.description}</p>
            </div>
            <div className="feature-image">
              <img src={supplement.image} alt={supplement.name} />
            </div>
          </Link>
        ))}
      </div>

      <Link href="/vitamins" className="cta-button">
        Reclaim Your Brain
      </Link>
    </div>
  );
};

export default Features;
