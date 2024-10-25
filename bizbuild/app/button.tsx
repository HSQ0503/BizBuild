'use client';

import { useRouter } from "next/navigation";
import React from "react";

interface CustomButtonProps {
  text: string;
  linkHref: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  linkHref,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(linkHref);
    }, 300); // 300ms delay
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        className="w-[18rem] h-[5rem] flex items-center justify-center font-medium bg-[#00cc99] border-black rounded-lg border-2 text-white transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] overflow-hidden"
      >
        <span className="drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)] text-[2.25rem]">{text}</span>
      </button>
    </div>
  );
};

export default CustomButton;