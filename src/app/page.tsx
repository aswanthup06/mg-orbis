import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import ExportPortfolio from "./components/sections/ExportPortfolio";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import Founder from "./components/sections/Founder";
import ContactModal from "./components/ui/ContactModal";

export default function Page() {
  return (
    <div className="h-dvh">
      <main>
        <Hero />
        <About />
        <Products />
        <ExportPortfolio />
        <WhyChooseUs />
        <Process />
        <Founder />
      </main>

      <ContactModal />
    </div>
  );
}