import Banner from "@app/components/home/Banner";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/home/Hero";
import Features from "@/app/components/home/Features";
import Product from "@/app/components/home/Product";
import CTA from "@/app/components/CTA";
import FAQ from "@/app/components/home/FAQ";
import Footer from "@/app/components/Footer";

const Home = () => {
  return (
    <div>
      <Banner type="top" />
      <Navbar />
      <Hero />
      <Banner type="small" />
      <Features />
      <Product />
      <Banner type="large" />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
