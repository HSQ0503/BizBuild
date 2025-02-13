import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Chapter Registration',
  description: 'BizBuild Organization Inc. Chapter Registration',
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

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
        <FadeIn>
          <h1 className="text-2xl font-bold text-neutral-950 mb-4">
            bizbuild organization inc. chapter registration
          </h1>
          <p className="text-base text-neutral-600 mb-4">
            Thank you for your interest in starting a BizBuild chapter at your school or in your region. Please fill out the application form below. After we receive your submission, we will contact you to set up an interview if you pass the first revision. Following the interview, we will get back to you within 24 hours regarding your application status.
          </p>
          <p className="text-base text-neutral-600 mb-8">
            For application tips or assistance, please email{' '}
            <Link href="mailto:join@bizbuild.org" className="text-blue-600 hover:underline">
              join@bizbuild.org
            </Link>.
          </p>
          <form className="space-y-6">
            <p className="text-sm text-neutral-500">* Indicates required question</p>
            <TextInput label="First and Last Name *" name="fullName" required />
            <TextInput label="Age *" name="age" required />
            <TextInput label="Email *" type="email" name="email" required />
            <TextInput label="Phone Number *" type="tel" name="phone" required />

            <fieldset className="space-y-4">
              <legend className="text-base font-semibold text-neutral-950">
                Type of Chapter *
              </legend>
              <div className="flex gap-x-6">
                <RadioInput label="School Club" name="chapterType" value="School Club" required />
                <RadioInput label="Regional" name="chapterType" value="Regional" required />
              </div>
            </fieldset>

            <CheckboxInput
              label="I have read our website's section on starting a chapter *"
              name="readSection"
              required
            />

            <fieldset className="space-y-4">
              <legend className="text-base font-semibold text-neutral-950">
                Are you located in the United States? *
              </legend>
              <div className="flex gap-x-6">
                <RadioInput label="Yes" name="locatedUS" value="yes" required />
                <RadioInput label="No" name="locatedUS" value="no" required />
              </div>
            </fieldset>

            <Button type="submit" className="w-full py-6">
              Submit Application
            </Button>
          </form>
        </FadeIn>
      </div>
    </div>
  )
}
