import type { Metadata } from "next";
import localFont from "next/font/local";
import { Knewave, Nunito } from 'next/font/google'
import "./globals.css";
import Footer from "./components/footer";

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

const knewave = Knewave({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-knewave',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: "BizBuild",
  description: "Plant the seed of your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${knewave.variable} ${nunito.variable} font-knewave antialiased bg-[#22f0b3]`}
      >
        <div className="w-full min-h-screen">
          <main className="">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}