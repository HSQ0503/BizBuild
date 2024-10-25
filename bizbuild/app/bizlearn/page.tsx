import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRoad } from "react-icons/fa";
import { IoConstructSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/DonateBG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <nav className="w-full flex justify-end items-center h-24 relative z-10 px-8">
        {/* Home Button */}
        <Link href="/Links">
          <button className="px-6 py-2 font-medium bg-[#00cc99] border-black rounded-lg border-2 text-black transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            <Image
              src="/Images/Text/home.png"
              alt="Home"
              width={75}
              height={30}
              className="w-auto h-8"
            />
          </button>
        </Link>
      </nav>

      {/* Main content */}
      <main className="font-nunito flex-grow flex flex-col items-center justify-start w-full relative z-10">
        <div className="mt-8">
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/Text/bizLear.png"
              alt="BizLab"
              width={400}
              height={200}
              className="w-auto"
            />
          </div>
        </div>

        {/* Main description box */}
        <div className="max-w-4xl bg-[#5de6b8] border-2 border-black p-8 rounded-lg shadow-[6px_6px_0px_black] text-center mb-10 mt-6">
          <p className="text-lg font-bold text-black leading-relaxed tracking-wide">
            BizLearn is the core program within BizBuild, designed as a starting point for those beginning their entrepreneurial journey, yet valuable for anyone looking to expand their business knowledge. As the base component of BizBuild, BizLearn provides essential education and resources that help build a strong foundation in business. Whether you&apos;re new to entrepreneurship or a seasoned entrepreneur looking to learn more, BizLearn offers something for everyone.
          </p>
        </div>

        {/* Three columns for BizLab features */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 px-6 w-full max-w-6xl mb-10">
          {/* Business Focused Learning */}
          <div className="bg-[#5de6b8] flex flex-col justify-between border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
                Comprehensive Learning Pathways
            </h2>
            <p className="text-sm leading-relaxed">
                BizLearn covers the fundamentals of business with learning paths tailored for beginners while offering deeper insights for more experienced entrepreneurs. Topics include entrepreneurship, finance, marketing, and strategy—ensuring there&apos;s always more to learn no matter your level.
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <FaRoad/>
            </div>
          </div>

          {/* Global Networking */}
          <div className="bg-[#5de6b8] flex flex-col justify-between border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
            Building and Maintating
            Foundations of Business
            </h2>
            <p className="text-sm leading-relaxed">
                For beginners, BizLearn provides a solid foundation in business, and for experienced members, it offers ways to reinforce and expand your current knowledge.
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <IoConstructSharp />
            </div>
          </div>

          {/* Exclusive Opportunities */}
          <div className="bg-[#5de6b8] flex flex-col justify-between border-2  text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
                Real World Implementation
            </h2>
            <p className="text-sm leading-relaxed">
              Once you&apos;ve signed up, you&apos;ll participate in unique business
              challenges, workshops, and mentorships to grow your business
              ideas and mindset
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <FaEarthAfrica />
            </div>
          </div>
        </div>
        <Link href="/Links">
          <button className="px-6 mb-10 py-2 font-medium bg-[#00cc99] border-black rounded-lg border-2 text-black transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            <Image
              src="/Images/Text/signup.png"
              alt="Home"
              width={75}
              height={30}
              className="w-auto h-8"
            />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Page;
