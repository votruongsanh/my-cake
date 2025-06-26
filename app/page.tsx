import AboutSection from "@/components/home/about-section";
import CategoryShowcaseSection from "@/components/home/category-showcase-section";
import GallerySection from "@/components/home/gallery-section";
import HeroSlider from "@/components/home/hero-slider";
import OurStoryAndConfectionsSection from "@/components/home/our-story-and-confections-section";
import ProductShowcase from "@/components/home/product-showcase";
import QuoteSlider from "@/components/home/quote-slider";
import SweetnessForSpecialDaysSection from "@/components/home/sweetness-for-special-days-section";
import VideoShowcaseSection from "@/components/home/video-showcase-section";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductShowcase />
      <OurStoryAndConfectionsSection />
      <AboutSection />
      <CategoryShowcaseSection />
      <QuoteSlider />
      <VideoShowcaseSection />
      <SweetnessForSpecialDaysSection />
      <GallerySection />
    </main>
  );
}
