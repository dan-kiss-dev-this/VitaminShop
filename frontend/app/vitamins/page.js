// app/vitamins/page.js
import vitamins from "@/data/vitamins.json";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import "./styles.css";

export const metadata = {
  title: "Vitamin & Supplement Gallery",
  description:
    "Explore our comprehensive collection of vitamins and supplements, each with detailed information about their benefits and uses.",
};

export default function VitaminsGallery() {
  return (
    <>
      <Navbar />
      <div className="gallery-page">
        <div className="container">
          <header className="gallery-header">
            <h1 className="gallery-title">Vitamins & Supplements</h1>
            <p className="gallery-description">
              Explore our comprehensive collection of natural vitamins and
              supplements, each carefully selected for their unique health
              benefits.
            </p>
          </header>

          <div className="vitamins-grid">
            {vitamins.map((vitamin) => (
              <Link
                href={`/vitamins/${vitamin.slug}`}
                key={vitamin.slug}
                className="vitamin-card"
              >
                <div className="image-wrapper">
                  <Image
                    src={vitamin.image}
                    alt={vitamin.title}
                    fill
                    sizes="(max-width: 480px) 100vw,
                           (max-width: 768px) 50vw,
                           33vw"
                    className="object-cover"
                  />
                </div>
                <div className="card-content">
                  <h2 className="vitamin-name">
                    {vitamin.title}{" "}
                    <div className="vitamin-category-tag">
                      {vitamin.category}
                    </div>
                  </h2>

                  <p className="vitamin-brief">{vitamin.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
