"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Brain, Briefcase, Handshake } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: "Volunteer",
      description: "Share your skills and experience with young entrepreneurs. Our volunteers play a crucial role in mentoring, organizing events, and supporting our programs.",
      icon: Users,
    },
    {
      title: "Mentor",
      description: "Guide and support budding business leaders in their journey. As a mentor, you'll provide invaluable insights and help shape the next generation of entrepreneurs.",
      icon: Brain,
    },
    {
      title: "Sponsor",
      description: "Provide financial support for our programs and initiatives. Your sponsorship enables us to reach more young entrepreneurs and expand our impact.",
      icon: Briefcase,
    },
    {
      title: "Start a Chapter",
      description: "Start a chapter with bizbuild at your own school!",
      icon: Handshake,
    },
  ]

  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <Image 
          width={1000}
          height={100}
          src="/Images/Text/GetInvolvedWithBizbuild.png"
          alt='Get Involved with Bizbuild'
        />
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Join us in empowering the next generation of entrepreneurs. Your involvement can make a significant impact on the future of business leadership.
        </p>

        <div className="bg-white shadow-2xl font-nunito rounded-lg overflow-hidden mb-12 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-extrabold text-[#082E22] mb-8 border-b-2 border-[#00CC99] pb-4 inline-block">Ways to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {involvementOptions.map((option, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <option.icon className="h-8 w-8 text-[#00CC99]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#082E22] mb-2">{option.title}</h3>
                    <p className="text-[#082E22] leading-relaxed">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="bg-white shadow-2xl rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-[#082E22] text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Volunteer Sign-Up Form</h2>
            <p className="text-[#00CC99] text-lg">
              Take your first step towards making a difference. Fill out this form to express your interest in volunteering with BizBuild.
            </p>
          </div>
          <div className="p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScY21nDsSjX6ZsLwBcPddlUfLf9UgRGYKrT3SHS5gTikkkmDw/viewform"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-[#00CC99] hover:bg-[#00AA77] text-white font-bold py-8 px-8 rounded text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
            <Link href="/Contact">Contact Us for More Information</Link>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}