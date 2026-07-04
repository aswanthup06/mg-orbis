import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SiNormalizedotcss } from "react-icons/si";
import Image from "next/image";
export default function Home() {
  return (
    <div className="hide-scrollbar overflow-x-auto h-dvh">

      <nav className="px-20 w-full absolute z-50 top-0 bg-white shadow-lg ">
      <div className="flex w-full items-center justify-between  py-3  px-4 rounded-md">
        <div>
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div>
        <button className="bg-black text-white  px-6 py-3 text-xs">Contact Now</button>
        </div></div>
      </nav>

      <section className="relative ">
        <Image
          src="/images/bg.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-dvh object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>

        <div className="absolute px-50 top-0 left-0 w-full h-full bg-black/10 flex flex-col justify-center items-center">
          <div>
            <h5 className="text-blue-500 text-sm mb-2">
              MG Orbis-
              <span className="">Connecting India to Global Markets</span>{" "}
            </h5>
            <h1 className="text-white text-4xl w-[80%] mb-10 leading-tight">
              We are an India-based export company dedicated to connecting
              high-quality products with international markets. Our mission is
              to simplify global trade by providing reliable sourcing, quality
              assurance, and efficient logistics while building long-term
              partnerships based on trust and transparency.
            </h1>
            <button className="group bg-black text-white px-10 py-4 font-light hover:bg-black/80 transition-all duration-300 cursor-pointer rounded-sm text-xs flex items-center gap-2 group-hover:gap-4">
              <h3>Get Started</h3>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-50 h-dvh py-18">
        <h3 className="mb-4 text-blue-500 flex gap-2 items-center">
          {" "}
          <SiNormalizedotcss /> Learn About Us
        </h3>
        <h2 className="text-3xl w-[80%] mb-10 leading-tight">
          Whether it is agricultural commodities, food products, textiles,
          consumer goods, or other export opportunities, we work closely with
          trusted suppliers to deliver products that meet international quality
          standards.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-base text-gray-800">
              To bridge Indian manufacturers and producers with businesses
              worldwide by delivering quality products, dependable service, and
              seamless export solutions.
            </p>
          </div>

          <div className="p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-base text-gray-800">
              To become a trusted global export partner known for quality,
              reliability, and long-term business relationships.
            </p>
          </div>

          <div className="col-span-2 p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">What We Do</h3>

            <div className="flex flex-wrap gap-4">
              {[
                "Product Sourcing",
                "Supplier Verification",
                "Quality Inspection",
                "Export Documentation",
                "International Logistics",
                "Container Loading Coordination",
                "Global B2B Trade",
                "Supply Chain Support",
                "Industries We Serve",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-base text-gray-900"
                >
                  <div className="bg-gray-100 rounded-full">
                    <svg
                      className="w-6 h-6 p-1 text-green-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-50">
        <div className="relative">
          <Image
            src="/images/gikhin.jpg"
            alt=""
            width={1920}
            height={800}
            className="w-full h-120 object-cover rounded-md"
          />

          <div className="absolute top-0 left-0 p-20 w-2/3">
            <h3 className="text-white text-2xl mb-4 ">
              I founded MG Orbis with a vision to connect quality Indian
              products with global markets through transparency, reliability,
              and long-term partnerships. Our goal is to simplify international
              trade while maintaining the highest standards of quality and
              customer satisfaction.
            </h3>

            <h4 className="text-white">Gikhin Gopinath Founder, MG Orbis</h4>

            <button className="bg-black text-white  px-6 py-3 text-xs mt-4">Contact Now</button>
       

            
          </div>
        </div>
      </section>

      <footer className="w-full mt-12 border-t border-gray-200 bg-gray-50 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>
            &copy; {new Date().getFullYear()} Orbis Exports. All rights
            reserved.
          </span>
          <div>
            <a
              href="mailto:info@orbisexports.com"
              className="hover:text-green-600 transition-colors"
            >
              info@orbisexports.com
            </a>
            <span className="mx-2 text-gray-300">|</span>
            <a
              href="https://linkedin.com/company/orbisexports"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
