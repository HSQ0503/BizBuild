import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurStory = () => {
  return (
    <div className="flex flex-col h-full bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/BG2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <nav className="w-full flex justify-end items-center h-24 px-6 mb-8 relative z-10">
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row items-start justify-between pl-10 px-6 w-full relative z-10">
        <section className="w-full lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
          <div className="mb-8">
            <Image
              src="/Images/Text/OurStory.png"
              alt="Our Story"
              width={400}
              height={100}
              className="w-full max-w-md"
            />
          </div>

          <div className="space-y-6 text-black font-nunito max-w-3xl">
            <p className="text-2xl font-bold">
              Our founder&apos;s journey into business began with something simple: lemonade stands. Those summer afternoons selling lemonade weren&apos;t about the money—they were about learning how to create something from nothing, building connections with neighbors, and discovering the joy of serving others. The excitement of turning an idea into action sparked a passion that never left him.
            </p>

            <p className="text-xl">
              As he got older, he started seeing more and more kids fall into traps—schemes like dropshipping and Amazon FBA that promised instant wealth but often left them discouraged and out of money. It was heartbreaking to watch people he cared about chasing shortcuts that never worked. He knew from experience that real success doesn&apos;t come from a quick fix or some hidden formula. It comes from hard work, resilience, and the willingness to learn from every challenge.
            </p>
          </div>
        </section>
      </main>

      <div className="absolute top-20 right-[7rem] w-[25rem]">
        <Image 
          src="/Images/Apple.png" 
          alt="Apple" 
          width={450} 
          height={450}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default OurStory
