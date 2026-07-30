import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Sticky Header Nav */}
      <Header />

      {/* Main Sections flow */}
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <HowToOrder />
        <Testimonials />
        <Location />
        <CTA />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* CRO Conversion Optimized floating chat button */}
      <FloatingWhatsApp />
    </div>
  );
}
