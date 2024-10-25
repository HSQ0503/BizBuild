import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ContactForm from './_components/Contact';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/ContactBG.png"
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
        {/* Left side: Contact form */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Right side: Contact Us title and text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:pl-10">
          <div className="mb-6">
            <Image
              src="/Images/Text/Contact.png"
              alt="Contact Us"
              width={400}
              height={100}
              className="w-full max-w-sm"
            />
          </div>

          <p className="text-black lg:max-w-[25rem] font-nunito text-xl font-semibold">
            For questions, technical assistance, or collaboration opportunities via the contact information provided. Our team will respond ASAP.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
