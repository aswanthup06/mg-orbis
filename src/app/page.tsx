import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ExportPortfolio from "./components/sections/ExportPortfolio";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import Founder from "./components/sections/Founder";
import Footer from "./components/layout/Footer";
import ContactModal from "./components/ui/ContactModal";
import Products from "./components/sections/Products";

export default function Page() {
  return (
    <div className="hide-scrollbar overflow-x-auto h-dvh">
      <Hero />
      <About />
      <ExportPortfolio />
      <WhyChooseUs />
      <Process />
      <Products />
      <Founder />
      <Footer />
      <ContactModal />
    </div>
  );
}
