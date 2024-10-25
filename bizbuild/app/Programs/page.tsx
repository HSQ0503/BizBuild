import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/BG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <nav className="w-full flex justify-end items-center h-24 px-6 mb-8 relative z-10">
        <Link href="/Links">
          <button className="px-6 py-2 font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
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

      <main className="z-10 w-full justify-start items-center min-h-screen flex flex-col space-y-6">
        <Link href="/bizlearn">
          <button className="w-[20rem] h-[8rem] font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white transition-all transform hover:scale-105 hover:shadow-[8px_8px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex justify-center items-center">
            <Image
              src="/Images/Text/Bizlearn.png"
              alt="Home"
              width={250}
              height={100}
              className="object-contain"
            />
          </button>
        </Link>

        <Link href="/bizleague">
          <button className="w-[20rem] h-[8rem] font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white transition-all transform hover:scale-105 hover:shadow-[8px_8px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex justify-center items-center">
            <Image
              src="/Images/Text/Bizleague.png"
              alt="Home"
              width={250}
              height={100}
              className="object-contain"
            />
          </button>
        </Link>

        <Link href="/bizLab">
          <button className="w-[20rem] h-[8rem] font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white transition-all transform hover:scale-105 hover:shadow-[8px_8px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex justify-center items-center">
            <Image
              src="/Images/Text/Bizlab.png"
              alt="Home"
              width={250}
              height={100}
              className="object-contain"
            />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Page;
