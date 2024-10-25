"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const PillarPages = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      titleImage: '/Images/Pillars/information.png',
      description:
        'Providing students with essential business knowledge, covering key concepts in entrepreneurship, finance, marketing, and more. This pillar lays a strong foundation, ensuring students understand the basics of the business world.',
      background: '/Images/Background/OneBG.png',
    },
    {
      titleImage: '/Images/Pillars/inspiration.png',
      description:
        'Through engaging content on social media and insights from guest speakers, BizBuild aims to inspire students by showcasing real-world success stories and diverse perspectives, motivating them to explore and pursue their business ambitions.',
      background: '/Images/Background/TwoBG.png',
    },
    {
      titleImage: '/Images/Pillars/implementation.png',
      description:
        'Emphasizing the importance of practical learning, encouraging students to apply their knowledge through interactive lessons and real-world activities. This pillar ensures that students gain hands-on experience, turning theoretical knowledge into practical skills.',
      background: '/Images/Background/ThreeBG.png',
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  const { titleImage, description, background } = pages[currentPage];

  return (
    <div className="flex flex-col min-h-screen pb-20 relative overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Navigation */}
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

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 w-full relative z-10">
        {/* Centered Title Image */}
        <div className="mb-4">
          <Image src={titleImage} alt="Title" width={600} height={150} />
        </div>

        {/* Centered Text Section */}
        <div className="max-w-xl">
          <p className="text-[1.5rem] font-semibold text-black font-nunito">{description}</p>
        </div>
      </main>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center space-x-4 z-10">
        <button
          onClick={handlePrevious}
          className="bg-white border-black border-2 p-4 rounded-lg shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white border-black border-2 p-4 rounded-lg shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PillarPages;
