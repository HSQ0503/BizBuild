'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { VanishText } from './ShiftingText'

const pillars = [
  {
    title: 'Information',
    description: 'Providing students with essential business knowledge, covering key concepts in entrepreneurship, finance, marketing, and more. This pillar lays a strong foundation, ensuring students understand the basics of the business world.'
  },
  {
    title: 'Inspiration',
    description: 'Through engaging content on social media and insights from guest speakers, BizBuild aims to inspire students by showcasing real-world success stories and diverse perspectives, motivating them to explore and pursue their business ambitions.'
  },
  {
    title: 'Implementation',
    description: 'Emphasizing the importance of practical learning, encouraging students to apply their knowledge through interactive lessons and real-world activities. This pillar ensures that students gain hands-on experience, turning theoretical knowledge into practical skills.'
  }
]

export default function AboutHero() {
  const [activePillar, setActivePillar] = useState(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [activePillar])

  return (
    <section className="bg-gradient-to-b from-[#00CC99] to-[#E6F7F2] text-[#082E22] py-20">
      <div className="container mx-auto px-4">
        <VanishText />
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pillars.map((pillar, index) => (
            <motion.button
              key={pillar.title}
              className={`text-2xl font-bold px-8 py-4 rounded transition-all duration-300 ${
                index === activePillar 
                  ? 'bg-[#082E22] text-white shadow-lg scale-105' 
                  : 'bg-white text-[#082E22] hover:bg-[#082E22] hover:text-white hover:scale-105'
              }`}
              onClick={() => setActivePillar(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pillar.title}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-xl max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              {pillars[activePillar].title}
            </h2>
            <TypeAnimation
              key={key}
              sequence={[pillars[activePillar].description]}
              wrapper="p"
              speed={75}
              className="text-lg leading-relaxed"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}