import CustomButton from '@/app/button'
import React from 'react'

const Buttons = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-6">
        <CustomButton 
          text='Get Involved'
          linkHref='/GetInvolved'
        />
        <CustomButton 
          text='Who We Are'
          linkHref='/About'
        />
        <CustomButton 
          text='Programs'
          linkHref='/Programs'
        />
        <CustomButton 
          text='Donate'
          linkHref='/Donate'
        />
        <CustomButton 
          text='Officers'
          linkHref='/Construction'
        />
        <CustomButton 
          text='Contact Us'
          linkHref='/Contact'
        />
        <CustomButton 
          text='Our Pillars'
          linkHref='/Pillars'
        />
        <CustomButton 
          text='Other Stuff'
          linkHref='/Construction'
        />
      </div>
    </div>
  )
}

export default Buttons