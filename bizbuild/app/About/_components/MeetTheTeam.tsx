"use client";

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef } from "react"

type ListOrderItem = "front" | "middle" | "back"

export default function Team() {
  const [order, setOrder] = useState<ListOrderItem[]>(["front", "middle", "back"])

  const handleShuffle = () => {
    const orderCopy = [...order]
    orderCopy.unshift(orderCopy.pop() as ListOrderItem)
    setOrder(orderCopy)
  }

  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Jane has 15 years of experience in business education and entrepreneurship.",
    },
    {
      name: "Gustavo Campos",
      role: "Founder",
      image: "/Images/Gustavo.png",
      bio: "Gustavo Campos is the CEO and founder of BizBuild, a nonprofit dedicated to empowering the next generation with essential business skills. At just 15 years old, Guga has been passionate about business and entrepreneurship his whole life, aiming to inspire young minds through interactive content and real-world applications. Learn more about BizBuild's mission and story on our About page.",
    },
    {
      name: "Emily Brown",
      role: "Community Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Emily is passionate about fostering entrepreneurial communities among students.",
    },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-emerald-300 to-emerald-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="relative h-[450px] w-[350px] mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              handleShuffle={handleShuffle}
              position={order[index]}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-gray-900 text-white hover:bg-gray-800">Get Involved</Button>
        </div>
      </div>
    </div>
  )
}

interface TeamMemberCardProps {
  member: {
    name: string
    role: string
    image: string
    bio: string
  }
  handleShuffle: () => void
  position: ListOrderItem
}

const TeamMemberCard = ({ member, handleShuffle, position }: TeamMemberCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const mousePosRef = useRef(0)

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX
  }

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX

    if (diff > 150) {
      handleShuffle()
    }

    mousePosRef.current = 0
  }

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
  const rotateZ = position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg"
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0"

  const draggable = position === "front"

  const truncateBio = (bio: string, maxLength: number) => {
    if (bio.length <= maxLength) return bio
    return bio.slice(0, maxLength) + "..."
  }

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 h-[450px] w-[350px] select-none rounded-2xl border-2 border-emerald-700 bg-white/90 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <CardContent className="flex flex-col items-center justify-between h-full">
        <div className="text-center">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4 pointer-events-none"
          />
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-emerald-600 mb-4">{member.role}</p>
        </div>
        <div className="overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-emerald-100">
          <p className="text-gray-600 text-center">
            {isExpanded ? member.bio : truncateBio(member.bio, 100)}
          </p>
        </div>
        {member.bio.length > 100 && (
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-emerald-600 hover:text-emerald-700 border-emerald-600 hover:border-emerald-700"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        )}
      </CardContent>
    </motion.div>
  )
}