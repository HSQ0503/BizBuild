import Image from "next/image";
import Link from "next/link";
import React from "react";

const PencilPage = () => {
  return (
    <div className="flex flex-col h-full pt-5 bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/BG3.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <main className="flex-grow flex flex-col lg:flex-row items-start justify-between pl-10 px-6 w-full relative z-10">
        <section className="w-full lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
          <div className="space-y-6 text-black font-nunito max-w-3xl">
            <p className="text-xl">
              That&apos;s why BizBuild was born. Our founder wanted to show young
              people that there&apos;s no secret to business, just the power of
              learning, growing, and trying again. BizBuild isn&apos;t about selling
              dreams of overnight success—it&apos;s about giving kids the tools, the
              knowledge, and the confidence to build something real. Just like
              those early lemonade stands, BizBuild is all about planting the
              seeds of possibility, helping young minds believe that they can
              create something amazing—not through shortcuts, but by embracing
              the journey with heart and hustle.
            </p>
          </div>
        </section>
        <Image
          src="/Images/Pencil.png"
          alt="Book"
          width={500}
          height={500}
        />
      </main>
    </div>
  );
};

export default PencilPage;
