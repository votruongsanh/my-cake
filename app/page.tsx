import AboutSection from "@/components/home/about-section";
import HeroSlider from "@/components/home/hero-slider";
import ProductShowcase from "@/components/home/product-showcase";
import QuoteSlider from "@/components/home/quote-slider";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <div>
        <ProductShowcase />
        <AboutSection />
        <QuoteSlider />
      </div>
      {/* <div className="h-[800px] bg-gray-50 mt-8 flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Scroll down to see more content...
        </p>
      </div> */}
    </main>
  );
}
