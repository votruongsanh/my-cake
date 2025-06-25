import AboutSection from "@/components/home/about-section";
import GallerySection from "@/components/home/gallery-section";
import HeroSlider from "@/components/home/hero-slider";
import ProductShowcase from "@/components/home/product-showcase";
import QuoteSlider from "@/components/home/quote-slider";
import VideoShowcaseSection from "@/components/home/video-showcase-section";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <div>
        <ProductShowcase />
        <AboutSection />
        <QuoteSlider />
        <VideoShowcaseSection />
        <GallerySection />
      </div>
    </main>
  );
}
