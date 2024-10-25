"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", { amount, donationType });
  };

  return (
    <div className="min-h-screen px-4 font-nunito sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="w-full h-full fixed top-0 left-0 -z-10">
        <Image
          src="/Images/Background/DonateBG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Navigation */}
      <nav className="w-full flex justify-end items-center h-24 px-6 mb-8 relative">
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

      {/* Donation Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto z-10 relative"
      >
        <Card className="bg-[#5de6b8] border-2 border-black rounded-lg shadow-[6px_6px_0px_black] overflow-hidden">
          <CardHeader className="bg-[#082E22] text-white p-6 border-b-2 border-black">
            <CardTitle className="text-3xl font-bold">Donate to BizBuild</CardTitle>
            <CardDescription className="text-[#00CC99]">
              Your contribution helps us empower the next generation of entrepreneurs
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="amount"
                  className="block text-xl font-extrabold text-[#082E22] mb-2"
                >
                  Donation Amount ($)
                </Label>
                <Input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="mt-1 block w-full border-2 border-black bg-gray-200 rounded-lg px-4 py-3 text-xl shadow-[3px_3px_0px_black]"
                  required
                />
              </div>
              <RadioGroup value={donationType} onValueChange={setDonationType} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="one-time"
                    id="one-time"
                    className="border-2 border-black"
                  />
                  <Label htmlFor="one-time" className="text-[#082E22] font-bold">
                    One-time donation
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="border-2 border-black"
                  />
                  <Label htmlFor="monthly" className="text-[#082E22] font-bold">
                    Monthly donation
                  </Label>
                </div>
              </RadioGroup>
              <Button
                type="submit"
                className="w-full bg-[#00CC99] hover:bg-[#00AA77] text-white font-extrabold py-3 px-4 rounded-lg shadow-[6px_6px_0px_black] transition-all hover:shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
              >
                Donate Now
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-[#e6f5f0] px-6 py-4 border-t-2 border-black">
            <p className="text-sm text-gray-600">
              Your donation is tax-deductible. BizBuild is a registered 501(c)(3) non-profit organization.
            </p>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Why Donate Section */}
      <div className="mt-12 text-center text-[#082E22] relative z-10">
        <h2 className="text-2xl font-bold mb-4">Why Donate to BizBuild?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Your generous donation helps us provide essential resources, mentorship, and opportunities to young entrepreneurs. 
          Together, we can build a brighter future by empowering the next generation of business leaders.
        </p>
      </div>
    </div>
  );
}
