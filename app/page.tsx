import HeroSlider from "@/components/home/hero-slider";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <div className="h-[1000px] bg-gray-50 mt-8 flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Scroll down to see more content...
        </p>
      </div>
    </main>
  );
}
