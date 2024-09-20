"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  mobile?: boolean;
}

function NavLink({
  href,
  children,
  isButton = false,
  mobile = false,
}: NavLinkProps) {
  const baseClasses =
    "block py-2 px-4 text-black hover:bg-[#082E22] hover:text-white transition duration-300";
  const buttonClasses =
    "bg-[#082E22] text-white font-semibold rounded px-6 py-4 hover:bg-[#0A4332] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out";
  const mobileClasses = "text-center";

  let className = baseClasses;
  if (isButton) className = buttonClasses; // Replace base classes for button
  if (mobile) className += ` ${mobileClasses}`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#00CC99] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[#000000] text-2xl font-bold">
          <Image
            src="/Images/MainLogo.png"
            alt="main logo"
            height={25}
            width={175}
          />
        </Link>

        {/* Nav Links (hidden on small screens) */}
        <div className="hidden md:flex flex-1 font-semibold justify-center space-x-8 items-center">
          <NavLink href="/">Home</NavLink>
          <span className="border-l-[2px] border-gray-100 h-8"></span> {/* Divider */}
          <NavLink href="/about">About Us</NavLink>
          <span className="border-l-[2px] border-gray-100 h-8"></span> {/* Divider */}
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Get Started Button (hidden on small screens) */}
        <div className="hidden md:block">
          <NavLink href="/get-started" isButton>
            Get Started
          </NavLink>
        </div>

        {/* Hamburger Icon (visible on small screens) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink href="/" mobile>
            Home
          </NavLink>
          <NavLink href="/about" mobile>
            About Us
          </NavLink>
          <NavLink href="/contact" mobile>
            Contact
          </NavLink>
          <NavLink href="/get-started" isButton mobile>
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
}
