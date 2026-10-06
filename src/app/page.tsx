import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import ExportPortfolio from "./components/sections/ExportPortfolio";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import Founder from "./components/sections/Founder";
import ContactModalLoader from "./components/ui/ContactModalLoader";

export default function Page() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Products />
        <ExportPortfolio />
        <WhyChooseUs />
        <Process />
        <Founder />
      </main>

      <ContactModalLoader />
    </>
  );
}