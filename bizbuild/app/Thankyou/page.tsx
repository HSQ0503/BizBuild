"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="min-h-screen px-4 font-nunito sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="w-full h-full fixed top-0 left-0 -z-10">
        <Image
          src="/Images/Background/DonateBG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Navigation */}
      <nav className="w-full flex justify-end items-center h-24 px-6 mb-8 relative">
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

      {/* Main content to center the image */}
      <main className="w-full min-h-[calc(100vh-6rem)] flex justify-center items-center">
        <Image 
          src="/Images/Text/ThankYou.png"
          alt="Thank You"
          width={1000}
          height={350}
        />
      </main>
    </div>
  );
}
