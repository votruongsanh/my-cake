import AboutSection from "@/components/home/about-section";
import GallerySection from "@/components/home/gallery-section";
import HeroSlider from "@/components/home/hero-slider";
import ProductShowcase from "@/components/home/product-showcase";
import QuoteSlider from "@/components/home/quote-slider";
import VideoShowcaseSection from "@/components/home/video-showcase-section";
import SweetnessForSpecialDaysSection from "@/components/home/sweetness-for-special-days-section";
import OurStoryAndConfectionsSection from "@/components/home/our-story-and-confections-section";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <div>
        <ProductShowcase />
        <OurStoryAndConfectionsSection />
        <AboutSection />
        <QuoteSlider />
        <VideoShowcaseSection />
        <SweetnessForSpecialDaysSection />
        <GallerySection />
      </div>
    </main>
  );
}
