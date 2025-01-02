import vitamins from "@/data/vitamins.json";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

import "./styles.css";

export async function generateStaticParams() {
  return vitamins.map((vitamin) => ({
    slug: vitamin.slug,
  }));
}

export default function VitaminPage({ params }) {
  const vitamin = vitamins.find((v) => v.slug === params.slug);

  if (!vitamin) {
    return (
      <div className="not-found-container">
        <div className="not-found">Vitamin not found</div>
      </div>
    );
  }

  const imageUrl = vitamin.image.startsWith("http")
    ? vitamin.image
    : `${process.env.NEXT_PUBLIC_BASE_URL || ""}${vitamin.image}`;

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="vitamin-grid">
            <section className="image-section">
              <div className="image-wrapper">
                <Image
                  src={imageUrl}
                  alt={vitamin.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="vitamin-image"
                />
              </div>
            </section>

            <div className="content-section">
              <div className="header-content">
                <span className="category">{vitamin.category}</span>
                <h1 className="title">{vitamin.title}</h1>
                <p className="description">{vitamin.description}</p>
              </div>

              <section className="details-section">
                <h2 className="section-title">Details</h2>
                <div className="details-grid">
                  {Object.entries(vitamin).map(([key, value]) => {
                    if (
                      [
                        "slug",
                        "image",
                        "title",
                        "description",
                        "purpose",
                      ].includes(key)
                    ) {
                      return null;
                    }
                    return (
                      <div key={key} className="detail-item">
                        <span className="detail-label">
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replace(/_/g, " ")}
                        </span>
                        <span className="detail-value">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="purpose-section">
                <h2 className="section-title">Purpose & Benefits</h2>
                <p className="purpose-text">{vitamin.purpose}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const vitamin = vitamins.find((v) => v.slug === params.slug);

  if (!vitamin) {
    return {
      title: "Vitamin Not Found",
    };
  }

  return {
    title: `${vitamin.title} - Vitamin Information`,
    description: vitamin.description,
  };
}
