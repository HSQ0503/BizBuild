import React from 'react'
import AboutHero from './_components/Hero'
import { MainSection } from './_components/MainSection'

const page = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-full'>
            <AboutHero />
        </div>
        <div className=''>
            <MainSection />
        </div>
    </div>
  )
}

export default page