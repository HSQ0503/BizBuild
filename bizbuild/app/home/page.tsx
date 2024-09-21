import Image from "next/image";
import ShuffleHero from "./_components/HeroSection";
import CTASection from "./_components/CTA";

export default function Home() {
  return (
    <div className="w-full h-[100vh] ">
      <div className="w-full h-full mt-20">
        <ShuffleHero />
      </div>
      <div className="md:-mt-[8rem] mt-0 ">
        <CTASection />
      </div>
    </div>
  );
}
