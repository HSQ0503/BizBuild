import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./home/_components/Navbar";
import { FlyoutNav } from "./home/_components/FlyoutNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E6F7F2]`}
      >
        <div className="w-full min-h-screen">
          <FlyoutNav />
          <main className="pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}