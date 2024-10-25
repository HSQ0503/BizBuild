import Image from "next/image";
import React from "react";
import Buttons from "./_components/Buttons";

const Page = () => {
  return (
    <div className="w-full relative min-h-screen p-4 sm:p-6 md:p-10">
      <div className="w-full h-full fixed top-0 left-0 -z-10">
        <Image
          src="/Images/Background/DonateBG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 md:space-y-12">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Images/BizBuild.png"
              width={300}
              height={100}
              alt="BizBuild"
              className="w-48 sm:w-64 md:w-72 lg:w-80"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <Buttons />
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/Images/Plant.png"
                width={650}
                height={500}
                alt="BizBuild Plant"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;