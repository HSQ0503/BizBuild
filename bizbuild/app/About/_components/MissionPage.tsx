import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MissionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/BG1.png"
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

      <main className="flex-grow flex flex-col lg:flex-row items-start justify-between pl-10 px-6 w-full relative z-10">
        <section className="w-full lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
          <div className="mb-8">
            <Image
              src="/Images/Text/OurMission.png"
              alt="Our Mission"
              width={400}
              height={100}
              className="w-full max-w-md"
            />
          </div>
          <div className="space-y-4 text-black font-nunito max-w-3xl">
            <p className="text-2xl font-bold">
              Bizbuild Organization Inc. is a registered nonprofit organization dedicated to empowering the next generation by teaching kids the fundamentals of business.
            </p>
            <p className="text-xl">
              With a focus on <span className="font-bold">INFORMATION, INSPIRATION, and IMPLEMENTATION</span>, BizBuild aims to:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 pl-4">
              <li>Spark curiosity in young minds</li>
              <li>Provide practical knowledge in entrepreneurship</li>
              <li>Teach essential skills in finance and marketing</li>
              <li>Set students on a path toward success in their future careers</li>
            </ul>
            <p className="text-xl">
              Our goal is to equip students with the practical knowledge and skills needed to understand the basics of business, setting them up for success in their future endeavors.
            </p>
          </div>
        </section>
      </main>

      <div className="absolute bottom-20 right-10 w-[35rem]">
        <Image 
          src="/Images/Books.png" 
          alt="Book" 
          width={600} 
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default MissionPage
