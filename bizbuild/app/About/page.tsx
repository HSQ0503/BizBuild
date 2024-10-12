import React from 'react'
import AboutHero from './_components/Hero'
import { MainSection } from './_components/MainSection'
import Team from './_components/MeetTheTeam'

const page = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-full'>
            <AboutHero />
        </div>
        <div className=''>
            <MainSection />
        </div>
        <div>
          <Team />
        </div>
    </div>
  )
}

export default page