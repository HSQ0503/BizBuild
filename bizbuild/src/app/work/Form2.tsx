import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Bizlab Club Registration',
  description: 'Register to join the Bizlab Club and connect with like-minded innovators.',
}

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()
  return (
    <div className="group relative z-0">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-4 py-3 text-base text-neutral-950 rounded-md focus:border-neutral-950 focus:ring focus:ring-neutral-950/20"
      />
      <label htmlFor={id} className="block mt-1 text-sm text-neutral-600">
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        {...props}
        className="h-4 w-4 text-neutral-950 border-neutral-300 focus:ring-neutral-950"
      />
      <label htmlFor={id} className="ml-2 text-sm text-neutral-950">
        {label}
      </label>
    </div>
  )
}

function CheckboxInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        {...props}
        className="h-4 w-4 text-neutral-950 border-neutral-300 focus:ring-neutral-950"
      />
      <label htmlFor={id} className="ml-2 text-sm text-neutral-950">
        {label}
      </label>
    </div>
  )
}

export default function BizlabRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
        <FadeIn>
          <h1 className="text-2xl font-bold text-neutral-950 mb-4">
            Bizlab Club Registration
          </h1>
          <p className="text-base text-neutral-600 mb-4">
            Thank you for your interest in joining the Bizlab Club. Please fill out the registration form below.
            Once we receive your submission, we will contact you with further details on the next steps.
          </p>
          <p className="text-base text-neutral-600 mb-8">
            For any questions or assistance, please email{' '}
            <Link href="mailto:join@bizlab.org" className="text-blue-600 hover:underline">
              join@bizlab.org
            </Link>.
          </p>
          <form className="space-y-6">
            <p className="text-sm text-neutral-500">* Indicates required field</p>
            <TextInput label="First and Last Name *" name="fullName" required />
            <TextInput label="Age *" name="age" required />
            <TextInput label="Email *" type="email" name="email" required />
            <TextInput label="Phone Number *" type="tel" name="phone" required />
            <TextInput label="School/University *" name="school" required />
            <TextInput label="Major/Field of Study" name="major" />
            
            <fieldset className="space-y-4">
              <legend className="text-base font-semibold text-neutral-950">
                Are you currently a student? *
              </legend>
              <div className="flex gap-x-6">
                <RadioInput label="Yes" name="studentStatus" value="yes" required />
                <RadioInput label="No" name="studentStatus" value="no" required />
              </div>
            </fieldset>
            
            <CheckboxInput
              label="I agree to abide by the Bizlab Club code of conduct *"
              name="codeOfConduct"
              required
            />
            
            <Button type="submit" className="w-full py-6">
              Submit Registration
            </Button>
          </form>
        </FadeIn>
      </div>
    </div>
  )
}
