"use client";

import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#40ffc6] to-[#00cc99]">
      <div className="text-center">
        <Image
          src="/Images/BizBuild.png"
          alt="BizBuild Logo"
          width={500}
          height={160}
          className="mx-auto mb-8"
        />
        <Link href="/Links">
          <button className="px-6 py-2 font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white w-fit transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            <Image
              src="/Images/Text.png"
              alt="Plant the Seed"
              width={250}
              height={250}
            />
          </button>
        </Link>
      </div>
    </section>
  );
}
