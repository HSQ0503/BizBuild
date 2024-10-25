import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiHandshake } from "react-icons/pi";
import { RiVipLine } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

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
              src="/Images/Text/Bizlab.png"
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
            BizLab is an exclusive program within BizBuild, open to both chapter
            and individual members. It offers a range of interactive workshops,
            business challenges, and resources designed to help you develop your
            entrepreneurial skills independently. Whether you&apos;re part of a
            BizBuild chapter or joining as an individual, BizLab focuses on
            personal growth and innovation without requiring team participation
            from chapters.
          </p>
        </div>

        {/* Three columns for BizLab features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 w-full max-w-6xl mb-10">
          {/* Business Focused Learning */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Business Focused Learning
            </h2>
            <p className="text-sm leading-relaxed">
              Gain access to tailored programs that help you enhance both your
              business skills and entrepreneurial mindset. Sign up to begin your
              journey.
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <PiHandshake/>
            </div>
          </div>

          {/* Global Networking */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Global Networking
            </h2>
            <p className="text-sm leading-relaxed">
              Connect with entrepreneurs and business leaders globally, sharing
              ideas and learning from others to further your business
              developments.
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <IoGlobeOutline />
            </div>
          </div>

          {/* Exclusive Opportunities */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-center">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Exclusive Opportunities
            </h2>
            <p className="text-sm leading-relaxed">
              Once you&apos;ve signed up, you&apos;ll participate in unique business
              challenges, workshops, and mentorships to grow your business
              ideas and mindset
            </p>
            <div className="mt-4 flex justify-center text-[5rem]">
              <RiVipLine />
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
