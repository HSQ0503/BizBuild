"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Image from 'next/image';
import Link from "next/link";

export const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-black 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-[#00CC99] py-3 shadow-xl"
          : "bg-[#00CC99] py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
        </div>
          <CTAs />
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "black" }: { color?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/home">
        <Image 
          src="/Images/MainLogo.png"
          alt="main logo"
          height={25}
          width={175}
        />
      </Link>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6 font-semibold">
      {LINKS.map((l, index) => (
        <React.Fragment key={l.text}>
          <NavLink href={l.href} FlyoutContent={l.component}>
            {l.text}
          </NavLink>
          {/* Add a border only if it's not the last link */}
          {index < LINKS.length - 1 && (
            <span className="border-[1.5px] border-gray-100 h-8"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#082E22] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="md:flex hidden rounded-lg border-2 border-[#082E22] bg-[#082E22] px-4 py-2 font-semibold text-white transition-colors hover:border-[#000000] hover:bg-[#000000]">
        Get Involved
      </button>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-[#082E22] p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
          <p className="mb-6 max-w-xs text-sm text-[#00CC99]">
            Bizbuild is Florida's leading nonprofit organization for Entrepreneurship.
          </p>
        </div>
        <a
          href="/About"
          className="flex items-center gap-1 text-xs text-[#00CC99] hover:underline"
        >
          Learn more <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <a
          href="/About"
          className="rounded border-2 border-[#00CC99] bg-white p-3 transition-colors hover:bg-[#00CC99] hover:text-white"
        >
          <h3 className="mb-1 font-semibold">Who We Are</h3>
          <p className="text-xs">
            Find out who we are and why we do what we do.
          </p>
        </a>
        <a
          href="/About"
          className="rounded border-2 border-[#00CC99] bg-white p-3 transition-colors hover:bg-[#00CC99] hover:text-white"
        >
          <h3 className="mb-1 font-semibold">Our Mission</h3>
          <p className="text-xs">
            Learn about about our Mission Statement. 
          </p>
        </a>
        <a
          href="/About"
          className="rounded border-2 border-[#00CC99] bg-white p-3 transition-colors hover:bg-[#00CC99] hover:text-white"
        >
          <h3 className="mb-1 font-semibold">Our Team</h3>
          <p className="text-xs">
            Be introducted to our team of dedicated Individuals ready to make a difference.
          </p>
        </a>
        <a
          href="/Contact"
          className="rounded border-2 border-[#00CC99] bg-white p-3 transition-colors hover:bg-[#00CC99] hover:text-white"
        >
          <h3 className="mb-1 font-semibold">Get Involved</h3>
          <p className="text-xs">
            Want to join our efforts? Fill out a form and get involved!
          </p>
        </a>
      </div>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <button className="w-full rounded-lg border-2 border-[#082E22] px-4 py-2 font-semibold transition-colors hover:bg-[#082E22] hover:text-white">
        <Link href="/Donate">
          Donate
        </Link>
      </button>
    </div>
  );
};

const CareersContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <button className="w-full rounded-lg border-2 border-[#082E22] px-4 py-2 font-semibold transition-colors hover:bg-[#082E22] hover:text-white">
        <Link href="/Contact">
          Contact us
        </Link>
      </button>
    </div>
  );
};

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-[#082E22]">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-[#00CC99] py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-[#00CC99] py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-[#082E22]" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-[#00CC99] p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-[#082E22] p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const LINKS = [
  {
    text: "About us",
    href: "/About",
    component: AboutUsContent,
  },
  {
    text: "Donate",
    href: "/Donate",
    component: PricingContent,
  },
  {
    text: "Contact",
    href: "/Contact",
    component: CareersContent,
  },
];