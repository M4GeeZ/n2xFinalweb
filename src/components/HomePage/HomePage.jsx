import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import StatsTech from "../StatsTech/StatsTech";
import WhyChoose from "../WhyChoose/WhyChoose";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsTech />
        <WhyChoose />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}